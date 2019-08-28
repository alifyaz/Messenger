export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT'
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'

export const setActiveChat = (email) => ({
  type: SET_ACTIVE_CHAT,
  email: email
})

export const sendNewMessage = message => ({
  type: SEND_NEW_MESSAGE,
  message: message
})