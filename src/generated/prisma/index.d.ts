
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model CycleEntry
 * 
 */
export type CycleEntry = $Result.DefaultSelection<Prisma.$CycleEntryPayload>
/**
 * Model PredictionData
 * 
 */
export type PredictionData = $Result.DefaultSelection<Prisma.$PredictionDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cycleEntry`: Exposes CRUD operations for the **CycleEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CycleEntries
    * const cycleEntries = await prisma.cycleEntry.findMany()
    * ```
    */
  get cycleEntry(): Prisma.CycleEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.predictionData`: Exposes CRUD operations for the **PredictionData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PredictionData
    * const predictionData = await prisma.predictionData.findMany()
    * ```
    */
  get predictionData(): Prisma.PredictionDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    CycleEntry: 'CycleEntry',
    PredictionData: 'PredictionData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "cycleEntry" | "predictionData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      CycleEntry: {
        payload: Prisma.$CycleEntryPayload<ExtArgs>
        fields: Prisma.CycleEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CycleEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CycleEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>
          }
          findFirst: {
            args: Prisma.CycleEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CycleEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>
          }
          findMany: {
            args: Prisma.CycleEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>[]
          }
          create: {
            args: Prisma.CycleEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>
          }
          createMany: {
            args: Prisma.CycleEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CycleEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>[]
          }
          delete: {
            args: Prisma.CycleEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>
          }
          update: {
            args: Prisma.CycleEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>
          }
          deleteMany: {
            args: Prisma.CycleEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CycleEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CycleEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>[]
          }
          upsert: {
            args: Prisma.CycleEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleEntryPayload>
          }
          aggregate: {
            args: Prisma.CycleEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCycleEntry>
          }
          groupBy: {
            args: Prisma.CycleEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CycleEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CycleEntryCountArgs<ExtArgs>
            result: $Utils.Optional<CycleEntryCountAggregateOutputType> | number
          }
        }
      }
      PredictionData: {
        payload: Prisma.$PredictionDataPayload<ExtArgs>
        fields: Prisma.PredictionDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>
          }
          findFirst: {
            args: Prisma.PredictionDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>
          }
          findMany: {
            args: Prisma.PredictionDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>[]
          }
          create: {
            args: Prisma.PredictionDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>
          }
          createMany: {
            args: Prisma.PredictionDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredictionDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>[]
          }
          delete: {
            args: Prisma.PredictionDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>
          }
          update: {
            args: Prisma.PredictionDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>
          }
          deleteMany: {
            args: Prisma.PredictionDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredictionDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>[]
          }
          upsert: {
            args: Prisma.PredictionDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionDataPayload>
          }
          aggregate: {
            args: Prisma.PredictionDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePredictionData>
          }
          groupBy: {
            args: Prisma.PredictionDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionDataCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    cycleEntry?: CycleEntryOmit
    predictionData?: PredictionDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cycleEntries: number
    predictions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycleEntries?: boolean | UserCountOutputTypeCountCycleEntriesArgs
    predictions?: boolean | UserCountOutputTypeCountPredictionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCycleEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    displayName: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    displayName: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    displayName: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    displayName: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    cycleEntries?: boolean | User$cycleEntriesArgs<ExtArgs>
    predictions?: boolean | User$predictionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "displayName" | "avatarUrl" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    cycleEntries?: boolean | User$cycleEntriesArgs<ExtArgs>
    predictions?: boolean | User$predictionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      cycleEntries: Prisma.$CycleEntryPayload<ExtArgs>[]
      predictions: Prisma.$PredictionDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      displayName: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cycleEntries<T extends User$cycleEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$cycleEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    predictions<T extends User$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, User$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.cycleEntries
   */
  export type User$cycleEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    where?: CycleEntryWhereInput
    orderBy?: CycleEntryOrderByWithRelationInput | CycleEntryOrderByWithRelationInput[]
    cursor?: CycleEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CycleEntryScalarFieldEnum | CycleEntryScalarFieldEnum[]
  }

  /**
   * User.predictions
   */
  export type User$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    where?: PredictionDataWhereInput
    orderBy?: PredictionDataOrderByWithRelationInput | PredictionDataOrderByWithRelationInput[]
    cursor?: PredictionDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionDataScalarFieldEnum | PredictionDataScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    averageCycleLength: number | null
    periodDuration: number | null
    lutealPhaseDays: number | null
    dailyCalorieGoal: number | null
    height: number | null
    weight: number | null
    targetWeight: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    averageCycleLength: number | null
    periodDuration: number | null
    lutealPhaseDays: number | null
    dailyCalorieGoal: number | null
    height: number | null
    weight: number | null
    targetWeight: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    dateOfBirth: Date | null
    gender: string | null
    timezone: string | null
    averageCycleLength: number | null
    periodDuration: number | null
    lutealPhaseDays: number | null
    lastPeriodStart: Date | null
    menopauseStatus: string | null
    dailyCalorieGoal: number | null
    activityLevel: string | null
    height: number | null
    weight: number | null
    targetWeight: number | null
    unitsSystem: string | null
    theme: string | null
    language: string | null
    onboardingCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastSyncedAt: Date | null
    appVersion: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    dateOfBirth: Date | null
    gender: string | null
    timezone: string | null
    averageCycleLength: number | null
    periodDuration: number | null
    lutealPhaseDays: number | null
    lastPeriodStart: Date | null
    menopauseStatus: string | null
    dailyCalorieGoal: number | null
    activityLevel: string | null
    height: number | null
    weight: number | null
    targetWeight: number | null
    unitsSystem: string | null
    theme: string | null
    language: string | null
    onboardingCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastSyncedAt: Date | null
    appVersion: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    dateOfBirth: number
    gender: number
    timezone: number
    averageCycleLength: number
    periodDuration: number
    lutealPhaseDays: number
    lastPeriodStart: number
    menopauseStatus: number
    wellnessGoals: number
    dailyCalorieGoal: number
    activityLevel: number
    height: number
    weight: number
    targetWeight: number
    unitsSystem: number
    theme: number
    notifications: number
    language: number
    onboardingCompleted: number
    createdAt: number
    updatedAt: number
    lastSyncedAt: number
    appVersion: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    averageCycleLength?: true
    periodDuration?: true
    lutealPhaseDays?: true
    dailyCalorieGoal?: true
    height?: true
    weight?: true
    targetWeight?: true
  }

  export type UserProfileSumAggregateInputType = {
    averageCycleLength?: true
    periodDuration?: true
    lutealPhaseDays?: true
    dailyCalorieGoal?: true
    height?: true
    weight?: true
    targetWeight?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    timezone?: true
    averageCycleLength?: true
    periodDuration?: true
    lutealPhaseDays?: true
    lastPeriodStart?: true
    menopauseStatus?: true
    dailyCalorieGoal?: true
    activityLevel?: true
    height?: true
    weight?: true
    targetWeight?: true
    unitsSystem?: true
    theme?: true
    language?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
    lastSyncedAt?: true
    appVersion?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    timezone?: true
    averageCycleLength?: true
    periodDuration?: true
    lutealPhaseDays?: true
    lastPeriodStart?: true
    menopauseStatus?: true
    dailyCalorieGoal?: true
    activityLevel?: true
    height?: true
    weight?: true
    targetWeight?: true
    unitsSystem?: true
    theme?: true
    language?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
    lastSyncedAt?: true
    appVersion?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    timezone?: true
    averageCycleLength?: true
    periodDuration?: true
    lutealPhaseDays?: true
    lastPeriodStart?: true
    menopauseStatus?: true
    wellnessGoals?: true
    dailyCalorieGoal?: true
    activityLevel?: true
    height?: true
    weight?: true
    targetWeight?: true
    unitsSystem?: true
    theme?: true
    notifications?: true
    language?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
    lastSyncedAt?: true
    appVersion?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    fullName: string | null
    dateOfBirth: Date | null
    gender: string | null
    timezone: string | null
    averageCycleLength: number
    periodDuration: number
    lutealPhaseDays: number
    lastPeriodStart: Date | null
    menopauseStatus: string | null
    wellnessGoals: string[]
    dailyCalorieGoal: number | null
    activityLevel: string | null
    height: number | null
    weight: number | null
    targetWeight: number | null
    unitsSystem: string | null
    theme: string | null
    notifications: JsonValue | null
    language: string | null
    onboardingCompleted: boolean
    createdAt: Date
    updatedAt: Date
    lastSyncedAt: Date | null
    appVersion: string | null
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    timezone?: boolean
    averageCycleLength?: boolean
    periodDuration?: boolean
    lutealPhaseDays?: boolean
    lastPeriodStart?: boolean
    menopauseStatus?: boolean
    wellnessGoals?: boolean
    dailyCalorieGoal?: boolean
    activityLevel?: boolean
    height?: boolean
    weight?: boolean
    targetWeight?: boolean
    unitsSystem?: boolean
    theme?: boolean
    notifications?: boolean
    language?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSyncedAt?: boolean
    appVersion?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    timezone?: boolean
    averageCycleLength?: boolean
    periodDuration?: boolean
    lutealPhaseDays?: boolean
    lastPeriodStart?: boolean
    menopauseStatus?: boolean
    wellnessGoals?: boolean
    dailyCalorieGoal?: boolean
    activityLevel?: boolean
    height?: boolean
    weight?: boolean
    targetWeight?: boolean
    unitsSystem?: boolean
    theme?: boolean
    notifications?: boolean
    language?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSyncedAt?: boolean
    appVersion?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    timezone?: boolean
    averageCycleLength?: boolean
    periodDuration?: boolean
    lutealPhaseDays?: boolean
    lastPeriodStart?: boolean
    menopauseStatus?: boolean
    wellnessGoals?: boolean
    dailyCalorieGoal?: boolean
    activityLevel?: boolean
    height?: boolean
    weight?: boolean
    targetWeight?: boolean
    unitsSystem?: boolean
    theme?: boolean
    notifications?: boolean
    language?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSyncedAt?: boolean
    appVersion?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    timezone?: boolean
    averageCycleLength?: boolean
    periodDuration?: boolean
    lutealPhaseDays?: boolean
    lastPeriodStart?: boolean
    menopauseStatus?: boolean
    wellnessGoals?: boolean
    dailyCalorieGoal?: boolean
    activityLevel?: boolean
    height?: boolean
    weight?: boolean
    targetWeight?: boolean
    unitsSystem?: boolean
    theme?: boolean
    notifications?: boolean
    language?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSyncedAt?: boolean
    appVersion?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "dateOfBirth" | "gender" | "timezone" | "averageCycleLength" | "periodDuration" | "lutealPhaseDays" | "lastPeriodStart" | "menopauseStatus" | "wellnessGoals" | "dailyCalorieGoal" | "activityLevel" | "height" | "weight" | "targetWeight" | "unitsSystem" | "theme" | "notifications" | "language" | "onboardingCompleted" | "createdAt" | "updatedAt" | "lastSyncedAt" | "appVersion", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullName: string | null
      dateOfBirth: Date | null
      gender: string | null
      timezone: string | null
      averageCycleLength: number
      periodDuration: number
      lutealPhaseDays: number
      lastPeriodStart: Date | null
      menopauseStatus: string | null
      wellnessGoals: string[]
      dailyCalorieGoal: number | null
      activityLevel: string | null
      height: number | null
      weight: number | null
      targetWeight: number | null
      unitsSystem: string | null
      theme: string | null
      notifications: Prisma.JsonValue | null
      language: string | null
      onboardingCompleted: boolean
      createdAt: Date
      updatedAt: Date
      lastSyncedAt: Date | null
      appVersion: string | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly fullName: FieldRef<"UserProfile", 'String'>
    readonly dateOfBirth: FieldRef<"UserProfile", 'DateTime'>
    readonly gender: FieldRef<"UserProfile", 'String'>
    readonly timezone: FieldRef<"UserProfile", 'String'>
    readonly averageCycleLength: FieldRef<"UserProfile", 'Int'>
    readonly periodDuration: FieldRef<"UserProfile", 'Int'>
    readonly lutealPhaseDays: FieldRef<"UserProfile", 'Int'>
    readonly lastPeriodStart: FieldRef<"UserProfile", 'DateTime'>
    readonly menopauseStatus: FieldRef<"UserProfile", 'String'>
    readonly wellnessGoals: FieldRef<"UserProfile", 'String[]'>
    readonly dailyCalorieGoal: FieldRef<"UserProfile", 'Int'>
    readonly activityLevel: FieldRef<"UserProfile", 'String'>
    readonly height: FieldRef<"UserProfile", 'Float'>
    readonly weight: FieldRef<"UserProfile", 'Float'>
    readonly targetWeight: FieldRef<"UserProfile", 'Float'>
    readonly unitsSystem: FieldRef<"UserProfile", 'String'>
    readonly theme: FieldRef<"UserProfile", 'String'>
    readonly notifications: FieldRef<"UserProfile", 'Json'>
    readonly language: FieldRef<"UserProfile", 'String'>
    readonly onboardingCompleted: FieldRef<"UserProfile", 'Boolean'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly lastSyncedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly appVersion: FieldRef<"UserProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model CycleEntry
   */

  export type AggregateCycleEntry = {
    _count: CycleEntryCountAggregateOutputType | null
    _min: CycleEntryMinAggregateOutputType | null
    _max: CycleEntryMaxAggregateOutputType | null
  }

  export type CycleEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    isPeriod: boolean | null
    flowIntensity: string | null
    notes: string | null
  }

  export type CycleEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    isPeriod: boolean | null
    flowIntensity: string | null
    notes: string | null
  }

  export type CycleEntryCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    isPeriod: number
    flowIntensity: number
    symptoms: number
    notes: number
    _all: number
  }


  export type CycleEntryMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    isPeriod?: true
    flowIntensity?: true
    notes?: true
  }

  export type CycleEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    isPeriod?: true
    flowIntensity?: true
    notes?: true
  }

  export type CycleEntryCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    isPeriod?: true
    flowIntensity?: true
    symptoms?: true
    notes?: true
    _all?: true
  }

  export type CycleEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CycleEntry to aggregate.
     */
    where?: CycleEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleEntries to fetch.
     */
    orderBy?: CycleEntryOrderByWithRelationInput | CycleEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CycleEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CycleEntries
    **/
    _count?: true | CycleEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CycleEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CycleEntryMaxAggregateInputType
  }

  export type GetCycleEntryAggregateType<T extends CycleEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateCycleEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCycleEntry[P]>
      : GetScalarType<T[P], AggregateCycleEntry[P]>
  }




  export type CycleEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleEntryWhereInput
    orderBy?: CycleEntryOrderByWithAggregationInput | CycleEntryOrderByWithAggregationInput[]
    by: CycleEntryScalarFieldEnum[] | CycleEntryScalarFieldEnum
    having?: CycleEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CycleEntryCountAggregateInputType | true
    _min?: CycleEntryMinAggregateInputType
    _max?: CycleEntryMaxAggregateInputType
  }

  export type CycleEntryGroupByOutputType = {
    id: string
    userId: string
    date: Date
    isPeriod: boolean
    flowIntensity: string | null
    symptoms: JsonValue | null
    notes: string | null
    _count: CycleEntryCountAggregateOutputType | null
    _min: CycleEntryMinAggregateOutputType | null
    _max: CycleEntryMaxAggregateOutputType | null
  }

  type GetCycleEntryGroupByPayload<T extends CycleEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CycleEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CycleEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CycleEntryGroupByOutputType[P]>
            : GetScalarType<T[P], CycleEntryGroupByOutputType[P]>
        }
      >
    >


  export type CycleEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    isPeriod?: boolean
    flowIntensity?: boolean
    symptoms?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleEntry"]>

  export type CycleEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    isPeriod?: boolean
    flowIntensity?: boolean
    symptoms?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleEntry"]>

  export type CycleEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    isPeriod?: boolean
    flowIntensity?: boolean
    symptoms?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleEntry"]>

  export type CycleEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    isPeriod?: boolean
    flowIntensity?: boolean
    symptoms?: boolean
    notes?: boolean
  }

  export type CycleEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "isPeriod" | "flowIntensity" | "symptoms" | "notes", ExtArgs["result"]["cycleEntry"]>
  export type CycleEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CycleEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CycleEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CycleEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CycleEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      isPeriod: boolean
      flowIntensity: string | null
      symptoms: Prisma.JsonValue | null
      notes: string | null
    }, ExtArgs["result"]["cycleEntry"]>
    composites: {}
  }

  type CycleEntryGetPayload<S extends boolean | null | undefined | CycleEntryDefaultArgs> = $Result.GetResult<Prisma.$CycleEntryPayload, S>

  type CycleEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CycleEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CycleEntryCountAggregateInputType | true
    }

  export interface CycleEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CycleEntry'], meta: { name: 'CycleEntry' } }
    /**
     * Find zero or one CycleEntry that matches the filter.
     * @param {CycleEntryFindUniqueArgs} args - Arguments to find a CycleEntry
     * @example
     * // Get one CycleEntry
     * const cycleEntry = await prisma.cycleEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CycleEntryFindUniqueArgs>(args: SelectSubset<T, CycleEntryFindUniqueArgs<ExtArgs>>): Prisma__CycleEntryClient<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CycleEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CycleEntryFindUniqueOrThrowArgs} args - Arguments to find a CycleEntry
     * @example
     * // Get one CycleEntry
     * const cycleEntry = await prisma.cycleEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CycleEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, CycleEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CycleEntryClient<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CycleEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleEntryFindFirstArgs} args - Arguments to find a CycleEntry
     * @example
     * // Get one CycleEntry
     * const cycleEntry = await prisma.cycleEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CycleEntryFindFirstArgs>(args?: SelectSubset<T, CycleEntryFindFirstArgs<ExtArgs>>): Prisma__CycleEntryClient<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CycleEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleEntryFindFirstOrThrowArgs} args - Arguments to find a CycleEntry
     * @example
     * // Get one CycleEntry
     * const cycleEntry = await prisma.cycleEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CycleEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, CycleEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CycleEntryClient<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CycleEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CycleEntries
     * const cycleEntries = await prisma.cycleEntry.findMany()
     * 
     * // Get first 10 CycleEntries
     * const cycleEntries = await prisma.cycleEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cycleEntryWithIdOnly = await prisma.cycleEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CycleEntryFindManyArgs>(args?: SelectSubset<T, CycleEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CycleEntry.
     * @param {CycleEntryCreateArgs} args - Arguments to create a CycleEntry.
     * @example
     * // Create one CycleEntry
     * const CycleEntry = await prisma.cycleEntry.create({
     *   data: {
     *     // ... data to create a CycleEntry
     *   }
     * })
     * 
     */
    create<T extends CycleEntryCreateArgs>(args: SelectSubset<T, CycleEntryCreateArgs<ExtArgs>>): Prisma__CycleEntryClient<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CycleEntries.
     * @param {CycleEntryCreateManyArgs} args - Arguments to create many CycleEntries.
     * @example
     * // Create many CycleEntries
     * const cycleEntry = await prisma.cycleEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CycleEntryCreateManyArgs>(args?: SelectSubset<T, CycleEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CycleEntries and returns the data saved in the database.
     * @param {CycleEntryCreateManyAndReturnArgs} args - Arguments to create many CycleEntries.
     * @example
     * // Create many CycleEntries
     * const cycleEntry = await prisma.cycleEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CycleEntries and only return the `id`
     * const cycleEntryWithIdOnly = await prisma.cycleEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CycleEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, CycleEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CycleEntry.
     * @param {CycleEntryDeleteArgs} args - Arguments to delete one CycleEntry.
     * @example
     * // Delete one CycleEntry
     * const CycleEntry = await prisma.cycleEntry.delete({
     *   where: {
     *     // ... filter to delete one CycleEntry
     *   }
     * })
     * 
     */
    delete<T extends CycleEntryDeleteArgs>(args: SelectSubset<T, CycleEntryDeleteArgs<ExtArgs>>): Prisma__CycleEntryClient<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CycleEntry.
     * @param {CycleEntryUpdateArgs} args - Arguments to update one CycleEntry.
     * @example
     * // Update one CycleEntry
     * const cycleEntry = await prisma.cycleEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CycleEntryUpdateArgs>(args: SelectSubset<T, CycleEntryUpdateArgs<ExtArgs>>): Prisma__CycleEntryClient<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CycleEntries.
     * @param {CycleEntryDeleteManyArgs} args - Arguments to filter CycleEntries to delete.
     * @example
     * // Delete a few CycleEntries
     * const { count } = await prisma.cycleEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CycleEntryDeleteManyArgs>(args?: SelectSubset<T, CycleEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CycleEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CycleEntries
     * const cycleEntry = await prisma.cycleEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CycleEntryUpdateManyArgs>(args: SelectSubset<T, CycleEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CycleEntries and returns the data updated in the database.
     * @param {CycleEntryUpdateManyAndReturnArgs} args - Arguments to update many CycleEntries.
     * @example
     * // Update many CycleEntries
     * const cycleEntry = await prisma.cycleEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CycleEntries and only return the `id`
     * const cycleEntryWithIdOnly = await prisma.cycleEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CycleEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, CycleEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CycleEntry.
     * @param {CycleEntryUpsertArgs} args - Arguments to update or create a CycleEntry.
     * @example
     * // Update or create a CycleEntry
     * const cycleEntry = await prisma.cycleEntry.upsert({
     *   create: {
     *     // ... data to create a CycleEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CycleEntry we want to update
     *   }
     * })
     */
    upsert<T extends CycleEntryUpsertArgs>(args: SelectSubset<T, CycleEntryUpsertArgs<ExtArgs>>): Prisma__CycleEntryClient<$Result.GetResult<Prisma.$CycleEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CycleEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleEntryCountArgs} args - Arguments to filter CycleEntries to count.
     * @example
     * // Count the number of CycleEntries
     * const count = await prisma.cycleEntry.count({
     *   where: {
     *     // ... the filter for the CycleEntries we want to count
     *   }
     * })
    **/
    count<T extends CycleEntryCountArgs>(
      args?: Subset<T, CycleEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CycleEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CycleEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CycleEntryAggregateArgs>(args: Subset<T, CycleEntryAggregateArgs>): Prisma.PrismaPromise<GetCycleEntryAggregateType<T>>

    /**
     * Group by CycleEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CycleEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CycleEntryGroupByArgs['orderBy'] }
        : { orderBy?: CycleEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CycleEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CycleEntry model
   */
  readonly fields: CycleEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CycleEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CycleEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CycleEntry model
   */
  interface CycleEntryFieldRefs {
    readonly id: FieldRef<"CycleEntry", 'String'>
    readonly userId: FieldRef<"CycleEntry", 'String'>
    readonly date: FieldRef<"CycleEntry", 'DateTime'>
    readonly isPeriod: FieldRef<"CycleEntry", 'Boolean'>
    readonly flowIntensity: FieldRef<"CycleEntry", 'String'>
    readonly symptoms: FieldRef<"CycleEntry", 'Json'>
    readonly notes: FieldRef<"CycleEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CycleEntry findUnique
   */
  export type CycleEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * Filter, which CycleEntry to fetch.
     */
    where: CycleEntryWhereUniqueInput
  }

  /**
   * CycleEntry findUniqueOrThrow
   */
  export type CycleEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * Filter, which CycleEntry to fetch.
     */
    where: CycleEntryWhereUniqueInput
  }

  /**
   * CycleEntry findFirst
   */
  export type CycleEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * Filter, which CycleEntry to fetch.
     */
    where?: CycleEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleEntries to fetch.
     */
    orderBy?: CycleEntryOrderByWithRelationInput | CycleEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleEntries.
     */
    cursor?: CycleEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleEntries.
     */
    distinct?: CycleEntryScalarFieldEnum | CycleEntryScalarFieldEnum[]
  }

  /**
   * CycleEntry findFirstOrThrow
   */
  export type CycleEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * Filter, which CycleEntry to fetch.
     */
    where?: CycleEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleEntries to fetch.
     */
    orderBy?: CycleEntryOrderByWithRelationInput | CycleEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleEntries.
     */
    cursor?: CycleEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleEntries.
     */
    distinct?: CycleEntryScalarFieldEnum | CycleEntryScalarFieldEnum[]
  }

  /**
   * CycleEntry findMany
   */
  export type CycleEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * Filter, which CycleEntries to fetch.
     */
    where?: CycleEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleEntries to fetch.
     */
    orderBy?: CycleEntryOrderByWithRelationInput | CycleEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CycleEntries.
     */
    cursor?: CycleEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleEntries.
     */
    skip?: number
    distinct?: CycleEntryScalarFieldEnum | CycleEntryScalarFieldEnum[]
  }

  /**
   * CycleEntry create
   */
  export type CycleEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a CycleEntry.
     */
    data: XOR<CycleEntryCreateInput, CycleEntryUncheckedCreateInput>
  }

  /**
   * CycleEntry createMany
   */
  export type CycleEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CycleEntries.
     */
    data: CycleEntryCreateManyInput | CycleEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CycleEntry createManyAndReturn
   */
  export type CycleEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * The data used to create many CycleEntries.
     */
    data: CycleEntryCreateManyInput | CycleEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CycleEntry update
   */
  export type CycleEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a CycleEntry.
     */
    data: XOR<CycleEntryUpdateInput, CycleEntryUncheckedUpdateInput>
    /**
     * Choose, which CycleEntry to update.
     */
    where: CycleEntryWhereUniqueInput
  }

  /**
   * CycleEntry updateMany
   */
  export type CycleEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CycleEntries.
     */
    data: XOR<CycleEntryUpdateManyMutationInput, CycleEntryUncheckedUpdateManyInput>
    /**
     * Filter which CycleEntries to update
     */
    where?: CycleEntryWhereInput
    /**
     * Limit how many CycleEntries to update.
     */
    limit?: number
  }

  /**
   * CycleEntry updateManyAndReturn
   */
  export type CycleEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * The data used to update CycleEntries.
     */
    data: XOR<CycleEntryUpdateManyMutationInput, CycleEntryUncheckedUpdateManyInput>
    /**
     * Filter which CycleEntries to update
     */
    where?: CycleEntryWhereInput
    /**
     * Limit how many CycleEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CycleEntry upsert
   */
  export type CycleEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the CycleEntry to update in case it exists.
     */
    where: CycleEntryWhereUniqueInput
    /**
     * In case the CycleEntry found by the `where` argument doesn't exist, create a new CycleEntry with this data.
     */
    create: XOR<CycleEntryCreateInput, CycleEntryUncheckedCreateInput>
    /**
     * In case the CycleEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CycleEntryUpdateInput, CycleEntryUncheckedUpdateInput>
  }

  /**
   * CycleEntry delete
   */
  export type CycleEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
    /**
     * Filter which CycleEntry to delete.
     */
    where: CycleEntryWhereUniqueInput
  }

  /**
   * CycleEntry deleteMany
   */
  export type CycleEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CycleEntries to delete
     */
    where?: CycleEntryWhereInput
    /**
     * Limit how many CycleEntries to delete.
     */
    limit?: number
  }

  /**
   * CycleEntry without action
   */
  export type CycleEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleEntry
     */
    select?: CycleEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleEntry
     */
    omit?: CycleEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleEntryInclude<ExtArgs> | null
  }


  /**
   * Model PredictionData
   */

  export type AggregatePredictionData = {
    _count: PredictionDataCountAggregateOutputType | null
    _min: PredictionDataMinAggregateOutputType | null
    _max: PredictionDataMaxAggregateOutputType | null
  }

  export type PredictionDataMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nextPeriod: Date | null
    ovulation: Date | null
    createdAt: Date | null
  }

  export type PredictionDataMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nextPeriod: Date | null
    ovulation: Date | null
    createdAt: Date | null
  }

  export type PredictionDataCountAggregateOutputType = {
    id: number
    userId: number
    nextPeriod: number
    ovulation: number
    fertileWindow: number
    analytics: number
    createdAt: number
    _all: number
  }


  export type PredictionDataMinAggregateInputType = {
    id?: true
    userId?: true
    nextPeriod?: true
    ovulation?: true
    createdAt?: true
  }

  export type PredictionDataMaxAggregateInputType = {
    id?: true
    userId?: true
    nextPeriod?: true
    ovulation?: true
    createdAt?: true
  }

  export type PredictionDataCountAggregateInputType = {
    id?: true
    userId?: true
    nextPeriod?: true
    ovulation?: true
    fertileWindow?: true
    analytics?: true
    createdAt?: true
    _all?: true
  }

  export type PredictionDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredictionData to aggregate.
     */
    where?: PredictionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionData to fetch.
     */
    orderBy?: PredictionDataOrderByWithRelationInput | PredictionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PredictionData
    **/
    _count?: true | PredictionDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionDataMaxAggregateInputType
  }

  export type GetPredictionDataAggregateType<T extends PredictionDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePredictionData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePredictionData[P]>
      : GetScalarType<T[P], AggregatePredictionData[P]>
  }




  export type PredictionDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionDataWhereInput
    orderBy?: PredictionDataOrderByWithAggregationInput | PredictionDataOrderByWithAggregationInput[]
    by: PredictionDataScalarFieldEnum[] | PredictionDataScalarFieldEnum
    having?: PredictionDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionDataCountAggregateInputType | true
    _min?: PredictionDataMinAggregateInputType
    _max?: PredictionDataMaxAggregateInputType
  }

  export type PredictionDataGroupByOutputType = {
    id: string
    userId: string
    nextPeriod: Date | null
    ovulation: Date | null
    fertileWindow: JsonValue | null
    analytics: JsonValue | null
    createdAt: Date
    _count: PredictionDataCountAggregateOutputType | null
    _min: PredictionDataMinAggregateOutputType | null
    _max: PredictionDataMaxAggregateOutputType | null
  }

  type GetPredictionDataGroupByPayload<T extends PredictionDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionDataGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionDataGroupByOutputType[P]>
        }
      >
    >


  export type PredictionDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nextPeriod?: boolean
    ovulation?: boolean
    fertileWindow?: boolean
    analytics?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predictionData"]>

  export type PredictionDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nextPeriod?: boolean
    ovulation?: boolean
    fertileWindow?: boolean
    analytics?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predictionData"]>

  export type PredictionDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nextPeriod?: boolean
    ovulation?: boolean
    fertileWindow?: boolean
    analytics?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predictionData"]>

  export type PredictionDataSelectScalar = {
    id?: boolean
    userId?: boolean
    nextPeriod?: boolean
    ovulation?: boolean
    fertileWindow?: boolean
    analytics?: boolean
    createdAt?: boolean
  }

  export type PredictionDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nextPeriod" | "ovulation" | "fertileWindow" | "analytics" | "createdAt", ExtArgs["result"]["predictionData"]>
  export type PredictionDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PredictionDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PredictionDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PredictionDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PredictionData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nextPeriod: Date | null
      ovulation: Date | null
      fertileWindow: Prisma.JsonValue | null
      analytics: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["predictionData"]>
    composites: {}
  }

  type PredictionDataGetPayload<S extends boolean | null | undefined | PredictionDataDefaultArgs> = $Result.GetResult<Prisma.$PredictionDataPayload, S>

  type PredictionDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionDataCountAggregateInputType | true
    }

  export interface PredictionDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PredictionData'], meta: { name: 'PredictionData' } }
    /**
     * Find zero or one PredictionData that matches the filter.
     * @param {PredictionDataFindUniqueArgs} args - Arguments to find a PredictionData
     * @example
     * // Get one PredictionData
     * const predictionData = await prisma.predictionData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionDataFindUniqueArgs>(args: SelectSubset<T, PredictionDataFindUniqueArgs<ExtArgs>>): Prisma__PredictionDataClient<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PredictionData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionDataFindUniqueOrThrowArgs} args - Arguments to find a PredictionData
     * @example
     * // Get one PredictionData
     * const predictionData = await prisma.predictionData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionDataClient<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredictionData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionDataFindFirstArgs} args - Arguments to find a PredictionData
     * @example
     * // Get one PredictionData
     * const predictionData = await prisma.predictionData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionDataFindFirstArgs>(args?: SelectSubset<T, PredictionDataFindFirstArgs<ExtArgs>>): Prisma__PredictionDataClient<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredictionData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionDataFindFirstOrThrowArgs} args - Arguments to find a PredictionData
     * @example
     * // Get one PredictionData
     * const predictionData = await prisma.predictionData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionDataClient<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PredictionData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PredictionData
     * const predictionData = await prisma.predictionData.findMany()
     * 
     * // Get first 10 PredictionData
     * const predictionData = await prisma.predictionData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionDataWithIdOnly = await prisma.predictionData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionDataFindManyArgs>(args?: SelectSubset<T, PredictionDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PredictionData.
     * @param {PredictionDataCreateArgs} args - Arguments to create a PredictionData.
     * @example
     * // Create one PredictionData
     * const PredictionData = await prisma.predictionData.create({
     *   data: {
     *     // ... data to create a PredictionData
     *   }
     * })
     * 
     */
    create<T extends PredictionDataCreateArgs>(args: SelectSubset<T, PredictionDataCreateArgs<ExtArgs>>): Prisma__PredictionDataClient<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PredictionData.
     * @param {PredictionDataCreateManyArgs} args - Arguments to create many PredictionData.
     * @example
     * // Create many PredictionData
     * const predictionData = await prisma.predictionData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionDataCreateManyArgs>(args?: SelectSubset<T, PredictionDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PredictionData and returns the data saved in the database.
     * @param {PredictionDataCreateManyAndReturnArgs} args - Arguments to create many PredictionData.
     * @example
     * // Create many PredictionData
     * const predictionData = await prisma.predictionData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PredictionData and only return the `id`
     * const predictionDataWithIdOnly = await prisma.predictionData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredictionDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PredictionDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PredictionData.
     * @param {PredictionDataDeleteArgs} args - Arguments to delete one PredictionData.
     * @example
     * // Delete one PredictionData
     * const PredictionData = await prisma.predictionData.delete({
     *   where: {
     *     // ... filter to delete one PredictionData
     *   }
     * })
     * 
     */
    delete<T extends PredictionDataDeleteArgs>(args: SelectSubset<T, PredictionDataDeleteArgs<ExtArgs>>): Prisma__PredictionDataClient<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PredictionData.
     * @param {PredictionDataUpdateArgs} args - Arguments to update one PredictionData.
     * @example
     * // Update one PredictionData
     * const predictionData = await prisma.predictionData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionDataUpdateArgs>(args: SelectSubset<T, PredictionDataUpdateArgs<ExtArgs>>): Prisma__PredictionDataClient<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PredictionData.
     * @param {PredictionDataDeleteManyArgs} args - Arguments to filter PredictionData to delete.
     * @example
     * // Delete a few PredictionData
     * const { count } = await prisma.predictionData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionDataDeleteManyArgs>(args?: SelectSubset<T, PredictionDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredictionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PredictionData
     * const predictionData = await prisma.predictionData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionDataUpdateManyArgs>(args: SelectSubset<T, PredictionDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredictionData and returns the data updated in the database.
     * @param {PredictionDataUpdateManyAndReturnArgs} args - Arguments to update many PredictionData.
     * @example
     * // Update many PredictionData
     * const predictionData = await prisma.predictionData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PredictionData and only return the `id`
     * const predictionDataWithIdOnly = await prisma.predictionData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PredictionDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PredictionDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PredictionData.
     * @param {PredictionDataUpsertArgs} args - Arguments to update or create a PredictionData.
     * @example
     * // Update or create a PredictionData
     * const predictionData = await prisma.predictionData.upsert({
     *   create: {
     *     // ... data to create a PredictionData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PredictionData we want to update
     *   }
     * })
     */
    upsert<T extends PredictionDataUpsertArgs>(args: SelectSubset<T, PredictionDataUpsertArgs<ExtArgs>>): Prisma__PredictionDataClient<$Result.GetResult<Prisma.$PredictionDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PredictionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionDataCountArgs} args - Arguments to filter PredictionData to count.
     * @example
     * // Count the number of PredictionData
     * const count = await prisma.predictionData.count({
     *   where: {
     *     // ... the filter for the PredictionData we want to count
     *   }
     * })
    **/
    count<T extends PredictionDataCountArgs>(
      args?: Subset<T, PredictionDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PredictionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PredictionDataAggregateArgs>(args: Subset<T, PredictionDataAggregateArgs>): Prisma.PrismaPromise<GetPredictionDataAggregateType<T>>

    /**
     * Group by PredictionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PredictionDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionDataGroupByArgs['orderBy'] }
        : { orderBy?: PredictionDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PredictionDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PredictionData model
   */
  readonly fields: PredictionDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PredictionData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PredictionData model
   */
  interface PredictionDataFieldRefs {
    readonly id: FieldRef<"PredictionData", 'String'>
    readonly userId: FieldRef<"PredictionData", 'String'>
    readonly nextPeriod: FieldRef<"PredictionData", 'DateTime'>
    readonly ovulation: FieldRef<"PredictionData", 'DateTime'>
    readonly fertileWindow: FieldRef<"PredictionData", 'Json'>
    readonly analytics: FieldRef<"PredictionData", 'Json'>
    readonly createdAt: FieldRef<"PredictionData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PredictionData findUnique
   */
  export type PredictionDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * Filter, which PredictionData to fetch.
     */
    where: PredictionDataWhereUniqueInput
  }

  /**
   * PredictionData findUniqueOrThrow
   */
  export type PredictionDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * Filter, which PredictionData to fetch.
     */
    where: PredictionDataWhereUniqueInput
  }

  /**
   * PredictionData findFirst
   */
  export type PredictionDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * Filter, which PredictionData to fetch.
     */
    where?: PredictionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionData to fetch.
     */
    orderBy?: PredictionDataOrderByWithRelationInput | PredictionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredictionData.
     */
    cursor?: PredictionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredictionData.
     */
    distinct?: PredictionDataScalarFieldEnum | PredictionDataScalarFieldEnum[]
  }

  /**
   * PredictionData findFirstOrThrow
   */
  export type PredictionDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * Filter, which PredictionData to fetch.
     */
    where?: PredictionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionData to fetch.
     */
    orderBy?: PredictionDataOrderByWithRelationInput | PredictionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredictionData.
     */
    cursor?: PredictionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredictionData.
     */
    distinct?: PredictionDataScalarFieldEnum | PredictionDataScalarFieldEnum[]
  }

  /**
   * PredictionData findMany
   */
  export type PredictionDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * Filter, which PredictionData to fetch.
     */
    where?: PredictionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredictionData to fetch.
     */
    orderBy?: PredictionDataOrderByWithRelationInput | PredictionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PredictionData.
     */
    cursor?: PredictionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredictionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredictionData.
     */
    skip?: number
    distinct?: PredictionDataScalarFieldEnum | PredictionDataScalarFieldEnum[]
  }

  /**
   * PredictionData create
   */
  export type PredictionDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * The data needed to create a PredictionData.
     */
    data: XOR<PredictionDataCreateInput, PredictionDataUncheckedCreateInput>
  }

  /**
   * PredictionData createMany
   */
  export type PredictionDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PredictionData.
     */
    data: PredictionDataCreateManyInput | PredictionDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PredictionData createManyAndReturn
   */
  export type PredictionDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * The data used to create many PredictionData.
     */
    data: PredictionDataCreateManyInput | PredictionDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredictionData update
   */
  export type PredictionDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * The data needed to update a PredictionData.
     */
    data: XOR<PredictionDataUpdateInput, PredictionDataUncheckedUpdateInput>
    /**
     * Choose, which PredictionData to update.
     */
    where: PredictionDataWhereUniqueInput
  }

  /**
   * PredictionData updateMany
   */
  export type PredictionDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PredictionData.
     */
    data: XOR<PredictionDataUpdateManyMutationInput, PredictionDataUncheckedUpdateManyInput>
    /**
     * Filter which PredictionData to update
     */
    where?: PredictionDataWhereInput
    /**
     * Limit how many PredictionData to update.
     */
    limit?: number
  }

  /**
   * PredictionData updateManyAndReturn
   */
  export type PredictionDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * The data used to update PredictionData.
     */
    data: XOR<PredictionDataUpdateManyMutationInput, PredictionDataUncheckedUpdateManyInput>
    /**
     * Filter which PredictionData to update
     */
    where?: PredictionDataWhereInput
    /**
     * Limit how many PredictionData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredictionData upsert
   */
  export type PredictionDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * The filter to search for the PredictionData to update in case it exists.
     */
    where: PredictionDataWhereUniqueInput
    /**
     * In case the PredictionData found by the `where` argument doesn't exist, create a new PredictionData with this data.
     */
    create: XOR<PredictionDataCreateInput, PredictionDataUncheckedCreateInput>
    /**
     * In case the PredictionData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionDataUpdateInput, PredictionDataUncheckedUpdateInput>
  }

  /**
   * PredictionData delete
   */
  export type PredictionDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
    /**
     * Filter which PredictionData to delete.
     */
    where: PredictionDataWhereUniqueInput
  }

  /**
   * PredictionData deleteMany
   */
  export type PredictionDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredictionData to delete
     */
    where?: PredictionDataWhereInput
    /**
     * Limit how many PredictionData to delete.
     */
    limit?: number
  }

  /**
   * PredictionData without action
   */
  export type PredictionDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionData
     */
    select?: PredictionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredictionData
     */
    omit?: PredictionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    timezone: 'timezone',
    averageCycleLength: 'averageCycleLength',
    periodDuration: 'periodDuration',
    lutealPhaseDays: 'lutealPhaseDays',
    lastPeriodStart: 'lastPeriodStart',
    menopauseStatus: 'menopauseStatus',
    wellnessGoals: 'wellnessGoals',
    dailyCalorieGoal: 'dailyCalorieGoal',
    activityLevel: 'activityLevel',
    height: 'height',
    weight: 'weight',
    targetWeight: 'targetWeight',
    unitsSystem: 'unitsSystem',
    theme: 'theme',
    notifications: 'notifications',
    language: 'language',
    onboardingCompleted: 'onboardingCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastSyncedAt: 'lastSyncedAt',
    appVersion: 'appVersion'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const CycleEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    isPeriod: 'isPeriod',
    flowIntensity: 'flowIntensity',
    symptoms: 'symptoms',
    notes: 'notes'
  };

  export type CycleEntryScalarFieldEnum = (typeof CycleEntryScalarFieldEnum)[keyof typeof CycleEntryScalarFieldEnum]


  export const PredictionDataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nextPeriod: 'nextPeriod',
    ovulation: 'ovulation',
    fertileWindow: 'fertileWindow',
    analytics: 'analytics',
    createdAt: 'createdAt'
  };

  export type PredictionDataScalarFieldEnum = (typeof PredictionDataScalarFieldEnum)[keyof typeof PredictionDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    cycleEntries?: CycleEntryListRelationFilter
    predictions?: PredictionDataListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    cycleEntries?: CycleEntryOrderByRelationAggregateInput
    predictions?: PredictionDataOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    cycleEntries?: CycleEntryListRelationFilter
    predictions?: PredictionDataListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    fullName?: StringNullableFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableFilter<"UserProfile"> | string | null
    timezone?: StringNullableFilter<"UserProfile"> | string | null
    averageCycleLength?: IntFilter<"UserProfile"> | number
    periodDuration?: IntFilter<"UserProfile"> | number
    lutealPhaseDays?: IntFilter<"UserProfile"> | number
    lastPeriodStart?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    menopauseStatus?: StringNullableFilter<"UserProfile"> | string | null
    wellnessGoals?: StringNullableListFilter<"UserProfile">
    dailyCalorieGoal?: IntNullableFilter<"UserProfile"> | number | null
    activityLevel?: StringNullableFilter<"UserProfile"> | string | null
    height?: FloatNullableFilter<"UserProfile"> | number | null
    weight?: FloatNullableFilter<"UserProfile"> | number | null
    targetWeight?: FloatNullableFilter<"UserProfile"> | number | null
    unitsSystem?: StringNullableFilter<"UserProfile"> | string | null
    theme?: StringNullableFilter<"UserProfile"> | string | null
    notifications?: JsonNullableFilter<"UserProfile">
    language?: StringNullableFilter<"UserProfile"> | string | null
    onboardingCompleted?: BoolFilter<"UserProfile"> | boolean
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    lastSyncedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    appVersion?: StringNullableFilter<"UserProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    averageCycleLength?: SortOrder
    periodDuration?: SortOrder
    lutealPhaseDays?: SortOrder
    lastPeriodStart?: SortOrderInput | SortOrder
    menopauseStatus?: SortOrderInput | SortOrder
    wellnessGoals?: SortOrder
    dailyCalorieGoal?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    targetWeight?: SortOrderInput | SortOrder
    unitsSystem?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    notifications?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    appVersion?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    fullName?: StringNullableFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableFilter<"UserProfile"> | string | null
    timezone?: StringNullableFilter<"UserProfile"> | string | null
    averageCycleLength?: IntFilter<"UserProfile"> | number
    periodDuration?: IntFilter<"UserProfile"> | number
    lutealPhaseDays?: IntFilter<"UserProfile"> | number
    lastPeriodStart?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    menopauseStatus?: StringNullableFilter<"UserProfile"> | string | null
    wellnessGoals?: StringNullableListFilter<"UserProfile">
    dailyCalorieGoal?: IntNullableFilter<"UserProfile"> | number | null
    activityLevel?: StringNullableFilter<"UserProfile"> | string | null
    height?: FloatNullableFilter<"UserProfile"> | number | null
    weight?: FloatNullableFilter<"UserProfile"> | number | null
    targetWeight?: FloatNullableFilter<"UserProfile"> | number | null
    unitsSystem?: StringNullableFilter<"UserProfile"> | string | null
    theme?: StringNullableFilter<"UserProfile"> | string | null
    notifications?: JsonNullableFilter<"UserProfile">
    language?: StringNullableFilter<"UserProfile"> | string | null
    onboardingCompleted?: BoolFilter<"UserProfile"> | boolean
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    lastSyncedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    appVersion?: StringNullableFilter<"UserProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    averageCycleLength?: SortOrder
    periodDuration?: SortOrder
    lutealPhaseDays?: SortOrder
    lastPeriodStart?: SortOrderInput | SortOrder
    menopauseStatus?: SortOrderInput | SortOrder
    wellnessGoals?: SortOrder
    dailyCalorieGoal?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    targetWeight?: SortOrderInput | SortOrder
    unitsSystem?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    notifications?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    appVersion?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    fullName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    averageCycleLength?: IntWithAggregatesFilter<"UserProfile"> | number
    periodDuration?: IntWithAggregatesFilter<"UserProfile"> | number
    lutealPhaseDays?: IntWithAggregatesFilter<"UserProfile"> | number
    lastPeriodStart?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    menopauseStatus?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    wellnessGoals?: StringNullableListFilter<"UserProfile">
    dailyCalorieGoal?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    activityLevel?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    height?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    targetWeight?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    unitsSystem?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    theme?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    notifications?: JsonNullableWithAggregatesFilter<"UserProfile">
    language?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    onboardingCompleted?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    lastSyncedAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    appVersion?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
  }

  export type CycleEntryWhereInput = {
    AND?: CycleEntryWhereInput | CycleEntryWhereInput[]
    OR?: CycleEntryWhereInput[]
    NOT?: CycleEntryWhereInput | CycleEntryWhereInput[]
    id?: StringFilter<"CycleEntry"> | string
    userId?: StringFilter<"CycleEntry"> | string
    date?: DateTimeFilter<"CycleEntry"> | Date | string
    isPeriod?: BoolFilter<"CycleEntry"> | boolean
    flowIntensity?: StringNullableFilter<"CycleEntry"> | string | null
    symptoms?: JsonNullableFilter<"CycleEntry">
    notes?: StringNullableFilter<"CycleEntry"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CycleEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    isPeriod?: SortOrder
    flowIntensity?: SortOrderInput | SortOrder
    symptoms?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CycleEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CycleEntryWhereInput | CycleEntryWhereInput[]
    OR?: CycleEntryWhereInput[]
    NOT?: CycleEntryWhereInput | CycleEntryWhereInput[]
    userId?: StringFilter<"CycleEntry"> | string
    date?: DateTimeFilter<"CycleEntry"> | Date | string
    isPeriod?: BoolFilter<"CycleEntry"> | boolean
    flowIntensity?: StringNullableFilter<"CycleEntry"> | string | null
    symptoms?: JsonNullableFilter<"CycleEntry">
    notes?: StringNullableFilter<"CycleEntry"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CycleEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    isPeriod?: SortOrder
    flowIntensity?: SortOrderInput | SortOrder
    symptoms?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: CycleEntryCountOrderByAggregateInput
    _max?: CycleEntryMaxOrderByAggregateInput
    _min?: CycleEntryMinOrderByAggregateInput
  }

  export type CycleEntryScalarWhereWithAggregatesInput = {
    AND?: CycleEntryScalarWhereWithAggregatesInput | CycleEntryScalarWhereWithAggregatesInput[]
    OR?: CycleEntryScalarWhereWithAggregatesInput[]
    NOT?: CycleEntryScalarWhereWithAggregatesInput | CycleEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CycleEntry"> | string
    userId?: StringWithAggregatesFilter<"CycleEntry"> | string
    date?: DateTimeWithAggregatesFilter<"CycleEntry"> | Date | string
    isPeriod?: BoolWithAggregatesFilter<"CycleEntry"> | boolean
    flowIntensity?: StringNullableWithAggregatesFilter<"CycleEntry"> | string | null
    symptoms?: JsonNullableWithAggregatesFilter<"CycleEntry">
    notes?: StringNullableWithAggregatesFilter<"CycleEntry"> | string | null
  }

  export type PredictionDataWhereInput = {
    AND?: PredictionDataWhereInput | PredictionDataWhereInput[]
    OR?: PredictionDataWhereInput[]
    NOT?: PredictionDataWhereInput | PredictionDataWhereInput[]
    id?: StringFilter<"PredictionData"> | string
    userId?: StringFilter<"PredictionData"> | string
    nextPeriod?: DateTimeNullableFilter<"PredictionData"> | Date | string | null
    ovulation?: DateTimeNullableFilter<"PredictionData"> | Date | string | null
    fertileWindow?: JsonNullableFilter<"PredictionData">
    analytics?: JsonNullableFilter<"PredictionData">
    createdAt?: DateTimeFilter<"PredictionData"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PredictionDataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nextPeriod?: SortOrderInput | SortOrder
    ovulation?: SortOrderInput | SortOrder
    fertileWindow?: SortOrderInput | SortOrder
    analytics?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PredictionDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PredictionDataWhereInput | PredictionDataWhereInput[]
    OR?: PredictionDataWhereInput[]
    NOT?: PredictionDataWhereInput | PredictionDataWhereInput[]
    userId?: StringFilter<"PredictionData"> | string
    nextPeriod?: DateTimeNullableFilter<"PredictionData"> | Date | string | null
    ovulation?: DateTimeNullableFilter<"PredictionData"> | Date | string | null
    fertileWindow?: JsonNullableFilter<"PredictionData">
    analytics?: JsonNullableFilter<"PredictionData">
    createdAt?: DateTimeFilter<"PredictionData"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PredictionDataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nextPeriod?: SortOrderInput | SortOrder
    ovulation?: SortOrderInput | SortOrder
    fertileWindow?: SortOrderInput | SortOrder
    analytics?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PredictionDataCountOrderByAggregateInput
    _max?: PredictionDataMaxOrderByAggregateInput
    _min?: PredictionDataMinOrderByAggregateInput
  }

  export type PredictionDataScalarWhereWithAggregatesInput = {
    AND?: PredictionDataScalarWhereWithAggregatesInput | PredictionDataScalarWhereWithAggregatesInput[]
    OR?: PredictionDataScalarWhereWithAggregatesInput[]
    NOT?: PredictionDataScalarWhereWithAggregatesInput | PredictionDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PredictionData"> | string
    userId?: StringWithAggregatesFilter<"PredictionData"> | string
    nextPeriod?: DateTimeNullableWithAggregatesFilter<"PredictionData"> | Date | string | null
    ovulation?: DateTimeNullableWithAggregatesFilter<"PredictionData"> | Date | string | null
    fertileWindow?: JsonNullableWithAggregatesFilter<"PredictionData">
    analytics?: JsonNullableWithAggregatesFilter<"PredictionData">
    createdAt?: DateTimeWithAggregatesFilter<"PredictionData"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    profile?: UserProfileCreateNestedOneWithoutUserInput
    cycleEntries?: CycleEntryCreateNestedManyWithoutUserInput
    predictions?: PredictionDataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    cycleEntries?: CycleEntryUncheckedCreateNestedManyWithoutUserInput
    predictions?: PredictionDataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    cycleEntries?: CycleEntryUpdateManyWithoutUserNestedInput
    predictions?: PredictionDataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    cycleEntries?: CycleEntryUncheckedUpdateManyWithoutUserNestedInput
    predictions?: PredictionDataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserProfileCreateInput = {
    id?: string
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    timezone?: string | null
    averageCycleLength?: number
    periodDuration?: number
    lutealPhaseDays?: number
    lastPeriodStart?: Date | string | null
    menopauseStatus?: string | null
    wellnessGoals?: UserProfileCreatewellnessGoalsInput | string[]
    dailyCalorieGoal?: number | null
    activityLevel?: string | null
    height?: number | null
    weight?: number | null
    targetWeight?: number | null
    unitsSystem?: string | null
    theme?: string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: string | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncedAt?: Date | string | null
    appVersion?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    timezone?: string | null
    averageCycleLength?: number
    periodDuration?: number
    lutealPhaseDays?: number
    lastPeriodStart?: Date | string | null
    menopauseStatus?: string | null
    wellnessGoals?: UserProfileCreatewellnessGoalsInput | string[]
    dailyCalorieGoal?: number | null
    activityLevel?: string | null
    height?: number | null
    weight?: number | null
    targetWeight?: number | null
    unitsSystem?: string | null
    theme?: string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: string | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncedAt?: Date | string | null
    appVersion?: string | null
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    averageCycleLength?: IntFieldUpdateOperationsInput | number
    periodDuration?: IntFieldUpdateOperationsInput | number
    lutealPhaseDays?: IntFieldUpdateOperationsInput | number
    lastPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menopauseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    wellnessGoals?: UserProfileUpdatewellnessGoalsInput | string[]
    dailyCalorieGoal?: NullableIntFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unitsSystem?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    averageCycleLength?: IntFieldUpdateOperationsInput | number
    periodDuration?: IntFieldUpdateOperationsInput | number
    lutealPhaseDays?: IntFieldUpdateOperationsInput | number
    lastPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menopauseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    wellnessGoals?: UserProfileUpdatewellnessGoalsInput | string[]
    dailyCalorieGoal?: NullableIntFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unitsSystem?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    timezone?: string | null
    averageCycleLength?: number
    periodDuration?: number
    lutealPhaseDays?: number
    lastPeriodStart?: Date | string | null
    menopauseStatus?: string | null
    wellnessGoals?: UserProfileCreatewellnessGoalsInput | string[]
    dailyCalorieGoal?: number | null
    activityLevel?: string | null
    height?: number | null
    weight?: number | null
    targetWeight?: number | null
    unitsSystem?: string | null
    theme?: string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: string | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncedAt?: Date | string | null
    appVersion?: string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    averageCycleLength?: IntFieldUpdateOperationsInput | number
    periodDuration?: IntFieldUpdateOperationsInput | number
    lutealPhaseDays?: IntFieldUpdateOperationsInput | number
    lastPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menopauseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    wellnessGoals?: UserProfileUpdatewellnessGoalsInput | string[]
    dailyCalorieGoal?: NullableIntFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unitsSystem?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    averageCycleLength?: IntFieldUpdateOperationsInput | number
    periodDuration?: IntFieldUpdateOperationsInput | number
    lutealPhaseDays?: IntFieldUpdateOperationsInput | number
    lastPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menopauseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    wellnessGoals?: UserProfileUpdatewellnessGoalsInput | string[]
    dailyCalorieGoal?: NullableIntFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unitsSystem?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CycleEntryCreateInput = {
    id?: string
    date: Date | string
    isPeriod: boolean
    flowIntensity?: string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    user: UserCreateNestedOneWithoutCycleEntriesInput
  }

  export type CycleEntryUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    isPeriod: boolean
    flowIntensity?: string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type CycleEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPeriod?: BoolFieldUpdateOperationsInput | boolean
    flowIntensity?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCycleEntriesNestedInput
  }

  export type CycleEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPeriod?: BoolFieldUpdateOperationsInput | boolean
    flowIntensity?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CycleEntryCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    isPeriod: boolean
    flowIntensity?: string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type CycleEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPeriod?: BoolFieldUpdateOperationsInput | boolean
    flowIntensity?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CycleEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPeriod?: BoolFieldUpdateOperationsInput | boolean
    flowIntensity?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PredictionDataCreateInput = {
    id?: string
    nextPeriod?: Date | string | null
    ovulation?: Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionDataUncheckedCreateInput = {
    id?: string
    userId: string
    nextPeriod?: Date | string | null
    ovulation?: Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PredictionDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextPeriod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ovulation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPredictionsNestedInput
  }

  export type PredictionDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextPeriod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ovulation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionDataCreateManyInput = {
    id?: string
    userId: string
    nextPeriod?: Date | string | null
    ovulation?: Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PredictionDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextPeriod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ovulation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextPeriod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ovulation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type CycleEntryListRelationFilter = {
    every?: CycleEntryWhereInput
    some?: CycleEntryWhereInput
    none?: CycleEntryWhereInput
  }

  export type PredictionDataListRelationFilter = {
    every?: PredictionDataWhereInput
    some?: PredictionDataWhereInput
    none?: PredictionDataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CycleEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PredictionDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    timezone?: SortOrder
    averageCycleLength?: SortOrder
    periodDuration?: SortOrder
    lutealPhaseDays?: SortOrder
    lastPeriodStart?: SortOrder
    menopauseStatus?: SortOrder
    wellnessGoals?: SortOrder
    dailyCalorieGoal?: SortOrder
    activityLevel?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    targetWeight?: SortOrder
    unitsSystem?: SortOrder
    theme?: SortOrder
    notifications?: SortOrder
    language?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncedAt?: SortOrder
    appVersion?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    averageCycleLength?: SortOrder
    periodDuration?: SortOrder
    lutealPhaseDays?: SortOrder
    dailyCalorieGoal?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    targetWeight?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    timezone?: SortOrder
    averageCycleLength?: SortOrder
    periodDuration?: SortOrder
    lutealPhaseDays?: SortOrder
    lastPeriodStart?: SortOrder
    menopauseStatus?: SortOrder
    dailyCalorieGoal?: SortOrder
    activityLevel?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    targetWeight?: SortOrder
    unitsSystem?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncedAt?: SortOrder
    appVersion?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    timezone?: SortOrder
    averageCycleLength?: SortOrder
    periodDuration?: SortOrder
    lutealPhaseDays?: SortOrder
    lastPeriodStart?: SortOrder
    menopauseStatus?: SortOrder
    dailyCalorieGoal?: SortOrder
    activityLevel?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    targetWeight?: SortOrder
    unitsSystem?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSyncedAt?: SortOrder
    appVersion?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    averageCycleLength?: SortOrder
    periodDuration?: SortOrder
    lutealPhaseDays?: SortOrder
    dailyCalorieGoal?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    targetWeight?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CycleEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    isPeriod?: SortOrder
    flowIntensity?: SortOrder
    symptoms?: SortOrder
    notes?: SortOrder
  }

  export type CycleEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    isPeriod?: SortOrder
    flowIntensity?: SortOrder
    notes?: SortOrder
  }

  export type CycleEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    isPeriod?: SortOrder
    flowIntensity?: SortOrder
    notes?: SortOrder
  }

  export type PredictionDataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nextPeriod?: SortOrder
    ovulation?: SortOrder
    fertileWindow?: SortOrder
    analytics?: SortOrder
    createdAt?: SortOrder
  }

  export type PredictionDataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nextPeriod?: SortOrder
    ovulation?: SortOrder
    createdAt?: SortOrder
  }

  export type PredictionDataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nextPeriod?: SortOrder
    ovulation?: SortOrder
    createdAt?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type CycleEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<CycleEntryCreateWithoutUserInput, CycleEntryUncheckedCreateWithoutUserInput> | CycleEntryCreateWithoutUserInput[] | CycleEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CycleEntryCreateOrConnectWithoutUserInput | CycleEntryCreateOrConnectWithoutUserInput[]
    createMany?: CycleEntryCreateManyUserInputEnvelope
    connect?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
  }

  export type PredictionDataCreateNestedManyWithoutUserInput = {
    create?: XOR<PredictionDataCreateWithoutUserInput, PredictionDataUncheckedCreateWithoutUserInput> | PredictionDataCreateWithoutUserInput[] | PredictionDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PredictionDataCreateOrConnectWithoutUserInput | PredictionDataCreateOrConnectWithoutUserInput[]
    createMany?: PredictionDataCreateManyUserInputEnvelope
    connect?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type CycleEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CycleEntryCreateWithoutUserInput, CycleEntryUncheckedCreateWithoutUserInput> | CycleEntryCreateWithoutUserInput[] | CycleEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CycleEntryCreateOrConnectWithoutUserInput | CycleEntryCreateOrConnectWithoutUserInput[]
    createMany?: CycleEntryCreateManyUserInputEnvelope
    connect?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
  }

  export type PredictionDataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PredictionDataCreateWithoutUserInput, PredictionDataUncheckedCreateWithoutUserInput> | PredictionDataCreateWithoutUserInput[] | PredictionDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PredictionDataCreateOrConnectWithoutUserInput | PredictionDataCreateOrConnectWithoutUserInput[]
    createMany?: PredictionDataCreateManyUserInputEnvelope
    connect?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type CycleEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CycleEntryCreateWithoutUserInput, CycleEntryUncheckedCreateWithoutUserInput> | CycleEntryCreateWithoutUserInput[] | CycleEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CycleEntryCreateOrConnectWithoutUserInput | CycleEntryCreateOrConnectWithoutUserInput[]
    upsert?: CycleEntryUpsertWithWhereUniqueWithoutUserInput | CycleEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CycleEntryCreateManyUserInputEnvelope
    set?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
    disconnect?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
    delete?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
    connect?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
    update?: CycleEntryUpdateWithWhereUniqueWithoutUserInput | CycleEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CycleEntryUpdateManyWithWhereWithoutUserInput | CycleEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CycleEntryScalarWhereInput | CycleEntryScalarWhereInput[]
  }

  export type PredictionDataUpdateManyWithoutUserNestedInput = {
    create?: XOR<PredictionDataCreateWithoutUserInput, PredictionDataUncheckedCreateWithoutUserInput> | PredictionDataCreateWithoutUserInput[] | PredictionDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PredictionDataCreateOrConnectWithoutUserInput | PredictionDataCreateOrConnectWithoutUserInput[]
    upsert?: PredictionDataUpsertWithWhereUniqueWithoutUserInput | PredictionDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PredictionDataCreateManyUserInputEnvelope
    set?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
    disconnect?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
    delete?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
    connect?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
    update?: PredictionDataUpdateWithWhereUniqueWithoutUserInput | PredictionDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PredictionDataUpdateManyWithWhereWithoutUserInput | PredictionDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PredictionDataScalarWhereInput | PredictionDataScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type CycleEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CycleEntryCreateWithoutUserInput, CycleEntryUncheckedCreateWithoutUserInput> | CycleEntryCreateWithoutUserInput[] | CycleEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CycleEntryCreateOrConnectWithoutUserInput | CycleEntryCreateOrConnectWithoutUserInput[]
    upsert?: CycleEntryUpsertWithWhereUniqueWithoutUserInput | CycleEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CycleEntryCreateManyUserInputEnvelope
    set?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
    disconnect?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
    delete?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
    connect?: CycleEntryWhereUniqueInput | CycleEntryWhereUniqueInput[]
    update?: CycleEntryUpdateWithWhereUniqueWithoutUserInput | CycleEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CycleEntryUpdateManyWithWhereWithoutUserInput | CycleEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CycleEntryScalarWhereInput | CycleEntryScalarWhereInput[]
  }

  export type PredictionDataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PredictionDataCreateWithoutUserInput, PredictionDataUncheckedCreateWithoutUserInput> | PredictionDataCreateWithoutUserInput[] | PredictionDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PredictionDataCreateOrConnectWithoutUserInput | PredictionDataCreateOrConnectWithoutUserInput[]
    upsert?: PredictionDataUpsertWithWhereUniqueWithoutUserInput | PredictionDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PredictionDataCreateManyUserInputEnvelope
    set?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
    disconnect?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
    delete?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
    connect?: PredictionDataWhereUniqueInput | PredictionDataWhereUniqueInput[]
    update?: PredictionDataUpdateWithWhereUniqueWithoutUserInput | PredictionDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PredictionDataUpdateManyWithWhereWithoutUserInput | PredictionDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PredictionDataScalarWhereInput | PredictionDataScalarWhereInput[]
  }

  export type UserProfileCreatewellnessGoalsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProfileUpdatewellnessGoalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutCycleEntriesInput = {
    create?: XOR<UserCreateWithoutCycleEntriesInput, UserUncheckedCreateWithoutCycleEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCycleEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCycleEntriesNestedInput = {
    create?: XOR<UserCreateWithoutCycleEntriesInput, UserUncheckedCreateWithoutCycleEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCycleEntriesInput
    upsert?: UserUpsertWithoutCycleEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCycleEntriesInput, UserUpdateWithoutCycleEntriesInput>, UserUncheckedUpdateWithoutCycleEntriesInput>
  }

  export type UserCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<UserCreateWithoutPredictionsInput, UserUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPredictionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPredictionsNestedInput = {
    create?: XOR<UserCreateWithoutPredictionsInput, UserUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPredictionsInput
    upsert?: UserUpsertWithoutPredictionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPredictionsInput, UserUpdateWithoutPredictionsInput>, UserUncheckedUpdateWithoutPredictionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    timezone?: string | null
    averageCycleLength?: number
    periodDuration?: number
    lutealPhaseDays?: number
    lastPeriodStart?: Date | string | null
    menopauseStatus?: string | null
    wellnessGoals?: UserProfileCreatewellnessGoalsInput | string[]
    dailyCalorieGoal?: number | null
    activityLevel?: string | null
    height?: number | null
    weight?: number | null
    targetWeight?: number | null
    unitsSystem?: string | null
    theme?: string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: string | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncedAt?: Date | string | null
    appVersion?: string | null
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    timezone?: string | null
    averageCycleLength?: number
    periodDuration?: number
    lutealPhaseDays?: number
    lastPeriodStart?: Date | string | null
    menopauseStatus?: string | null
    wellnessGoals?: UserProfileCreatewellnessGoalsInput | string[]
    dailyCalorieGoal?: number | null
    activityLevel?: string | null
    height?: number | null
    weight?: number | null
    targetWeight?: number | null
    unitsSystem?: string | null
    theme?: string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: string | null
    onboardingCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSyncedAt?: Date | string | null
    appVersion?: string | null
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type CycleEntryCreateWithoutUserInput = {
    id?: string
    date: Date | string
    isPeriod: boolean
    flowIntensity?: string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type CycleEntryUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    isPeriod: boolean
    flowIntensity?: string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type CycleEntryCreateOrConnectWithoutUserInput = {
    where: CycleEntryWhereUniqueInput
    create: XOR<CycleEntryCreateWithoutUserInput, CycleEntryUncheckedCreateWithoutUserInput>
  }

  export type CycleEntryCreateManyUserInputEnvelope = {
    data: CycleEntryCreateManyUserInput | CycleEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PredictionDataCreateWithoutUserInput = {
    id?: string
    nextPeriod?: Date | string | null
    ovulation?: Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PredictionDataUncheckedCreateWithoutUserInput = {
    id?: string
    nextPeriod?: Date | string | null
    ovulation?: Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PredictionDataCreateOrConnectWithoutUserInput = {
    where: PredictionDataWhereUniqueInput
    create: XOR<PredictionDataCreateWithoutUserInput, PredictionDataUncheckedCreateWithoutUserInput>
  }

  export type PredictionDataCreateManyUserInputEnvelope = {
    data: PredictionDataCreateManyUserInput | PredictionDataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    averageCycleLength?: IntFieldUpdateOperationsInput | number
    periodDuration?: IntFieldUpdateOperationsInput | number
    lutealPhaseDays?: IntFieldUpdateOperationsInput | number
    lastPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menopauseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    wellnessGoals?: UserProfileUpdatewellnessGoalsInput | string[]
    dailyCalorieGoal?: NullableIntFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unitsSystem?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    averageCycleLength?: IntFieldUpdateOperationsInput | number
    periodDuration?: IntFieldUpdateOperationsInput | number
    lutealPhaseDays?: IntFieldUpdateOperationsInput | number
    lastPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menopauseStatus?: NullableStringFieldUpdateOperationsInput | string | null
    wellnessGoals?: UserProfileUpdatewellnessGoalsInput | string[]
    dailyCalorieGoal?: NullableIntFieldUpdateOperationsInput | number | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    unitsSystem?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NullableJsonNullValueInput | InputJsonValue
    language?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CycleEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: CycleEntryWhereUniqueInput
    update: XOR<CycleEntryUpdateWithoutUserInput, CycleEntryUncheckedUpdateWithoutUserInput>
    create: XOR<CycleEntryCreateWithoutUserInput, CycleEntryUncheckedCreateWithoutUserInput>
  }

  export type CycleEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: CycleEntryWhereUniqueInput
    data: XOR<CycleEntryUpdateWithoutUserInput, CycleEntryUncheckedUpdateWithoutUserInput>
  }

  export type CycleEntryUpdateManyWithWhereWithoutUserInput = {
    where: CycleEntryScalarWhereInput
    data: XOR<CycleEntryUpdateManyMutationInput, CycleEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type CycleEntryScalarWhereInput = {
    AND?: CycleEntryScalarWhereInput | CycleEntryScalarWhereInput[]
    OR?: CycleEntryScalarWhereInput[]
    NOT?: CycleEntryScalarWhereInput | CycleEntryScalarWhereInput[]
    id?: StringFilter<"CycleEntry"> | string
    userId?: StringFilter<"CycleEntry"> | string
    date?: DateTimeFilter<"CycleEntry"> | Date | string
    isPeriod?: BoolFilter<"CycleEntry"> | boolean
    flowIntensity?: StringNullableFilter<"CycleEntry"> | string | null
    symptoms?: JsonNullableFilter<"CycleEntry">
    notes?: StringNullableFilter<"CycleEntry"> | string | null
  }

  export type PredictionDataUpsertWithWhereUniqueWithoutUserInput = {
    where: PredictionDataWhereUniqueInput
    update: XOR<PredictionDataUpdateWithoutUserInput, PredictionDataUncheckedUpdateWithoutUserInput>
    create: XOR<PredictionDataCreateWithoutUserInput, PredictionDataUncheckedCreateWithoutUserInput>
  }

  export type PredictionDataUpdateWithWhereUniqueWithoutUserInput = {
    where: PredictionDataWhereUniqueInput
    data: XOR<PredictionDataUpdateWithoutUserInput, PredictionDataUncheckedUpdateWithoutUserInput>
  }

  export type PredictionDataUpdateManyWithWhereWithoutUserInput = {
    where: PredictionDataScalarWhereInput
    data: XOR<PredictionDataUpdateManyMutationInput, PredictionDataUncheckedUpdateManyWithoutUserInput>
  }

  export type PredictionDataScalarWhereInput = {
    AND?: PredictionDataScalarWhereInput | PredictionDataScalarWhereInput[]
    OR?: PredictionDataScalarWhereInput[]
    NOT?: PredictionDataScalarWhereInput | PredictionDataScalarWhereInput[]
    id?: StringFilter<"PredictionData"> | string
    userId?: StringFilter<"PredictionData"> | string
    nextPeriod?: DateTimeNullableFilter<"PredictionData"> | Date | string | null
    ovulation?: DateTimeNullableFilter<"PredictionData"> | Date | string | null
    fertileWindow?: JsonNullableFilter<"PredictionData">
    analytics?: JsonNullableFilter<"PredictionData">
    createdAt?: DateTimeFilter<"PredictionData"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    cycleEntries?: CycleEntryCreateNestedManyWithoutUserInput
    predictions?: PredictionDataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    cycleEntries?: CycleEntryUncheckedCreateNestedManyWithoutUserInput
    predictions?: PredictionDataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cycleEntries?: CycleEntryUpdateManyWithoutUserNestedInput
    predictions?: PredictionDataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cycleEntries?: CycleEntryUncheckedUpdateManyWithoutUserNestedInput
    predictions?: PredictionDataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCycleEntriesInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    profile?: UserProfileCreateNestedOneWithoutUserInput
    predictions?: PredictionDataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCycleEntriesInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    predictions?: PredictionDataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCycleEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCycleEntriesInput, UserUncheckedCreateWithoutCycleEntriesInput>
  }

  export type UserUpsertWithoutCycleEntriesInput = {
    update: XOR<UserUpdateWithoutCycleEntriesInput, UserUncheckedUpdateWithoutCycleEntriesInput>
    create: XOR<UserCreateWithoutCycleEntriesInput, UserUncheckedCreateWithoutCycleEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCycleEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCycleEntriesInput, UserUncheckedUpdateWithoutCycleEntriesInput>
  }

  export type UserUpdateWithoutCycleEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    predictions?: PredictionDataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCycleEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    predictions?: PredictionDataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPredictionsInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    profile?: UserProfileCreateNestedOneWithoutUserInput
    cycleEntries?: CycleEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPredictionsInput = {
    id?: string
    email?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    cycleEntries?: CycleEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPredictionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPredictionsInput, UserUncheckedCreateWithoutPredictionsInput>
  }

  export type UserUpsertWithoutPredictionsInput = {
    update: XOR<UserUpdateWithoutPredictionsInput, UserUncheckedUpdateWithoutPredictionsInput>
    create: XOR<UserCreateWithoutPredictionsInput, UserUncheckedCreateWithoutPredictionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPredictionsInput, UserUncheckedUpdateWithoutPredictionsInput>
  }

  export type UserUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    cycleEntries?: CycleEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    cycleEntries?: CycleEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CycleEntryCreateManyUserInput = {
    id?: string
    date: Date | string
    isPeriod: boolean
    flowIntensity?: string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
  }

  export type PredictionDataCreateManyUserInput = {
    id?: string
    nextPeriod?: Date | string | null
    ovulation?: Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CycleEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPeriod?: BoolFieldUpdateOperationsInput | boolean
    flowIntensity?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CycleEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPeriod?: BoolFieldUpdateOperationsInput | boolean
    flowIntensity?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CycleEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPeriod?: BoolFieldUpdateOperationsInput | boolean
    flowIntensity?: NullableStringFieldUpdateOperationsInput | string | null
    symptoms?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PredictionDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextPeriod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ovulation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextPeriod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ovulation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionDataUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextPeriod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ovulation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fertileWindow?: NullableJsonNullValueInput | InputJsonValue
    analytics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}