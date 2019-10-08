import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  registrationNumber?: Maybe<Scalars['String']>,
  birthday?: Maybe<Scalars['DateTime']>,
  sex?: Maybe<Scalars['String']>,
  owner?: Maybe<User>,
};

export type DogInput = {
  fullName: Scalars['String'],
  registrationNumber: Scalars['String'],
  birthday: Scalars['DateTime'],
  sex: Sex,
  ownerId: Scalars['String'],
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
  me: User,
  user: User,
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


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Dog: ResolverTypeWrapper<Dog>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  User: ResolverTypeWrapper<User>,
  Mutation: ResolverTypeWrapper<{}>,
  DogInput: DogInput,
  Sex: Sex,
  UserInput: UserInput,
  Credentials: Credentials,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Dog: Dog,
  ID: Scalars['ID'],
  DateTime: Scalars['DateTime'],
  User: User,
  Mutation: {},
  DogInput: DogInput,
  Sex: Sex,
  UserInput: UserInput,
  Credentials: Credentials,
  Boolean: Scalars['Boolean'],
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
  Int: Scalars['Int'],
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dog'] = ResolversParentTypes['Dog']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  registrationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  birthday?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  sex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createDog?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, MutationCreateDogArgs>,
  createUser?: Resolver<ResolversTypes['ID'], ParentType, ContextType, MutationCreateUserArgs>,
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType, MutationLoginArgs>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dogs?: Resolver<Array<ResolversTypes['Dog']>, ParentType, ContextType>,
  dog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<QueryDogArgs, 'id'>>,
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dogs?: Resolver<Maybe<Array<ResolversTypes['Dog']>>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType,
  Dog?: DogResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;