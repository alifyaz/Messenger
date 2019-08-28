import { connect } from 'react-redux'
import ContactItem from '../component/conversation/shortSide/ContactItem'

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapDispatchToProps)(ContactItem)