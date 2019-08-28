import { SET_ACTIVE_CHAT, SEND_NEW_MESSAGE } from '../action/Conversation'
import { contactList } from '../TemporaryDatabase'

const initial = {
  contactList: contactList.map((contact) => (
    contact.userInfo
  )),
  activeChatInfo: {
    userInfo: {
      firstName: '',
      lastName: '',
      email: '',
      avatar: ''
    },
    messagesList: []
  }
}

const conversation = (state = initial, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT:
      for(var i = 0; i < state.contactList.length; i++) {
        if (state.contactList[i].email === action.email) {
          console.log(contactList[i])
          return {
            ...state,
            activeChatInfo: contactList[i]
          }
        }
      }
      return state
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        activeChatInfo: {
          ...state.activeChatInfo,
          messagesList: [
            ...state.activeChatInfo.messagesList,
            {
              text: action.message,
              date: '2019.25.8',
              sender: 1,
              receiver: 2
            }
          ]
        }
      }
    default:
      return state
  }
}

export default conversation
