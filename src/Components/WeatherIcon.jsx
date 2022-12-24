import React from 'react'
import {TiWeatherCloudy, TiWeatherNight, TiWeatherShower, TiWeatherSnow, TiWeatherStormy,
         TiWeatherSunny, TiWeatherWindy } from 'react-icons/ti'

export default function WeatherIcon({description}) {

    const [icon, setIcon] = React.useState(null);

    let time = (new Date()).getHours(); 

    React.useEffect(() => {
        if(description === 'Clouds') {
            setIcon(<TiWeatherCloudy size={'1.5em'}/>)
        } else if (description === 'Clear' && time > 6 && time < 20) {
            setIcon(<TiWeatherSunny size={'1.5em'}/>)
        } else if (description === 'Clear' && time < 6 && time > 20) {
            setIcon(<TiWeatherNight size={'1.5em'}/>)
        } else if (description === 'Rain' || 'Drizzle') {
            setIcon(<TiWeatherShower size={'1.5em'}/>)
        } else if (description === 'Snow') {
            setIcon(<TiWeatherSnow size={'1.5em'}/>)
        } else if (description === 'Thunderstorm') {
            setIcon(<TiWeatherStormy size={'1.5em'}/>)
        } else {
            setIcon(<TiWeatherWindy size={'1.5em'}/>)
        }

    }, [description])
    

  return (
    <div className='weather-icon'>{icon}</div>
  )
}
