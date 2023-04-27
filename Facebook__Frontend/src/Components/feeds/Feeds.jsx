import * as React from 'react'

//import data && static link
import { feedLinks } from '../../utils/links'
// import { posts } from '../utils/constants'

//import component
import { Stories, Post, Reels, Rooms } from '../index.js'
import SoftFeedsAction from './components/feedsAction/SoftActions/softFeedsAction'
import SoftProfileLayout from './components/profileAction/SoftProfileLayout/softProfileLayout'

//import styles
import { active, notActive } from './styles'

//import authstore from zustand store
import { allPostsQuery } from '../../utils/querries'
import { client } from '../../utils/client'

//component
const Posts = ({ profile }) => {
  const [allPost, setAllPost] = React.useState([])
  const [location, setLocation] = React.useState('stories')

  React.useEffect(() => {
    const query = allPostsQuery()
    client.fetch(query).then((data) => {
      console.log(data)
      setAllPost(data)
    })
  }, [])

  return (
    <section className='overflow-hidden h-screen mx-auto lap:mx-0 w-full sm:w-520 xlg:w-[700px] px-0.5 pt-0.5 mdsm:pt-2'>
      <section className='flex flex-col w-full h-full overflow-auto scroll-hidden pb-20'>
        <SoftFeedsAction />
        {!profile && <SoftProfileLayout />}
        {profile && (
          <section className='dark:bg-dark400 bg-white rounded-md shadow-lg mt-4 md:order-1 md:mb-4 border dark:border-bd500'>
            <div className='flex_row justify-around  capitalize border-b-2 px-1 dark:border-bd500  border-[#D8D5D5] transition-colors'>
              {feedLinks.map(({ name, icon }, index) => (
                <button
                  className={
                    location === name
                      ? active()
                      : index === 0 && location === null
                      ? active()
                      : notActive()
                  }
                  onClick={() => setLocation(name)}
                  key={index + name}
                >
                  <article className='flex flex-row gap-2 items-center'>
                    <p className='font-bold text-md mdsm:text-2xl'>{icon} </p>
                    <strong className='tracking-wide text-sm mdsm:text-lg capitalize'>
                      {name}
                    </strong>
                  </article>
                </button>
              ))}
            </div>
            <section className='rounded-md flex flex-nowrap mdxs:p-2 p-1'>
              {(location === 'stories' || location === null) && <Stories />}
              {location === 'reels' && <Reels />}
              {location === 'rooms' && <Rooms />}
            </section>
          </section>
        )}

        {allPost?.map((data, index) => (
          <Post {...data} key={index} />
        ))}
      </section>
    </section>
  )
}

export default Posts
