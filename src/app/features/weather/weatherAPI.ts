import graphqlClient from '../../graphql'
import { Unit } from '../../graphql/generated'

export const getWeather = async (city: string, unit: Unit) =>
  await graphqlClient().getCityByName({ name: city, config: { units: unit } })
