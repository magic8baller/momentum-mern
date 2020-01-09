import {connect} from 'react-redux'
import {fetchCurrentWeather} from '../store/actions/weatherActions'
import Weather from '../pages/Weather'
const mapStateToProps = (state) => ({position: state.position.coords, currentWeather: state.weather.currentWeather})

export default connect(mapStateToProps, {fetchCurrentWeather})(Weather)
