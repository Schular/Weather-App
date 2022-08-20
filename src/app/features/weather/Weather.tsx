import dayjs from 'dayjs'

import { useAppSelector } from '../../hooks/useAppSelector'
import { WeatherInfo } from './WeatherInfo'
import { WeatherLoader } from './WeatherLoader'
import { selectWeather } from './weatherSlice'

export const Weather = () => {
  const weather = useAppSelector(selectWeather)

  return (
    <div>
      <WeatherLoader />
      <div className='mx-auto mt-10 max-w-3xl'>
        {!weather ? (
          <WeatherInfo />
        ) : (
          <div className='grid grid-cols-2 space-y-1'>
            <div>
              <div className='flex w-full space-x-2'>
                <h2 className='bold text-6xl'>{weather.weather?.temperature?.actual}</h2>
                <div className='text-sm text-gray-700'>
                  <h5>Humidity: {weather.weather?.clouds?.humidity}%</h5>
                  <h5>Wind: {weather.weather?.wind?.speed}</h5>
                  <h5 className='text-sm'>
                    Min {weather.weather?.temperature?.min} - Max{' '}
                    {weather.weather?.temperature?.max}
                  </h5>
                </div>
              </div>
              <h4 className='mt-2 text-lg capitalize'>{weather.weather?.summary?.description}</h4>
            </div>
            <div className='text-right'>
              <h3 className='bold text-3xl'>
                {weather.name}, {weather.country}
              </h3>
              <div className='text-lg text-gray-700'>
                <h4>
                  Lat {weather.coord?.lat} Lat - {weather.coord?.lon} Lon
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
