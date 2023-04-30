import * as React from 'react'

//import links
import { mNavLink } from '../../utils/links'

//import compnents
import MbarLink from '../../Components/Navigation Bar/components/SoftMobileNav'

//import react error boundary
import ErrorBoundary from '../../ErrorBundary'

//import custom icon
import { Icon } from '../../utils/Icon'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

//import components
import { comments } from '../../utils/constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import { MdPhotoCamera } from 'react-icons/md'

//import meassage roots
const NotificationsRoot = React.lazy(() => {
  return import('./NotificationRoots')
})

const MobileNotifications = () => {
  return (
    <section className='dark:bg-dark500 bg-light500 w-screen h-full '>
      <section className='flex flex-row items-center w-full justify-between px-4 py-2 mt-1 mdsm:hidden'>
        {mNavLink.map((data, index) => (
          <MbarLink {...data} key={index} />
        ))}
      </section>
      <>
        <hr />
      </>
      <ErrorBoundary
        fallback={
          <article>
            <p className=''>can't fetch chats. check you network status.</p>
          </article>
        }
      >
        <React.Suspense
          fallback={
            <div className='w-full h-full flex items-center justify-center'>
              <p className='text-black dark:text-white'>loading...</p>
            </div>
          }
        >
          <NotificationsRoot
            title='Notifications'
            actionButton={[
              {
                icon: <Icon.MdOutlineSearch className='text-xl' />,
              },
            ]}
          >
            <div className='w-[90%] h-fit dark:bg-dark300 flex justify-center items-center rounded-sm '>
              <h5 className='text-blue-600 text-sm'>Mark all as read</h5>
            </div>
          </NotificationsRoot>
        </React.Suspense>
      </ErrorBoundary>
    </section>
  )
}

export default MobileNotifications
