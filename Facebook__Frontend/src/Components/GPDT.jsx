import React from 'react'
import DynamicMenu from './DynamicMenu/DynamicMenu'
import { person_nine } from '../Assets/exports'
import { FriendStack } from './RDOMC'
import { comments } from '../utils/constants'
import { Icon } from '../utils/Icon'

const GPDT = () => {
  return (
    // Create Group,Shortcut and friends details box
    <section className='flex flex-col gap-3 p-4'>
      <section className='w-full flex items-center gap-4'>
        <img
          src={person_nine}
          alt='add'
          className='larg:h-24 h-20 larg:w-[110px] w-[94px] rounded-md object-cover'
        />
        <article className='flex flex-col gap-3'>
          <h3 className='text-xl dark:text-heading_dark_white font-semibold brightness-125'>
            Programmers
          </h3>
          {[
            {
              title: 'Private Group',
              icon: <Icon.HiLockClosed />,
            },
            {
              title: '17 friends 226.0k members',
              icon: <Icon.MdGroups />,
            },
          ].map(({ title, icon }, i) => (
            <div className='flex_row gap-2' key={i}>
              <p className='light_text_gray font-normal text-2xl'>{icon}</p>
              <h2 className='light_text_gray dark:text-heading_dark_gray font-normal text-lg text-center'>
                {title}
              </h2>
            </div>
          ))}
        </article>
      </section>
      <section className='flex justify-end items-center w-full'>
        <FriendStack comments={comments} isDetails />
      </section>
    </section>
  )
}

export default DynamicMenu(GPDT)
