import React from 'react'

//import custom icons
import { Icon } from '../../utils/Icon'

const NotificationRoots = () => {
  return (
    <section className='flex flex-col gap-2 p-3 rounded-t-lg'>
      <section className='flex flex-row w-full justify-between items-center'>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-thdark500'>
          Notifications
        </h3>
        <div className='flex flex-row gap-2 items-center pl-1'>
          {[
            {
              icon: <Icon.HiDotsHorizontal />,
              id: 1,
            },
          ].map((option, i) => (
            <article
              className='rounded-full p-2 dark:hover:bg-dark300 hover:bg-light300 cursor-pointer'
              key={i + option.id}
            >
              <p
                className={`  ${i === 1 ? 'text-sm' : 'text-2xl'} ${
                  i === 3 && 'text-md -ml-1'
                }  text-gray-600 dark:text-thlight500`}
              >
                {option.icon}
              </p>
            </article>
          ))}
        </div>
      </section>
      <article className='w-full flex flex-row flex-nowrap justify-start items-center gap-4 pl-2'>
        {[
          {
            title: 'all',
          },
          {
            title: 'unread',
          },
        ].map(({ title }, i) => (
          <p
            key={i}
            className='text-md dark:text-white capitalize rounded-full py-1 px-2 font-medium bg-tpBlue500'
          >
            {title}
          </p>
        ))}
      </article>
      <article className='flex items-center justify-between'>
        {[{ title: 'New' }, { title: 'See all' }].map(({ title }, i) => (
          <p
            key={i}
            className={
              (i === 1 ? 'text-blue-500' : ' text-black ') +
              ' dark:text-thdark500 text-md font-medium '
            }
          >
            {title}
          </p>
        ))}
      </article>
    </section>
  )
}

export default NotificationRoots
