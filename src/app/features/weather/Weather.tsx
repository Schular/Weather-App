import dayjs from 'dayjs'

import { useAppSelector } from '../../hooks/useAppSelector'
import unitMapping from '../../utils/unitMapping'
import { WeatherInfo } from './WeatherInfo'
import { WeatherLoader } from './WeatherLoader'
import { selectUnit, selectWeather } from './weatherSlice'

export const Weather = () => {
  const weather = useAppSelector(selectWeather)
  const unit = useAppSelector(selectUnit)

  const temperature = unitMapping.mapUnitToTemperature(unit)
  const speed = unitMapping.mapUnitToSpeed(unit)

  return (
    <div>
      <WeatherLoader />
      <div className='mx-auto mt-10'>
        {!weather ? (
          <WeatherInfo />
        ) : (
          <div className='grid grid-cols-1 space-y-2 px-4 sm:grid-cols-3 sm:space-y-1'>
            <div className='col-span-2'>
              <div className='flex w-full items-center space-x-4'>
                <h2 className='bold text-3xl sm:text-5xl'>
                  {`${weather.weather?.temperature?.actual} ${temperature}`}
                </h2>
                <div className='space-y-1 text-[0.65rem] text-gray-700 sm:text-xs'>
                  <h5>Humidity: {weather.weather?.clouds?.humidity}%</h5>
                  <h5>Wind: {`${weather.weather?.wind?.speed} ${speed}`}</h5>
                  <h5>
                    {`Min ${weather.weather?.temperature?.min} ${temperature} - Max ${weather.weather?.temperature?.max} ${temperature}`}
                  </h5>
                </div>
              </div>
              <h4 className='mt-2 capitalize sm:text-lg md:text-sm'>
                {weather.weather?.summary?.description}
              </h4>
            </div>
            <div className='text-right'>
              <h3 className='bold text-2xl sm:text-4xl'>
                {weather.name}, {weather.country}
              </h3>
              <div className='text-[0.65rem] text-gray-700 sm:text-sm'>
                <h4>
                  {weather.coord?.lat} Lat - {weather.coord?.lon} Lon
                </h4>
                <h4>{dayjs().format('dddd HH:mm')}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
