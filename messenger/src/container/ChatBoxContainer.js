import { connect } from 'react-redux'
import ChatBox from '../component/conversation/detailedSide/ChatBox'

const mapStateToProps = state => ({
  messagesList: state.activeChatInfo.messagesList
})

export default connect(mapStateToProps)(ChatBox)