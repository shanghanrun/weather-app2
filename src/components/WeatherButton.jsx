import {Button} from 'react-bootstrap'
const WeatherButton=({getCurrentLocationWeather, setCity, cities})=>{
	
	return(
		<div className="button-area">
			<Button variant="success" className="buttons" onClick={()=>setCity('')}>Here</Button>
			{cities.map((city, index)=>{
				return <Button variant="warning" className="buttons" onClick={()=>setCity(city)} key={index}>{city}</Button>
			})}
		</div>
	)
}

export default WeatherButton;