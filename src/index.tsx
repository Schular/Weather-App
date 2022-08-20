import './app/styles/index.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { Weather } from './app/features/weather/Weather'
import { WeatherSearch } from './app/features/weather/WeatherSearch'
import { store } from './app/store'
import reportWebVitals from './app/utils/reportWebVitals'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='mx-auto mt-10 w-full max-w-xl'>
        <WeatherSearch />
        <Weather />
      </div>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
