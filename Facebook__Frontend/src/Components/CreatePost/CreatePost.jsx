import React, { useState, useRef } from 'react'
import {
  MdClose,
  MdArrowBack,
  MdArrowForward,
  MdPerson,
  MdOutlineDone,
  MdDoneAll,
  MdDownloadDone,
  MdOutlineLocationOn,
  MdFlag,
  MdOutlinePhotoLibrary,
} from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiDotsHorizontal } from 'react-icons/hi'
import { GoTriangleDown } from 'react-icons/go'
import { BsEmojiWink } from 'react-icons/bs'

import MegWrapper from '../MegWrapper'
import { useGlobalContext } from '../../Context/UseContext'
import { ProfilePicture, AddPicture, CreatePostLinks } from '../index'
import { previous, forward, iconHandler } from '../../utils/Functions'

const CreatePost = () => {
  const [postvalue, setPostvalue] = useState('')
  const textRef = useRef(null)
  const {
    createPostState,
    setCreatePostState,
    addToYourState,
    setAddToYourState,
    postAudienceState,
    setPostAudienceState,
    addPictureState,
    setAddPictureState,
    tagPeopleState,
    firstImg,
    setFirstImg,
    goBack,
    setGoBack,
    selectedFriends,
    setSelectedFriends,
  } = useGlobalContext()

  const createPostHeadings = (e) => {
    const element = textRef.current
    element.style.height = 'auto'
    const sHeight = e.target.scrollHeight
    element.style.height = `${sHeight}px`
  }

  return (
    <div
      className={` ${
        goBack ? 'translate__x' : ''
      } bg-white z-20  w-full h-full rounded-lg`}
    >
      <div className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300'>
        <h3 className='text-xl font-bold text-gray-900'>Create post</h3>
        <p
          className='absolute top-2 right-2 rounded-full hover:bg-gray-400 bg-gray-300 p-2 cursor-pointer'
          onClick={() => {
            setCreatePostState(false)
            setGoBack(false)
          }}
        >
          <MdClose className='text-2xl ' />
        </p>
      </div>
      <div className='w-full h-full p-4'>
        <div className='flex flex-row gap-2 items-center mb-2'>
          <ProfilePicture />
          <div className=' w-fit'>
            <div className='w-full flex flex-wrap items-center'>
              <h3 className='text-md font-semibold pr-1 text-gray-800 capitalize'>
                Don christsanctus chinedu
              </h3>
              {selectedFriends.length > 0 && (
                <h3 className='text-md pr-1 font-semibold text-gray-800 '>
                  is with{' '}
                </h3>
              )}
              {selectedFriends.length > 0 &&
                selectedFriends.map((friend, i) => (
                  <h3
                    key={i}
                    className='text-md pl-1 hover:underline cursor-pointer pr-1 font-semibold text-gray-800 '
                  >
                    {`${friend},`}
                  </h3>
                ))}
            </div>
            <div
              className='flex flex-row gap-2 items-center rounded-sm bg-gray-200 w-min py-0.5 px-1 cursor-pointer '
              onClick={() => forward(setCreatePostState, setPostAudienceState)}
            >
              <GiEarthAmerica />
              <h4 className='text-sm text-gray-900  '> {'Public'} </h4>
              <GoTriangleDown />
            </div>
          </div>
        </div>
        <div className='w-full max-h-[280px] overflow-auto vertical_scroll '>
          <textarea
            ref={textRef}
            value={postvalue}
            onChange={(e) => setPostvalue(e.target.value)}
            onKeyUp={(e) => createPostHeadings(e)}
            name=''
            id=''
            placeholder={`What's on your mind, ${'Don'}`}
            className=' outline-none w-full cursor-pointer resize-none  mt-2 mb-2 placeholder:text-2xl pt-2 pl-2 placeholder:text-gray-500 font-meduim scroll_hidden'
          />
          {(addPictureState || firstImg) && <AddPicture />}
        </div>
        <div className='w-full flex flex-row justify-between items-center'>
          {!addPictureState && (
            <div className='cursor-pointer flex items-center justify-center py-1 px-1.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500'>
              <p className='text-white text-xl '>Aa</p>
            </div>
          )}
          <BsEmojiWink className='cursor-pointer text-xl text-gray-500' />
        </div>

        <div
          className='w-full border-2 cursor-pointer flex flex-row justify-between items-center p-3 mt-4 rounded-md'
          onClick={() => forward(setCreatePostState, setAddToYourState)}
        >
          <h5 className='text-md font-semibold text-gray-800 '>
            Add to your post
          </h5>
          <CreatePostLinks home={true} />
        </div>
        {postvalue ? (
          <button
            type='button'
            className={`w-full p-2 mt-2 mb-2 rounded-lg text-center 
                bg-blue-500 text-white font-bold text-lg
            `}
          >
            Post
          </button>
        ) : (
          <button
            type='button'
            className={`w-full p-2 mt-2 mb-2 rounded-lg text-center bg-gray-200 text-gray-400 font-bold text-lg
            `}
          >
            Post
          </button>
        )}
      </div>
    </div>
  )
}

export default MegWrapper(CreatePost)