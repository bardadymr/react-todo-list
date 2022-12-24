import React from 'react'
import moment from 'moment'
import WeatherIcon from './WeatherIcon';
import {BiRefresh} from 'react-icons/bi'

export default function WeatherWidget() {

    const [lat, setLat] = React.useState([]);
    const [long, setLong] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [time, setTime] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
      
          await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=de9d7d3c321a0500befca5ec93cb214e`)
           .then(res => res.json())
           .then(result => {
             setData(result)
             
      });
    }

      fetchData();

     

    }, [lat, long]); //Location and weather API

    React.useEffect(() => {
      const interval = setInterval(() => {
        setTime(moment().format('lll'))
      }, 1000);
      return () => clearInterval(interval);

    }, []) // Automatic time update

     
   const refresh = () => {
     fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=de9d7d3c321a0500befca5ec93cb214e`)
     .then(res => res.json())
     .then(result => {
       setData(result)
     });
    
    const refreshIcon = document.querySelector(".refreshIcon");
       refreshIcon.classList.add('refreshIcon-start');
       setTimeout(function () {
          refreshIcon.classList.remove('refreshIcon-start')
       }, 1500)
    
  } // Refresh weather data 
   
  
    return (
     <div className='weather-body'>
      {(typeof data.main != 'undefined') ? (
        <div className='weatherWidget'>
          <div className='tempNow'>
            <WeatherIcon description={data.weather[0].main}/>
            <p>{Math.round(data.main.temp)} &deg;C</p>
            <BiRefresh className='refreshIcon' size={'1em'} onClick={()=> refresh()}/>
        </div>
        <p className='weatherDescription'>{data.weather[0].main}, {data.name}</p>
        <p className='dateNow'>{time}</p>
      
      </div>
      ): (
        <div></div>
      )}
      </div>
  )
}
