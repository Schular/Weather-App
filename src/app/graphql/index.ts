import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated'

export default function graphqlClient() {
  const client = new GraphQLClient('https://graphql-weather-api.herokuapp.com/')

  return getSdk(client)
}
