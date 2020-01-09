import {connect} from 'react-redux'
import {getGeolocation} from '../store/actions/weatherActions'
import Dashboard from '../pages/Dashboard'

const mapStateToProps = state => ({position: state.position.coords})

export default connect(mapStateToProps, {getGeolocation})(Dashboard)
