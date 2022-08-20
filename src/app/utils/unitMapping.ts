import { Unit } from '../graphql/generated'

const mapUnitToTemperature = (unit: Unit) =>
  ({
    imperial: '°F',
    kelvin: 'K',
    metric: '°C',
  }[unit])

const mapUnitToSpeed = (unit: Unit) =>
  ({
    imperial: 'mph',
    kelvin: 'km/h',
    metric: 'km/h',
  }[unit])

export default {
  mapUnitToSpeed,
  mapUnitToTemperature,
}
