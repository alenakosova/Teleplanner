import React from 'react'

//import framer motion module
import { motion } from 'framer-motion'

//import context
import { useGlobalContext } from '../Hooks/context/UseContext'

//import component
import { Navbar } from '../Components'
import MSideBar from '../Components/SideBars/MSideBar'
// import { SideMenu } from '../Functions/actions/internal'

const MenuPageUrl = (Component) =>
  function HOC() {
    const {
      location,
      internalAction: [controller, dispatchAction],
    } = useGlobalContext()
    const {
      sidebaraction: {
        SIDE_MENU: { SIDE_MENU },
        SIDE_GROUP: { SIDE_GROUP },
        SIDE_SHORT_CUT: { SIDE_SHORT_CUT },
      },
    } = controller
    return (
      <React.Fragment>
        {(SIDE_MENU || SIDE_GROUP || SIDE_SHORT_CUT) && (
          <section className='absolute top-0 bottom-0 w-full h-full z-10'>
            <Navbar />
            <section
              style={{ paddingTop: `${location.height}px` }}
              className='flex items-center justify-center overflow-auto h-full w-full items-strech sm:justify-between  backdrop-filter backdrop-saturate-100 backdrop-brightness-50 backdrop-opacity-100 backdrop-contrast-100
              '
            >
              <MSideBar />
              <section className='w-full overflow-auto h-full flex justify-start items-stretch'>
                <motion.div
                  animate={{ x: [200, 0] }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className=' dark:bg-dark300 h-full max-w-[620px] min-w-[260px] opacity-0 overflow-hidden flex items-center justify-center border-r dark:border-bd500 border-gray-600'
                >
                  <Component />
                </motion.div>
              </section>
            </section>
          </section>
        )}
      </React.Fragment>
    )
  }

export default MenuPageUrl
