
import { useEffect, useState } from 'react';
import './App.css';
import {Alert} from 'react-bootstrap'
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import MapComponent from './components/MapComponent';

function App() {
  const apiKey=process.env.REACT_APP_API_KEY
  
  console.log('apiKey :', apiKey)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('')
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('')
  const cities =['paris', 'new york', 'tokyo', 'seoul']

  async function getCurrentLocationWeather(){
    navigator.geolocation.getCurrentPosition(async (position)=>{
      let {latitude, longitude} = position.coords;
      console.log('lat, lon :', latitude, longitude)
      try{
        let url =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        const resp = await fetch(url)
        const data = await resp.json()
        console.log('Location weather : ', data)
        setWeather(data)
        setIsLoading(false)
      } catch(e){
        setIsError(true)
        setError(e.message)
        setIsLoading(false)
      }
    })
  }
  async function getCityWeather(){
    try{
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(`${city} weather :`, data)
        setWeather(data)
        setIsLoading(false)
    }catch(e){
      setIsError(true)
      setError(e.message)
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    if(city==='') {
      getCurrentLocationWeather()
    } else{
      getCityWeather()
    }
  },[city])

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <Alert variant="danger">{error}</Alert>
  }

  return (
    <div className="App">
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton 
          setCity={setCity}
          cities={cities} />
        {/* <div className="map">
          <MapComponent latitude={37.5665} longitude={126.978} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
