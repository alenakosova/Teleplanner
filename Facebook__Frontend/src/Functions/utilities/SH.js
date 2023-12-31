export const refresh = async () => {
  window.location.reload()
}

export const forward = (setFirstState, setSecondState) => {
  setFirstState(false)
  setSecondState(true)
}

export const previous = (setFirstState, setSecondState, setThirdState) => {
  setFirstState(true)
  setSecondState(false)
  setThirdState(true)
}

export const IconHandler = (value) => {
  // const { setAddPictureState } = useGlobalContext()
  const {
    e,
    ref,
    setAddPictureState,
    setTagPeopleState,
    setCreatePostState,
    setMessageState,
    setNotificationState,
    setProfileState,
    setSettingsState,
    setDisplayState,
    setFeedbackState,
    setSupportState,
    messageState,
    notificationState,
    setGoBack,
    setAudState,
    logOut,
  } = value
  e.stopPropagation()
  const _ = ref.current.classList
  const classNames = Object.values(_)
  if (classNames.includes('text-green-600')) {
    setAddPictureState(true)
    return
  }

  if (classNames.includes('text-blue-600')) {
    setTagPeopleState(true)
    setCreatePostState(false)
    setGoBack(false)
    return
  }

  if (classNames.includes('messenger')) {
    setMessageState(!messageState)
    setNotificationState(false)
    setProfileState(false)
    return
  }

  if (classNames.includes('notification')) {
    setMessageState(false)
    setProfileState(false)
    setNotificationState(!notificationState)
    return
  }

  if (classNames.includes('Settings')) {
    setSettingsState(true)
    setProfileState(false)
    return
  }
  if (classNames.includes('support')) {
    setSupportState(true)
    setProfileState(false)
    return
  }
  if (classNames.includes('accessibility')) {
    setDisplayState(true)
    setProfileState(false)
    return
  }
  if (classNames.includes('feedback')) {
    setFeedbackState(true)
    setProfileState(false)
    return
  }
  if (classNames.includes('Log')) {
    localStorage.removeItem('user')
    logOut()
    window.location.reload()
    return
  }
  if (
    classNames.includes('me') ||
    classNames.includes('public') ||
    classNames.includes('friends') ||
    classNames.includes('specific') ||
    classNames.includes('custom')
  ) {
    const audience = ref.current.innerText.split('\n')[0]
    setAudState(audience)
    return
  }
}
export const toggleAudience = () => {}
