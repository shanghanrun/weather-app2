import React from 'react'

const WeatherBox = ({weather}) => {
	const f = weather && weather.main? (weather.main.temp *1.8 +32).toFixed(2) : null;
  return (
	<div className={`weather-box ${weather?.weather[0]?.description.replace(/\s/g, '')}`}>
		<div>{weather?.name}</div>
		<h2>{ weather?.main?.temp} ℃ / {f} ℉</h2>
		<h3>{weather?.weather[0]?.description}</h3>
	</div>
  )
}

export default WeatherBox