import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProfilePicture from '../Posts/ProfilePicture'
import moment from 'moment'
import { MdOutlineExpandMore } from 'react-icons/md'
import { ImPhone } from 'react-icons/im'
import { HiMinus } from 'react-icons/hi'
import { BsCameraReelsFill } from 'react-icons/bs'
import { Icon } from '../../utils/Icon'
import { chat } from '../../utils/constants'
import { person_eight } from '../../Assets/exports'
import { useRef } from 'react'
import { useGlobalContext } from '../../Context/UseContext'

const Chat = () => {
  const { setChatState } = useGlobalContext()
  const [value, setValue] = useState('')
  const textRef = useRef(null)
  const createPostHeadings = (e) => {
    const element = textRef.current
    element.style.height = 'auto'
    const sHeight = e.target.scrollHeight
    element.style.height = `${sHeight}px`
  }
  return (
    <motion.div
      drag
      className='absolute bottom-0 right-40 w-[350px] dark:bg-darkSecondary z-10  h-fit rounded-lg dark:border dark:border-borderDark'
    >
      <div className='relative flex flex-row items-center justify-between border-b p-0.5 border-gray-300 dark:border-borderDark '>
        <section className='flex flex-row gap-1 items-center p-1 rounded-md hover:bg-darkComplementry'>
          <ProfilePicture />
          <div className='w-fit flex flex-wrap flex-col items-start'>
            <h3 className='text-md dark:text-white font-semibold pr-1 text-gray-800 capitalize'>
              Eta Scanner
            </h3>
            <p className='text-sm'>{`${moment(new Date()).fromNow()}`}</p>
          </div>
          <p className=''>
            <MdOutlineExpandMore />
          </p>
        </section>
        <section className='flex items-center gap-2'>
          {[
            { icon: <ImPhone /> },
            { icon: <BsCameraReelsFill /> },
            { icon: <HiMinus /> },
            { icon: <Icon.MdClose /> },
          ].map(({ icon }, i) => {
            return (
              <button
                type='button'
                onClick={() => setChatState(false)}
                className=''
                key={i}
              >
                {icon}{' '}
              </button>
            )
          })}
        </section>
      </div>
      <div className='flex flex-col gap-4 max-h-[350px] overflow-auto home_scroll pt-2 pl-2 pb-2 pr-5 '>
        {chat.map((chat, i) => {
          console.log(typeof chat)
          return (
            <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-2 items-start'>
                <div className='relative border-2 dark:border-borderDark border-white rounded-full cursor-pointer'>
                  <img
                    src={person_eight}
                    alt='profile'
                    className='object-cover w-7 h-7 rounded-full'
                  />
                </div>
                <div className='group flex flex-col w-fit gap-1'>
                  {chat?.sender?.map((message, i) => (
                    <p className='px-2 py-1 rounded-lg text-left dark:bg-darkComplementry dark:text-heading_dark_white max-w-[70%] w-fit  first:rounded-tl-2xl first:rounded-bl-none last:rounded-bl-2xl last:rounded-tl-none'>
                      {message}
                    </p>
                  ))}
                </div>
              </div>

              {chat.length !== 4 && <p className='text-white'>{chat.length}</p>}
              <div className='flex flex-col items-end gap-1'>
                {chat?.respond?.map((message, i) => (
                  <p className='px-2 py-1 rounded-lg text-left bg-blue-500 max-w-[70%] w-fit first:rounded-tr-2xl first:rounded-br-none last:rounded-br-2xl last:rounded-tr-none dark:text-heading_dark_white'>
                    {message}
                  </p>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className='relative flex justify-end border-t-2 dark:border-borderDark border-gray-300 py-2'>
        <textarea
          ref={textRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => createPostHeadings(e)}
          placeholder={`Aa`}
          className=' outline-none w-[150px] focus:w-full h-8 px-1 text-start transition-all rounded-full focus:rounded-md cursor-pointer resize-none dark:bg-darkComplementry dark:text-white placeholder:text-gray-500 font-meduim'
        />
      </div>
    </motion.div>
  )
}

export default Chat
