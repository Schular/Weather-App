import { useState } from 'react'

import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Unit } from '../../graphql/generated'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  modfiyUnit,
  selectUnit,
  updateWeatherAsync,
  updateWeatherDebouncedAsync,
} from './weatherSlice'

export const WeatherSearch = () => {
  const [city, setCity] = useState<string>('')
  const unit = useAppSelector(selectUnit)
  const dispatch = useAppDispatch()

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)

    if (city) {
      dispatch(updateWeatherDebouncedAsync({ city: e.target.value, unit }))
    }
  }

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const eventUnit = e.target.value as Unit
    dispatch(modfiyUnit(eventUnit))

    if (city) {
      dispatch(updateWeatherAsync({ city, unit: eventUnit }))
    }
  }

  return (
    <form className='mt-10 flex w-full flex-col space-y-4 px-4 sm:flex-row sm:justify-between sm:space-x-10 sm:space-y-0'>
      <div className='flex w-full flex-col space-y-1'>
        <Input label='City' name='city' value={city} onChange={handleCityChange} />
      </div>
      <div className='flex flex-col space-y-1'>
        <Select
          label='Unit'
          name='unit'
          value={unit}
          onChange={handleUnitChange}
          options={Object.values(Unit)}
        />
      </div>
    </form>
  )
}
