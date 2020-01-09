import GreetingUI from '../components/UI/GreetingUI'
import {connect} from 'react-redux'


const mapStateToProps = state => ({user: state.auth.user})

export default connect(mapStateToProps)(GreetingUI)