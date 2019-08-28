import { connect } from 'react-redux'
import Footer from '../component/conversation/detailedSide/Footer'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Footer)