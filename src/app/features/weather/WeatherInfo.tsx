import { useAppSelector } from '../../hooks/useAppSelector'
import { selectWeatherStatus } from './weatherSlice'

export const WeatherInfo = () => {
  const status = useAppSelector(selectWeatherStatus)

  return (
    <div className='text-center'>
      {status === 'failed' ? (
        <div className='text-red-600'>Failed loading data, please try again!</div>
      ) : (
        <div>No data found! Please input a correct city.</div>
      )}
    </div>
  )
}
