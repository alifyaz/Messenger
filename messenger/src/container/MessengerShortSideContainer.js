import { connect } from 'react-redux'
import MessengerShortSide from '../component/conversation/MessengerShortSide'

const mapStateToProps = state => ({
  contactList: state.contactList
})

export default connect(mapStateToProps)(MessengerShortSide)