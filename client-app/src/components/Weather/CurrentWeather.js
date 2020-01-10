import React from 'react'

const CurrentWeather = ({currentWeather}) => {

	if (currentWeather) {
		const {main: {temp, temp_min, temp_max, pressure, humidity}, clouds, wind, weather, name} = currentWeather

		const renderWeather = () => (


			<div className='logo'>
				<div>
				<span style={{height: '4px'}}>
					<img
						src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
						alt='weather icon'
					/></span>
					{temp.toFixed(0)}&deg;
</div>
				<div className="user-city">{name}</div>

				{/* <h2 className="text-center text-capitalize">{weather[0].description}</h2>
			<p className="text-center">
				Wind {wind.speed} m/s<br />Humidity {humidity} %<br />Pressure {pressure} hPa<br />Cloudiness {clouds.all} %
				</p> */}
			</div>

		)

		return (
			<div>
				{/* <Section title={'Current Weather'} content={renderWeather()}/> */}
				{renderWeather()}
			</div>
		)
	}
}


export default CurrentWeather