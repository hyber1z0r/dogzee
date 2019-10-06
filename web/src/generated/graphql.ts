import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
 **/
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Dog = {
   __typename?: 'Dog',
  id: Scalars['ID'],
  fullName: Scalars['String'],
  registrationNumber: Scalars['String'],
  birthday: Scalars['DateTime'],
  sex: Scalars['String'],
};

export type DogInput = {
  fullName: Scalars['String'],
  registrationNumber: Scalars['String'],
  birthday: Scalars['DateTime'],
  sex: Sex,
};

export type Mutation = {
   __typename?: 'Mutation',
  _empty?: Maybe<Scalars['String']>,
  createDog?: Maybe<Scalars['ID']>,
};


export type MutationCreateDogArgs = {
  dog?: Maybe<DogInput>
};

export type Query = {
   __typename?: 'Query',
  _empty?: Maybe<Scalars['String']>,
  dogs: Array<Dog>,
  dog?: Maybe<Dog>,
};


export type QueryDogArgs = {
  id: Scalars['ID']
};

export enum Sex {
  Male = 'Male',
  Bitch = 'Bitch'
}


export type DogDetailQueryVariables = {
  dogId: Scalars['ID']
};


export type DogDetailQuery = (
  { __typename?: 'Query' }
  & { dog: Maybe<(
    { __typename?: 'Dog' }
    & Pick<Dog, 'id' | 'fullName' | 'birthday' | 'registrationNumber' | 'sex'>
  )> }
);

export type LargeCarouselQueryVariables = {};


export type LargeCarouselQuery = (
  { __typename?: 'Query' }
  & { dogs: Array<(
    { __typename?: 'Dog' }
    & Pick<Dog, 'id' | 'fullName' | 'sex' | 'birthday' | 'registrationNumber'>
  )> }
);


export const DogDetailDocument = gql`
    query DogDetail($dogId: ID!) {
  dog(id: $dogId) {
    id
    fullName
    birthday
    registrationNumber
    sex
  }
}
    `;

/**
 * __useDogDetailQuery__
 *
 * To run a query within a React component, call `useDogDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useDogDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDogDetailQuery({
 *   variables: {
 *      dogId: // value for 'dogId'
 *   },
 * });
 */
export function useDogDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DogDetailQuery, DogDetailQueryVariables>) {
        return ApolloReactHooks.useQuery<DogDetailQuery, DogDetailQueryVariables>(DogDetailDocument, baseOptions);
      }
export function useDogDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DogDetailQuery, DogDetailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DogDetailQuery, DogDetailQueryVariables>(DogDetailDocument, baseOptions);
        }
export type DogDetailQueryHookResult = ReturnType<typeof useDogDetailQuery>;
export type DogDetailLazyQueryHookResult = ReturnType<typeof useDogDetailLazyQuery>;
export type DogDetailQueryResult = ApolloReactCommon.QueryResult<DogDetailQuery, DogDetailQueryVariables>;
export const LargeCarouselDocument = gql`
    query LargeCarousel {
  dogs {
    id
    fullName
    sex
    birthday
    registrationNumber
  }
}
    `;

/**
 * __useLargeCarouselQuery__
 *
 * To run a query within a React component, call `useLargeCarouselQuery` and pass it any options that fit your needs.
 * When your component renders, `useLargeCarouselQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLargeCarouselQuery({
 *   variables: {
 *   },
 * });
 */
export function useLargeCarouselQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LargeCarouselQuery, LargeCarouselQueryVariables>) {
        return ApolloReactHooks.useQuery<LargeCarouselQuery, LargeCarouselQueryVariables>(LargeCarouselDocument, baseOptions);
      }
export function useLargeCarouselLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LargeCarouselQuery, LargeCarouselQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LargeCarouselQuery, LargeCarouselQueryVariables>(LargeCarouselDocument, baseOptions);
        }
export type LargeCarouselQueryHookResult = ReturnType<typeof useLargeCarouselQuery>;
export type LargeCarouselLazyQueryHookResult = ReturnType<typeof useLargeCarouselLazyQuery>;
export type LargeCarouselQueryResult = ApolloReactCommon.QueryResult<LargeCarouselQuery, LargeCarouselQueryVariables>;