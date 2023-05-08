import * as React from 'react'

//import moment module
import moment from 'moment'

//import constants
import { comments } from '../../utils/constants'

//import utilitis function
import { randomNumberGenerator } from '../../Functions/utilities/random.'

//import useglobal context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import custom react icons
import SoftMassagePanelview from './components/SoftMassagePanelview/SoftMassagePanelview'

const MessageRoot = ({ children, title, actionButton }) => {
  const { setChatState, setMessageState } = useGlobalContext()
  return (
    <React.Fragment>
      <section className='flex flex-col gap-0 md:gap-2 rounded-t-lg dark:bg-dark400 bg-white'>
        <SoftMassagePanelview title={title} actionButton={actionButton} />
        <React.Fragment>
          <hr className='mdsm:hidden' />
        </React.Fragment>
        <section className='relative w-full flex flex-row justify-center items-center'>
          {children}
        </section>
        {title === 'Chats' && (
          <article className='w-full flex flex-row flex-nowrap justify-start items-center gap-4 pl-2 mt-2'>
            {[
              {
                title: 'Inbox',
              },
              {
                title: 'Communities',
              },
            ].map(({ title }, index) => (
              <div className='px-2 py-1 rounded bg-[#0c449f24]' key={index}>
                <h5 className='text-blue-600 text-base font-medium'>{title}</h5>
              </div>
            ))}
          </article>
        )}
      </section>
      <section className='dark:bg-dark400 bg-white max-h-full md:max-h-[380px] gap-3 w-full overflow-auto home_scroll pr-1 pl-1 pt-2 pb-12 mt-3 md:mt-0 mdsm:pb-0'>
        {comments.map(
          (
            { creator, profile: [{ profileImage, createdAt }], comment },
            index
          ) => (
            <button
              className='w-full flex flex-row gap-3 items-center cursor-pointer dark:hover:bg-dark300 hover:bg-slate-200 px-2 py-1.5 mt-0.5 mb-0.5 rounded-md'
              key={index + creator}
              onClick={() => {
                setMessageState(false)
                setChatState(true)
              }}
            >
              <img
                src={profileImage}
                alt='sender'
                className='w-16 h-16 mdsm:w-10 mdsm:h-10 rounded-full object-cover ring-2 ring-dark300'
              />
              <article className='flex flex-col justify-center items-start'>
                <h3 className='capitalize text-black dark:text-thdark500  text-lg font-medium'>
                  {creator}
                </h3>
                <article className='flex flex-row items-center w-full gap-2 dark:text-thlight500'>
                  <h3 className='text-sm'>
                    {`${comment.substring(0, randomNumberGenerator(9, 21))}...`}
                  </h3>
                  <p className='text-sm'>
                    {`${moment(createdAt).fromNow().substring(0, 5)}.`}
                  </p>
                </article>
              </article>
            </button>
          )
        )}
      </section>
      <section className='hidden mdsm:flex justify-center items-center border-t-[1px] dark:border-bd500 border-t-slate-300 p-3 rounded-b-lg '>
        <h4 className='text-blue-600 cursor-pointer hover:underline'>
          See all in Messenger
        </h4>
      </section>
    </React.Fragment>
  )
}

export default MessageRoot