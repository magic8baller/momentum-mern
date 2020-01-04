import React from 'react'

const CurrentWeather = ({currentWeather}) => {

	if (currentWeather) {
		const {main: {temp, temp_min, temp_max, pressure, humidity}, clouds, wind, weather, name} = currentWeather
		return (
			<div className="text-white bg-danger">
				<h3 className="text-center text-capitalize">{name}</h3>
				<h1>
					<img
						src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
						alt='weather icon'
					/>
					{temp.toFixed(0)}&deg;
				</h1>
				<h2 className="text-center text-capitalize">{weather[0].description}</h2>
				<p className="text-center">
					Wind {wind.speed} m/s<br />Humidity {humidity} %<br />Pressure {pressure} hPa<br />Cloudiness {clouds.all} %
				</p>
			</div>
		)
	}
}

	export default CurrentWeather