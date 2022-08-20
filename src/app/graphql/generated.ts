import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type City = {
  __typename?: 'City';
  coord?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  weather?: Maybe<Weather>;
};

export type Clouds = {
  __typename?: 'Clouds';
  all?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
};

export type ConfigInput = {
  lang?: InputMaybe<Language>;
  units?: InputMaybe<Unit>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export enum Language {
  Af = 'af',
  Al = 'al',
  Ar = 'ar',
  Az = 'az',
  Bg = 'bg',
  Ca = 'ca',
  Cz = 'cz',
  Da = 'da',
  De = 'de',
  El = 'el',
  En = 'en',
  Es = 'es',
  Eu = 'eu',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Gl = 'gl',
  He = 'he',
  Hi = 'hi',
  Hr = 'hr',
  Hu = 'hu',
  Id = 'id',
  It = 'it',
  Ja = 'ja',
  Kr = 'kr',
  La = 'la',
  Lt = 'lt',
  Mk = 'mk',
  Nl = 'nl',
  No = 'no',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_br',
  Ro = 'ro',
  Ru = 'ru',
  Se = 'se',
  Sk = 'sk',
  Sl = 'sl',
  Sp = 'sp',
  Sr = 'sr',
  Sv = 'sv',
  Th = 'th',
  Tr = 'tr',
  Ua = 'ua',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_cn',
  ZhTw = 'zh_tw',
  Zu = 'zu'
}

export type Query = {
  __typename?: 'Query';
  getCityById?: Maybe<Array<Maybe<City>>>;
  getCityByName?: Maybe<City>;
};


export type QueryGetCityByIdArgs = {
  config?: InputMaybe<ConfigInput>;
  id?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetCityByNameArgs = {
  config?: InputMaybe<ConfigInput>;
  country?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Summary = {
  __typename?: 'Summary';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Temperature = {
  __typename?: 'Temperature';
  actual?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

export enum Unit {
  Imperial = 'imperial',
  Kelvin = 'kelvin',
  Metric = 'metric'
}

export type Weather = {
  __typename?: 'Weather';
  clouds?: Maybe<Clouds>;
  summary?: Maybe<Summary>;
  temperature?: Maybe<Temperature>;
  timestamp?: Maybe<Scalars['Int']>;
  wind?: Maybe<Wind>;
};

export type Wind = {
  __typename?: 'Wind';
  deg?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
};

export type GetCityByNameQueryVariables = Exact<{
  name: Scalars['String'];
  config?: InputMaybe<ConfigInput>;
}>;


export type GetCityByNameQuery = { __typename?: 'Query', getCityByName?: { __typename?: 'City', id?: string | null, name?: string | null, country?: string | null, coord?: { __typename?: 'Coordinates', lon?: number | null, lat?: number | null } | null, weather?: { __typename?: 'Weather', timestamp?: number | null, temperature?: { __typename?: 'Temperature', actual?: number | null, feelsLike?: number | null, min?: number | null, max?: number | null } | null, summary?: { __typename?: 'Summary', title?: string | null, description?: string | null } | null, wind?: { __typename?: 'Wind', speed?: number | null, deg?: number | null } | null, clouds?: { __typename?: 'Clouds', all?: number | null, visibility?: number | null, humidity?: number | null } | null } | null } | null };


export const GetCityByNameDocument = gql`
    query getCityByName($name: String!, $config: ConfigInput) {
  getCityByName(name: $name, config: $config) {
    id
    name
    country
    coord {
      lon
      lat
    }
    weather {
      temperature {
        actual
        feelsLike
        min
        max
      }
      summary {
        title
        description
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
      timestamp
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCityByName(variables: GetCityByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCityByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCityByNameQuery>(GetCityByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCityByName', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;