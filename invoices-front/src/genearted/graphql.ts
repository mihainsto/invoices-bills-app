/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
  user: User;
};

export type Bill = {
  __typename?: 'Bill';
  amount: Scalars['Int']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<Scalars['String']['output']>;
  dueDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type CreatePostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Invoice = {
  __typename?: 'Invoice';
  amount: Scalars['Int']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<Scalars['String']['output']>;
  dueDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  createPost: Post;
  login: Auth;
  refreshToken: Token;
  signup: Auth;
  updateUser: User;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT']['input'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<PostEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostOrder = {
  direction: OrderDirection;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  helloWorld: Scalars['String']['output'];
  me: User;
  post: Post;
  publishedPosts: PostConnection;
  userPosts: Array<Post>;
};


export type QueryHelloArgs = {
  name: Scalars['String']['input'];
};


export type QueryPublishedPostsArgs = {
  orderBy?: InputMaybe<PostOrder>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** User role */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SignupInput = {
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  postCreated: Post;
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
};

export type UpdateUserInput = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bills?: Maybe<Array<Invoice>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoices?: Maybe<Array<Bill>>;
  lastname?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  role: Role;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', refreshToken: any, accessToken: any } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', firstname?: string | null, bills?: Array<{ __typename?: 'Invoice', id: string, amount: number, details?: string | null, dueDate: any }> | null, invoices?: Array<{ __typename?: 'Bill', id: string, amount: number, details?: string | null, dueDate: any }> | null } };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
  user: User;
};

export type Bill = {
  __typename?: 'Bill';
  amount: Scalars['Int']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<Scalars['String']['output']>;
  dueDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type CreatePostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Invoice = {
  __typename?: 'Invoice';
  amount: Scalars['Int']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<Scalars['String']['output']>;
  dueDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  createPost: Post;
  login: Auth;
  refreshToken: Token;
  signup: Auth;
  updateUser: User;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT']['input'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<PostEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostOrder = {
  direction: OrderDirection;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  helloWorld: Scalars['String']['output'];
  me: User;
  post: Post;
  publishedPosts: PostConnection;
  userPosts: Array<Post>;
};


export type QueryHelloArgs = {
  name: Scalars['String']['input'];
};


export type QueryPublishedPostsArgs = {
  orderBy?: InputMaybe<PostOrder>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** User role */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SignupInput = {
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  postCreated: Post;
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
};

export type UpdateUserInput = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bills?: Maybe<Array<Invoice>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoices?: Maybe<Array<Bill>>;
  lastname?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  role: Role;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', refreshToken: any, accessToken: any } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', firstname?: string | null, bills?: Array<{ __typename?: 'Invoice', id: string, amount: number, details?: string | null, dueDate: any }> | null, invoices?: Array<{ __typename?: 'Bill', id: string, amount: number, details?: string | null, dueDate: any }> | null } };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    refreshToken
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    firstname
    bills {
      id
      amount
      details
      dueDate
    }
    invoices {
      id
      amount
      details
      dueDate
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;