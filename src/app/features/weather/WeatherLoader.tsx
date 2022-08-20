import { Loader } from '../../components/Loader'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectWeatherStatus } from './weatherSlice'

export const WeatherLoader = () => {
  const status = useAppSelector(selectWeatherStatus)

  return status === 'loading' ? (
    <div className='absolute inset-0 flex h-[100vh] w-full items-center justify-center bg-black opacity-90'>
      <Loader />
    </div>
  ) : null
}
