import React from 'react'

//import higher oder cmp
import MegWrapper from '../MegWrapper'

//import root component
import NotificationRoots from './NotificationRoots'

const Notifications = () => {
  return <NotificationRoots />
}

export default MegWrapper(Notifications)
