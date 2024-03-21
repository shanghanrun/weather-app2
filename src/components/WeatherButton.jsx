
const WeatherButton=({setCity, cities})=>{
	
	return(
		<div>
			{cities.map((city, index)=>{
				<button onClick={()=>setCity(city)} key={index}>{city}</button>
			})}
		</div>
	)
}

export default WeatherButton;