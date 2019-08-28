import { connect } from 'react-redux'
import Header from '../component/conversation/detailedSide/Header'

const mapStateToProps = state => ({
    firstName: state.activeChatInfo.userInfo.firstName,
    lastName: state.activeChatInfo.userInfo.lastName,
    avatar: state.activeChatInfo.userInfo.avatar
})

export default connect(mapStateToProps)(Header)