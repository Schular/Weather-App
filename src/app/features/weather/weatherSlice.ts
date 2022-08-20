import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { GetCityByNameQuery, Unit } from '../../graphql/generated'
import { RootState } from '../../store'
import createDebouncedAsyncThunk from '../../utils/createDebouncedAsyncThunk'
import { getWeather } from './weatherAPI'

export type WeatherStatus = 'idle' | 'loading' | 'failed'

export type WeatherState = {
  data?: GetCityByNameQuery
  status: WeatherStatus
}

const initialState: WeatherState = {
  status: 'idle',
}

const handler = async (payload: { city: string; unit: Unit }) => {
  const response = await getWeather(payload.city, payload.unit)

  return response
}

export const updateWeatherDebouncedAsync = createDebouncedAsyncThunk(
  'weather/fetchWeatherDebounced',
  handler,
  1000,
)

export const updateWeatherAsync = createAsyncThunk('weather/fetchWeather', handler)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const asyncThunks = [updateWeatherAsync, updateWeatherDebouncedAsync]

    asyncThunks.forEach((item) => {
      builder.addCase(item.pending, (state) => {
        state.status = 'loading'
      })
      builder.addCase(item.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
      })
      builder.addCase(item.rejected, (state) => {
        state.status = 'failed'
      })
    })
  },
})

export const selectWeather = (state: RootState) => state.weather.data?.getCityByName

export const selectWeatherStatus = (state: RootState) => state.weather.status

export default weatherSlice.reducer
