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

export type Credentials = {
  email: Scalars['String'],
  password: Scalars['String'],
};


export type Dog = {
   __typename?: 'Dog',
  id: Scalars['ID'],
  fullName?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  nickname?: Maybe<Scalars['String']>,
  registrationNumber?: Maybe<Scalars['String']>,
  birthday?: Maybe<Scalars['DateTime']>,
  sex?: Maybe<Scalars['String']>,
  title1?: Maybe<Array<Maybe<Scalars['String']>>>,
  title2?: Maybe<Array<Maybe<Scalars['String']>>>,
  title3?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  owner?: Maybe<User>,
  mother?: Maybe<Dog>,
  father?: Maybe<Dog>,
};

export type DogInput = {
  fullName: Scalars['String'],
  registrationNumber: Scalars['String'],
  birthday: Scalars['DateTime'],
  sex: Sex,
  color: Scalars['String'],
  ownerId?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  _empty?: Maybe<Scalars['String']>,
  createDog?: Maybe<Scalars['ID']>,
  createUser: Scalars['ID'],
  login: Scalars['String'],
};


export type MutationCreateDogArgs = {
  dog?: Maybe<DogInput>
};


export type MutationCreateUserArgs = {
  user?: Maybe<UserInput>
};


export type MutationLoginArgs = {
  credentials?: Maybe<Credentials>
};

export type Query = {
   __typename?: 'Query',
  _empty?: Maybe<Scalars['String']>,
  dogs: Array<Dog>,
  dog?: Maybe<Dog>,
  me?: Maybe<User>,
  user?: Maybe<User>,
};


export type QueryDogArgs = {
  id: Scalars['ID']
};


export type QueryUserArgs = {
  id: Scalars['ID']
};

export enum Sex {
  Male = 'MALE',
  Bitch = 'BITCH'
}


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  fullName?: Maybe<Scalars['String']>,
  dogs?: Maybe<Array<Dog>>,
};

export type UserInput = {
  fullName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

export type LoginMutationVariables = {
  credentials?: Maybe<Credentials>
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

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
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { dogs: Maybe<Array<(
      { __typename?: 'Dog' }
      & Pick<Dog, 'id' | 'fullName' | 'image' | 'sex'>
    )>> }
  )> }
);


export const LoginDocument = gql`
    mutation Login($credentials: Credentials) {
  login(credentials: $credentials)
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
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
  me {
    id
    dogs {
      id
      fullName
      image
      sex
    }
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