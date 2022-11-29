
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Planet
 * 
 */
export type Planet = {
  id: string
  name: string
  distance_from_eleven: number
}

/**
 * Model Astronaut
 * 
 */
export type Astronaut = {
  id: string
  firstname: string
  lastname: string
  planet_id: string
  profile_pic: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Planets
 * const planets = await prisma.planet.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Planets
   * const planets = await prisma.planet.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.planet`: Exposes CRUD operations for the **Planet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planets
    * const planets = await prisma.planet.findMany()
    * ```
    */
  get planet(): Prisma.PlanetDelegate<GlobalReject>;

  /**
   * `prisma.astronaut`: Exposes CRUD operations for the **Astronaut** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Astronauts
    * const astronauts = await prisma.astronaut.findMany()
    * ```
    */
  get astronaut(): Prisma.AstronautDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Planet: 'Planet',
    Astronaut: 'Astronaut'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlanetCountOutputType
   */


  export type PlanetCountOutputType = {
    astronauts: number
  }

  export type PlanetCountOutputTypeSelect = {
    astronauts?: boolean
  }

  export type PlanetCountOutputTypeGetPayload<S extends boolean | null | undefined | PlanetCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PlanetCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PlanetCountOutputTypeArgs)
    ? PlanetCountOutputType 
    : S extends { select: any } & (PlanetCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PlanetCountOutputType ? PlanetCountOutputType[P] : never
  } 
      : PlanetCountOutputType




  // Custom InputTypes

  /**
   * PlanetCountOutputType without action
   */
  export type PlanetCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PlanetCountOutputType
     * 
    **/
    select?: PlanetCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Planet
   */


  export type AggregatePlanet = {
    _count: PlanetCountAggregateOutputType | null
    _avg: PlanetAvgAggregateOutputType | null
    _sum: PlanetSumAggregateOutputType | null
    _min: PlanetMinAggregateOutputType | null
    _max: PlanetMaxAggregateOutputType | null
  }

  export type PlanetAvgAggregateOutputType = {
    distance_from_eleven: number | null
  }

  export type PlanetSumAggregateOutputType = {
    distance_from_eleven: number | null
  }

  export type PlanetMinAggregateOutputType = {
    id: string | null
    name: string | null
    distance_from_eleven: number | null
  }

  export type PlanetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    distance_from_eleven: number | null
  }

  export type PlanetCountAggregateOutputType = {
    id: number
    name: number
    distance_from_eleven: number
    _all: number
  }


  export type PlanetAvgAggregateInputType = {
    distance_from_eleven?: true
  }

  export type PlanetSumAggregateInputType = {
    distance_from_eleven?: true
  }

  export type PlanetMinAggregateInputType = {
    id?: true
    name?: true
    distance_from_eleven?: true
  }

  export type PlanetMaxAggregateInputType = {
    id?: true
    name?: true
    distance_from_eleven?: true
  }

  export type PlanetCountAggregateInputType = {
    id?: true
    name?: true
    distance_from_eleven?: true
    _all?: true
  }

  export type PlanetAggregateArgs = {
    /**
     * Filter which Planet to aggregate.
     * 
    **/
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     * 
    **/
    orderBy?: Enumerable<PlanetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planets
    **/
    _count?: true | PlanetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanetMaxAggregateInputType
  }

  export type GetPlanetAggregateType<T extends PlanetAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanet[P]>
      : GetScalarType<T[P], AggregatePlanet[P]>
  }




  export type PlanetGroupByArgs = {
    where?: PlanetWhereInput
    orderBy?: Enumerable<PlanetOrderByWithAggregationInput>
    by: Array<PlanetScalarFieldEnum>
    having?: PlanetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanetCountAggregateInputType | true
    _avg?: PlanetAvgAggregateInputType
    _sum?: PlanetSumAggregateInputType
    _min?: PlanetMinAggregateInputType
    _max?: PlanetMaxAggregateInputType
  }


  export type PlanetGroupByOutputType = {
    id: string
    name: string
    distance_from_eleven: number
    _count: PlanetCountAggregateOutputType | null
    _avg: PlanetAvgAggregateOutputType | null
    _sum: PlanetSumAggregateOutputType | null
    _min: PlanetMinAggregateOutputType | null
    _max: PlanetMaxAggregateOutputType | null
  }

  type GetPlanetGroupByPayload<T extends PlanetGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PlanetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanetGroupByOutputType[P]>
            : GetScalarType<T[P], PlanetGroupByOutputType[P]>
        }
      >
    >


  export type PlanetSelect = {
    id?: boolean
    name?: boolean
    distance_from_eleven?: boolean
    astronauts?: boolean | AstronautFindManyArgs
    _count?: boolean | PlanetCountOutputTypeArgs
  }


  export type PlanetInclude = {
    astronauts?: boolean | AstronautFindManyArgs
    _count?: boolean | PlanetCountOutputTypeArgs
  } 

  export type PlanetGetPayload<S extends boolean | null | undefined | PlanetArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Planet :
    S extends undefined ? never :
    S extends { include: any } & (PlanetArgs | PlanetFindManyArgs)
    ? Planet  & {
    [P in TrueKeys<S['include']>]:
        P extends 'astronauts' ? Array < AstronautGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? PlanetCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (PlanetArgs | PlanetFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'astronauts' ? Array < AstronautGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? PlanetCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Planet ? Planet[P] : never
  } 
      : Planet


  type PlanetCountArgs = Merge<
    Omit<PlanetFindManyArgs, 'select' | 'include'> & {
      select?: PlanetCountAggregateInputType | true
    }
  >

  export interface PlanetDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Planet that matches the filter.
     * @param {PlanetFindUniqueArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlanetFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlanetFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Planet'> extends True ? Prisma__PlanetClient<PlanetGetPayload<T>> : Prisma__PlanetClient<PlanetGetPayload<T> | null, null>

    /**
     * Find the first Planet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindFirstArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlanetFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlanetFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Planet'> extends True ? Prisma__PlanetClient<PlanetGetPayload<T>> : Prisma__PlanetClient<PlanetGetPayload<T> | null, null>

    /**
     * Find zero or more Planets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planets
     * const planets = await prisma.planet.findMany()
     * 
     * // Get first 10 Planets
     * const planets = await prisma.planet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planetWithIdOnly = await prisma.planet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlanetFindManyArgs>(
      args?: SelectSubset<T, PlanetFindManyArgs>
    ): PrismaPromise<Array<PlanetGetPayload<T>>>

    /**
     * Create a Planet.
     * @param {PlanetCreateArgs} args - Arguments to create a Planet.
     * @example
     * // Create one Planet
     * const Planet = await prisma.planet.create({
     *   data: {
     *     // ... data to create a Planet
     *   }
     * })
     * 
    **/
    create<T extends PlanetCreateArgs>(
      args: SelectSubset<T, PlanetCreateArgs>
    ): Prisma__PlanetClient<PlanetGetPayload<T>>

    /**
     * Delete a Planet.
     * @param {PlanetDeleteArgs} args - Arguments to delete one Planet.
     * @example
     * // Delete one Planet
     * const Planet = await prisma.planet.delete({
     *   where: {
     *     // ... filter to delete one Planet
     *   }
     * })
     * 
    **/
    delete<T extends PlanetDeleteArgs>(
      args: SelectSubset<T, PlanetDeleteArgs>
    ): Prisma__PlanetClient<PlanetGetPayload<T>>

    /**
     * Update one Planet.
     * @param {PlanetUpdateArgs} args - Arguments to update one Planet.
     * @example
     * // Update one Planet
     * const planet = await prisma.planet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlanetUpdateArgs>(
      args: SelectSubset<T, PlanetUpdateArgs>
    ): Prisma__PlanetClient<PlanetGetPayload<T>>

    /**
     * Delete zero or more Planets.
     * @param {PlanetDeleteManyArgs} args - Arguments to filter Planets to delete.
     * @example
     * // Delete a few Planets
     * const { count } = await prisma.planet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlanetDeleteManyArgs>(
      args?: SelectSubset<T, PlanetDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planets
     * const planet = await prisma.planet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlanetUpdateManyArgs>(
      args: SelectSubset<T, PlanetUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Planet.
     * @param {PlanetUpsertArgs} args - Arguments to update or create a Planet.
     * @example
     * // Update or create a Planet
     * const planet = await prisma.planet.upsert({
     *   create: {
     *     // ... data to create a Planet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planet we want to update
     *   }
     * })
    **/
    upsert<T extends PlanetUpsertArgs>(
      args: SelectSubset<T, PlanetUpsertArgs>
    ): Prisma__PlanetClient<PlanetGetPayload<T>>

    /**
     * Find one Planet that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PlanetFindUniqueOrThrowArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlanetFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PlanetFindUniqueOrThrowArgs>
    ): Prisma__PlanetClient<PlanetGetPayload<T>>

    /**
     * Find the first Planet that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindFirstOrThrowArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlanetFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlanetFindFirstOrThrowArgs>
    ): Prisma__PlanetClient<PlanetGetPayload<T>>

    /**
     * Count the number of Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetCountArgs} args - Arguments to filter Planets to count.
     * @example
     * // Count the number of Planets
     * const count = await prisma.planet.count({
     *   where: {
     *     // ... the filter for the Planets we want to count
     *   }
     * })
    **/
    count<T extends PlanetCountArgs>(
      args?: Subset<T, PlanetCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanetAggregateArgs>(args: Subset<T, PlanetAggregateArgs>): PrismaPromise<GetPlanetAggregateType<T>>

    /**
     * Group by Planet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetGroupByArgs} args - Group by arguments.
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
      T extends PlanetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanetGroupByArgs['orderBy'] }
        : { orderBy?: PlanetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlanetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanetGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Planet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlanetClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    astronauts<T extends AstronautFindManyArgs= {}>(args?: Subset<T, AstronautFindManyArgs>): PrismaPromise<Array<AstronautGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Planet base type for findUnique actions
   */
  export type PlanetFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Planet
     * 
    **/
    select?: PlanetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanetInclude | null
    /**
     * Filter, which Planet to fetch.
     * 
    **/
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet: findUnique
   */
  export interface PlanetFindUniqueArgs extends PlanetFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Planet base type for findFirst actions
   */
  export type PlanetFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Planet
     * 
    **/
    select?: PlanetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanetInclude | null
    /**
     * Filter, which Planet to fetch.
     * 
    **/
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     * 
    **/
    orderBy?: Enumerable<PlanetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planets.
     * 
    **/
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planets.
     * 
    **/
    distinct?: Enumerable<PlanetScalarFieldEnum>
  }

  /**
   * Planet: findFirst
   */
  export interface PlanetFindFirstArgs extends PlanetFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Planet findMany
   */
  export type PlanetFindManyArgs = {
    /**
     * Select specific fields to fetch from the Planet
     * 
    **/
    select?: PlanetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanetInclude | null
    /**
     * Filter, which Planets to fetch.
     * 
    **/
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     * 
    **/
    orderBy?: Enumerable<PlanetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planets.
     * 
    **/
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PlanetScalarFieldEnum>
  }


  /**
   * Planet create
   */
  export type PlanetCreateArgs = {
    /**
     * Select specific fields to fetch from the Planet
     * 
    **/
    select?: PlanetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanetInclude | null
    /**
     * The data needed to create a Planet.
     * 
    **/
    data: XOR<PlanetCreateInput, PlanetUncheckedCreateInput>
  }


  /**
   * Planet update
   */
  export type PlanetUpdateArgs = {
    /**
     * Select specific fields to fetch from the Planet
     * 
    **/
    select?: PlanetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanetInclude | null
    /**
     * The data needed to update a Planet.
     * 
    **/
    data: XOR<PlanetUpdateInput, PlanetUncheckedUpdateInput>
    /**
     * Choose, which Planet to update.
     * 
    **/
    where: PlanetWhereUniqueInput
  }


  /**
   * Planet updateMany
   */
  export type PlanetUpdateManyArgs = {
    /**
     * The data used to update Planets.
     * 
    **/
    data: XOR<PlanetUpdateManyMutationInput, PlanetUncheckedUpdateManyInput>
    /**
     * Filter which Planets to update
     * 
    **/
    where?: PlanetWhereInput
  }


  /**
   * Planet upsert
   */
  export type PlanetUpsertArgs = {
    /**
     * Select specific fields to fetch from the Planet
     * 
    **/
    select?: PlanetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanetInclude | null
    /**
     * The filter to search for the Planet to update in case it exists.
     * 
    **/
    where: PlanetWhereUniqueInput
    /**
     * In case the Planet found by the `where` argument doesn't exist, create a new Planet with this data.
     * 
    **/
    create: XOR<PlanetCreateInput, PlanetUncheckedCreateInput>
    /**
     * In case the Planet was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PlanetUpdateInput, PlanetUncheckedUpdateInput>
  }


  /**
   * Planet delete
   */
  export type PlanetDeleteArgs = {
    /**
     * Select specific fields to fetch from the Planet
     * 
    **/
    select?: PlanetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanetInclude | null
    /**
     * Filter which Planet to delete.
     * 
    **/
    where: PlanetWhereUniqueInput
  }


  /**
   * Planet deleteMany
   */
  export type PlanetDeleteManyArgs = {
    /**
     * Filter which Planets to delete
     * 
    **/
    where?: PlanetWhereInput
  }


  /**
   * Planet: findUniqueOrThrow
   */
  export type PlanetFindUniqueOrThrowArgs = PlanetFindUniqueArgsBase
      

  /**
   * Planet: findFirstOrThrow
   */
  export type PlanetFindFirstOrThrowArgs = PlanetFindFirstArgsBase
      

  /**
   * Planet without action
   */
  export type PlanetArgs = {
    /**
     * Select specific fields to fetch from the Planet
     * 
    **/
    select?: PlanetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanetInclude | null
  }



  /**
   * Model Astronaut
   */


  export type AggregateAstronaut = {
    _count: AstronautCountAggregateOutputType | null
    _min: AstronautMinAggregateOutputType | null
    _max: AstronautMaxAggregateOutputType | null
  }

  export type AstronautMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    planet_id: string | null
    profile_pic: string | null
  }

  export type AstronautMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    planet_id: string | null
    profile_pic: string | null
  }

  export type AstronautCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    planet_id: number
    profile_pic: number
    _all: number
  }


  export type AstronautMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    planet_id?: true
    profile_pic?: true
  }

  export type AstronautMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    planet_id?: true
    profile_pic?: true
  }

  export type AstronautCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    planet_id?: true
    profile_pic?: true
    _all?: true
  }

  export type AstronautAggregateArgs = {
    /**
     * Filter which Astronaut to aggregate.
     * 
    **/
    where?: AstronautWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Astronauts to fetch.
     * 
    **/
    orderBy?: Enumerable<AstronautOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AstronautWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Astronauts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Astronauts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Astronauts
    **/
    _count?: true | AstronautCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AstronautMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AstronautMaxAggregateInputType
  }

  export type GetAstronautAggregateType<T extends AstronautAggregateArgs> = {
        [P in keyof T & keyof AggregateAstronaut]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAstronaut[P]>
      : GetScalarType<T[P], AggregateAstronaut[P]>
  }




  export type AstronautGroupByArgs = {
    where?: AstronautWhereInput
    orderBy?: Enumerable<AstronautOrderByWithAggregationInput>
    by: Array<AstronautScalarFieldEnum>
    having?: AstronautScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AstronautCountAggregateInputType | true
    _min?: AstronautMinAggregateInputType
    _max?: AstronautMaxAggregateInputType
  }


  export type AstronautGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    planet_id: string
    profile_pic: string
    _count: AstronautCountAggregateOutputType | null
    _min: AstronautMinAggregateOutputType | null
    _max: AstronautMaxAggregateOutputType | null
  }

  type GetAstronautGroupByPayload<T extends AstronautGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AstronautGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AstronautGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AstronautGroupByOutputType[P]>
            : GetScalarType<T[P], AstronautGroupByOutputType[P]>
        }
      >
    >


  export type AstronautSelect = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    planet_id?: boolean
    profile_pic?: boolean
    planet?: boolean | PlanetArgs
  }


  export type AstronautInclude = {
    planet?: boolean | PlanetArgs
  } 

  export type AstronautGetPayload<S extends boolean | null | undefined | AstronautArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Astronaut :
    S extends undefined ? never :
    S extends { include: any } & (AstronautArgs | AstronautFindManyArgs)
    ? Astronaut  & {
    [P in TrueKeys<S['include']>]:
        P extends 'planet' ? PlanetGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (AstronautArgs | AstronautFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'planet' ? PlanetGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Astronaut ? Astronaut[P] : never
  } 
      : Astronaut


  type AstronautCountArgs = Merge<
    Omit<AstronautFindManyArgs, 'select' | 'include'> & {
      select?: AstronautCountAggregateInputType | true
    }
  >

  export interface AstronautDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Astronaut that matches the filter.
     * @param {AstronautFindUniqueArgs} args - Arguments to find a Astronaut
     * @example
     * // Get one Astronaut
     * const astronaut = await prisma.astronaut.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AstronautFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AstronautFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Astronaut'> extends True ? Prisma__AstronautClient<AstronautGetPayload<T>> : Prisma__AstronautClient<AstronautGetPayload<T> | null, null>

    /**
     * Find the first Astronaut that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AstronautFindFirstArgs} args - Arguments to find a Astronaut
     * @example
     * // Get one Astronaut
     * const astronaut = await prisma.astronaut.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AstronautFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AstronautFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Astronaut'> extends True ? Prisma__AstronautClient<AstronautGetPayload<T>> : Prisma__AstronautClient<AstronautGetPayload<T> | null, null>

    /**
     * Find zero or more Astronauts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AstronautFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Astronauts
     * const astronauts = await prisma.astronaut.findMany()
     * 
     * // Get first 10 Astronauts
     * const astronauts = await prisma.astronaut.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const astronautWithIdOnly = await prisma.astronaut.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AstronautFindManyArgs>(
      args?: SelectSubset<T, AstronautFindManyArgs>
    ): PrismaPromise<Array<AstronautGetPayload<T>>>

    /**
     * Create a Astronaut.
     * @param {AstronautCreateArgs} args - Arguments to create a Astronaut.
     * @example
     * // Create one Astronaut
     * const Astronaut = await prisma.astronaut.create({
     *   data: {
     *     // ... data to create a Astronaut
     *   }
     * })
     * 
    **/
    create<T extends AstronautCreateArgs>(
      args: SelectSubset<T, AstronautCreateArgs>
    ): Prisma__AstronautClient<AstronautGetPayload<T>>

    /**
     * Delete a Astronaut.
     * @param {AstronautDeleteArgs} args - Arguments to delete one Astronaut.
     * @example
     * // Delete one Astronaut
     * const Astronaut = await prisma.astronaut.delete({
     *   where: {
     *     // ... filter to delete one Astronaut
     *   }
     * })
     * 
    **/
    delete<T extends AstronautDeleteArgs>(
      args: SelectSubset<T, AstronautDeleteArgs>
    ): Prisma__AstronautClient<AstronautGetPayload<T>>

    /**
     * Update one Astronaut.
     * @param {AstronautUpdateArgs} args - Arguments to update one Astronaut.
     * @example
     * // Update one Astronaut
     * const astronaut = await prisma.astronaut.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AstronautUpdateArgs>(
      args: SelectSubset<T, AstronautUpdateArgs>
    ): Prisma__AstronautClient<AstronautGetPayload<T>>

    /**
     * Delete zero or more Astronauts.
     * @param {AstronautDeleteManyArgs} args - Arguments to filter Astronauts to delete.
     * @example
     * // Delete a few Astronauts
     * const { count } = await prisma.astronaut.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AstronautDeleteManyArgs>(
      args?: SelectSubset<T, AstronautDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Astronauts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AstronautUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Astronauts
     * const astronaut = await prisma.astronaut.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AstronautUpdateManyArgs>(
      args: SelectSubset<T, AstronautUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Astronaut.
     * @param {AstronautUpsertArgs} args - Arguments to update or create a Astronaut.
     * @example
     * // Update or create a Astronaut
     * const astronaut = await prisma.astronaut.upsert({
     *   create: {
     *     // ... data to create a Astronaut
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Astronaut we want to update
     *   }
     * })
    **/
    upsert<T extends AstronautUpsertArgs>(
      args: SelectSubset<T, AstronautUpsertArgs>
    ): Prisma__AstronautClient<AstronautGetPayload<T>>

    /**
     * Find one Astronaut that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AstronautFindUniqueOrThrowArgs} args - Arguments to find a Astronaut
     * @example
     * // Get one Astronaut
     * const astronaut = await prisma.astronaut.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AstronautFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AstronautFindUniqueOrThrowArgs>
    ): Prisma__AstronautClient<AstronautGetPayload<T>>

    /**
     * Find the first Astronaut that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AstronautFindFirstOrThrowArgs} args - Arguments to find a Astronaut
     * @example
     * // Get one Astronaut
     * const astronaut = await prisma.astronaut.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AstronautFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AstronautFindFirstOrThrowArgs>
    ): Prisma__AstronautClient<AstronautGetPayload<T>>

    /**
     * Count the number of Astronauts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AstronautCountArgs} args - Arguments to filter Astronauts to count.
     * @example
     * // Count the number of Astronauts
     * const count = await prisma.astronaut.count({
     *   where: {
     *     // ... the filter for the Astronauts we want to count
     *   }
     * })
    **/
    count<T extends AstronautCountArgs>(
      args?: Subset<T, AstronautCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AstronautCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Astronaut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AstronautAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AstronautAggregateArgs>(args: Subset<T, AstronautAggregateArgs>): PrismaPromise<GetAstronautAggregateType<T>>

    /**
     * Group by Astronaut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AstronautGroupByArgs} args - Group by arguments.
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
      T extends AstronautGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AstronautGroupByArgs['orderBy'] }
        : { orderBy?: AstronautGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AstronautGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAstronautGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Astronaut.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AstronautClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    planet<T extends PlanetArgs= {}>(args?: Subset<T, PlanetArgs>): Prisma__PlanetClient<PlanetGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Astronaut base type for findUnique actions
   */
  export type AstronautFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Astronaut
     * 
    **/
    select?: AstronautSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AstronautInclude | null
    /**
     * Filter, which Astronaut to fetch.
     * 
    **/
    where: AstronautWhereUniqueInput
  }

  /**
   * Astronaut: findUnique
   */
  export interface AstronautFindUniqueArgs extends AstronautFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Astronaut base type for findFirst actions
   */
  export type AstronautFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Astronaut
     * 
    **/
    select?: AstronautSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AstronautInclude | null
    /**
     * Filter, which Astronaut to fetch.
     * 
    **/
    where?: AstronautWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Astronauts to fetch.
     * 
    **/
    orderBy?: Enumerable<AstronautOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Astronauts.
     * 
    **/
    cursor?: AstronautWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Astronauts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Astronauts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Astronauts.
     * 
    **/
    distinct?: Enumerable<AstronautScalarFieldEnum>
  }

  /**
   * Astronaut: findFirst
   */
  export interface AstronautFindFirstArgs extends AstronautFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Astronaut findMany
   */
  export type AstronautFindManyArgs = {
    /**
     * Select specific fields to fetch from the Astronaut
     * 
    **/
    select?: AstronautSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AstronautInclude | null
    /**
     * Filter, which Astronauts to fetch.
     * 
    **/
    where?: AstronautWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Astronauts to fetch.
     * 
    **/
    orderBy?: Enumerable<AstronautOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Astronauts.
     * 
    **/
    cursor?: AstronautWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Astronauts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Astronauts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AstronautScalarFieldEnum>
  }


  /**
   * Astronaut create
   */
  export type AstronautCreateArgs = {
    /**
     * Select specific fields to fetch from the Astronaut
     * 
    **/
    select?: AstronautSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AstronautInclude | null
    /**
     * The data needed to create a Astronaut.
     * 
    **/
    data: XOR<AstronautCreateInput, AstronautUncheckedCreateInput>
  }


  /**
   * Astronaut update
   */
  export type AstronautUpdateArgs = {
    /**
     * Select specific fields to fetch from the Astronaut
     * 
    **/
    select?: AstronautSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AstronautInclude | null
    /**
     * The data needed to update a Astronaut.
     * 
    **/
    data: XOR<AstronautUpdateInput, AstronautUncheckedUpdateInput>
    /**
     * Choose, which Astronaut to update.
     * 
    **/
    where: AstronautWhereUniqueInput
  }


  /**
   * Astronaut updateMany
   */
  export type AstronautUpdateManyArgs = {
    /**
     * The data used to update Astronauts.
     * 
    **/
    data: XOR<AstronautUpdateManyMutationInput, AstronautUncheckedUpdateManyInput>
    /**
     * Filter which Astronauts to update
     * 
    **/
    where?: AstronautWhereInput
  }


  /**
   * Astronaut upsert
   */
  export type AstronautUpsertArgs = {
    /**
     * Select specific fields to fetch from the Astronaut
     * 
    **/
    select?: AstronautSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AstronautInclude | null
    /**
     * The filter to search for the Astronaut to update in case it exists.
     * 
    **/
    where: AstronautWhereUniqueInput
    /**
     * In case the Astronaut found by the `where` argument doesn't exist, create a new Astronaut with this data.
     * 
    **/
    create: XOR<AstronautCreateInput, AstronautUncheckedCreateInput>
    /**
     * In case the Astronaut was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AstronautUpdateInput, AstronautUncheckedUpdateInput>
  }


  /**
   * Astronaut delete
   */
  export type AstronautDeleteArgs = {
    /**
     * Select specific fields to fetch from the Astronaut
     * 
    **/
    select?: AstronautSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AstronautInclude | null
    /**
     * Filter which Astronaut to delete.
     * 
    **/
    where: AstronautWhereUniqueInput
  }


  /**
   * Astronaut deleteMany
   */
  export type AstronautDeleteManyArgs = {
    /**
     * Filter which Astronauts to delete
     * 
    **/
    where?: AstronautWhereInput
  }


  /**
   * Astronaut: findUniqueOrThrow
   */
  export type AstronautFindUniqueOrThrowArgs = AstronautFindUniqueArgsBase
      

  /**
   * Astronaut: findFirstOrThrow
   */
  export type AstronautFindFirstOrThrowArgs = AstronautFindFirstArgsBase
      

  /**
   * Astronaut without action
   */
  export type AstronautArgs = {
    /**
     * Select specific fields to fetch from the Astronaut
     * 
    **/
    select?: AstronautSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AstronautInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AstronautScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    planet_id: 'planet_id',
    profile_pic: 'profile_pic'
  };

  export type AstronautScalarFieldEnum = (typeof AstronautScalarFieldEnum)[keyof typeof AstronautScalarFieldEnum]


  export const PlanetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    distance_from_eleven: 'distance_from_eleven'
  };

  export type PlanetScalarFieldEnum = (typeof PlanetScalarFieldEnum)[keyof typeof PlanetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type PlanetWhereInput = {
    AND?: Enumerable<PlanetWhereInput>
    OR?: Enumerable<PlanetWhereInput>
    NOT?: Enumerable<PlanetWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    distance_from_eleven?: FloatFilter | number
    astronauts?: AstronautListRelationFilter
  }

  export type PlanetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    distance_from_eleven?: SortOrder
    astronauts?: AstronautOrderByRelationAggregateInput
  }

  export type PlanetWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type PlanetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    distance_from_eleven?: SortOrder
    _count?: PlanetCountOrderByAggregateInput
    _avg?: PlanetAvgOrderByAggregateInput
    _max?: PlanetMaxOrderByAggregateInput
    _min?: PlanetMinOrderByAggregateInput
    _sum?: PlanetSumOrderByAggregateInput
  }

  export type PlanetScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlanetScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlanetScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlanetScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    distance_from_eleven?: FloatWithAggregatesFilter | number
  }

  export type AstronautWhereInput = {
    AND?: Enumerable<AstronautWhereInput>
    OR?: Enumerable<AstronautWhereInput>
    NOT?: Enumerable<AstronautWhereInput>
    id?: StringFilter | string
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    planet_id?: StringFilter | string
    profile_pic?: StringFilter | string
    planet?: XOR<PlanetRelationFilter, PlanetWhereInput>
  }

  export type AstronautOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    planet_id?: SortOrder
    profile_pic?: SortOrder
    planet?: PlanetOrderByWithRelationInput
  }

  export type AstronautWhereUniqueInput = {
    id?: string
  }

  export type AstronautOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    planet_id?: SortOrder
    profile_pic?: SortOrder
    _count?: AstronautCountOrderByAggregateInput
    _max?: AstronautMaxOrderByAggregateInput
    _min?: AstronautMinOrderByAggregateInput
  }

  export type AstronautScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AstronautScalarWhereWithAggregatesInput>
    OR?: Enumerable<AstronautScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AstronautScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    planet_id?: StringWithAggregatesFilter | string
    profile_pic?: StringWithAggregatesFilter | string
  }

  export type PlanetCreateInput = {
    id?: string
    name: string
    distance_from_eleven?: number
    astronauts?: AstronautCreateNestedManyWithoutPlanetInput
  }

  export type PlanetUncheckedCreateInput = {
    id?: string
    name: string
    distance_from_eleven?: number
    astronauts?: AstronautUncheckedCreateNestedManyWithoutPlanetInput
  }

  export type PlanetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distance_from_eleven?: FloatFieldUpdateOperationsInput | number
    astronauts?: AstronautUpdateManyWithoutPlanetNestedInput
  }

  export type PlanetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distance_from_eleven?: FloatFieldUpdateOperationsInput | number
    astronauts?: AstronautUncheckedUpdateManyWithoutPlanetNestedInput
  }

  export type PlanetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distance_from_eleven?: FloatFieldUpdateOperationsInput | number
  }

  export type PlanetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distance_from_eleven?: FloatFieldUpdateOperationsInput | number
  }

  export type AstronautCreateInput = {
    id?: string
    firstname: string
    lastname: string
    profile_pic: string
    planet: PlanetCreateNestedOneWithoutAstronautsInput
  }

  export type AstronautUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    planet_id: string
    profile_pic: string
  }

  export type AstronautUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profile_pic?: StringFieldUpdateOperationsInput | string
    planet?: PlanetUpdateOneRequiredWithoutAstronautsNestedInput
  }

  export type AstronautUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    planet_id?: StringFieldUpdateOperationsInput | string
    profile_pic?: StringFieldUpdateOperationsInput | string
  }

  export type AstronautUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profile_pic?: StringFieldUpdateOperationsInput | string
  }

  export type AstronautUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    planet_id?: StringFieldUpdateOperationsInput | string
    profile_pic?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type AstronautListRelationFilter = {
    every?: AstronautWhereInput
    some?: AstronautWhereInput
    none?: AstronautWhereInput
  }

  export type AstronautOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    distance_from_eleven?: SortOrder
  }

  export type PlanetAvgOrderByAggregateInput = {
    distance_from_eleven?: SortOrder
  }

  export type PlanetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    distance_from_eleven?: SortOrder
  }

  export type PlanetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    distance_from_eleven?: SortOrder
  }

  export type PlanetSumOrderByAggregateInput = {
    distance_from_eleven?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type PlanetRelationFilter = {
    is?: PlanetWhereInput
    isNot?: PlanetWhereInput
  }

  export type AstronautCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    planet_id?: SortOrder
    profile_pic?: SortOrder
  }

  export type AstronautMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    planet_id?: SortOrder
    profile_pic?: SortOrder
  }

  export type AstronautMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    planet_id?: SortOrder
    profile_pic?: SortOrder
  }

  export type AstronautCreateNestedManyWithoutPlanetInput = {
    create?: XOR<Enumerable<AstronautCreateWithoutPlanetInput>, Enumerable<AstronautUncheckedCreateWithoutPlanetInput>>
    connectOrCreate?: Enumerable<AstronautCreateOrConnectWithoutPlanetInput>
    connect?: Enumerable<AstronautWhereUniqueInput>
  }

  export type AstronautUncheckedCreateNestedManyWithoutPlanetInput = {
    create?: XOR<Enumerable<AstronautCreateWithoutPlanetInput>, Enumerable<AstronautUncheckedCreateWithoutPlanetInput>>
    connectOrCreate?: Enumerable<AstronautCreateOrConnectWithoutPlanetInput>
    connect?: Enumerable<AstronautWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AstronautUpdateManyWithoutPlanetNestedInput = {
    create?: XOR<Enumerable<AstronautCreateWithoutPlanetInput>, Enumerable<AstronautUncheckedCreateWithoutPlanetInput>>
    connectOrCreate?: Enumerable<AstronautCreateOrConnectWithoutPlanetInput>
    upsert?: Enumerable<AstronautUpsertWithWhereUniqueWithoutPlanetInput>
    set?: Enumerable<AstronautWhereUniqueInput>
    disconnect?: Enumerable<AstronautWhereUniqueInput>
    delete?: Enumerable<AstronautWhereUniqueInput>
    connect?: Enumerable<AstronautWhereUniqueInput>
    update?: Enumerable<AstronautUpdateWithWhereUniqueWithoutPlanetInput>
    updateMany?: Enumerable<AstronautUpdateManyWithWhereWithoutPlanetInput>
    deleteMany?: Enumerable<AstronautScalarWhereInput>
  }

  export type AstronautUncheckedUpdateManyWithoutPlanetNestedInput = {
    create?: XOR<Enumerable<AstronautCreateWithoutPlanetInput>, Enumerable<AstronautUncheckedCreateWithoutPlanetInput>>
    connectOrCreate?: Enumerable<AstronautCreateOrConnectWithoutPlanetInput>
    upsert?: Enumerable<AstronautUpsertWithWhereUniqueWithoutPlanetInput>
    set?: Enumerable<AstronautWhereUniqueInput>
    disconnect?: Enumerable<AstronautWhereUniqueInput>
    delete?: Enumerable<AstronautWhereUniqueInput>
    connect?: Enumerable<AstronautWhereUniqueInput>
    update?: Enumerable<AstronautUpdateWithWhereUniqueWithoutPlanetInput>
    updateMany?: Enumerable<AstronautUpdateManyWithWhereWithoutPlanetInput>
    deleteMany?: Enumerable<AstronautScalarWhereInput>
  }

  export type PlanetCreateNestedOneWithoutAstronautsInput = {
    create?: XOR<PlanetCreateWithoutAstronautsInput, PlanetUncheckedCreateWithoutAstronautsInput>
    connectOrCreate?: PlanetCreateOrConnectWithoutAstronautsInput
    connect?: PlanetWhereUniqueInput
  }

  export type PlanetUpdateOneRequiredWithoutAstronautsNestedInput = {
    create?: XOR<PlanetCreateWithoutAstronautsInput, PlanetUncheckedCreateWithoutAstronautsInput>
    connectOrCreate?: PlanetCreateOrConnectWithoutAstronautsInput
    upsert?: PlanetUpsertWithoutAstronautsInput
    connect?: PlanetWhereUniqueInput
    update?: XOR<PlanetUpdateWithoutAstronautsInput, PlanetUncheckedUpdateWithoutAstronautsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type AstronautCreateWithoutPlanetInput = {
    id?: string
    firstname: string
    lastname: string
    profile_pic: string
  }

  export type AstronautUncheckedCreateWithoutPlanetInput = {
    id?: string
    firstname: string
    lastname: string
    profile_pic: string
  }

  export type AstronautCreateOrConnectWithoutPlanetInput = {
    where: AstronautWhereUniqueInput
    create: XOR<AstronautCreateWithoutPlanetInput, AstronautUncheckedCreateWithoutPlanetInput>
  }

  export type AstronautUpsertWithWhereUniqueWithoutPlanetInput = {
    where: AstronautWhereUniqueInput
    update: XOR<AstronautUpdateWithoutPlanetInput, AstronautUncheckedUpdateWithoutPlanetInput>
    create: XOR<AstronautCreateWithoutPlanetInput, AstronautUncheckedCreateWithoutPlanetInput>
  }

  export type AstronautUpdateWithWhereUniqueWithoutPlanetInput = {
    where: AstronautWhereUniqueInput
    data: XOR<AstronautUpdateWithoutPlanetInput, AstronautUncheckedUpdateWithoutPlanetInput>
  }

  export type AstronautUpdateManyWithWhereWithoutPlanetInput = {
    where: AstronautScalarWhereInput
    data: XOR<AstronautUpdateManyMutationInput, AstronautUncheckedUpdateManyWithoutAstronautsInput>
  }

  export type AstronautScalarWhereInput = {
    AND?: Enumerable<AstronautScalarWhereInput>
    OR?: Enumerable<AstronautScalarWhereInput>
    NOT?: Enumerable<AstronautScalarWhereInput>
    id?: StringFilter | string
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    planet_id?: StringFilter | string
    profile_pic?: StringFilter | string
  }

  export type PlanetCreateWithoutAstronautsInput = {
    id?: string
    name: string
    distance_from_eleven?: number
  }

  export type PlanetUncheckedCreateWithoutAstronautsInput = {
    id?: string
    name: string
    distance_from_eleven?: number
  }

  export type PlanetCreateOrConnectWithoutAstronautsInput = {
    where: PlanetWhereUniqueInput
    create: XOR<PlanetCreateWithoutAstronautsInput, PlanetUncheckedCreateWithoutAstronautsInput>
  }

  export type PlanetUpsertWithoutAstronautsInput = {
    update: XOR<PlanetUpdateWithoutAstronautsInput, PlanetUncheckedUpdateWithoutAstronautsInput>
    create: XOR<PlanetCreateWithoutAstronautsInput, PlanetUncheckedCreateWithoutAstronautsInput>
  }

  export type PlanetUpdateWithoutAstronautsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distance_from_eleven?: FloatFieldUpdateOperationsInput | number
  }

  export type PlanetUncheckedUpdateWithoutAstronautsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distance_from_eleven?: FloatFieldUpdateOperationsInput | number
  }

  export type AstronautUpdateWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profile_pic?: StringFieldUpdateOperationsInput | string
  }

  export type AstronautUncheckedUpdateWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profile_pic?: StringFieldUpdateOperationsInput | string
  }

  export type AstronautUncheckedUpdateManyWithoutAstronautsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profile_pic?: StringFieldUpdateOperationsInput | string
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