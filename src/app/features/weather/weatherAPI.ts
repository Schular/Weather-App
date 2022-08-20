import graphqlClient from '../../graphql'
import { Unit } from '../../graphql/generated'

export const getWeather = (city: string, unit: Unit) =>
  graphqlClient().getCityByName({ name: city, config: { units: unit } })
