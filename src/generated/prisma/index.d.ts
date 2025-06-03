
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
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model TipoHab
 * 
 */
export type TipoHab = $Result.DefaultSelection<Prisma.$TipoHabPayload>
/**
 * Model Habitacion
 * 
 */
export type Habitacion = $Result.DefaultSelection<Prisma.$HabitacionPayload>
/**
 * Model Fecha
 * 
 */
export type Fecha = $Result.DefaultSelection<Prisma.$FechaPayload>
/**
 * Model Empleado
 * 
 */
export type Empleado = $Result.DefaultSelection<Prisma.$EmpleadoPayload>
/**
 * Model Credencial
 * 
 */
export type Credencial = $Result.DefaultSelection<Prisma.$CredencialPayload>
/**
 * Model CanalReversa
 * 
 */
export type CanalReversa = $Result.DefaultSelection<Prisma.$CanalReversaPayload>
/**
 * Model Pago
 * 
 */
export type Pago = $Result.DefaultSelection<Prisma.$PagoPayload>
/**
 * Model Reservas
 * 
 */
export type Reservas = $Result.DefaultSelection<Prisma.$ReservasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hotels
 * const hotels = await prisma.hotel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Hotels
   * const hotels = await prisma.hotel.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoHab`: Exposes CRUD operations for the **TipoHab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoHabs
    * const tipoHabs = await prisma.tipoHab.findMany()
    * ```
    */
  get tipoHab(): Prisma.TipoHabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitacion`: Exposes CRUD operations for the **Habitacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habitacions
    * const habitacions = await prisma.habitacion.findMany()
    * ```
    */
  get habitacion(): Prisma.HabitacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fecha`: Exposes CRUD operations for the **Fecha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fechas
    * const fechas = await prisma.fecha.findMany()
    * ```
    */
  get fecha(): Prisma.FechaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empleado`: Exposes CRUD operations for the **Empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.EmpleadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credencial`: Exposes CRUD operations for the **Credencial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credencials
    * const credencials = await prisma.credencial.findMany()
    * ```
    */
  get credencial(): Prisma.CredencialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.canalReversa`: Exposes CRUD operations for the **CanalReversa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CanalReversas
    * const canalReversas = await prisma.canalReversa.findMany()
    * ```
    */
  get canalReversa(): Prisma.CanalReversaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.PagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservas`: Exposes CRUD operations for the **Reservas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reservas.findMany()
    * ```
    */
  get reservas(): Prisma.ReservasDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Hotel: 'Hotel',
    Cliente: 'Cliente',
    TipoHab: 'TipoHab',
    Habitacion: 'Habitacion',
    Fecha: 'Fecha',
    Empleado: 'Empleado',
    Credencial: 'Credencial',
    CanalReversa: 'CanalReversa',
    Pago: 'Pago',
    Reservas: 'Reservas'
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
      modelProps: "hotel" | "cliente" | "tipoHab" | "habitacion" | "fecha" | "empleado" | "credencial" | "canalReversa" | "pago" | "reservas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      TipoHab: {
        payload: Prisma.$TipoHabPayload<ExtArgs>
        fields: Prisma.TipoHabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoHabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoHabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>
          }
          findFirst: {
            args: Prisma.TipoHabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoHabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>
          }
          findMany: {
            args: Prisma.TipoHabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>[]
          }
          create: {
            args: Prisma.TipoHabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>
          }
          createMany: {
            args: Prisma.TipoHabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoHabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>[]
          }
          delete: {
            args: Prisma.TipoHabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>
          }
          update: {
            args: Prisma.TipoHabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>
          }
          deleteMany: {
            args: Prisma.TipoHabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoHabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoHabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>[]
          }
          upsert: {
            args: Prisma.TipoHabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabPayload>
          }
          aggregate: {
            args: Prisma.TipoHabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoHab>
          }
          groupBy: {
            args: Prisma.TipoHabGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoHabGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoHabCountArgs<ExtArgs>
            result: $Utils.Optional<TipoHabCountAggregateOutputType> | number
          }
        }
      }
      Habitacion: {
        payload: Prisma.$HabitacionPayload<ExtArgs>
        fields: Prisma.HabitacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          findFirst: {
            args: Prisma.HabitacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          findMany: {
            args: Prisma.HabitacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          create: {
            args: Prisma.HabitacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          createMany: {
            args: Prisma.HabitacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          delete: {
            args: Prisma.HabitacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          update: {
            args: Prisma.HabitacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          deleteMany: {
            args: Prisma.HabitacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          upsert: {
            args: Prisma.HabitacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          aggregate: {
            args: Prisma.HabitacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitacion>
          }
          groupBy: {
            args: Prisma.HabitacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitacionCountArgs<ExtArgs>
            result: $Utils.Optional<HabitacionCountAggregateOutputType> | number
          }
        }
      }
      Fecha: {
        payload: Prisma.$FechaPayload<ExtArgs>
        fields: Prisma.FechaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FechaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FechaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>
          }
          findFirst: {
            args: Prisma.FechaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FechaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>
          }
          findMany: {
            args: Prisma.FechaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>[]
          }
          create: {
            args: Prisma.FechaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>
          }
          createMany: {
            args: Prisma.FechaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FechaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>[]
          }
          delete: {
            args: Prisma.FechaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>
          }
          update: {
            args: Prisma.FechaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>
          }
          deleteMany: {
            args: Prisma.FechaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FechaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FechaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>[]
          }
          upsert: {
            args: Prisma.FechaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechaPayload>
          }
          aggregate: {
            args: Prisma.FechaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFecha>
          }
          groupBy: {
            args: Prisma.FechaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FechaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FechaCountArgs<ExtArgs>
            result: $Utils.Optional<FechaCountAggregateOutputType> | number
          }
        }
      }
      Empleado: {
        payload: Prisma.$EmpleadoPayload<ExtArgs>
        fields: Prisma.EmpleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findFirst: {
            args: Prisma.EmpleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findMany: {
            args: Prisma.EmpleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          create: {
            args: Prisma.EmpleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          createMany: {
            args: Prisma.EmpleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpleadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          delete: {
            args: Prisma.EmpleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          update: {
            args: Prisma.EmpleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          deleteMany: {
            args: Prisma.EmpleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpleadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          upsert: {
            args: Prisma.EmpleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.EmpleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      Credencial: {
        payload: Prisma.$CredencialPayload<ExtArgs>
        fields: Prisma.CredencialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredencialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredencialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>
          }
          findFirst: {
            args: Prisma.CredencialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredencialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>
          }
          findMany: {
            args: Prisma.CredencialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>[]
          }
          create: {
            args: Prisma.CredencialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>
          }
          createMany: {
            args: Prisma.CredencialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredencialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>[]
          }
          delete: {
            args: Prisma.CredencialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>
          }
          update: {
            args: Prisma.CredencialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>
          }
          deleteMany: {
            args: Prisma.CredencialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredencialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredencialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>[]
          }
          upsert: {
            args: Prisma.CredencialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialPayload>
          }
          aggregate: {
            args: Prisma.CredencialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredencial>
          }
          groupBy: {
            args: Prisma.CredencialGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredencialGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredencialCountArgs<ExtArgs>
            result: $Utils.Optional<CredencialCountAggregateOutputType> | number
          }
        }
      }
      CanalReversa: {
        payload: Prisma.$CanalReversaPayload<ExtArgs>
        fields: Prisma.CanalReversaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CanalReversaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CanalReversaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>
          }
          findFirst: {
            args: Prisma.CanalReversaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CanalReversaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>
          }
          findMany: {
            args: Prisma.CanalReversaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>[]
          }
          create: {
            args: Prisma.CanalReversaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>
          }
          createMany: {
            args: Prisma.CanalReversaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CanalReversaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>[]
          }
          delete: {
            args: Prisma.CanalReversaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>
          }
          update: {
            args: Prisma.CanalReversaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>
          }
          deleteMany: {
            args: Prisma.CanalReversaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CanalReversaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CanalReversaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>[]
          }
          upsert: {
            args: Prisma.CanalReversaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanalReversaPayload>
          }
          aggregate: {
            args: Prisma.CanalReversaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCanalReversa>
          }
          groupBy: {
            args: Prisma.CanalReversaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CanalReversaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CanalReversaCountArgs<ExtArgs>
            result: $Utils.Optional<CanalReversaCountAggregateOutputType> | number
          }
        }
      }
      Pago: {
        payload: Prisma.$PagoPayload<ExtArgs>
        fields: Prisma.PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findFirst: {
            args: Prisma.PagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findMany: {
            args: Prisma.PagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          create: {
            args: Prisma.PagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          createMany: {
            args: Prisma.PagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          delete: {
            args: Prisma.PagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          update: {
            args: Prisma.PagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          upsert: {
            args: Prisma.PagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.PagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      Reservas: {
        payload: Prisma.$ReservasPayload<ExtArgs>
        fields: Prisma.ReservasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          findFirst: {
            args: Prisma.ReservasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          findMany: {
            args: Prisma.ReservasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>[]
          }
          create: {
            args: Prisma.ReservasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          createMany: {
            args: Prisma.ReservasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>[]
          }
          delete: {
            args: Prisma.ReservasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          update: {
            args: Prisma.ReservasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          deleteMany: {
            args: Prisma.ReservasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>[]
          }
          upsert: {
            args: Prisma.ReservasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          aggregate: {
            args: Prisma.ReservasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservas>
          }
          groupBy: {
            args: Prisma.ReservasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservasCountArgs<ExtArgs>
            result: $Utils.Optional<ReservasCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    hotel?: HotelOmit
    cliente?: ClienteOmit
    tipoHab?: TipoHabOmit
    habitacion?: HabitacionOmit
    fecha?: FechaOmit
    empleado?: EmpleadoOmit
    credencial?: CredencialOmit
    canalReversa?: CanalReversaOmit
    pago?: PagoOmit
    reservas?: ReservasOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    Habitaciones: number
    Reservas: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Habitaciones?: boolean | HotelCountOutputTypeCountHabitacionesArgs
    Reservas?: boolean | HotelCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountHabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitacionWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    Reservas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | ClienteCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }


  /**
   * Count Type TipoHabCountOutputType
   */

  export type TipoHabCountOutputType = {
    Habitaciones: number
  }

  export type TipoHabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Habitaciones?: boolean | TipoHabCountOutputTypeCountHabitacionesArgs
  }

  // Custom InputTypes
  /**
   * TipoHabCountOutputType without action
   */
  export type TipoHabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabCountOutputType
     */
    select?: TipoHabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoHabCountOutputType without action
   */
  export type TipoHabCountOutputTypeCountHabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitacionWhereInput
  }


  /**
   * Count Type HabitacionCountOutputType
   */

  export type HabitacionCountOutputType = {
    Reservas: number
  }

  export type HabitacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | HabitacionCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitacionCountOutputType
     */
    select?: HabitacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }


  /**
   * Count Type FechaCountOutputType
   */

  export type FechaCountOutputType = {
    Reservas: number
  }

  export type FechaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | FechaCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * FechaCountOutputType without action
   */
  export type FechaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FechaCountOutputType
     */
    select?: FechaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FechaCountOutputType without action
   */
  export type FechaCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }


  /**
   * Count Type EmpleadoCountOutputType
   */

  export type EmpleadoCountOutputType = {
    Reservas: number
  }

  export type EmpleadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | EmpleadoCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpleadoCountOutputType
     */
    select?: EmpleadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }


  /**
   * Count Type CanalReversaCountOutputType
   */

  export type CanalReversaCountOutputType = {
    Reservas: number
  }

  export type CanalReversaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | CanalReversaCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * CanalReversaCountOutputType without action
   */
  export type CanalReversaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversaCountOutputType
     */
    select?: CanalReversaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CanalReversaCountOutputType without action
   */
  export type CanalReversaCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }


  /**
   * Count Type PagoCountOutputType
   */

  export type PagoCountOutputType = {
    Reservas: number
  }

  export type PagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | PagoCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * PagoCountOutputType without action
   */
  export type PagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoCountOutputType
     */
    select?: PagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PagoCountOutputType without action
   */
  export type PagoCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelAvgAggregateOutputType = {
    HotelKey: number | null
    HotelID: number | null
    Estrellas: number | null
  }

  export type HotelSumAggregateOutputType = {
    HotelKey: number | null
    HotelID: number | null
    Estrellas: number | null
  }

  export type HotelMinAggregateOutputType = {
    HotelKey: number | null
    HotelID: number | null
    Nombre: string | null
    Cadena: string | null
    Ciudad: string | null
    Pais: string | null
    Estrellas: number | null
    Direccion: string | null
  }

  export type HotelMaxAggregateOutputType = {
    HotelKey: number | null
    HotelID: number | null
    Nombre: string | null
    Cadena: string | null
    Ciudad: string | null
    Pais: string | null
    Estrellas: number | null
    Direccion: string | null
  }

  export type HotelCountAggregateOutputType = {
    HotelKey: number
    HotelID: number
    Nombre: number
    Cadena: number
    Ciudad: number
    Pais: number
    Estrellas: number
    Direccion: number
    _all: number
  }


  export type HotelAvgAggregateInputType = {
    HotelKey?: true
    HotelID?: true
    Estrellas?: true
  }

  export type HotelSumAggregateInputType = {
    HotelKey?: true
    HotelID?: true
    Estrellas?: true
  }

  export type HotelMinAggregateInputType = {
    HotelKey?: true
    HotelID?: true
    Nombre?: true
    Cadena?: true
    Ciudad?: true
    Pais?: true
    Estrellas?: true
    Direccion?: true
  }

  export type HotelMaxAggregateInputType = {
    HotelKey?: true
    HotelID?: true
    Nombre?: true
    Cadena?: true
    Ciudad?: true
    Pais?: true
    Estrellas?: true
    Direccion?: true
  }

  export type HotelCountAggregateInputType = {
    HotelKey?: true
    HotelID?: true
    Nombre?: true
    Cadena?: true
    Ciudad?: true
    Pais?: true
    Estrellas?: true
    Direccion?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _avg?: HotelAvgAggregateInputType
    _sum?: HotelSumAggregateInputType
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    HotelKey: number
    HotelID: number
    Nombre: string
    Cadena: string
    Ciudad: string
    Pais: string
    Estrellas: number
    Direccion: string
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    HotelKey?: boolean
    HotelID?: boolean
    Nombre?: boolean
    Cadena?: boolean
    Ciudad?: boolean
    Pais?: boolean
    Estrellas?: boolean
    Direccion?: boolean
    Habitaciones?: boolean | Hotel$HabitacionesArgs<ExtArgs>
    Reservas?: boolean | Hotel$ReservasArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    HotelKey?: boolean
    HotelID?: boolean
    Nombre?: boolean
    Cadena?: boolean
    Ciudad?: boolean
    Pais?: boolean
    Estrellas?: boolean
    Direccion?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    HotelKey?: boolean
    HotelID?: boolean
    Nombre?: boolean
    Cadena?: boolean
    Ciudad?: boolean
    Pais?: boolean
    Estrellas?: boolean
    Direccion?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectScalar = {
    HotelKey?: boolean
    HotelID?: boolean
    Nombre?: boolean
    Cadena?: boolean
    Ciudad?: boolean
    Pais?: boolean
    Estrellas?: boolean
    Direccion?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"HotelKey" | "HotelID" | "Nombre" | "Cadena" | "Ciudad" | "Pais" | "Estrellas" | "Direccion", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Habitaciones?: boolean | Hotel$HabitacionesArgs<ExtArgs>
    Reservas?: boolean | Hotel$ReservasArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HotelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      Habitaciones: Prisma.$HabitacionPayload<ExtArgs>[]
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      HotelKey: number
      HotelID: number
      Nombre: string
      Cadena: string
      Ciudad: string
      Pais: string
      Estrellas: number
      Direccion: string
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `HotelKey`
     * const hotelWithHotelKeyOnly = await prisma.hotel.findMany({ select: { HotelKey: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `HotelKey`
     * const hotelWithHotelKeyOnly = await prisma.hotel.createManyAndReturn({
     *   select: { HotelKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels and returns the data updated in the database.
     * @param {HotelUpdateManyAndReturnArgs} args - Arguments to update many Hotels.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotels and only return the `HotelKey`
     * const hotelWithHotelKeyOnly = await prisma.hotel.updateManyAndReturn({
     *   select: { HotelKey: true },
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
    updateManyAndReturn<T extends HotelUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
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
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Habitaciones<T extends Hotel$HabitacionesArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$HabitacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reservas<T extends Hotel$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly HotelKey: FieldRef<"Hotel", 'Int'>
    readonly HotelID: FieldRef<"Hotel", 'Int'>
    readonly Nombre: FieldRef<"Hotel", 'String'>
    readonly Cadena: FieldRef<"Hotel", 'String'>
    readonly Ciudad: FieldRef<"Hotel", 'String'>
    readonly Pais: FieldRef<"Hotel", 'String'>
    readonly Estrellas: FieldRef<"Hotel", 'Int'>
    readonly Direccion: FieldRef<"Hotel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel createManyAndReturn
   */
  export type HotelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel updateManyAndReturn
   */
  export type HotelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel.Habitaciones
   */
  export type Hotel$HabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    where?: HabitacionWhereInput
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    cursor?: HabitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Hotel.Reservas
   */
  export type Hotel$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    ClienteKey: number | null
    ClienteID: number | null
  }

  export type ClienteSumAggregateOutputType = {
    ClienteKey: number | null
    ClienteID: number | null
  }

  export type ClienteMinAggregateOutputType = {
    ClienteKey: number | null
    ClienteID: number | null
    Nombre: string | null
    Apellido: string | null
    Genero: string | null
    FechaNacimiento: Date | null
    Nacionalidad: string | null
    TipoCliente: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    ClienteKey: number | null
    ClienteID: number | null
    Nombre: string | null
    Apellido: string | null
    Genero: string | null
    FechaNacimiento: Date | null
    Nacionalidad: string | null
    TipoCliente: string | null
  }

  export type ClienteCountAggregateOutputType = {
    ClienteKey: number
    ClienteID: number
    Nombre: number
    Apellido: number
    Genero: number
    FechaNacimiento: number
    Nacionalidad: number
    TipoCliente: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    ClienteKey?: true
    ClienteID?: true
  }

  export type ClienteSumAggregateInputType = {
    ClienteKey?: true
    ClienteID?: true
  }

  export type ClienteMinAggregateInputType = {
    ClienteKey?: true
    ClienteID?: true
    Nombre?: true
    Apellido?: true
    Genero?: true
    FechaNacimiento?: true
    Nacionalidad?: true
    TipoCliente?: true
  }

  export type ClienteMaxAggregateInputType = {
    ClienteKey?: true
    ClienteID?: true
    Nombre?: true
    Apellido?: true
    Genero?: true
    FechaNacimiento?: true
    Nacionalidad?: true
    TipoCliente?: true
  }

  export type ClienteCountAggregateInputType = {
    ClienteKey?: true
    ClienteID?: true
    Nombre?: true
    Apellido?: true
    Genero?: true
    FechaNacimiento?: true
    Nacionalidad?: true
    TipoCliente?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    ClienteKey: number
    ClienteID: number
    Nombre: string
    Apellido: string
    Genero: string
    FechaNacimiento: Date
    Nacionalidad: string
    TipoCliente: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClienteKey?: boolean
    ClienteID?: boolean
    Nombre?: boolean
    Apellido?: boolean
    Genero?: boolean
    FechaNacimiento?: boolean
    Nacionalidad?: boolean
    TipoCliente?: boolean
    Reservas?: boolean | Cliente$ReservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClienteKey?: boolean
    ClienteID?: boolean
    Nombre?: boolean
    Apellido?: boolean
    Genero?: boolean
    FechaNacimiento?: boolean
    Nacionalidad?: boolean
    TipoCliente?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClienteKey?: boolean
    ClienteID?: boolean
    Nombre?: boolean
    Apellido?: boolean
    Genero?: boolean
    FechaNacimiento?: boolean
    Nacionalidad?: boolean
    TipoCliente?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    ClienteKey?: boolean
    ClienteID?: boolean
    Nombre?: boolean
    Apellido?: boolean
    Genero?: boolean
    FechaNacimiento?: boolean
    Nacionalidad?: boolean
    TipoCliente?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ClienteKey" | "ClienteID" | "Nombre" | "Apellido" | "Genero" | "FechaNacimiento" | "Nacionalidad" | "TipoCliente", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | Cliente$ReservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ClienteKey: number
      ClienteID: number
      Nombre: string
      Apellido: string
      Genero: string
      FechaNacimiento: Date
      Nacionalidad: string
      TipoCliente: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `ClienteKey`
     * const clienteWithClienteKeyOnly = await prisma.cliente.findMany({ select: { ClienteKey: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `ClienteKey`
     * const clienteWithClienteKeyOnly = await prisma.cliente.createManyAndReturn({
     *   select: { ClienteKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `ClienteKey`
     * const clienteWithClienteKeyOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { ClienteKey: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Reservas<T extends Cliente$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly ClienteKey: FieldRef<"Cliente", 'Int'>
    readonly ClienteID: FieldRef<"Cliente", 'Int'>
    readonly Nombre: FieldRef<"Cliente", 'String'>
    readonly Apellido: FieldRef<"Cliente", 'String'>
    readonly Genero: FieldRef<"Cliente", 'String'>
    readonly FechaNacimiento: FieldRef<"Cliente", 'DateTime'>
    readonly Nacionalidad: FieldRef<"Cliente", 'String'>
    readonly TipoCliente: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.Reservas
   */
  export type Cliente$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model TipoHab
   */

  export type AggregateTipoHab = {
    _count: TipoHabCountAggregateOutputType | null
    _avg: TipoHabAvgAggregateOutputType | null
    _sum: TipoHabSumAggregateOutputType | null
    _min: TipoHabMinAggregateOutputType | null
    _max: TipoHabMaxAggregateOutputType | null
  }

  export type TipoHabAvgAggregateOutputType = {
    TipoHabKey: number | null
    TipoHabID: number | null
    CapacidadMax: number | null
    TarifaEstandar: Decimal | null
  }

  export type TipoHabSumAggregateOutputType = {
    TipoHabKey: number | null
    TipoHabID: number | null
    CapacidadMax: number | null
    TarifaEstandar: Decimal | null
  }

  export type TipoHabMinAggregateOutputType = {
    TipoHabKey: number | null
    TipoHabID: number | null
    Descripcion: string | null
    Categoria: string | null
    CapacidadMax: number | null
    TarifaEstandar: Decimal | null
  }

  export type TipoHabMaxAggregateOutputType = {
    TipoHabKey: number | null
    TipoHabID: number | null
    Descripcion: string | null
    Categoria: string | null
    CapacidadMax: number | null
    TarifaEstandar: Decimal | null
  }

  export type TipoHabCountAggregateOutputType = {
    TipoHabKey: number
    TipoHabID: number
    Descripcion: number
    Categoria: number
    CapacidadMax: number
    TarifaEstandar: number
    _all: number
  }


  export type TipoHabAvgAggregateInputType = {
    TipoHabKey?: true
    TipoHabID?: true
    CapacidadMax?: true
    TarifaEstandar?: true
  }

  export type TipoHabSumAggregateInputType = {
    TipoHabKey?: true
    TipoHabID?: true
    CapacidadMax?: true
    TarifaEstandar?: true
  }

  export type TipoHabMinAggregateInputType = {
    TipoHabKey?: true
    TipoHabID?: true
    Descripcion?: true
    Categoria?: true
    CapacidadMax?: true
    TarifaEstandar?: true
  }

  export type TipoHabMaxAggregateInputType = {
    TipoHabKey?: true
    TipoHabID?: true
    Descripcion?: true
    Categoria?: true
    CapacidadMax?: true
    TarifaEstandar?: true
  }

  export type TipoHabCountAggregateInputType = {
    TipoHabKey?: true
    TipoHabID?: true
    Descripcion?: true
    Categoria?: true
    CapacidadMax?: true
    TarifaEstandar?: true
    _all?: true
  }

  export type TipoHabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoHab to aggregate.
     */
    where?: TipoHabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoHabs to fetch.
     */
    orderBy?: TipoHabOrderByWithRelationInput | TipoHabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoHabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoHabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoHabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoHabs
    **/
    _count?: true | TipoHabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoHabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoHabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoHabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoHabMaxAggregateInputType
  }

  export type GetTipoHabAggregateType<T extends TipoHabAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoHab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoHab[P]>
      : GetScalarType<T[P], AggregateTipoHab[P]>
  }




  export type TipoHabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoHabWhereInput
    orderBy?: TipoHabOrderByWithAggregationInput | TipoHabOrderByWithAggregationInput[]
    by: TipoHabScalarFieldEnum[] | TipoHabScalarFieldEnum
    having?: TipoHabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoHabCountAggregateInputType | true
    _avg?: TipoHabAvgAggregateInputType
    _sum?: TipoHabSumAggregateInputType
    _min?: TipoHabMinAggregateInputType
    _max?: TipoHabMaxAggregateInputType
  }

  export type TipoHabGroupByOutputType = {
    TipoHabKey: number
    TipoHabID: number
    Descripcion: string
    Categoria: string
    CapacidadMax: number
    TarifaEstandar: Decimal
    _count: TipoHabCountAggregateOutputType | null
    _avg: TipoHabAvgAggregateOutputType | null
    _sum: TipoHabSumAggregateOutputType | null
    _min: TipoHabMinAggregateOutputType | null
    _max: TipoHabMaxAggregateOutputType | null
  }

  type GetTipoHabGroupByPayload<T extends TipoHabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoHabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoHabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoHabGroupByOutputType[P]>
            : GetScalarType<T[P], TipoHabGroupByOutputType[P]>
        }
      >
    >


  export type TipoHabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TipoHabKey?: boolean
    TipoHabID?: boolean
    Descripcion?: boolean
    Categoria?: boolean
    CapacidadMax?: boolean
    TarifaEstandar?: boolean
    Habitaciones?: boolean | TipoHab$HabitacionesArgs<ExtArgs>
    _count?: boolean | TipoHabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoHab"]>

  export type TipoHabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TipoHabKey?: boolean
    TipoHabID?: boolean
    Descripcion?: boolean
    Categoria?: boolean
    CapacidadMax?: boolean
    TarifaEstandar?: boolean
  }, ExtArgs["result"]["tipoHab"]>

  export type TipoHabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TipoHabKey?: boolean
    TipoHabID?: boolean
    Descripcion?: boolean
    Categoria?: boolean
    CapacidadMax?: boolean
    TarifaEstandar?: boolean
  }, ExtArgs["result"]["tipoHab"]>

  export type TipoHabSelectScalar = {
    TipoHabKey?: boolean
    TipoHabID?: boolean
    Descripcion?: boolean
    Categoria?: boolean
    CapacidadMax?: boolean
    TarifaEstandar?: boolean
  }

  export type TipoHabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TipoHabKey" | "TipoHabID" | "Descripcion" | "Categoria" | "CapacidadMax" | "TarifaEstandar", ExtArgs["result"]["tipoHab"]>
  export type TipoHabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Habitaciones?: boolean | TipoHab$HabitacionesArgs<ExtArgs>
    _count?: boolean | TipoHabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoHabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoHabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoHabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoHab"
    objects: {
      Habitaciones: Prisma.$HabitacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      TipoHabKey: number
      TipoHabID: number
      Descripcion: string
      Categoria: string
      CapacidadMax: number
      TarifaEstandar: Prisma.Decimal
    }, ExtArgs["result"]["tipoHab"]>
    composites: {}
  }

  type TipoHabGetPayload<S extends boolean | null | undefined | TipoHabDefaultArgs> = $Result.GetResult<Prisma.$TipoHabPayload, S>

  type TipoHabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoHabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoHabCountAggregateInputType | true
    }

  export interface TipoHabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoHab'], meta: { name: 'TipoHab' } }
    /**
     * Find zero or one TipoHab that matches the filter.
     * @param {TipoHabFindUniqueArgs} args - Arguments to find a TipoHab
     * @example
     * // Get one TipoHab
     * const tipoHab = await prisma.tipoHab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoHabFindUniqueArgs>(args: SelectSubset<T, TipoHabFindUniqueArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoHab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoHabFindUniqueOrThrowArgs} args - Arguments to find a TipoHab
     * @example
     * // Get one TipoHab
     * const tipoHab = await prisma.tipoHab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoHabFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoHabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoHab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabFindFirstArgs} args - Arguments to find a TipoHab
     * @example
     * // Get one TipoHab
     * const tipoHab = await prisma.tipoHab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoHabFindFirstArgs>(args?: SelectSubset<T, TipoHabFindFirstArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoHab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabFindFirstOrThrowArgs} args - Arguments to find a TipoHab
     * @example
     * // Get one TipoHab
     * const tipoHab = await prisma.tipoHab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoHabFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoHabFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoHabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoHabs
     * const tipoHabs = await prisma.tipoHab.findMany()
     * 
     * // Get first 10 TipoHabs
     * const tipoHabs = await prisma.tipoHab.findMany({ take: 10 })
     * 
     * // Only select the `TipoHabKey`
     * const tipoHabWithTipoHabKeyOnly = await prisma.tipoHab.findMany({ select: { TipoHabKey: true } })
     * 
     */
    findMany<T extends TipoHabFindManyArgs>(args?: SelectSubset<T, TipoHabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoHab.
     * @param {TipoHabCreateArgs} args - Arguments to create a TipoHab.
     * @example
     * // Create one TipoHab
     * const TipoHab = await prisma.tipoHab.create({
     *   data: {
     *     // ... data to create a TipoHab
     *   }
     * })
     * 
     */
    create<T extends TipoHabCreateArgs>(args: SelectSubset<T, TipoHabCreateArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoHabs.
     * @param {TipoHabCreateManyArgs} args - Arguments to create many TipoHabs.
     * @example
     * // Create many TipoHabs
     * const tipoHab = await prisma.tipoHab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoHabCreateManyArgs>(args?: SelectSubset<T, TipoHabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoHabs and returns the data saved in the database.
     * @param {TipoHabCreateManyAndReturnArgs} args - Arguments to create many TipoHabs.
     * @example
     * // Create many TipoHabs
     * const tipoHab = await prisma.tipoHab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoHabs and only return the `TipoHabKey`
     * const tipoHabWithTipoHabKeyOnly = await prisma.tipoHab.createManyAndReturn({
     *   select: { TipoHabKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoHabCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoHabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoHab.
     * @param {TipoHabDeleteArgs} args - Arguments to delete one TipoHab.
     * @example
     * // Delete one TipoHab
     * const TipoHab = await prisma.tipoHab.delete({
     *   where: {
     *     // ... filter to delete one TipoHab
     *   }
     * })
     * 
     */
    delete<T extends TipoHabDeleteArgs>(args: SelectSubset<T, TipoHabDeleteArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoHab.
     * @param {TipoHabUpdateArgs} args - Arguments to update one TipoHab.
     * @example
     * // Update one TipoHab
     * const tipoHab = await prisma.tipoHab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoHabUpdateArgs>(args: SelectSubset<T, TipoHabUpdateArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoHabs.
     * @param {TipoHabDeleteManyArgs} args - Arguments to filter TipoHabs to delete.
     * @example
     * // Delete a few TipoHabs
     * const { count } = await prisma.tipoHab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoHabDeleteManyArgs>(args?: SelectSubset<T, TipoHabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoHabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoHabs
     * const tipoHab = await prisma.tipoHab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoHabUpdateManyArgs>(args: SelectSubset<T, TipoHabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoHabs and returns the data updated in the database.
     * @param {TipoHabUpdateManyAndReturnArgs} args - Arguments to update many TipoHabs.
     * @example
     * // Update many TipoHabs
     * const tipoHab = await prisma.tipoHab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoHabs and only return the `TipoHabKey`
     * const tipoHabWithTipoHabKeyOnly = await prisma.tipoHab.updateManyAndReturn({
     *   select: { TipoHabKey: true },
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
    updateManyAndReturn<T extends TipoHabUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoHabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoHab.
     * @param {TipoHabUpsertArgs} args - Arguments to update or create a TipoHab.
     * @example
     * // Update or create a TipoHab
     * const tipoHab = await prisma.tipoHab.upsert({
     *   create: {
     *     // ... data to create a TipoHab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoHab we want to update
     *   }
     * })
     */
    upsert<T extends TipoHabUpsertArgs>(args: SelectSubset<T, TipoHabUpsertArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoHabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabCountArgs} args - Arguments to filter TipoHabs to count.
     * @example
     * // Count the number of TipoHabs
     * const count = await prisma.tipoHab.count({
     *   where: {
     *     // ... the filter for the TipoHabs we want to count
     *   }
     * })
    **/
    count<T extends TipoHabCountArgs>(
      args?: Subset<T, TipoHabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoHabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoHab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoHabAggregateArgs>(args: Subset<T, TipoHabAggregateArgs>): Prisma.PrismaPromise<GetTipoHabAggregateType<T>>

    /**
     * Group by TipoHab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabGroupByArgs} args - Group by arguments.
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
      T extends TipoHabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoHabGroupByArgs['orderBy'] }
        : { orderBy?: TipoHabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoHabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoHabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoHab model
   */
  readonly fields: TipoHabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoHab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoHabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Habitaciones<T extends TipoHab$HabitacionesArgs<ExtArgs> = {}>(args?: Subset<T, TipoHab$HabitacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoHab model
   */
  interface TipoHabFieldRefs {
    readonly TipoHabKey: FieldRef<"TipoHab", 'Int'>
    readonly TipoHabID: FieldRef<"TipoHab", 'Int'>
    readonly Descripcion: FieldRef<"TipoHab", 'String'>
    readonly Categoria: FieldRef<"TipoHab", 'String'>
    readonly CapacidadMax: FieldRef<"TipoHab", 'Int'>
    readonly TarifaEstandar: FieldRef<"TipoHab", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * TipoHab findUnique
   */
  export type TipoHabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * Filter, which TipoHab to fetch.
     */
    where: TipoHabWhereUniqueInput
  }

  /**
   * TipoHab findUniqueOrThrow
   */
  export type TipoHabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * Filter, which TipoHab to fetch.
     */
    where: TipoHabWhereUniqueInput
  }

  /**
   * TipoHab findFirst
   */
  export type TipoHabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * Filter, which TipoHab to fetch.
     */
    where?: TipoHabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoHabs to fetch.
     */
    orderBy?: TipoHabOrderByWithRelationInput | TipoHabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoHabs.
     */
    cursor?: TipoHabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoHabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoHabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoHabs.
     */
    distinct?: TipoHabScalarFieldEnum | TipoHabScalarFieldEnum[]
  }

  /**
   * TipoHab findFirstOrThrow
   */
  export type TipoHabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * Filter, which TipoHab to fetch.
     */
    where?: TipoHabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoHabs to fetch.
     */
    orderBy?: TipoHabOrderByWithRelationInput | TipoHabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoHabs.
     */
    cursor?: TipoHabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoHabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoHabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoHabs.
     */
    distinct?: TipoHabScalarFieldEnum | TipoHabScalarFieldEnum[]
  }

  /**
   * TipoHab findMany
   */
  export type TipoHabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * Filter, which TipoHabs to fetch.
     */
    where?: TipoHabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoHabs to fetch.
     */
    orderBy?: TipoHabOrderByWithRelationInput | TipoHabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoHabs.
     */
    cursor?: TipoHabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoHabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoHabs.
     */
    skip?: number
    distinct?: TipoHabScalarFieldEnum | TipoHabScalarFieldEnum[]
  }

  /**
   * TipoHab create
   */
  export type TipoHabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoHab.
     */
    data: XOR<TipoHabCreateInput, TipoHabUncheckedCreateInput>
  }

  /**
   * TipoHab createMany
   */
  export type TipoHabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoHabs.
     */
    data: TipoHabCreateManyInput | TipoHabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoHab createManyAndReturn
   */
  export type TipoHabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * The data used to create many TipoHabs.
     */
    data: TipoHabCreateManyInput | TipoHabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoHab update
   */
  export type TipoHabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoHab.
     */
    data: XOR<TipoHabUpdateInput, TipoHabUncheckedUpdateInput>
    /**
     * Choose, which TipoHab to update.
     */
    where: TipoHabWhereUniqueInput
  }

  /**
   * TipoHab updateMany
   */
  export type TipoHabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoHabs.
     */
    data: XOR<TipoHabUpdateManyMutationInput, TipoHabUncheckedUpdateManyInput>
    /**
     * Filter which TipoHabs to update
     */
    where?: TipoHabWhereInput
    /**
     * Limit how many TipoHabs to update.
     */
    limit?: number
  }

  /**
   * TipoHab updateManyAndReturn
   */
  export type TipoHabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * The data used to update TipoHabs.
     */
    data: XOR<TipoHabUpdateManyMutationInput, TipoHabUncheckedUpdateManyInput>
    /**
     * Filter which TipoHabs to update
     */
    where?: TipoHabWhereInput
    /**
     * Limit how many TipoHabs to update.
     */
    limit?: number
  }

  /**
   * TipoHab upsert
   */
  export type TipoHabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoHab to update in case it exists.
     */
    where: TipoHabWhereUniqueInput
    /**
     * In case the TipoHab found by the `where` argument doesn't exist, create a new TipoHab with this data.
     */
    create: XOR<TipoHabCreateInput, TipoHabUncheckedCreateInput>
    /**
     * In case the TipoHab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoHabUpdateInput, TipoHabUncheckedUpdateInput>
  }

  /**
   * TipoHab delete
   */
  export type TipoHabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
    /**
     * Filter which TipoHab to delete.
     */
    where: TipoHabWhereUniqueInput
  }

  /**
   * TipoHab deleteMany
   */
  export type TipoHabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoHabs to delete
     */
    where?: TipoHabWhereInput
    /**
     * Limit how many TipoHabs to delete.
     */
    limit?: number
  }

  /**
   * TipoHab.Habitaciones
   */
  export type TipoHab$HabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    where?: HabitacionWhereInput
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    cursor?: HabitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * TipoHab without action
   */
  export type TipoHabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHab
     */
    select?: TipoHabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHab
     */
    omit?: TipoHabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabInclude<ExtArgs> | null
  }


  /**
   * Model Habitacion
   */

  export type AggregateHabitacion = {
    _count: HabitacionCountAggregateOutputType | null
    _avg: HabitacionAvgAggregateOutputType | null
    _sum: HabitacionSumAggregateOutputType | null
    _min: HabitacionMinAggregateOutputType | null
    _max: HabitacionMaxAggregateOutputType | null
  }

  export type HabitacionAvgAggregateOutputType = {
    HabitacionKey: number | null
    HabitacionID: number | null
    HotelKey: number | null
    TipoHabKey: number | null
    Piso: number | null
    Capaciddd: number | null
  }

  export type HabitacionSumAggregateOutputType = {
    HabitacionKey: number | null
    HabitacionID: number | null
    HotelKey: number | null
    TipoHabKey: number | null
    Piso: number | null
    Capaciddd: number | null
  }

  export type HabitacionMinAggregateOutputType = {
    HabitacionKey: number | null
    HabitacionID: number | null
    HotelKey: number | null
    TipoHabKey: number | null
    NumeroHab: string | null
    Piso: number | null
    Capaciddd: number | null
    Vista: boolean | null
  }

  export type HabitacionMaxAggregateOutputType = {
    HabitacionKey: number | null
    HabitacionID: number | null
    HotelKey: number | null
    TipoHabKey: number | null
    NumeroHab: string | null
    Piso: number | null
    Capaciddd: number | null
    Vista: boolean | null
  }

  export type HabitacionCountAggregateOutputType = {
    HabitacionKey: number
    HabitacionID: number
    HotelKey: number
    TipoHabKey: number
    NumeroHab: number
    Piso: number
    Capaciddd: number
    Vista: number
    _all: number
  }


  export type HabitacionAvgAggregateInputType = {
    HabitacionKey?: true
    HabitacionID?: true
    HotelKey?: true
    TipoHabKey?: true
    Piso?: true
    Capaciddd?: true
  }

  export type HabitacionSumAggregateInputType = {
    HabitacionKey?: true
    HabitacionID?: true
    HotelKey?: true
    TipoHabKey?: true
    Piso?: true
    Capaciddd?: true
  }

  export type HabitacionMinAggregateInputType = {
    HabitacionKey?: true
    HabitacionID?: true
    HotelKey?: true
    TipoHabKey?: true
    NumeroHab?: true
    Piso?: true
    Capaciddd?: true
    Vista?: true
  }

  export type HabitacionMaxAggregateInputType = {
    HabitacionKey?: true
    HabitacionID?: true
    HotelKey?: true
    TipoHabKey?: true
    NumeroHab?: true
    Piso?: true
    Capaciddd?: true
    Vista?: true
  }

  export type HabitacionCountAggregateInputType = {
    HabitacionKey?: true
    HabitacionID?: true
    HotelKey?: true
    TipoHabKey?: true
    NumeroHab?: true
    Piso?: true
    Capaciddd?: true
    Vista?: true
    _all?: true
  }

  export type HabitacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habitacion to aggregate.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habitacions
    **/
    _count?: true | HabitacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitacionMaxAggregateInputType
  }

  export type GetHabitacionAggregateType<T extends HabitacionAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitacion[P]>
      : GetScalarType<T[P], AggregateHabitacion[P]>
  }




  export type HabitacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitacionWhereInput
    orderBy?: HabitacionOrderByWithAggregationInput | HabitacionOrderByWithAggregationInput[]
    by: HabitacionScalarFieldEnum[] | HabitacionScalarFieldEnum
    having?: HabitacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitacionCountAggregateInputType | true
    _avg?: HabitacionAvgAggregateInputType
    _sum?: HabitacionSumAggregateInputType
    _min?: HabitacionMinAggregateInputType
    _max?: HabitacionMaxAggregateInputType
  }

  export type HabitacionGroupByOutputType = {
    HabitacionKey: number
    HabitacionID: number
    HotelKey: number
    TipoHabKey: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
    _count: HabitacionCountAggregateOutputType | null
    _avg: HabitacionAvgAggregateOutputType | null
    _sum: HabitacionSumAggregateOutputType | null
    _min: HabitacionMinAggregateOutputType | null
    _max: HabitacionMaxAggregateOutputType | null
  }

  type GetHabitacionGroupByPayload<T extends HabitacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitacionGroupByOutputType[P]>
            : GetScalarType<T[P], HabitacionGroupByOutputType[P]>
        }
      >
    >


  export type HabitacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    HabitacionKey?: boolean
    HabitacionID?: boolean
    HotelKey?: boolean
    TipoHabKey?: boolean
    NumeroHab?: boolean
    Piso?: boolean
    Capaciddd?: boolean
    Vista?: boolean
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    TipoHab?: boolean | TipoHabDefaultArgs<ExtArgs>
    Reservas?: boolean | Habitacion$ReservasArgs<ExtArgs>
    _count?: boolean | HabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    HabitacionKey?: boolean
    HabitacionID?: boolean
    HotelKey?: boolean
    TipoHabKey?: boolean
    NumeroHab?: boolean
    Piso?: boolean
    Capaciddd?: boolean
    Vista?: boolean
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    TipoHab?: boolean | TipoHabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    HabitacionKey?: boolean
    HabitacionID?: boolean
    HotelKey?: boolean
    TipoHabKey?: boolean
    NumeroHab?: boolean
    Piso?: boolean
    Capaciddd?: boolean
    Vista?: boolean
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    TipoHab?: boolean | TipoHabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectScalar = {
    HabitacionKey?: boolean
    HabitacionID?: boolean
    HotelKey?: boolean
    TipoHabKey?: boolean
    NumeroHab?: boolean
    Piso?: boolean
    Capaciddd?: boolean
    Vista?: boolean
  }

  export type HabitacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"HabitacionKey" | "HabitacionID" | "HotelKey" | "TipoHabKey" | "NumeroHab" | "Piso" | "Capaciddd" | "Vista", ExtArgs["result"]["habitacion"]>
  export type HabitacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    TipoHab?: boolean | TipoHabDefaultArgs<ExtArgs>
    Reservas?: boolean | Habitacion$ReservasArgs<ExtArgs>
    _count?: boolean | HabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    TipoHab?: boolean | TipoHabDefaultArgs<ExtArgs>
  }
  export type HabitacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    TipoHab?: boolean | TipoHabDefaultArgs<ExtArgs>
  }

  export type $HabitacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habitacion"
    objects: {
      Hotel: Prisma.$HotelPayload<ExtArgs>
      TipoHab: Prisma.$TipoHabPayload<ExtArgs>
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      HabitacionKey: number
      HabitacionID: number
      HotelKey: number
      TipoHabKey: number
      NumeroHab: string
      Piso: number
      Capaciddd: number
      Vista: boolean
    }, ExtArgs["result"]["habitacion"]>
    composites: {}
  }

  type HabitacionGetPayload<S extends boolean | null | undefined | HabitacionDefaultArgs> = $Result.GetResult<Prisma.$HabitacionPayload, S>

  type HabitacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitacionCountAggregateInputType | true
    }

  export interface HabitacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habitacion'], meta: { name: 'Habitacion' } }
    /**
     * Find zero or one Habitacion that matches the filter.
     * @param {HabitacionFindUniqueArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitacionFindUniqueArgs>(args: SelectSubset<T, HabitacionFindUniqueArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habitacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitacionFindUniqueOrThrowArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitacionFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindFirstArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitacionFindFirstArgs>(args?: SelectSubset<T, HabitacionFindFirstArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindFirstOrThrowArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitacionFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habitacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habitacions
     * const habitacions = await prisma.habitacion.findMany()
     * 
     * // Get first 10 Habitacions
     * const habitacions = await prisma.habitacion.findMany({ take: 10 })
     * 
     * // Only select the `HabitacionKey`
     * const habitacionWithHabitacionKeyOnly = await prisma.habitacion.findMany({ select: { HabitacionKey: true } })
     * 
     */
    findMany<T extends HabitacionFindManyArgs>(args?: SelectSubset<T, HabitacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habitacion.
     * @param {HabitacionCreateArgs} args - Arguments to create a Habitacion.
     * @example
     * // Create one Habitacion
     * const Habitacion = await prisma.habitacion.create({
     *   data: {
     *     // ... data to create a Habitacion
     *   }
     * })
     * 
     */
    create<T extends HabitacionCreateArgs>(args: SelectSubset<T, HabitacionCreateArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habitacions.
     * @param {HabitacionCreateManyArgs} args - Arguments to create many Habitacions.
     * @example
     * // Create many Habitacions
     * const habitacion = await prisma.habitacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitacionCreateManyArgs>(args?: SelectSubset<T, HabitacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habitacions and returns the data saved in the database.
     * @param {HabitacionCreateManyAndReturnArgs} args - Arguments to create many Habitacions.
     * @example
     * // Create many Habitacions
     * const habitacion = await prisma.habitacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habitacions and only return the `HabitacionKey`
     * const habitacionWithHabitacionKeyOnly = await prisma.habitacion.createManyAndReturn({
     *   select: { HabitacionKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitacionCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habitacion.
     * @param {HabitacionDeleteArgs} args - Arguments to delete one Habitacion.
     * @example
     * // Delete one Habitacion
     * const Habitacion = await prisma.habitacion.delete({
     *   where: {
     *     // ... filter to delete one Habitacion
     *   }
     * })
     * 
     */
    delete<T extends HabitacionDeleteArgs>(args: SelectSubset<T, HabitacionDeleteArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habitacion.
     * @param {HabitacionUpdateArgs} args - Arguments to update one Habitacion.
     * @example
     * // Update one Habitacion
     * const habitacion = await prisma.habitacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitacionUpdateArgs>(args: SelectSubset<T, HabitacionUpdateArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habitacions.
     * @param {HabitacionDeleteManyArgs} args - Arguments to filter Habitacions to delete.
     * @example
     * // Delete a few Habitacions
     * const { count } = await prisma.habitacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitacionDeleteManyArgs>(args?: SelectSubset<T, HabitacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habitacions
     * const habitacion = await prisma.habitacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitacionUpdateManyArgs>(args: SelectSubset<T, HabitacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitacions and returns the data updated in the database.
     * @param {HabitacionUpdateManyAndReturnArgs} args - Arguments to update many Habitacions.
     * @example
     * // Update many Habitacions
     * const habitacion = await prisma.habitacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habitacions and only return the `HabitacionKey`
     * const habitacionWithHabitacionKeyOnly = await prisma.habitacion.updateManyAndReturn({
     *   select: { HabitacionKey: true },
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
    updateManyAndReturn<T extends HabitacionUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habitacion.
     * @param {HabitacionUpsertArgs} args - Arguments to update or create a Habitacion.
     * @example
     * // Update or create a Habitacion
     * const habitacion = await prisma.habitacion.upsert({
     *   create: {
     *     // ... data to create a Habitacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habitacion we want to update
     *   }
     * })
     */
    upsert<T extends HabitacionUpsertArgs>(args: SelectSubset<T, HabitacionUpsertArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionCountArgs} args - Arguments to filter Habitacions to count.
     * @example
     * // Count the number of Habitacions
     * const count = await prisma.habitacion.count({
     *   where: {
     *     // ... the filter for the Habitacions we want to count
     *   }
     * })
    **/
    count<T extends HabitacionCountArgs>(
      args?: Subset<T, HabitacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitacionAggregateArgs>(args: Subset<T, HabitacionAggregateArgs>): Prisma.PrismaPromise<GetHabitacionAggregateType<T>>

    /**
     * Group by Habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionGroupByArgs} args - Group by arguments.
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
      T extends HabitacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitacionGroupByArgs['orderBy'] }
        : { orderBy?: HabitacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habitacion model
   */
  readonly fields: HabitacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habitacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TipoHab<T extends TipoHabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoHabDefaultArgs<ExtArgs>>): Prisma__TipoHabClient<$Result.GetResult<Prisma.$TipoHabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Reservas<T extends Habitacion$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, Habitacion$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Habitacion model
   */
  interface HabitacionFieldRefs {
    readonly HabitacionKey: FieldRef<"Habitacion", 'Int'>
    readonly HabitacionID: FieldRef<"Habitacion", 'Int'>
    readonly HotelKey: FieldRef<"Habitacion", 'Int'>
    readonly TipoHabKey: FieldRef<"Habitacion", 'Int'>
    readonly NumeroHab: FieldRef<"Habitacion", 'String'>
    readonly Piso: FieldRef<"Habitacion", 'Int'>
    readonly Capaciddd: FieldRef<"Habitacion", 'Int'>
    readonly Vista: FieldRef<"Habitacion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Habitacion findUnique
   */
  export type HabitacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion findUniqueOrThrow
   */
  export type HabitacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion findFirst
   */
  export type HabitacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habitacions.
     */
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion findFirstOrThrow
   */
  export type HabitacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habitacions.
     */
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion findMany
   */
  export type HabitacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacions to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion create
   */
  export type HabitacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Habitacion.
     */
    data: XOR<HabitacionCreateInput, HabitacionUncheckedCreateInput>
  }

  /**
   * Habitacion createMany
   */
  export type HabitacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habitacions.
     */
    data: HabitacionCreateManyInput | HabitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habitacion createManyAndReturn
   */
  export type HabitacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * The data used to create many Habitacions.
     */
    data: HabitacionCreateManyInput | HabitacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habitacion update
   */
  export type HabitacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Habitacion.
     */
    data: XOR<HabitacionUpdateInput, HabitacionUncheckedUpdateInput>
    /**
     * Choose, which Habitacion to update.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion updateMany
   */
  export type HabitacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habitacions.
     */
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyInput>
    /**
     * Filter which Habitacions to update
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to update.
     */
    limit?: number
  }

  /**
   * Habitacion updateManyAndReturn
   */
  export type HabitacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * The data used to update Habitacions.
     */
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyInput>
    /**
     * Filter which Habitacions to update
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habitacion upsert
   */
  export type HabitacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Habitacion to update in case it exists.
     */
    where: HabitacionWhereUniqueInput
    /**
     * In case the Habitacion found by the `where` argument doesn't exist, create a new Habitacion with this data.
     */
    create: XOR<HabitacionCreateInput, HabitacionUncheckedCreateInput>
    /**
     * In case the Habitacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitacionUpdateInput, HabitacionUncheckedUpdateInput>
  }

  /**
   * Habitacion delete
   */
  export type HabitacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter which Habitacion to delete.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion deleteMany
   */
  export type HabitacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habitacions to delete
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to delete.
     */
    limit?: number
  }

  /**
   * Habitacion.Reservas
   */
  export type Habitacion$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Habitacion without action
   */
  export type HabitacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
  }


  /**
   * Model Fecha
   */

  export type AggregateFecha = {
    _count: FechaCountAggregateOutputType | null
    _avg: FechaAvgAggregateOutputType | null
    _sum: FechaSumAggregateOutputType | null
    _min: FechaMinAggregateOutputType | null
    _max: FechaMaxAggregateOutputType | null
  }

  export type FechaAvgAggregateOutputType = {
    FechaKey: number | null
    Año: number | null
    Trimestre: number | null
    Mes: number | null
    Dia: number | null
  }

  export type FechaSumAggregateOutputType = {
    FechaKey: number | null
    Año: number | null
    Trimestre: number | null
    Mes: number | null
    Dia: number | null
  }

  export type FechaMinAggregateOutputType = {
    FechaKey: number | null
    Fecha: Date | null
    Año: number | null
    Trimestre: number | null
    Mes: number | null
    Dia: number | null
    DiaSemana: string | null
    EsFinDeSemana: boolean | null
  }

  export type FechaMaxAggregateOutputType = {
    FechaKey: number | null
    Fecha: Date | null
    Año: number | null
    Trimestre: number | null
    Mes: number | null
    Dia: number | null
    DiaSemana: string | null
    EsFinDeSemana: boolean | null
  }

  export type FechaCountAggregateOutputType = {
    FechaKey: number
    Fecha: number
    Año: number
    Trimestre: number
    Mes: number
    Dia: number
    DiaSemana: number
    EsFinDeSemana: number
    _all: number
  }


  export type FechaAvgAggregateInputType = {
    FechaKey?: true
    Año?: true
    Trimestre?: true
    Mes?: true
    Dia?: true
  }

  export type FechaSumAggregateInputType = {
    FechaKey?: true
    Año?: true
    Trimestre?: true
    Mes?: true
    Dia?: true
  }

  export type FechaMinAggregateInputType = {
    FechaKey?: true
    Fecha?: true
    Año?: true
    Trimestre?: true
    Mes?: true
    Dia?: true
    DiaSemana?: true
    EsFinDeSemana?: true
  }

  export type FechaMaxAggregateInputType = {
    FechaKey?: true
    Fecha?: true
    Año?: true
    Trimestre?: true
    Mes?: true
    Dia?: true
    DiaSemana?: true
    EsFinDeSemana?: true
  }

  export type FechaCountAggregateInputType = {
    FechaKey?: true
    Fecha?: true
    Año?: true
    Trimestre?: true
    Mes?: true
    Dia?: true
    DiaSemana?: true
    EsFinDeSemana?: true
    _all?: true
  }

  export type FechaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fecha to aggregate.
     */
    where?: FechaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fechas to fetch.
     */
    orderBy?: FechaOrderByWithRelationInput | FechaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FechaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fechas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fechas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fechas
    **/
    _count?: true | FechaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FechaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FechaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FechaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FechaMaxAggregateInputType
  }

  export type GetFechaAggregateType<T extends FechaAggregateArgs> = {
        [P in keyof T & keyof AggregateFecha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFecha[P]>
      : GetScalarType<T[P], AggregateFecha[P]>
  }




  export type FechaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FechaWhereInput
    orderBy?: FechaOrderByWithAggregationInput | FechaOrderByWithAggregationInput[]
    by: FechaScalarFieldEnum[] | FechaScalarFieldEnum
    having?: FechaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FechaCountAggregateInputType | true
    _avg?: FechaAvgAggregateInputType
    _sum?: FechaSumAggregateInputType
    _min?: FechaMinAggregateInputType
    _max?: FechaMaxAggregateInputType
  }

  export type FechaGroupByOutputType = {
    FechaKey: number
    Fecha: Date
    Año: number
    Trimestre: number
    Mes: number
    Dia: number
    DiaSemana: string
    EsFinDeSemana: boolean
    _count: FechaCountAggregateOutputType | null
    _avg: FechaAvgAggregateOutputType | null
    _sum: FechaSumAggregateOutputType | null
    _min: FechaMinAggregateOutputType | null
    _max: FechaMaxAggregateOutputType | null
  }

  type GetFechaGroupByPayload<T extends FechaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FechaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FechaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FechaGroupByOutputType[P]>
            : GetScalarType<T[P], FechaGroupByOutputType[P]>
        }
      >
    >


  export type FechaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FechaKey?: boolean
    Fecha?: boolean
    Año?: boolean
    Trimestre?: boolean
    Mes?: boolean
    Dia?: boolean
    DiaSemana?: boolean
    EsFinDeSemana?: boolean
    Reservas?: boolean | Fecha$ReservasArgs<ExtArgs>
    _count?: boolean | FechaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fecha"]>

  export type FechaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FechaKey?: boolean
    Fecha?: boolean
    Año?: boolean
    Trimestre?: boolean
    Mes?: boolean
    Dia?: boolean
    DiaSemana?: boolean
    EsFinDeSemana?: boolean
  }, ExtArgs["result"]["fecha"]>

  export type FechaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FechaKey?: boolean
    Fecha?: boolean
    Año?: boolean
    Trimestre?: boolean
    Mes?: boolean
    Dia?: boolean
    DiaSemana?: boolean
    EsFinDeSemana?: boolean
  }, ExtArgs["result"]["fecha"]>

  export type FechaSelectScalar = {
    FechaKey?: boolean
    Fecha?: boolean
    Año?: boolean
    Trimestre?: boolean
    Mes?: boolean
    Dia?: boolean
    DiaSemana?: boolean
    EsFinDeSemana?: boolean
  }

  export type FechaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"FechaKey" | "Fecha" | "Año" | "Trimestre" | "Mes" | "Dia" | "DiaSemana" | "EsFinDeSemana", ExtArgs["result"]["fecha"]>
  export type FechaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | Fecha$ReservasArgs<ExtArgs>
    _count?: boolean | FechaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FechaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FechaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FechaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fecha"
    objects: {
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      FechaKey: number
      Fecha: Date
      Año: number
      Trimestre: number
      Mes: number
      Dia: number
      DiaSemana: string
      EsFinDeSemana: boolean
    }, ExtArgs["result"]["fecha"]>
    composites: {}
  }

  type FechaGetPayload<S extends boolean | null | undefined | FechaDefaultArgs> = $Result.GetResult<Prisma.$FechaPayload, S>

  type FechaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FechaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FechaCountAggregateInputType | true
    }

  export interface FechaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fecha'], meta: { name: 'Fecha' } }
    /**
     * Find zero or one Fecha that matches the filter.
     * @param {FechaFindUniqueArgs} args - Arguments to find a Fecha
     * @example
     * // Get one Fecha
     * const fecha = await prisma.fecha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FechaFindUniqueArgs>(args: SelectSubset<T, FechaFindUniqueArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fecha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FechaFindUniqueOrThrowArgs} args - Arguments to find a Fecha
     * @example
     * // Get one Fecha
     * const fecha = await prisma.fecha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FechaFindUniqueOrThrowArgs>(args: SelectSubset<T, FechaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fecha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaFindFirstArgs} args - Arguments to find a Fecha
     * @example
     * // Get one Fecha
     * const fecha = await prisma.fecha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FechaFindFirstArgs>(args?: SelectSubset<T, FechaFindFirstArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fecha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaFindFirstOrThrowArgs} args - Arguments to find a Fecha
     * @example
     * // Get one Fecha
     * const fecha = await prisma.fecha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FechaFindFirstOrThrowArgs>(args?: SelectSubset<T, FechaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fechas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fechas
     * const fechas = await prisma.fecha.findMany()
     * 
     * // Get first 10 Fechas
     * const fechas = await prisma.fecha.findMany({ take: 10 })
     * 
     * // Only select the `FechaKey`
     * const fechaWithFechaKeyOnly = await prisma.fecha.findMany({ select: { FechaKey: true } })
     * 
     */
    findMany<T extends FechaFindManyArgs>(args?: SelectSubset<T, FechaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fecha.
     * @param {FechaCreateArgs} args - Arguments to create a Fecha.
     * @example
     * // Create one Fecha
     * const Fecha = await prisma.fecha.create({
     *   data: {
     *     // ... data to create a Fecha
     *   }
     * })
     * 
     */
    create<T extends FechaCreateArgs>(args: SelectSubset<T, FechaCreateArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fechas.
     * @param {FechaCreateManyArgs} args - Arguments to create many Fechas.
     * @example
     * // Create many Fechas
     * const fecha = await prisma.fecha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FechaCreateManyArgs>(args?: SelectSubset<T, FechaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fechas and returns the data saved in the database.
     * @param {FechaCreateManyAndReturnArgs} args - Arguments to create many Fechas.
     * @example
     * // Create many Fechas
     * const fecha = await prisma.fecha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fechas and only return the `FechaKey`
     * const fechaWithFechaKeyOnly = await prisma.fecha.createManyAndReturn({
     *   select: { FechaKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FechaCreateManyAndReturnArgs>(args?: SelectSubset<T, FechaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fecha.
     * @param {FechaDeleteArgs} args - Arguments to delete one Fecha.
     * @example
     * // Delete one Fecha
     * const Fecha = await prisma.fecha.delete({
     *   where: {
     *     // ... filter to delete one Fecha
     *   }
     * })
     * 
     */
    delete<T extends FechaDeleteArgs>(args: SelectSubset<T, FechaDeleteArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fecha.
     * @param {FechaUpdateArgs} args - Arguments to update one Fecha.
     * @example
     * // Update one Fecha
     * const fecha = await prisma.fecha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FechaUpdateArgs>(args: SelectSubset<T, FechaUpdateArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fechas.
     * @param {FechaDeleteManyArgs} args - Arguments to filter Fechas to delete.
     * @example
     * // Delete a few Fechas
     * const { count } = await prisma.fecha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FechaDeleteManyArgs>(args?: SelectSubset<T, FechaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fechas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fechas
     * const fecha = await prisma.fecha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FechaUpdateManyArgs>(args: SelectSubset<T, FechaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fechas and returns the data updated in the database.
     * @param {FechaUpdateManyAndReturnArgs} args - Arguments to update many Fechas.
     * @example
     * // Update many Fechas
     * const fecha = await prisma.fecha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fechas and only return the `FechaKey`
     * const fechaWithFechaKeyOnly = await prisma.fecha.updateManyAndReturn({
     *   select: { FechaKey: true },
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
    updateManyAndReturn<T extends FechaUpdateManyAndReturnArgs>(args: SelectSubset<T, FechaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fecha.
     * @param {FechaUpsertArgs} args - Arguments to update or create a Fecha.
     * @example
     * // Update or create a Fecha
     * const fecha = await prisma.fecha.upsert({
     *   create: {
     *     // ... data to create a Fecha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fecha we want to update
     *   }
     * })
     */
    upsert<T extends FechaUpsertArgs>(args: SelectSubset<T, FechaUpsertArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fechas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaCountArgs} args - Arguments to filter Fechas to count.
     * @example
     * // Count the number of Fechas
     * const count = await prisma.fecha.count({
     *   where: {
     *     // ... the filter for the Fechas we want to count
     *   }
     * })
    **/
    count<T extends FechaCountArgs>(
      args?: Subset<T, FechaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FechaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fecha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FechaAggregateArgs>(args: Subset<T, FechaAggregateArgs>): Prisma.PrismaPromise<GetFechaAggregateType<T>>

    /**
     * Group by Fecha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechaGroupByArgs} args - Group by arguments.
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
      T extends FechaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FechaGroupByArgs['orderBy'] }
        : { orderBy?: FechaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FechaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFechaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fecha model
   */
  readonly fields: FechaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fecha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FechaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Reservas<T extends Fecha$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, Fecha$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fecha model
   */
  interface FechaFieldRefs {
    readonly FechaKey: FieldRef<"Fecha", 'Int'>
    readonly Fecha: FieldRef<"Fecha", 'DateTime'>
    readonly Año: FieldRef<"Fecha", 'Int'>
    readonly Trimestre: FieldRef<"Fecha", 'Int'>
    readonly Mes: FieldRef<"Fecha", 'Int'>
    readonly Dia: FieldRef<"Fecha", 'Int'>
    readonly DiaSemana: FieldRef<"Fecha", 'String'>
    readonly EsFinDeSemana: FieldRef<"Fecha", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Fecha findUnique
   */
  export type FechaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * Filter, which Fecha to fetch.
     */
    where: FechaWhereUniqueInput
  }

  /**
   * Fecha findUniqueOrThrow
   */
  export type FechaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * Filter, which Fecha to fetch.
     */
    where: FechaWhereUniqueInput
  }

  /**
   * Fecha findFirst
   */
  export type FechaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * Filter, which Fecha to fetch.
     */
    where?: FechaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fechas to fetch.
     */
    orderBy?: FechaOrderByWithRelationInput | FechaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fechas.
     */
    cursor?: FechaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fechas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fechas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fechas.
     */
    distinct?: FechaScalarFieldEnum | FechaScalarFieldEnum[]
  }

  /**
   * Fecha findFirstOrThrow
   */
  export type FechaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * Filter, which Fecha to fetch.
     */
    where?: FechaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fechas to fetch.
     */
    orderBy?: FechaOrderByWithRelationInput | FechaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fechas.
     */
    cursor?: FechaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fechas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fechas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fechas.
     */
    distinct?: FechaScalarFieldEnum | FechaScalarFieldEnum[]
  }

  /**
   * Fecha findMany
   */
  export type FechaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * Filter, which Fechas to fetch.
     */
    where?: FechaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fechas to fetch.
     */
    orderBy?: FechaOrderByWithRelationInput | FechaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fechas.
     */
    cursor?: FechaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fechas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fechas.
     */
    skip?: number
    distinct?: FechaScalarFieldEnum | FechaScalarFieldEnum[]
  }

  /**
   * Fecha create
   */
  export type FechaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * The data needed to create a Fecha.
     */
    data: XOR<FechaCreateInput, FechaUncheckedCreateInput>
  }

  /**
   * Fecha createMany
   */
  export type FechaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fechas.
     */
    data: FechaCreateManyInput | FechaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fecha createManyAndReturn
   */
  export type FechaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * The data used to create many Fechas.
     */
    data: FechaCreateManyInput | FechaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fecha update
   */
  export type FechaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * The data needed to update a Fecha.
     */
    data: XOR<FechaUpdateInput, FechaUncheckedUpdateInput>
    /**
     * Choose, which Fecha to update.
     */
    where: FechaWhereUniqueInput
  }

  /**
   * Fecha updateMany
   */
  export type FechaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fechas.
     */
    data: XOR<FechaUpdateManyMutationInput, FechaUncheckedUpdateManyInput>
    /**
     * Filter which Fechas to update
     */
    where?: FechaWhereInput
    /**
     * Limit how many Fechas to update.
     */
    limit?: number
  }

  /**
   * Fecha updateManyAndReturn
   */
  export type FechaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * The data used to update Fechas.
     */
    data: XOR<FechaUpdateManyMutationInput, FechaUncheckedUpdateManyInput>
    /**
     * Filter which Fechas to update
     */
    where?: FechaWhereInput
    /**
     * Limit how many Fechas to update.
     */
    limit?: number
  }

  /**
   * Fecha upsert
   */
  export type FechaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * The filter to search for the Fecha to update in case it exists.
     */
    where: FechaWhereUniqueInput
    /**
     * In case the Fecha found by the `where` argument doesn't exist, create a new Fecha with this data.
     */
    create: XOR<FechaCreateInput, FechaUncheckedCreateInput>
    /**
     * In case the Fecha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FechaUpdateInput, FechaUncheckedUpdateInput>
  }

  /**
   * Fecha delete
   */
  export type FechaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
    /**
     * Filter which Fecha to delete.
     */
    where: FechaWhereUniqueInput
  }

  /**
   * Fecha deleteMany
   */
  export type FechaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fechas to delete
     */
    where?: FechaWhereInput
    /**
     * Limit how many Fechas to delete.
     */
    limit?: number
  }

  /**
   * Fecha.Reservas
   */
  export type Fecha$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Fecha without action
   */
  export type FechaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fecha
     */
    select?: FechaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fecha
     */
    omit?: FechaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechaInclude<ExtArgs> | null
  }


  /**
   * Model Empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoAvgAggregateOutputType = {
    EmpleadoKey: number | null
    EmpleadoID: number | null
  }

  export type EmpleadoSumAggregateOutputType = {
    EmpleadoKey: number | null
    EmpleadoID: number | null
  }

  export type EmpleadoMinAggregateOutputType = {
    EmpleadoKey: number | null
    EmpleadoID: number | null
    Nombre: string | null
    Apellido: string | null
    Puesto: string | null
    Departamento: string | null
    FechaContratacion: Date | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    EmpleadoKey: number | null
    EmpleadoID: number | null
    Nombre: string | null
    Apellido: string | null
    Puesto: string | null
    Departamento: string | null
    FechaContratacion: Date | null
  }

  export type EmpleadoCountAggregateOutputType = {
    EmpleadoKey: number
    EmpleadoID: number
    Nombre: number
    Apellido: number
    Puesto: number
    Departamento: number
    FechaContratacion: number
    _all: number
  }


  export type EmpleadoAvgAggregateInputType = {
    EmpleadoKey?: true
    EmpleadoID?: true
  }

  export type EmpleadoSumAggregateInputType = {
    EmpleadoKey?: true
    EmpleadoID?: true
  }

  export type EmpleadoMinAggregateInputType = {
    EmpleadoKey?: true
    EmpleadoID?: true
    Nombre?: true
    Apellido?: true
    Puesto?: true
    Departamento?: true
    FechaContratacion?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    EmpleadoKey?: true
    EmpleadoID?: true
    Nombre?: true
    Apellido?: true
    Puesto?: true
    Departamento?: true
    FechaContratacion?: true
  }

  export type EmpleadoCountAggregateInputType = {
    EmpleadoKey?: true
    EmpleadoID?: true
    Nombre?: true
    Apellido?: true
    Puesto?: true
    Departamento?: true
    FechaContratacion?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleado to aggregate.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type EmpleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithAggregationInput | EmpleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: EmpleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _avg?: EmpleadoAvgAggregateInputType
    _sum?: EmpleadoSumAggregateInputType
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    EmpleadoKey: number
    EmpleadoID: number
    Nombre: string
    Apellido: string
    Puesto: string
    Departamento: string
    FechaContratacion: Date
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends EmpleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type EmpleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmpleadoKey?: boolean
    EmpleadoID?: boolean
    Nombre?: boolean
    Apellido?: boolean
    Puesto?: boolean
    Departamento?: boolean
    FechaContratacion?: boolean
    Reservas?: boolean | Empleado$ReservasArgs<ExtArgs>
    Credencial?: boolean | Empleado$CredencialArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmpleadoKey?: boolean
    EmpleadoID?: boolean
    Nombre?: boolean
    Apellido?: boolean
    Puesto?: boolean
    Departamento?: boolean
    FechaContratacion?: boolean
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmpleadoKey?: boolean
    EmpleadoID?: boolean
    Nombre?: boolean
    Apellido?: boolean
    Puesto?: boolean
    Departamento?: boolean
    FechaContratacion?: boolean
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectScalar = {
    EmpleadoKey?: boolean
    EmpleadoID?: boolean
    Nombre?: boolean
    Apellido?: boolean
    Puesto?: boolean
    Departamento?: boolean
    FechaContratacion?: boolean
  }

  export type EmpleadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EmpleadoKey" | "EmpleadoID" | "Nombre" | "Apellido" | "Puesto" | "Departamento" | "FechaContratacion", ExtArgs["result"]["empleado"]>
  export type EmpleadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | Empleado$ReservasArgs<ExtArgs>
    Credencial?: boolean | Empleado$CredencialArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpleadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpleadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empleado"
    objects: {
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
      Credencial: Prisma.$CredencialPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      EmpleadoKey: number
      EmpleadoID: number
      Nombre: string
      Apellido: string
      Puesto: string
      Departamento: string
      FechaContratacion: Date
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type EmpleadoGetPayload<S extends boolean | null | undefined | EmpleadoDefaultArgs> = $Result.GetResult<Prisma.$EmpleadoPayload, S>

  type EmpleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpleadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface EmpleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empleado'], meta: { name: 'Empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {EmpleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpleadoFindUniqueArgs>(args: SelectSubset<T, EmpleadoFindUniqueArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpleadoFindFirstArgs>(args?: SelectSubset<T, EmpleadoFindFirstArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `EmpleadoKey`
     * const empleadoWithEmpleadoKeyOnly = await prisma.empleado.findMany({ select: { EmpleadoKey: true } })
     * 
     */
    findMany<T extends EmpleadoFindManyArgs>(args?: SelectSubset<T, EmpleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empleado.
     * @param {EmpleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends EmpleadoCreateArgs>(args: SelectSubset<T, EmpleadoCreateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empleados.
     * @param {EmpleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpleadoCreateManyArgs>(args?: SelectSubset<T, EmpleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empleados and returns the data saved in the database.
     * @param {EmpleadoCreateManyAndReturnArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empleados and only return the `EmpleadoKey`
     * const empleadoWithEmpleadoKeyOnly = await prisma.empleado.createManyAndReturn({
     *   select: { EmpleadoKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpleadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpleadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empleado.
     * @param {EmpleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends EmpleadoDeleteArgs>(args: SelectSubset<T, EmpleadoDeleteArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empleado.
     * @param {EmpleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpleadoUpdateArgs>(args: SelectSubset<T, EmpleadoUpdateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empleados.
     * @param {EmpleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpleadoDeleteManyArgs>(args?: SelectSubset<T, EmpleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpleadoUpdateManyArgs>(args: SelectSubset<T, EmpleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados and returns the data updated in the database.
     * @param {EmpleadoUpdateManyAndReturnArgs} args - Arguments to update many Empleados.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empleados and only return the `EmpleadoKey`
     * const empleadoWithEmpleadoKeyOnly = await prisma.empleado.updateManyAndReturn({
     *   select: { EmpleadoKey: true },
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
    updateManyAndReturn<T extends EmpleadoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpleadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empleado.
     * @param {EmpleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends EmpleadoUpsertArgs>(args: SelectSubset<T, EmpleadoUpsertArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends EmpleadoCountArgs>(
      args?: Subset<T, EmpleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoGroupByArgs} args - Group by arguments.
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
      T extends EmpleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpleadoGroupByArgs['orderBy'] }
        : { orderBy?: EmpleadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empleado model
   */
  readonly fields: EmpleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Reservas<T extends Empleado$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Credencial<T extends Empleado$CredencialArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$CredencialArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Empleado model
   */
  interface EmpleadoFieldRefs {
    readonly EmpleadoKey: FieldRef<"Empleado", 'Int'>
    readonly EmpleadoID: FieldRef<"Empleado", 'Int'>
    readonly Nombre: FieldRef<"Empleado", 'String'>
    readonly Apellido: FieldRef<"Empleado", 'String'>
    readonly Puesto: FieldRef<"Empleado", 'String'>
    readonly Departamento: FieldRef<"Empleado", 'String'>
    readonly FechaContratacion: FieldRef<"Empleado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empleado findUnique
   */
  export type EmpleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findUniqueOrThrow
   */
  export type EmpleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findFirst
   */
  export type EmpleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findFirstOrThrow
   */
  export type EmpleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findMany
   */
  export type EmpleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado create
   */
  export type EmpleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Empleado.
     */
    data: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
  }

  /**
   * Empleado createMany
   */
  export type EmpleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado createManyAndReturn
   */
  export type EmpleadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado update
   */
  export type EmpleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Empleado.
     */
    data: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
    /**
     * Choose, which Empleado to update.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado updateMany
   */
  export type EmpleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
  }

  /**
   * Empleado updateManyAndReturn
   */
  export type EmpleadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
  }

  /**
   * Empleado upsert
   */
  export type EmpleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Empleado to update in case it exists.
     */
    where: EmpleadoWhereUniqueInput
    /**
     * In case the Empleado found by the `where` argument doesn't exist, create a new Empleado with this data.
     */
    create: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
    /**
     * In case the Empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
  }

  /**
   * Empleado delete
   */
  export type EmpleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter which Empleado to delete.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado deleteMany
   */
  export type EmpleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleados to delete
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to delete.
     */
    limit?: number
  }

  /**
   * Empleado.Reservas
   */
  export type Empleado$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Empleado.Credencial
   */
  export type Empleado$CredencialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    where?: CredencialWhereInput
  }

  /**
   * Empleado without action
   */
  export type EmpleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
  }


  /**
   * Model Credencial
   */

  export type AggregateCredencial = {
    _count: CredencialCountAggregateOutputType | null
    _avg: CredencialAvgAggregateOutputType | null
    _sum: CredencialSumAggregateOutputType | null
    _min: CredencialMinAggregateOutputType | null
    _max: CredencialMaxAggregateOutputType | null
  }

  export type CredencialAvgAggregateOutputType = {
    CredencialKey: number | null
    EmpKey: number | null
  }

  export type CredencialSumAggregateOutputType = {
    CredencialKey: number | null
    EmpKey: number | null
  }

  export type CredencialMinAggregateOutputType = {
    CredencialKey: number | null
    EmpKey: number | null
    Usuario: string | null
    PasswordHash: string | null
    Rol: string | null
    Estado: boolean | null
  }

  export type CredencialMaxAggregateOutputType = {
    CredencialKey: number | null
    EmpKey: number | null
    Usuario: string | null
    PasswordHash: string | null
    Rol: string | null
    Estado: boolean | null
  }

  export type CredencialCountAggregateOutputType = {
    CredencialKey: number
    EmpKey: number
    Usuario: number
    PasswordHash: number
    Rol: number
    Estado: number
    _all: number
  }


  export type CredencialAvgAggregateInputType = {
    CredencialKey?: true
    EmpKey?: true
  }

  export type CredencialSumAggregateInputType = {
    CredencialKey?: true
    EmpKey?: true
  }

  export type CredencialMinAggregateInputType = {
    CredencialKey?: true
    EmpKey?: true
    Usuario?: true
    PasswordHash?: true
    Rol?: true
    Estado?: true
  }

  export type CredencialMaxAggregateInputType = {
    CredencialKey?: true
    EmpKey?: true
    Usuario?: true
    PasswordHash?: true
    Rol?: true
    Estado?: true
  }

  export type CredencialCountAggregateInputType = {
    CredencialKey?: true
    EmpKey?: true
    Usuario?: true
    PasswordHash?: true
    Rol?: true
    Estado?: true
    _all?: true
  }

  export type CredencialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credencial to aggregate.
     */
    where?: CredencialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credencials to fetch.
     */
    orderBy?: CredencialOrderByWithRelationInput | CredencialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredencialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credencials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credencials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credencials
    **/
    _count?: true | CredencialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CredencialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CredencialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredencialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredencialMaxAggregateInputType
  }

  export type GetCredencialAggregateType<T extends CredencialAggregateArgs> = {
        [P in keyof T & keyof AggregateCredencial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredencial[P]>
      : GetScalarType<T[P], AggregateCredencial[P]>
  }




  export type CredencialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredencialWhereInput
    orderBy?: CredencialOrderByWithAggregationInput | CredencialOrderByWithAggregationInput[]
    by: CredencialScalarFieldEnum[] | CredencialScalarFieldEnum
    having?: CredencialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredencialCountAggregateInputType | true
    _avg?: CredencialAvgAggregateInputType
    _sum?: CredencialSumAggregateInputType
    _min?: CredencialMinAggregateInputType
    _max?: CredencialMaxAggregateInputType
  }

  export type CredencialGroupByOutputType = {
    CredencialKey: number
    EmpKey: number
    Usuario: string
    PasswordHash: string
    Rol: string
    Estado: boolean
    _count: CredencialCountAggregateOutputType | null
    _avg: CredencialAvgAggregateOutputType | null
    _sum: CredencialSumAggregateOutputType | null
    _min: CredencialMinAggregateOutputType | null
    _max: CredencialMaxAggregateOutputType | null
  }

  type GetCredencialGroupByPayload<T extends CredencialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredencialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredencialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredencialGroupByOutputType[P]>
            : GetScalarType<T[P], CredencialGroupByOutputType[P]>
        }
      >
    >


  export type CredencialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CredencialKey?: boolean
    EmpKey?: boolean
    Usuario?: boolean
    PasswordHash?: boolean
    Rol?: boolean
    Estado?: boolean
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credencial"]>

  export type CredencialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CredencialKey?: boolean
    EmpKey?: boolean
    Usuario?: boolean
    PasswordHash?: boolean
    Rol?: boolean
    Estado?: boolean
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credencial"]>

  export type CredencialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CredencialKey?: boolean
    EmpKey?: boolean
    Usuario?: boolean
    PasswordHash?: boolean
    Rol?: boolean
    Estado?: boolean
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credencial"]>

  export type CredencialSelectScalar = {
    CredencialKey?: boolean
    EmpKey?: boolean
    Usuario?: boolean
    PasswordHash?: boolean
    Rol?: boolean
    Estado?: boolean
  }

  export type CredencialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CredencialKey" | "EmpKey" | "Usuario" | "PasswordHash" | "Rol" | "Estado", ExtArgs["result"]["credencial"]>
  export type CredencialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }
  export type CredencialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }
  export type CredencialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }

  export type $CredencialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credencial"
    objects: {
      Empleado: Prisma.$EmpleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CredencialKey: number
      EmpKey: number
      Usuario: string
      PasswordHash: string
      Rol: string
      Estado: boolean
    }, ExtArgs["result"]["credencial"]>
    composites: {}
  }

  type CredencialGetPayload<S extends boolean | null | undefined | CredencialDefaultArgs> = $Result.GetResult<Prisma.$CredencialPayload, S>

  type CredencialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredencialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredencialCountAggregateInputType | true
    }

  export interface CredencialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credencial'], meta: { name: 'Credencial' } }
    /**
     * Find zero or one Credencial that matches the filter.
     * @param {CredencialFindUniqueArgs} args - Arguments to find a Credencial
     * @example
     * // Get one Credencial
     * const credencial = await prisma.credencial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredencialFindUniqueArgs>(args: SelectSubset<T, CredencialFindUniqueArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credencial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredencialFindUniqueOrThrowArgs} args - Arguments to find a Credencial
     * @example
     * // Get one Credencial
     * const credencial = await prisma.credencial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredencialFindUniqueOrThrowArgs>(args: SelectSubset<T, CredencialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credencial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialFindFirstArgs} args - Arguments to find a Credencial
     * @example
     * // Get one Credencial
     * const credencial = await prisma.credencial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredencialFindFirstArgs>(args?: SelectSubset<T, CredencialFindFirstArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credencial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialFindFirstOrThrowArgs} args - Arguments to find a Credencial
     * @example
     * // Get one Credencial
     * const credencial = await prisma.credencial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredencialFindFirstOrThrowArgs>(args?: SelectSubset<T, CredencialFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credencials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credencials
     * const credencials = await prisma.credencial.findMany()
     * 
     * // Get first 10 Credencials
     * const credencials = await prisma.credencial.findMany({ take: 10 })
     * 
     * // Only select the `CredencialKey`
     * const credencialWithCredencialKeyOnly = await prisma.credencial.findMany({ select: { CredencialKey: true } })
     * 
     */
    findMany<T extends CredencialFindManyArgs>(args?: SelectSubset<T, CredencialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credencial.
     * @param {CredencialCreateArgs} args - Arguments to create a Credencial.
     * @example
     * // Create one Credencial
     * const Credencial = await prisma.credencial.create({
     *   data: {
     *     // ... data to create a Credencial
     *   }
     * })
     * 
     */
    create<T extends CredencialCreateArgs>(args: SelectSubset<T, CredencialCreateArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credencials.
     * @param {CredencialCreateManyArgs} args - Arguments to create many Credencials.
     * @example
     * // Create many Credencials
     * const credencial = await prisma.credencial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredencialCreateManyArgs>(args?: SelectSubset<T, CredencialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credencials and returns the data saved in the database.
     * @param {CredencialCreateManyAndReturnArgs} args - Arguments to create many Credencials.
     * @example
     * // Create many Credencials
     * const credencial = await prisma.credencial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credencials and only return the `CredencialKey`
     * const credencialWithCredencialKeyOnly = await prisma.credencial.createManyAndReturn({
     *   select: { CredencialKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredencialCreateManyAndReturnArgs>(args?: SelectSubset<T, CredencialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credencial.
     * @param {CredencialDeleteArgs} args - Arguments to delete one Credencial.
     * @example
     * // Delete one Credencial
     * const Credencial = await prisma.credencial.delete({
     *   where: {
     *     // ... filter to delete one Credencial
     *   }
     * })
     * 
     */
    delete<T extends CredencialDeleteArgs>(args: SelectSubset<T, CredencialDeleteArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credencial.
     * @param {CredencialUpdateArgs} args - Arguments to update one Credencial.
     * @example
     * // Update one Credencial
     * const credencial = await prisma.credencial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredencialUpdateArgs>(args: SelectSubset<T, CredencialUpdateArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credencials.
     * @param {CredencialDeleteManyArgs} args - Arguments to filter Credencials to delete.
     * @example
     * // Delete a few Credencials
     * const { count } = await prisma.credencial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredencialDeleteManyArgs>(args?: SelectSubset<T, CredencialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credencials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credencials
     * const credencial = await prisma.credencial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredencialUpdateManyArgs>(args: SelectSubset<T, CredencialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credencials and returns the data updated in the database.
     * @param {CredencialUpdateManyAndReturnArgs} args - Arguments to update many Credencials.
     * @example
     * // Update many Credencials
     * const credencial = await prisma.credencial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credencials and only return the `CredencialKey`
     * const credencialWithCredencialKeyOnly = await prisma.credencial.updateManyAndReturn({
     *   select: { CredencialKey: true },
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
    updateManyAndReturn<T extends CredencialUpdateManyAndReturnArgs>(args: SelectSubset<T, CredencialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credencial.
     * @param {CredencialUpsertArgs} args - Arguments to update or create a Credencial.
     * @example
     * // Update or create a Credencial
     * const credencial = await prisma.credencial.upsert({
     *   create: {
     *     // ... data to create a Credencial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credencial we want to update
     *   }
     * })
     */
    upsert<T extends CredencialUpsertArgs>(args: SelectSubset<T, CredencialUpsertArgs<ExtArgs>>): Prisma__CredencialClient<$Result.GetResult<Prisma.$CredencialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credencials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialCountArgs} args - Arguments to filter Credencials to count.
     * @example
     * // Count the number of Credencials
     * const count = await prisma.credencial.count({
     *   where: {
     *     // ... the filter for the Credencials we want to count
     *   }
     * })
    **/
    count<T extends CredencialCountArgs>(
      args?: Subset<T, CredencialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredencialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credencial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredencialAggregateArgs>(args: Subset<T, CredencialAggregateArgs>): Prisma.PrismaPromise<GetCredencialAggregateType<T>>

    /**
     * Group by Credencial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialGroupByArgs} args - Group by arguments.
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
      T extends CredencialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredencialGroupByArgs['orderBy'] }
        : { orderBy?: CredencialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CredencialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredencialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credencial model
   */
  readonly fields: CredencialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credencial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredencialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Empleado<T extends EmpleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpleadoDefaultArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Credencial model
   */
  interface CredencialFieldRefs {
    readonly CredencialKey: FieldRef<"Credencial", 'Int'>
    readonly EmpKey: FieldRef<"Credencial", 'Int'>
    readonly Usuario: FieldRef<"Credencial", 'String'>
    readonly PasswordHash: FieldRef<"Credencial", 'String'>
    readonly Rol: FieldRef<"Credencial", 'String'>
    readonly Estado: FieldRef<"Credencial", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Credencial findUnique
   */
  export type CredencialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * Filter, which Credencial to fetch.
     */
    where: CredencialWhereUniqueInput
  }

  /**
   * Credencial findUniqueOrThrow
   */
  export type CredencialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * Filter, which Credencial to fetch.
     */
    where: CredencialWhereUniqueInput
  }

  /**
   * Credencial findFirst
   */
  export type CredencialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * Filter, which Credencial to fetch.
     */
    where?: CredencialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credencials to fetch.
     */
    orderBy?: CredencialOrderByWithRelationInput | CredencialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credencials.
     */
    cursor?: CredencialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credencials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credencials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credencials.
     */
    distinct?: CredencialScalarFieldEnum | CredencialScalarFieldEnum[]
  }

  /**
   * Credencial findFirstOrThrow
   */
  export type CredencialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * Filter, which Credencial to fetch.
     */
    where?: CredencialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credencials to fetch.
     */
    orderBy?: CredencialOrderByWithRelationInput | CredencialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credencials.
     */
    cursor?: CredencialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credencials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credencials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credencials.
     */
    distinct?: CredencialScalarFieldEnum | CredencialScalarFieldEnum[]
  }

  /**
   * Credencial findMany
   */
  export type CredencialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * Filter, which Credencials to fetch.
     */
    where?: CredencialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credencials to fetch.
     */
    orderBy?: CredencialOrderByWithRelationInput | CredencialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credencials.
     */
    cursor?: CredencialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credencials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credencials.
     */
    skip?: number
    distinct?: CredencialScalarFieldEnum | CredencialScalarFieldEnum[]
  }

  /**
   * Credencial create
   */
  export type CredencialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * The data needed to create a Credencial.
     */
    data: XOR<CredencialCreateInput, CredencialUncheckedCreateInput>
  }

  /**
   * Credencial createMany
   */
  export type CredencialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credencials.
     */
    data: CredencialCreateManyInput | CredencialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credencial createManyAndReturn
   */
  export type CredencialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * The data used to create many Credencials.
     */
    data: CredencialCreateManyInput | CredencialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credencial update
   */
  export type CredencialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * The data needed to update a Credencial.
     */
    data: XOR<CredencialUpdateInput, CredencialUncheckedUpdateInput>
    /**
     * Choose, which Credencial to update.
     */
    where: CredencialWhereUniqueInput
  }

  /**
   * Credencial updateMany
   */
  export type CredencialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credencials.
     */
    data: XOR<CredencialUpdateManyMutationInput, CredencialUncheckedUpdateManyInput>
    /**
     * Filter which Credencials to update
     */
    where?: CredencialWhereInput
    /**
     * Limit how many Credencials to update.
     */
    limit?: number
  }

  /**
   * Credencial updateManyAndReturn
   */
  export type CredencialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * The data used to update Credencials.
     */
    data: XOR<CredencialUpdateManyMutationInput, CredencialUncheckedUpdateManyInput>
    /**
     * Filter which Credencials to update
     */
    where?: CredencialWhereInput
    /**
     * Limit how many Credencials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credencial upsert
   */
  export type CredencialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * The filter to search for the Credencial to update in case it exists.
     */
    where: CredencialWhereUniqueInput
    /**
     * In case the Credencial found by the `where` argument doesn't exist, create a new Credencial with this data.
     */
    create: XOR<CredencialCreateInput, CredencialUncheckedCreateInput>
    /**
     * In case the Credencial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredencialUpdateInput, CredencialUncheckedUpdateInput>
  }

  /**
   * Credencial delete
   */
  export type CredencialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
    /**
     * Filter which Credencial to delete.
     */
    where: CredencialWhereUniqueInput
  }

  /**
   * Credencial deleteMany
   */
  export type CredencialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credencials to delete
     */
    where?: CredencialWhereInput
    /**
     * Limit how many Credencials to delete.
     */
    limit?: number
  }

  /**
   * Credencial without action
   */
  export type CredencialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credencial
     */
    select?: CredencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credencial
     */
    omit?: CredencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialInclude<ExtArgs> | null
  }


  /**
   * Model CanalReversa
   */

  export type AggregateCanalReversa = {
    _count: CanalReversaCountAggregateOutputType | null
    _avg: CanalReversaAvgAggregateOutputType | null
    _sum: CanalReversaSumAggregateOutputType | null
    _min: CanalReversaMinAggregateOutputType | null
    _max: CanalReversaMaxAggregateOutputType | null
  }

  export type CanalReversaAvgAggregateOutputType = {
    CanalKey: number | null
    CanalID: number | null
  }

  export type CanalReversaSumAggregateOutputType = {
    CanalKey: number | null
    CanalID: number | null
  }

  export type CanalReversaMinAggregateOutputType = {
    CanalKey: number | null
    CanalID: number | null
    NombreCanal: string | null
    Descripcion: string | null
  }

  export type CanalReversaMaxAggregateOutputType = {
    CanalKey: number | null
    CanalID: number | null
    NombreCanal: string | null
    Descripcion: string | null
  }

  export type CanalReversaCountAggregateOutputType = {
    CanalKey: number
    CanalID: number
    NombreCanal: number
    Descripcion: number
    _all: number
  }


  export type CanalReversaAvgAggregateInputType = {
    CanalKey?: true
    CanalID?: true
  }

  export type CanalReversaSumAggregateInputType = {
    CanalKey?: true
    CanalID?: true
  }

  export type CanalReversaMinAggregateInputType = {
    CanalKey?: true
    CanalID?: true
    NombreCanal?: true
    Descripcion?: true
  }

  export type CanalReversaMaxAggregateInputType = {
    CanalKey?: true
    CanalID?: true
    NombreCanal?: true
    Descripcion?: true
  }

  export type CanalReversaCountAggregateInputType = {
    CanalKey?: true
    CanalID?: true
    NombreCanal?: true
    Descripcion?: true
    _all?: true
  }

  export type CanalReversaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CanalReversa to aggregate.
     */
    where?: CanalReversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanalReversas to fetch.
     */
    orderBy?: CanalReversaOrderByWithRelationInput | CanalReversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CanalReversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanalReversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanalReversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CanalReversas
    **/
    _count?: true | CanalReversaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CanalReversaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CanalReversaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CanalReversaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CanalReversaMaxAggregateInputType
  }

  export type GetCanalReversaAggregateType<T extends CanalReversaAggregateArgs> = {
        [P in keyof T & keyof AggregateCanalReversa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCanalReversa[P]>
      : GetScalarType<T[P], AggregateCanalReversa[P]>
  }




  export type CanalReversaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanalReversaWhereInput
    orderBy?: CanalReversaOrderByWithAggregationInput | CanalReversaOrderByWithAggregationInput[]
    by: CanalReversaScalarFieldEnum[] | CanalReversaScalarFieldEnum
    having?: CanalReversaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CanalReversaCountAggregateInputType | true
    _avg?: CanalReversaAvgAggregateInputType
    _sum?: CanalReversaSumAggregateInputType
    _min?: CanalReversaMinAggregateInputType
    _max?: CanalReversaMaxAggregateInputType
  }

  export type CanalReversaGroupByOutputType = {
    CanalKey: number
    CanalID: number
    NombreCanal: string
    Descripcion: string
    _count: CanalReversaCountAggregateOutputType | null
    _avg: CanalReversaAvgAggregateOutputType | null
    _sum: CanalReversaSumAggregateOutputType | null
    _min: CanalReversaMinAggregateOutputType | null
    _max: CanalReversaMaxAggregateOutputType | null
  }

  type GetCanalReversaGroupByPayload<T extends CanalReversaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CanalReversaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CanalReversaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CanalReversaGroupByOutputType[P]>
            : GetScalarType<T[P], CanalReversaGroupByOutputType[P]>
        }
      >
    >


  export type CanalReversaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CanalKey?: boolean
    CanalID?: boolean
    NombreCanal?: boolean
    Descripcion?: boolean
    Reservas?: boolean | CanalReversa$ReservasArgs<ExtArgs>
    _count?: boolean | CanalReversaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canalReversa"]>

  export type CanalReversaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CanalKey?: boolean
    CanalID?: boolean
    NombreCanal?: boolean
    Descripcion?: boolean
  }, ExtArgs["result"]["canalReversa"]>

  export type CanalReversaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CanalKey?: boolean
    CanalID?: boolean
    NombreCanal?: boolean
    Descripcion?: boolean
  }, ExtArgs["result"]["canalReversa"]>

  export type CanalReversaSelectScalar = {
    CanalKey?: boolean
    CanalID?: boolean
    NombreCanal?: boolean
    Descripcion?: boolean
  }

  export type CanalReversaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CanalKey" | "CanalID" | "NombreCanal" | "Descripcion", ExtArgs["result"]["canalReversa"]>
  export type CanalReversaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | CanalReversa$ReservasArgs<ExtArgs>
    _count?: boolean | CanalReversaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CanalReversaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CanalReversaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CanalReversaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CanalReversa"
    objects: {
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CanalKey: number
      CanalID: number
      NombreCanal: string
      Descripcion: string
    }, ExtArgs["result"]["canalReversa"]>
    composites: {}
  }

  type CanalReversaGetPayload<S extends boolean | null | undefined | CanalReversaDefaultArgs> = $Result.GetResult<Prisma.$CanalReversaPayload, S>

  type CanalReversaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CanalReversaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CanalReversaCountAggregateInputType | true
    }

  export interface CanalReversaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CanalReversa'], meta: { name: 'CanalReversa' } }
    /**
     * Find zero or one CanalReversa that matches the filter.
     * @param {CanalReversaFindUniqueArgs} args - Arguments to find a CanalReversa
     * @example
     * // Get one CanalReversa
     * const canalReversa = await prisma.canalReversa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CanalReversaFindUniqueArgs>(args: SelectSubset<T, CanalReversaFindUniqueArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CanalReversa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CanalReversaFindUniqueOrThrowArgs} args - Arguments to find a CanalReversa
     * @example
     * // Get one CanalReversa
     * const canalReversa = await prisma.canalReversa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CanalReversaFindUniqueOrThrowArgs>(args: SelectSubset<T, CanalReversaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CanalReversa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanalReversaFindFirstArgs} args - Arguments to find a CanalReversa
     * @example
     * // Get one CanalReversa
     * const canalReversa = await prisma.canalReversa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CanalReversaFindFirstArgs>(args?: SelectSubset<T, CanalReversaFindFirstArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CanalReversa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanalReversaFindFirstOrThrowArgs} args - Arguments to find a CanalReversa
     * @example
     * // Get one CanalReversa
     * const canalReversa = await prisma.canalReversa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CanalReversaFindFirstOrThrowArgs>(args?: SelectSubset<T, CanalReversaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CanalReversas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanalReversaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CanalReversas
     * const canalReversas = await prisma.canalReversa.findMany()
     * 
     * // Get first 10 CanalReversas
     * const canalReversas = await prisma.canalReversa.findMany({ take: 10 })
     * 
     * // Only select the `CanalKey`
     * const canalReversaWithCanalKeyOnly = await prisma.canalReversa.findMany({ select: { CanalKey: true } })
     * 
     */
    findMany<T extends CanalReversaFindManyArgs>(args?: SelectSubset<T, CanalReversaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CanalReversa.
     * @param {CanalReversaCreateArgs} args - Arguments to create a CanalReversa.
     * @example
     * // Create one CanalReversa
     * const CanalReversa = await prisma.canalReversa.create({
     *   data: {
     *     // ... data to create a CanalReversa
     *   }
     * })
     * 
     */
    create<T extends CanalReversaCreateArgs>(args: SelectSubset<T, CanalReversaCreateArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CanalReversas.
     * @param {CanalReversaCreateManyArgs} args - Arguments to create many CanalReversas.
     * @example
     * // Create many CanalReversas
     * const canalReversa = await prisma.canalReversa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CanalReversaCreateManyArgs>(args?: SelectSubset<T, CanalReversaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CanalReversas and returns the data saved in the database.
     * @param {CanalReversaCreateManyAndReturnArgs} args - Arguments to create many CanalReversas.
     * @example
     * // Create many CanalReversas
     * const canalReversa = await prisma.canalReversa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CanalReversas and only return the `CanalKey`
     * const canalReversaWithCanalKeyOnly = await prisma.canalReversa.createManyAndReturn({
     *   select: { CanalKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CanalReversaCreateManyAndReturnArgs>(args?: SelectSubset<T, CanalReversaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CanalReversa.
     * @param {CanalReversaDeleteArgs} args - Arguments to delete one CanalReversa.
     * @example
     * // Delete one CanalReversa
     * const CanalReversa = await prisma.canalReversa.delete({
     *   where: {
     *     // ... filter to delete one CanalReversa
     *   }
     * })
     * 
     */
    delete<T extends CanalReversaDeleteArgs>(args: SelectSubset<T, CanalReversaDeleteArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CanalReversa.
     * @param {CanalReversaUpdateArgs} args - Arguments to update one CanalReversa.
     * @example
     * // Update one CanalReversa
     * const canalReversa = await prisma.canalReversa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CanalReversaUpdateArgs>(args: SelectSubset<T, CanalReversaUpdateArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CanalReversas.
     * @param {CanalReversaDeleteManyArgs} args - Arguments to filter CanalReversas to delete.
     * @example
     * // Delete a few CanalReversas
     * const { count } = await prisma.canalReversa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CanalReversaDeleteManyArgs>(args?: SelectSubset<T, CanalReversaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CanalReversas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanalReversaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CanalReversas
     * const canalReversa = await prisma.canalReversa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CanalReversaUpdateManyArgs>(args: SelectSubset<T, CanalReversaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CanalReversas and returns the data updated in the database.
     * @param {CanalReversaUpdateManyAndReturnArgs} args - Arguments to update many CanalReversas.
     * @example
     * // Update many CanalReversas
     * const canalReversa = await prisma.canalReversa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CanalReversas and only return the `CanalKey`
     * const canalReversaWithCanalKeyOnly = await prisma.canalReversa.updateManyAndReturn({
     *   select: { CanalKey: true },
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
    updateManyAndReturn<T extends CanalReversaUpdateManyAndReturnArgs>(args: SelectSubset<T, CanalReversaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CanalReversa.
     * @param {CanalReversaUpsertArgs} args - Arguments to update or create a CanalReversa.
     * @example
     * // Update or create a CanalReversa
     * const canalReversa = await prisma.canalReversa.upsert({
     *   create: {
     *     // ... data to create a CanalReversa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CanalReversa we want to update
     *   }
     * })
     */
    upsert<T extends CanalReversaUpsertArgs>(args: SelectSubset<T, CanalReversaUpsertArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CanalReversas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanalReversaCountArgs} args - Arguments to filter CanalReversas to count.
     * @example
     * // Count the number of CanalReversas
     * const count = await prisma.canalReversa.count({
     *   where: {
     *     // ... the filter for the CanalReversas we want to count
     *   }
     * })
    **/
    count<T extends CanalReversaCountArgs>(
      args?: Subset<T, CanalReversaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CanalReversaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CanalReversa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanalReversaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CanalReversaAggregateArgs>(args: Subset<T, CanalReversaAggregateArgs>): Prisma.PrismaPromise<GetCanalReversaAggregateType<T>>

    /**
     * Group by CanalReversa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanalReversaGroupByArgs} args - Group by arguments.
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
      T extends CanalReversaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CanalReversaGroupByArgs['orderBy'] }
        : { orderBy?: CanalReversaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CanalReversaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanalReversaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CanalReversa model
   */
  readonly fields: CanalReversaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CanalReversa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CanalReversaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Reservas<T extends CanalReversa$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, CanalReversa$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CanalReversa model
   */
  interface CanalReversaFieldRefs {
    readonly CanalKey: FieldRef<"CanalReversa", 'Int'>
    readonly CanalID: FieldRef<"CanalReversa", 'Int'>
    readonly NombreCanal: FieldRef<"CanalReversa", 'String'>
    readonly Descripcion: FieldRef<"CanalReversa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CanalReversa findUnique
   */
  export type CanalReversaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * Filter, which CanalReversa to fetch.
     */
    where: CanalReversaWhereUniqueInput
  }

  /**
   * CanalReversa findUniqueOrThrow
   */
  export type CanalReversaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * Filter, which CanalReversa to fetch.
     */
    where: CanalReversaWhereUniqueInput
  }

  /**
   * CanalReversa findFirst
   */
  export type CanalReversaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * Filter, which CanalReversa to fetch.
     */
    where?: CanalReversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanalReversas to fetch.
     */
    orderBy?: CanalReversaOrderByWithRelationInput | CanalReversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CanalReversas.
     */
    cursor?: CanalReversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanalReversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanalReversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanalReversas.
     */
    distinct?: CanalReversaScalarFieldEnum | CanalReversaScalarFieldEnum[]
  }

  /**
   * CanalReversa findFirstOrThrow
   */
  export type CanalReversaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * Filter, which CanalReversa to fetch.
     */
    where?: CanalReversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanalReversas to fetch.
     */
    orderBy?: CanalReversaOrderByWithRelationInput | CanalReversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CanalReversas.
     */
    cursor?: CanalReversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanalReversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanalReversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanalReversas.
     */
    distinct?: CanalReversaScalarFieldEnum | CanalReversaScalarFieldEnum[]
  }

  /**
   * CanalReversa findMany
   */
  export type CanalReversaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * Filter, which CanalReversas to fetch.
     */
    where?: CanalReversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanalReversas to fetch.
     */
    orderBy?: CanalReversaOrderByWithRelationInput | CanalReversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CanalReversas.
     */
    cursor?: CanalReversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanalReversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanalReversas.
     */
    skip?: number
    distinct?: CanalReversaScalarFieldEnum | CanalReversaScalarFieldEnum[]
  }

  /**
   * CanalReversa create
   */
  export type CanalReversaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * The data needed to create a CanalReversa.
     */
    data: XOR<CanalReversaCreateInput, CanalReversaUncheckedCreateInput>
  }

  /**
   * CanalReversa createMany
   */
  export type CanalReversaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CanalReversas.
     */
    data: CanalReversaCreateManyInput | CanalReversaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CanalReversa createManyAndReturn
   */
  export type CanalReversaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * The data used to create many CanalReversas.
     */
    data: CanalReversaCreateManyInput | CanalReversaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CanalReversa update
   */
  export type CanalReversaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * The data needed to update a CanalReversa.
     */
    data: XOR<CanalReversaUpdateInput, CanalReversaUncheckedUpdateInput>
    /**
     * Choose, which CanalReversa to update.
     */
    where: CanalReversaWhereUniqueInput
  }

  /**
   * CanalReversa updateMany
   */
  export type CanalReversaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CanalReversas.
     */
    data: XOR<CanalReversaUpdateManyMutationInput, CanalReversaUncheckedUpdateManyInput>
    /**
     * Filter which CanalReversas to update
     */
    where?: CanalReversaWhereInput
    /**
     * Limit how many CanalReversas to update.
     */
    limit?: number
  }

  /**
   * CanalReversa updateManyAndReturn
   */
  export type CanalReversaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * The data used to update CanalReversas.
     */
    data: XOR<CanalReversaUpdateManyMutationInput, CanalReversaUncheckedUpdateManyInput>
    /**
     * Filter which CanalReversas to update
     */
    where?: CanalReversaWhereInput
    /**
     * Limit how many CanalReversas to update.
     */
    limit?: number
  }

  /**
   * CanalReversa upsert
   */
  export type CanalReversaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * The filter to search for the CanalReversa to update in case it exists.
     */
    where: CanalReversaWhereUniqueInput
    /**
     * In case the CanalReversa found by the `where` argument doesn't exist, create a new CanalReversa with this data.
     */
    create: XOR<CanalReversaCreateInput, CanalReversaUncheckedCreateInput>
    /**
     * In case the CanalReversa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CanalReversaUpdateInput, CanalReversaUncheckedUpdateInput>
  }

  /**
   * CanalReversa delete
   */
  export type CanalReversaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
    /**
     * Filter which CanalReversa to delete.
     */
    where: CanalReversaWhereUniqueInput
  }

  /**
   * CanalReversa deleteMany
   */
  export type CanalReversaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CanalReversas to delete
     */
    where?: CanalReversaWhereInput
    /**
     * Limit how many CanalReversas to delete.
     */
    limit?: number
  }

  /**
   * CanalReversa.Reservas
   */
  export type CanalReversa$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * CanalReversa without action
   */
  export type CanalReversaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanalReversa
     */
    select?: CanalReversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanalReversa
     */
    omit?: CanalReversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanalReversaInclude<ExtArgs> | null
  }


  /**
   * Model Pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    PagoKey: number | null
    PagoID: number | null
  }

  export type PagoSumAggregateOutputType = {
    PagoKey: number | null
    PagoID: number | null
  }

  export type PagoMinAggregateOutputType = {
    PagoKey: number | null
    PagoID: number | null
    Metodo: string | null
    Moneda: string | null
  }

  export type PagoMaxAggregateOutputType = {
    PagoKey: number | null
    PagoID: number | null
    Metodo: string | null
    Moneda: string | null
  }

  export type PagoCountAggregateOutputType = {
    PagoKey: number
    PagoID: number
    Metodo: number
    Moneda: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    PagoKey?: true
    PagoID?: true
  }

  export type PagoSumAggregateInputType = {
    PagoKey?: true
    PagoID?: true
  }

  export type PagoMinAggregateInputType = {
    PagoKey?: true
    PagoID?: true
    Metodo?: true
    Moneda?: true
  }

  export type PagoMaxAggregateInputType = {
    PagoKey?: true
    PagoID?: true
    Metodo?: true
    Moneda?: true
  }

  export type PagoCountAggregateInputType = {
    PagoKey?: true
    PagoID?: true
    Metodo?: true
    Moneda?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pago to aggregate.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithAggregationInput | PagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    PagoKey: number
    PagoID: number
    Metodo: string
    Moneda: string
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PagoKey?: boolean
    PagoID?: boolean
    Metodo?: boolean
    Moneda?: boolean
    Reservas?: boolean | Pago$ReservasArgs<ExtArgs>
    _count?: boolean | PagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PagoKey?: boolean
    PagoID?: boolean
    Metodo?: boolean
    Moneda?: boolean
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PagoKey?: boolean
    PagoID?: boolean
    Metodo?: boolean
    Moneda?: boolean
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectScalar = {
    PagoKey?: boolean
    PagoID?: boolean
    Metodo?: boolean
    Moneda?: boolean
  }

  export type PagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PagoKey" | "PagoID" | "Metodo" | "Moneda", ExtArgs["result"]["pago"]>
  export type PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservas?: boolean | Pago$ReservasArgs<ExtArgs>
    _count?: boolean | PagoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pago"
    objects: {
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PagoKey: number
      PagoID: number
      Metodo: string
      Moneda: string
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = $Result.GetResult<Prisma.$PagoPayload, S>

  type PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pago'], meta: { name: 'Pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {PagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoFindUniqueArgs>(args: SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoFindFirstArgs>(args?: SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `PagoKey`
     * const pagoWithPagoKeyOnly = await prisma.pago.findMany({ select: { PagoKey: true } })
     * 
     */
    findMany<T extends PagoFindManyArgs>(args?: SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pago.
     * @param {PagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends PagoCreateArgs>(args: SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {PagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoCreateManyArgs>(args?: SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagos and returns the data saved in the database.
     * @param {PagoCreateManyAndReturnArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagos and only return the `PagoKey`
     * const pagoWithPagoKeyOnly = await prisma.pago.createManyAndReturn({
     *   select: { PagoKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pago.
     * @param {PagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends PagoDeleteArgs>(args: SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pago.
     * @param {PagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoUpdateArgs>(args: SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {PagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoDeleteManyArgs>(args?: SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoUpdateManyArgs>(args: SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos and returns the data updated in the database.
     * @param {PagoUpdateManyAndReturnArgs} args - Arguments to update many Pagos.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagos and only return the `PagoKey`
     * const pagoWithPagoKeyOnly = await prisma.pago.updateManyAndReturn({
     *   select: { PagoKey: true },
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
    updateManyAndReturn<T extends PagoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pago.
     * @param {PagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends PagoUpsertArgs>(args: SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagoCountArgs>(
      args?: Subset<T, PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoGroupByArgs} args - Group by arguments.
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
      T extends PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoGroupByArgs['orderBy'] }
        : { orderBy?: PagoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pago model
   */
  readonly fields: PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Reservas<T extends Pago$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, Pago$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pago model
   */
  interface PagoFieldRefs {
    readonly PagoKey: FieldRef<"Pago", 'Int'>
    readonly PagoID: FieldRef<"Pago", 'Int'>
    readonly Metodo: FieldRef<"Pago", 'String'>
    readonly Moneda: FieldRef<"Pago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pago findUnique
   */
  export type PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findUniqueOrThrow
   */
  export type PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findFirst
   */
  export type PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findFirstOrThrow
   */
  export type PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findMany
   */
  export type PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago create
   */
  export type PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pago.
     */
    data: XOR<PagoCreateInput, PagoUncheckedCreateInput>
  }

  /**
   * Pago createMany
   */
  export type PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pago createManyAndReturn
   */
  export type PagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pago update
   */
  export type PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pago.
     */
    data: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
    /**
     * Choose, which Pago to update.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago updateMany
   */
  export type PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
  }

  /**
   * Pago updateManyAndReturn
   */
  export type PagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
  }

  /**
   * Pago upsert
   */
  export type PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pago to update in case it exists.
     */
    where: PagoWhereUniqueInput
    /**
     * In case the Pago found by the `where` argument doesn't exist, create a new Pago with this data.
     */
    create: XOR<PagoCreateInput, PagoUncheckedCreateInput>
    /**
     * In case the Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
  }

  /**
   * Pago delete
   */
  export type PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter which Pago to delete.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago deleteMany
   */
  export type PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to delete.
     */
    limit?: number
  }

  /**
   * Pago.Reservas
   */
  export type Pago$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Pago without action
   */
  export type PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
  }


  /**
   * Model Reservas
   */

  export type AggregateReservas = {
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  export type ReservasAvgAggregateOutputType = {
    ReservaKey: number | null
    HotelKey: number | null
    ClienteKey: number | null
    HabKey: number | null
    FechaKey: number | null
    EmpKey: number | null
    CanalKey: number | null
    PagoKey: number | null
    NochesReservadas: number | null
    CantidadHuespedes: number | null
    IngresoHabitacion: Decimal | null
    IngresoServicios: Decimal | null
    DescuentoTotal: Decimal | null
    ImpuestoTotal: Decimal | null
    LeadTimeReserva: number | null
    IngresoTotal: Decimal | null
  }

  export type ReservasSumAggregateOutputType = {
    ReservaKey: number | null
    HotelKey: number | null
    ClienteKey: number | null
    HabKey: number | null
    FechaKey: number | null
    EmpKey: number | null
    CanalKey: number | null
    PagoKey: number | null
    NochesReservadas: number | null
    CantidadHuespedes: number | null
    IngresoHabitacion: Decimal | null
    IngresoServicios: Decimal | null
    DescuentoTotal: Decimal | null
    ImpuestoTotal: Decimal | null
    LeadTimeReserva: number | null
    IngresoTotal: Decimal | null
  }

  export type ReservasMinAggregateOutputType = {
    ReservaKey: number | null
    HotelKey: number | null
    ClienteKey: number | null
    HabKey: number | null
    FechaKey: number | null
    EmpKey: number | null
    CanalKey: number | null
    PagoKey: number | null
    NochesReservadas: number | null
    CantidadHuespedes: number | null
    IngresoHabitacion: Decimal | null
    IngresoServicios: Decimal | null
    DescuentoTotal: Decimal | null
    ImpuestoTotal: Decimal | null
    LeadTimeReserva: number | null
    IngresoTotal: Decimal | null
  }

  export type ReservasMaxAggregateOutputType = {
    ReservaKey: number | null
    HotelKey: number | null
    ClienteKey: number | null
    HabKey: number | null
    FechaKey: number | null
    EmpKey: number | null
    CanalKey: number | null
    PagoKey: number | null
    NochesReservadas: number | null
    CantidadHuespedes: number | null
    IngresoHabitacion: Decimal | null
    IngresoServicios: Decimal | null
    DescuentoTotal: Decimal | null
    ImpuestoTotal: Decimal | null
    LeadTimeReserva: number | null
    IngresoTotal: Decimal | null
  }

  export type ReservasCountAggregateOutputType = {
    ReservaKey: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: number
    IngresoServicios: number
    DescuentoTotal: number
    ImpuestoTotal: number
    LeadTimeReserva: number
    IngresoTotal: number
    _all: number
  }


  export type ReservasAvgAggregateInputType = {
    ReservaKey?: true
    HotelKey?: true
    ClienteKey?: true
    HabKey?: true
    FechaKey?: true
    EmpKey?: true
    CanalKey?: true
    PagoKey?: true
    NochesReservadas?: true
    CantidadHuespedes?: true
    IngresoHabitacion?: true
    IngresoServicios?: true
    DescuentoTotal?: true
    ImpuestoTotal?: true
    LeadTimeReserva?: true
    IngresoTotal?: true
  }

  export type ReservasSumAggregateInputType = {
    ReservaKey?: true
    HotelKey?: true
    ClienteKey?: true
    HabKey?: true
    FechaKey?: true
    EmpKey?: true
    CanalKey?: true
    PagoKey?: true
    NochesReservadas?: true
    CantidadHuespedes?: true
    IngresoHabitacion?: true
    IngresoServicios?: true
    DescuentoTotal?: true
    ImpuestoTotal?: true
    LeadTimeReserva?: true
    IngresoTotal?: true
  }

  export type ReservasMinAggregateInputType = {
    ReservaKey?: true
    HotelKey?: true
    ClienteKey?: true
    HabKey?: true
    FechaKey?: true
    EmpKey?: true
    CanalKey?: true
    PagoKey?: true
    NochesReservadas?: true
    CantidadHuespedes?: true
    IngresoHabitacion?: true
    IngresoServicios?: true
    DescuentoTotal?: true
    ImpuestoTotal?: true
    LeadTimeReserva?: true
    IngresoTotal?: true
  }

  export type ReservasMaxAggregateInputType = {
    ReservaKey?: true
    HotelKey?: true
    ClienteKey?: true
    HabKey?: true
    FechaKey?: true
    EmpKey?: true
    CanalKey?: true
    PagoKey?: true
    NochesReservadas?: true
    CantidadHuespedes?: true
    IngresoHabitacion?: true
    IngresoServicios?: true
    DescuentoTotal?: true
    ImpuestoTotal?: true
    LeadTimeReserva?: true
    IngresoTotal?: true
  }

  export type ReservasCountAggregateInputType = {
    ReservaKey?: true
    HotelKey?: true
    ClienteKey?: true
    HabKey?: true
    FechaKey?: true
    EmpKey?: true
    CanalKey?: true
    PagoKey?: true
    NochesReservadas?: true
    CantidadHuespedes?: true
    IngresoHabitacion?: true
    IngresoServicios?: true
    DescuentoTotal?: true
    ImpuestoTotal?: true
    LeadTimeReserva?: true
    IngresoTotal?: true
    _all?: true
  }

  export type ReservasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to aggregate.
     */
    where?: ReservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasMaxAggregateInputType
  }

  export type GetReservasAggregateType<T extends ReservasAggregateArgs> = {
        [P in keyof T & keyof AggregateReservas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservas[P]>
      : GetScalarType<T[P], AggregateReservas[P]>
  }




  export type ReservasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithAggregationInput | ReservasOrderByWithAggregationInput[]
    by: ReservasScalarFieldEnum[] | ReservasScalarFieldEnum
    having?: ReservasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasCountAggregateInputType | true
    _avg?: ReservasAvgAggregateInputType
    _sum?: ReservasSumAggregateInputType
    _min?: ReservasMinAggregateInputType
    _max?: ReservasMaxAggregateInputType
  }

  export type ReservasGroupByOutputType = {
    ReservaKey: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal
    IngresoServicios: Decimal
    DescuentoTotal: Decimal
    ImpuestoTotal: Decimal
    LeadTimeReserva: number
    IngresoTotal: Decimal
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  type GetReservasGroupByPayload<T extends ReservasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasGroupByOutputType[P]>
        }
      >
    >


  export type ReservasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ReservaKey?: boolean
    HotelKey?: boolean
    ClienteKey?: boolean
    HabKey?: boolean
    FechaKey?: boolean
    EmpKey?: boolean
    CanalKey?: boolean
    PagoKey?: boolean
    NochesReservadas?: boolean
    CantidadHuespedes?: boolean
    IngresoHabitacion?: boolean
    IngresoServicios?: boolean
    DescuentoTotal?: boolean
    ImpuestoTotal?: boolean
    LeadTimeReserva?: boolean
    IngresoTotal?: boolean
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    Fecha?: boolean | FechaDefaultArgs<ExtArgs>
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    CanalReversa?: boolean | CanalReversaDefaultArgs<ExtArgs>
    Pago?: boolean | PagoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type ReservasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ReservaKey?: boolean
    HotelKey?: boolean
    ClienteKey?: boolean
    HabKey?: boolean
    FechaKey?: boolean
    EmpKey?: boolean
    CanalKey?: boolean
    PagoKey?: boolean
    NochesReservadas?: boolean
    CantidadHuespedes?: boolean
    IngresoHabitacion?: boolean
    IngresoServicios?: boolean
    DescuentoTotal?: boolean
    ImpuestoTotal?: boolean
    LeadTimeReserva?: boolean
    IngresoTotal?: boolean
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    Fecha?: boolean | FechaDefaultArgs<ExtArgs>
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    CanalReversa?: boolean | CanalReversaDefaultArgs<ExtArgs>
    Pago?: boolean | PagoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type ReservasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ReservaKey?: boolean
    HotelKey?: boolean
    ClienteKey?: boolean
    HabKey?: boolean
    FechaKey?: boolean
    EmpKey?: boolean
    CanalKey?: boolean
    PagoKey?: boolean
    NochesReservadas?: boolean
    CantidadHuespedes?: boolean
    IngresoHabitacion?: boolean
    IngresoServicios?: boolean
    DescuentoTotal?: boolean
    ImpuestoTotal?: boolean
    LeadTimeReserva?: boolean
    IngresoTotal?: boolean
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    Fecha?: boolean | FechaDefaultArgs<ExtArgs>
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    CanalReversa?: boolean | CanalReversaDefaultArgs<ExtArgs>
    Pago?: boolean | PagoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type ReservasSelectScalar = {
    ReservaKey?: boolean
    HotelKey?: boolean
    ClienteKey?: boolean
    HabKey?: boolean
    FechaKey?: boolean
    EmpKey?: boolean
    CanalKey?: boolean
    PagoKey?: boolean
    NochesReservadas?: boolean
    CantidadHuespedes?: boolean
    IngresoHabitacion?: boolean
    IngresoServicios?: boolean
    DescuentoTotal?: boolean
    ImpuestoTotal?: boolean
    LeadTimeReserva?: boolean
    IngresoTotal?: boolean
  }

  export type ReservasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ReservaKey" | "HotelKey" | "ClienteKey" | "HabKey" | "FechaKey" | "EmpKey" | "CanalKey" | "PagoKey" | "NochesReservadas" | "CantidadHuespedes" | "IngresoHabitacion" | "IngresoServicios" | "DescuentoTotal" | "ImpuestoTotal" | "LeadTimeReserva" | "IngresoTotal", ExtArgs["result"]["reservas"]>
  export type ReservasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    Fecha?: boolean | FechaDefaultArgs<ExtArgs>
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    CanalReversa?: boolean | CanalReversaDefaultArgs<ExtArgs>
    Pago?: boolean | PagoDefaultArgs<ExtArgs>
  }
  export type ReservasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    Fecha?: boolean | FechaDefaultArgs<ExtArgs>
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    CanalReversa?: boolean | CanalReversaDefaultArgs<ExtArgs>
    Pago?: boolean | PagoDefaultArgs<ExtArgs>
  }
  export type ReservasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    Fecha?: boolean | FechaDefaultArgs<ExtArgs>
    Empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    CanalReversa?: boolean | CanalReversaDefaultArgs<ExtArgs>
    Pago?: boolean | PagoDefaultArgs<ExtArgs>
  }

  export type $ReservasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservas"
    objects: {
      Hotel: Prisma.$HotelPayload<ExtArgs>
      Cliente: Prisma.$ClientePayload<ExtArgs>
      Habitacion: Prisma.$HabitacionPayload<ExtArgs>
      Fecha: Prisma.$FechaPayload<ExtArgs>
      Empleado: Prisma.$EmpleadoPayload<ExtArgs>
      CanalReversa: Prisma.$CanalReversaPayload<ExtArgs>
      Pago: Prisma.$PagoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ReservaKey: number
      HotelKey: number
      ClienteKey: number
      HabKey: number
      FechaKey: number
      EmpKey: number
      CanalKey: number
      PagoKey: number
      NochesReservadas: number
      CantidadHuespedes: number
      IngresoHabitacion: Prisma.Decimal
      IngresoServicios: Prisma.Decimal
      DescuentoTotal: Prisma.Decimal
      ImpuestoTotal: Prisma.Decimal
      LeadTimeReserva: number
      IngresoTotal: Prisma.Decimal
    }, ExtArgs["result"]["reservas"]>
    composites: {}
  }

  type ReservasGetPayload<S extends boolean | null | undefined | ReservasDefaultArgs> = $Result.GetResult<Prisma.$ReservasPayload, S>

  type ReservasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservasCountAggregateInputType | true
    }

  export interface ReservasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservas'], meta: { name: 'Reservas' } }
    /**
     * Find zero or one Reservas that matches the filter.
     * @param {ReservasFindUniqueArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservasFindUniqueArgs>(args: SelectSubset<T, ReservasFindUniqueArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservasFindUniqueOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservasFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasFindFirstArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservasFindFirstArgs>(args?: SelectSubset<T, ReservasFindFirstArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasFindFirstOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservasFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reservas.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reservas.findMany({ take: 10 })
     * 
     * // Only select the `ReservaKey`
     * const reservasWithReservaKeyOnly = await prisma.reservas.findMany({ select: { ReservaKey: true } })
     * 
     */
    findMany<T extends ReservasFindManyArgs>(args?: SelectSubset<T, ReservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservas.
     * @param {ReservasCreateArgs} args - Arguments to create a Reservas.
     * @example
     * // Create one Reservas
     * const Reservas = await prisma.reservas.create({
     *   data: {
     *     // ... data to create a Reservas
     *   }
     * })
     * 
     */
    create<T extends ReservasCreateArgs>(args: SelectSubset<T, ReservasCreateArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservasCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservasCreateManyArgs>(args?: SelectSubset<T, ReservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservasCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `ReservaKey`
     * const reservasWithReservaKeyOnly = await prisma.reservas.createManyAndReturn({
     *   select: { ReservaKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservasCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservas.
     * @param {ReservasDeleteArgs} args - Arguments to delete one Reservas.
     * @example
     * // Delete one Reservas
     * const Reservas = await prisma.reservas.delete({
     *   where: {
     *     // ... filter to delete one Reservas
     *   }
     * })
     * 
     */
    delete<T extends ReservasDeleteArgs>(args: SelectSubset<T, ReservasDeleteArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservas.
     * @param {ReservasUpdateArgs} args - Arguments to update one Reservas.
     * @example
     * // Update one Reservas
     * const reservas = await prisma.reservas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservasUpdateArgs>(args: SelectSubset<T, ReservasUpdateArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservasDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reservas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservasDeleteManyArgs>(args?: SelectSubset<T, ReservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservasUpdateManyArgs>(args: SelectSubset<T, ReservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservasUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `ReservaKey`
     * const reservasWithReservaKeyOnly = await prisma.reservas.updateManyAndReturn({
     *   select: { ReservaKey: true },
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
    updateManyAndReturn<T extends ReservasUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservas.
     * @param {ReservasUpsertArgs} args - Arguments to update or create a Reservas.
     * @example
     * // Update or create a Reservas
     * const reservas = await prisma.reservas.upsert({
     *   create: {
     *     // ... data to create a Reservas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservas we want to update
     *   }
     * })
     */
    upsert<T extends ReservasUpsertArgs>(args: SelectSubset<T, ReservasUpsertArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reservas.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservasCountArgs>(
      args?: Subset<T, ReservasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservasAggregateArgs>(args: Subset<T, ReservasAggregateArgs>): Prisma.PrismaPromise<GetReservasAggregateType<T>>

    /**
     * Group by Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasGroupByArgs} args - Group by arguments.
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
      T extends ReservasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservasGroupByArgs['orderBy'] }
        : { orderBy?: ReservasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservas model
   */
  readonly fields: ReservasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Habitacion<T extends HabitacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitacionDefaultArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Fecha<T extends FechaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FechaDefaultArgs<ExtArgs>>): Prisma__FechaClient<$Result.GetResult<Prisma.$FechaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Empleado<T extends EmpleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpleadoDefaultArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CanalReversa<T extends CanalReversaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CanalReversaDefaultArgs<ExtArgs>>): Prisma__CanalReversaClient<$Result.GetResult<Prisma.$CanalReversaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pago<T extends PagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PagoDefaultArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservas model
   */
  interface ReservasFieldRefs {
    readonly ReservaKey: FieldRef<"Reservas", 'Int'>
    readonly HotelKey: FieldRef<"Reservas", 'Int'>
    readonly ClienteKey: FieldRef<"Reservas", 'Int'>
    readonly HabKey: FieldRef<"Reservas", 'Int'>
    readonly FechaKey: FieldRef<"Reservas", 'Int'>
    readonly EmpKey: FieldRef<"Reservas", 'Int'>
    readonly CanalKey: FieldRef<"Reservas", 'Int'>
    readonly PagoKey: FieldRef<"Reservas", 'Int'>
    readonly NochesReservadas: FieldRef<"Reservas", 'Int'>
    readonly CantidadHuespedes: FieldRef<"Reservas", 'Int'>
    readonly IngresoHabitacion: FieldRef<"Reservas", 'Decimal'>
    readonly IngresoServicios: FieldRef<"Reservas", 'Decimal'>
    readonly DescuentoTotal: FieldRef<"Reservas", 'Decimal'>
    readonly ImpuestoTotal: FieldRef<"Reservas", 'Decimal'>
    readonly LeadTimeReserva: FieldRef<"Reservas", 'Int'>
    readonly IngresoTotal: FieldRef<"Reservas", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Reservas findUnique
   */
  export type ReservasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where: ReservasWhereUniqueInput
  }

  /**
   * Reservas findUniqueOrThrow
   */
  export type ReservasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where: ReservasWhereUniqueInput
  }

  /**
   * Reservas findFirst
   */
  export type ReservasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Reservas findFirstOrThrow
   */
  export type ReservasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Reservas findMany
   */
  export type ReservasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Reservas create
   */
  export type ReservasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservas.
     */
    data: XOR<ReservasCreateInput, ReservasUncheckedCreateInput>
  }

  /**
   * Reservas createMany
   */
  export type ReservasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservasCreateManyInput | ReservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservas createManyAndReturn
   */
  export type ReservasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservasCreateManyInput | ReservasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservas update
   */
  export type ReservasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservas.
     */
    data: XOR<ReservasUpdateInput, ReservasUncheckedUpdateInput>
    /**
     * Choose, which Reservas to update.
     */
    where: ReservasWhereUniqueInput
  }

  /**
   * Reservas updateMany
   */
  export type ReservasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservasWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reservas updateManyAndReturn
   */
  export type ReservasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservasWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservas upsert
   */
  export type ReservasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservas to update in case it exists.
     */
    where: ReservasWhereUniqueInput
    /**
     * In case the Reservas found by the `where` argument doesn't exist, create a new Reservas with this data.
     */
    create: XOR<ReservasCreateInput, ReservasUncheckedCreateInput>
    /**
     * In case the Reservas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservasUpdateInput, ReservasUncheckedUpdateInput>
  }

  /**
   * Reservas delete
   */
  export type ReservasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter which Reservas to delete.
     */
    where: ReservasWhereUniqueInput
  }

  /**
   * Reservas deleteMany
   */
  export type ReservasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservasWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reservas without action
   */
  export type ReservasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
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


  export const HotelScalarFieldEnum: {
    HotelKey: 'HotelKey',
    HotelID: 'HotelID',
    Nombre: 'Nombre',
    Cadena: 'Cadena',
    Ciudad: 'Ciudad',
    Pais: 'Pais',
    Estrellas: 'Estrellas',
    Direccion: 'Direccion'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    ClienteKey: 'ClienteKey',
    ClienteID: 'ClienteID',
    Nombre: 'Nombre',
    Apellido: 'Apellido',
    Genero: 'Genero',
    FechaNacimiento: 'FechaNacimiento',
    Nacionalidad: 'Nacionalidad',
    TipoCliente: 'TipoCliente'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const TipoHabScalarFieldEnum: {
    TipoHabKey: 'TipoHabKey',
    TipoHabID: 'TipoHabID',
    Descripcion: 'Descripcion',
    Categoria: 'Categoria',
    CapacidadMax: 'CapacidadMax',
    TarifaEstandar: 'TarifaEstandar'
  };

  export type TipoHabScalarFieldEnum = (typeof TipoHabScalarFieldEnum)[keyof typeof TipoHabScalarFieldEnum]


  export const HabitacionScalarFieldEnum: {
    HabitacionKey: 'HabitacionKey',
    HabitacionID: 'HabitacionID',
    HotelKey: 'HotelKey',
    TipoHabKey: 'TipoHabKey',
    NumeroHab: 'NumeroHab',
    Piso: 'Piso',
    Capaciddd: 'Capaciddd',
    Vista: 'Vista'
  };

  export type HabitacionScalarFieldEnum = (typeof HabitacionScalarFieldEnum)[keyof typeof HabitacionScalarFieldEnum]


  export const FechaScalarFieldEnum: {
    FechaKey: 'FechaKey',
    Fecha: 'Fecha',
    Año: 'Año',
    Trimestre: 'Trimestre',
    Mes: 'Mes',
    Dia: 'Dia',
    DiaSemana: 'DiaSemana',
    EsFinDeSemana: 'EsFinDeSemana'
  };

  export type FechaScalarFieldEnum = (typeof FechaScalarFieldEnum)[keyof typeof FechaScalarFieldEnum]


  export const EmpleadoScalarFieldEnum: {
    EmpleadoKey: 'EmpleadoKey',
    EmpleadoID: 'EmpleadoID',
    Nombre: 'Nombre',
    Apellido: 'Apellido',
    Puesto: 'Puesto',
    Departamento: 'Departamento',
    FechaContratacion: 'FechaContratacion'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const CredencialScalarFieldEnum: {
    CredencialKey: 'CredencialKey',
    EmpKey: 'EmpKey',
    Usuario: 'Usuario',
    PasswordHash: 'PasswordHash',
    Rol: 'Rol',
    Estado: 'Estado'
  };

  export type CredencialScalarFieldEnum = (typeof CredencialScalarFieldEnum)[keyof typeof CredencialScalarFieldEnum]


  export const CanalReversaScalarFieldEnum: {
    CanalKey: 'CanalKey',
    CanalID: 'CanalID',
    NombreCanal: 'NombreCanal',
    Descripcion: 'Descripcion'
  };

  export type CanalReversaScalarFieldEnum = (typeof CanalReversaScalarFieldEnum)[keyof typeof CanalReversaScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    PagoKey: 'PagoKey',
    PagoID: 'PagoID',
    Metodo: 'Metodo',
    Moneda: 'Moneda'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const ReservasScalarFieldEnum: {
    ReservaKey: 'ReservaKey',
    HotelKey: 'HotelKey',
    ClienteKey: 'ClienteKey',
    HabKey: 'HabKey',
    FechaKey: 'FechaKey',
    EmpKey: 'EmpKey',
    CanalKey: 'CanalKey',
    PagoKey: 'PagoKey',
    NochesReservadas: 'NochesReservadas',
    CantidadHuespedes: 'CantidadHuespedes',
    IngresoHabitacion: 'IngresoHabitacion',
    IngresoServicios: 'IngresoServicios',
    DescuentoTotal: 'DescuentoTotal',
    ImpuestoTotal: 'ImpuestoTotal',
    LeadTimeReserva: 'LeadTimeReserva',
    IngresoTotal: 'IngresoTotal'
  };

  export type ReservasScalarFieldEnum = (typeof ReservasScalarFieldEnum)[keyof typeof ReservasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    HotelKey?: IntFilter<"Hotel"> | number
    HotelID?: IntFilter<"Hotel"> | number
    Nombre?: StringFilter<"Hotel"> | string
    Cadena?: StringFilter<"Hotel"> | string
    Ciudad?: StringFilter<"Hotel"> | string
    Pais?: StringFilter<"Hotel"> | string
    Estrellas?: IntFilter<"Hotel"> | number
    Direccion?: StringFilter<"Hotel"> | string
    Habitaciones?: HabitacionListRelationFilter
    Reservas?: ReservasListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    HotelKey?: SortOrder
    HotelID?: SortOrder
    Nombre?: SortOrder
    Cadena?: SortOrder
    Ciudad?: SortOrder
    Pais?: SortOrder
    Estrellas?: SortOrder
    Direccion?: SortOrder
    Habitaciones?: HabitacionOrderByRelationAggregateInput
    Reservas?: ReservasOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    HotelKey?: number
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    HotelID?: IntFilter<"Hotel"> | number
    Nombre?: StringFilter<"Hotel"> | string
    Cadena?: StringFilter<"Hotel"> | string
    Ciudad?: StringFilter<"Hotel"> | string
    Pais?: StringFilter<"Hotel"> | string
    Estrellas?: IntFilter<"Hotel"> | number
    Direccion?: StringFilter<"Hotel"> | string
    Habitaciones?: HabitacionListRelationFilter
    Reservas?: ReservasListRelationFilter
  }, "HotelKey">

  export type HotelOrderByWithAggregationInput = {
    HotelKey?: SortOrder
    HotelID?: SortOrder
    Nombre?: SortOrder
    Cadena?: SortOrder
    Ciudad?: SortOrder
    Pais?: SortOrder
    Estrellas?: SortOrder
    Direccion?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _avg?: HotelAvgOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
    _sum?: HotelSumOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    HotelKey?: IntWithAggregatesFilter<"Hotel"> | number
    HotelID?: IntWithAggregatesFilter<"Hotel"> | number
    Nombre?: StringWithAggregatesFilter<"Hotel"> | string
    Cadena?: StringWithAggregatesFilter<"Hotel"> | string
    Ciudad?: StringWithAggregatesFilter<"Hotel"> | string
    Pais?: StringWithAggregatesFilter<"Hotel"> | string
    Estrellas?: IntWithAggregatesFilter<"Hotel"> | number
    Direccion?: StringWithAggregatesFilter<"Hotel"> | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    ClienteKey?: IntFilter<"Cliente"> | number
    ClienteID?: IntFilter<"Cliente"> | number
    Nombre?: StringFilter<"Cliente"> | string
    Apellido?: StringFilter<"Cliente"> | string
    Genero?: StringFilter<"Cliente"> | string
    FechaNacimiento?: DateTimeFilter<"Cliente"> | Date | string
    Nacionalidad?: StringFilter<"Cliente"> | string
    TipoCliente?: StringFilter<"Cliente"> | string
    Reservas?: ReservasListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    ClienteKey?: SortOrder
    ClienteID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Genero?: SortOrder
    FechaNacimiento?: SortOrder
    Nacionalidad?: SortOrder
    TipoCliente?: SortOrder
    Reservas?: ReservasOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    ClienteKey?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    ClienteID?: IntFilter<"Cliente"> | number
    Nombre?: StringFilter<"Cliente"> | string
    Apellido?: StringFilter<"Cliente"> | string
    Genero?: StringFilter<"Cliente"> | string
    FechaNacimiento?: DateTimeFilter<"Cliente"> | Date | string
    Nacionalidad?: StringFilter<"Cliente"> | string
    TipoCliente?: StringFilter<"Cliente"> | string
    Reservas?: ReservasListRelationFilter
  }, "ClienteKey">

  export type ClienteOrderByWithAggregationInput = {
    ClienteKey?: SortOrder
    ClienteID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Genero?: SortOrder
    FechaNacimiento?: SortOrder
    Nacionalidad?: SortOrder
    TipoCliente?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    ClienteKey?: IntWithAggregatesFilter<"Cliente"> | number
    ClienteID?: IntWithAggregatesFilter<"Cliente"> | number
    Nombre?: StringWithAggregatesFilter<"Cliente"> | string
    Apellido?: StringWithAggregatesFilter<"Cliente"> | string
    Genero?: StringWithAggregatesFilter<"Cliente"> | string
    FechaNacimiento?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    Nacionalidad?: StringWithAggregatesFilter<"Cliente"> | string
    TipoCliente?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type TipoHabWhereInput = {
    AND?: TipoHabWhereInput | TipoHabWhereInput[]
    OR?: TipoHabWhereInput[]
    NOT?: TipoHabWhereInput | TipoHabWhereInput[]
    TipoHabKey?: IntFilter<"TipoHab"> | number
    TipoHabID?: IntFilter<"TipoHab"> | number
    Descripcion?: StringFilter<"TipoHab"> | string
    Categoria?: StringFilter<"TipoHab"> | string
    CapacidadMax?: IntFilter<"TipoHab"> | number
    TarifaEstandar?: DecimalFilter<"TipoHab"> | Decimal | DecimalJsLike | number | string
    Habitaciones?: HabitacionListRelationFilter
  }

  export type TipoHabOrderByWithRelationInput = {
    TipoHabKey?: SortOrder
    TipoHabID?: SortOrder
    Descripcion?: SortOrder
    Categoria?: SortOrder
    CapacidadMax?: SortOrder
    TarifaEstandar?: SortOrder
    Habitaciones?: HabitacionOrderByRelationAggregateInput
  }

  export type TipoHabWhereUniqueInput = Prisma.AtLeast<{
    TipoHabKey?: number
    AND?: TipoHabWhereInput | TipoHabWhereInput[]
    OR?: TipoHabWhereInput[]
    NOT?: TipoHabWhereInput | TipoHabWhereInput[]
    TipoHabID?: IntFilter<"TipoHab"> | number
    Descripcion?: StringFilter<"TipoHab"> | string
    Categoria?: StringFilter<"TipoHab"> | string
    CapacidadMax?: IntFilter<"TipoHab"> | number
    TarifaEstandar?: DecimalFilter<"TipoHab"> | Decimal | DecimalJsLike | number | string
    Habitaciones?: HabitacionListRelationFilter
  }, "TipoHabKey">

  export type TipoHabOrderByWithAggregationInput = {
    TipoHabKey?: SortOrder
    TipoHabID?: SortOrder
    Descripcion?: SortOrder
    Categoria?: SortOrder
    CapacidadMax?: SortOrder
    TarifaEstandar?: SortOrder
    _count?: TipoHabCountOrderByAggregateInput
    _avg?: TipoHabAvgOrderByAggregateInput
    _max?: TipoHabMaxOrderByAggregateInput
    _min?: TipoHabMinOrderByAggregateInput
    _sum?: TipoHabSumOrderByAggregateInput
  }

  export type TipoHabScalarWhereWithAggregatesInput = {
    AND?: TipoHabScalarWhereWithAggregatesInput | TipoHabScalarWhereWithAggregatesInput[]
    OR?: TipoHabScalarWhereWithAggregatesInput[]
    NOT?: TipoHabScalarWhereWithAggregatesInput | TipoHabScalarWhereWithAggregatesInput[]
    TipoHabKey?: IntWithAggregatesFilter<"TipoHab"> | number
    TipoHabID?: IntWithAggregatesFilter<"TipoHab"> | number
    Descripcion?: StringWithAggregatesFilter<"TipoHab"> | string
    Categoria?: StringWithAggregatesFilter<"TipoHab"> | string
    CapacidadMax?: IntWithAggregatesFilter<"TipoHab"> | number
    TarifaEstandar?: DecimalWithAggregatesFilter<"TipoHab"> | Decimal | DecimalJsLike | number | string
  }

  export type HabitacionWhereInput = {
    AND?: HabitacionWhereInput | HabitacionWhereInput[]
    OR?: HabitacionWhereInput[]
    NOT?: HabitacionWhereInput | HabitacionWhereInput[]
    HabitacionKey?: IntFilter<"Habitacion"> | number
    HabitacionID?: IntFilter<"Habitacion"> | number
    HotelKey?: IntFilter<"Habitacion"> | number
    TipoHabKey?: IntFilter<"Habitacion"> | number
    NumeroHab?: StringFilter<"Habitacion"> | string
    Piso?: IntFilter<"Habitacion"> | number
    Capaciddd?: IntFilter<"Habitacion"> | number
    Vista?: BoolFilter<"Habitacion"> | boolean
    Hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    TipoHab?: XOR<TipoHabScalarRelationFilter, TipoHabWhereInput>
    Reservas?: ReservasListRelationFilter
  }

  export type HabitacionOrderByWithRelationInput = {
    HabitacionKey?: SortOrder
    HabitacionID?: SortOrder
    HotelKey?: SortOrder
    TipoHabKey?: SortOrder
    NumeroHab?: SortOrder
    Piso?: SortOrder
    Capaciddd?: SortOrder
    Vista?: SortOrder
    Hotel?: HotelOrderByWithRelationInput
    TipoHab?: TipoHabOrderByWithRelationInput
    Reservas?: ReservasOrderByRelationAggregateInput
  }

  export type HabitacionWhereUniqueInput = Prisma.AtLeast<{
    HabitacionKey?: number
    AND?: HabitacionWhereInput | HabitacionWhereInput[]
    OR?: HabitacionWhereInput[]
    NOT?: HabitacionWhereInput | HabitacionWhereInput[]
    HabitacionID?: IntFilter<"Habitacion"> | number
    HotelKey?: IntFilter<"Habitacion"> | number
    TipoHabKey?: IntFilter<"Habitacion"> | number
    NumeroHab?: StringFilter<"Habitacion"> | string
    Piso?: IntFilter<"Habitacion"> | number
    Capaciddd?: IntFilter<"Habitacion"> | number
    Vista?: BoolFilter<"Habitacion"> | boolean
    Hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    TipoHab?: XOR<TipoHabScalarRelationFilter, TipoHabWhereInput>
    Reservas?: ReservasListRelationFilter
  }, "HabitacionKey">

  export type HabitacionOrderByWithAggregationInput = {
    HabitacionKey?: SortOrder
    HabitacionID?: SortOrder
    HotelKey?: SortOrder
    TipoHabKey?: SortOrder
    NumeroHab?: SortOrder
    Piso?: SortOrder
    Capaciddd?: SortOrder
    Vista?: SortOrder
    _count?: HabitacionCountOrderByAggregateInput
    _avg?: HabitacionAvgOrderByAggregateInput
    _max?: HabitacionMaxOrderByAggregateInput
    _min?: HabitacionMinOrderByAggregateInput
    _sum?: HabitacionSumOrderByAggregateInput
  }

  export type HabitacionScalarWhereWithAggregatesInput = {
    AND?: HabitacionScalarWhereWithAggregatesInput | HabitacionScalarWhereWithAggregatesInput[]
    OR?: HabitacionScalarWhereWithAggregatesInput[]
    NOT?: HabitacionScalarWhereWithAggregatesInput | HabitacionScalarWhereWithAggregatesInput[]
    HabitacionKey?: IntWithAggregatesFilter<"Habitacion"> | number
    HabitacionID?: IntWithAggregatesFilter<"Habitacion"> | number
    HotelKey?: IntWithAggregatesFilter<"Habitacion"> | number
    TipoHabKey?: IntWithAggregatesFilter<"Habitacion"> | number
    NumeroHab?: StringWithAggregatesFilter<"Habitacion"> | string
    Piso?: IntWithAggregatesFilter<"Habitacion"> | number
    Capaciddd?: IntWithAggregatesFilter<"Habitacion"> | number
    Vista?: BoolWithAggregatesFilter<"Habitacion"> | boolean
  }

  export type FechaWhereInput = {
    AND?: FechaWhereInput | FechaWhereInput[]
    OR?: FechaWhereInput[]
    NOT?: FechaWhereInput | FechaWhereInput[]
    FechaKey?: IntFilter<"Fecha"> | number
    Fecha?: DateTimeFilter<"Fecha"> | Date | string
    Año?: IntFilter<"Fecha"> | number
    Trimestre?: IntFilter<"Fecha"> | number
    Mes?: IntFilter<"Fecha"> | number
    Dia?: IntFilter<"Fecha"> | number
    DiaSemana?: StringFilter<"Fecha"> | string
    EsFinDeSemana?: BoolFilter<"Fecha"> | boolean
    Reservas?: ReservasListRelationFilter
  }

  export type FechaOrderByWithRelationInput = {
    FechaKey?: SortOrder
    Fecha?: SortOrder
    Año?: SortOrder
    Trimestre?: SortOrder
    Mes?: SortOrder
    Dia?: SortOrder
    DiaSemana?: SortOrder
    EsFinDeSemana?: SortOrder
    Reservas?: ReservasOrderByRelationAggregateInput
  }

  export type FechaWhereUniqueInput = Prisma.AtLeast<{
    FechaKey?: number
    AND?: FechaWhereInput | FechaWhereInput[]
    OR?: FechaWhereInput[]
    NOT?: FechaWhereInput | FechaWhereInput[]
    Fecha?: DateTimeFilter<"Fecha"> | Date | string
    Año?: IntFilter<"Fecha"> | number
    Trimestre?: IntFilter<"Fecha"> | number
    Mes?: IntFilter<"Fecha"> | number
    Dia?: IntFilter<"Fecha"> | number
    DiaSemana?: StringFilter<"Fecha"> | string
    EsFinDeSemana?: BoolFilter<"Fecha"> | boolean
    Reservas?: ReservasListRelationFilter
  }, "FechaKey">

  export type FechaOrderByWithAggregationInput = {
    FechaKey?: SortOrder
    Fecha?: SortOrder
    Año?: SortOrder
    Trimestre?: SortOrder
    Mes?: SortOrder
    Dia?: SortOrder
    DiaSemana?: SortOrder
    EsFinDeSemana?: SortOrder
    _count?: FechaCountOrderByAggregateInput
    _avg?: FechaAvgOrderByAggregateInput
    _max?: FechaMaxOrderByAggregateInput
    _min?: FechaMinOrderByAggregateInput
    _sum?: FechaSumOrderByAggregateInput
  }

  export type FechaScalarWhereWithAggregatesInput = {
    AND?: FechaScalarWhereWithAggregatesInput | FechaScalarWhereWithAggregatesInput[]
    OR?: FechaScalarWhereWithAggregatesInput[]
    NOT?: FechaScalarWhereWithAggregatesInput | FechaScalarWhereWithAggregatesInput[]
    FechaKey?: IntWithAggregatesFilter<"Fecha"> | number
    Fecha?: DateTimeWithAggregatesFilter<"Fecha"> | Date | string
    Año?: IntWithAggregatesFilter<"Fecha"> | number
    Trimestre?: IntWithAggregatesFilter<"Fecha"> | number
    Mes?: IntWithAggregatesFilter<"Fecha"> | number
    Dia?: IntWithAggregatesFilter<"Fecha"> | number
    DiaSemana?: StringWithAggregatesFilter<"Fecha"> | string
    EsFinDeSemana?: BoolWithAggregatesFilter<"Fecha"> | boolean
  }

  export type EmpleadoWhereInput = {
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    EmpleadoKey?: IntFilter<"Empleado"> | number
    EmpleadoID?: IntFilter<"Empleado"> | number
    Nombre?: StringFilter<"Empleado"> | string
    Apellido?: StringFilter<"Empleado"> | string
    Puesto?: StringFilter<"Empleado"> | string
    Departamento?: StringFilter<"Empleado"> | string
    FechaContratacion?: DateTimeFilter<"Empleado"> | Date | string
    Reservas?: ReservasListRelationFilter
    Credencial?: XOR<CredencialNullableScalarRelationFilter, CredencialWhereInput> | null
  }

  export type EmpleadoOrderByWithRelationInput = {
    EmpleadoKey?: SortOrder
    EmpleadoID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Puesto?: SortOrder
    Departamento?: SortOrder
    FechaContratacion?: SortOrder
    Reservas?: ReservasOrderByRelationAggregateInput
    Credencial?: CredencialOrderByWithRelationInput
  }

  export type EmpleadoWhereUniqueInput = Prisma.AtLeast<{
    EmpleadoKey?: number
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    EmpleadoID?: IntFilter<"Empleado"> | number
    Nombre?: StringFilter<"Empleado"> | string
    Apellido?: StringFilter<"Empleado"> | string
    Puesto?: StringFilter<"Empleado"> | string
    Departamento?: StringFilter<"Empleado"> | string
    FechaContratacion?: DateTimeFilter<"Empleado"> | Date | string
    Reservas?: ReservasListRelationFilter
    Credencial?: XOR<CredencialNullableScalarRelationFilter, CredencialWhereInput> | null
  }, "EmpleadoKey">

  export type EmpleadoOrderByWithAggregationInput = {
    EmpleadoKey?: SortOrder
    EmpleadoID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Puesto?: SortOrder
    Departamento?: SortOrder
    FechaContratacion?: SortOrder
    _count?: EmpleadoCountOrderByAggregateInput
    _avg?: EmpleadoAvgOrderByAggregateInput
    _max?: EmpleadoMaxOrderByAggregateInput
    _min?: EmpleadoMinOrderByAggregateInput
    _sum?: EmpleadoSumOrderByAggregateInput
  }

  export type EmpleadoScalarWhereWithAggregatesInput = {
    AND?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    OR?: EmpleadoScalarWhereWithAggregatesInput[]
    NOT?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    EmpleadoKey?: IntWithAggregatesFilter<"Empleado"> | number
    EmpleadoID?: IntWithAggregatesFilter<"Empleado"> | number
    Nombre?: StringWithAggregatesFilter<"Empleado"> | string
    Apellido?: StringWithAggregatesFilter<"Empleado"> | string
    Puesto?: StringWithAggregatesFilter<"Empleado"> | string
    Departamento?: StringWithAggregatesFilter<"Empleado"> | string
    FechaContratacion?: DateTimeWithAggregatesFilter<"Empleado"> | Date | string
  }

  export type CredencialWhereInput = {
    AND?: CredencialWhereInput | CredencialWhereInput[]
    OR?: CredencialWhereInput[]
    NOT?: CredencialWhereInput | CredencialWhereInput[]
    CredencialKey?: IntFilter<"Credencial"> | number
    EmpKey?: IntFilter<"Credencial"> | number
    Usuario?: StringFilter<"Credencial"> | string
    PasswordHash?: StringFilter<"Credencial"> | string
    Rol?: StringFilter<"Credencial"> | string
    Estado?: BoolFilter<"Credencial"> | boolean
    Empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
  }

  export type CredencialOrderByWithRelationInput = {
    CredencialKey?: SortOrder
    EmpKey?: SortOrder
    Usuario?: SortOrder
    PasswordHash?: SortOrder
    Rol?: SortOrder
    Estado?: SortOrder
    Empleado?: EmpleadoOrderByWithRelationInput
  }

  export type CredencialWhereUniqueInput = Prisma.AtLeast<{
    CredencialKey?: number
    EmpKey?: number
    Usuario?: string
    AND?: CredencialWhereInput | CredencialWhereInput[]
    OR?: CredencialWhereInput[]
    NOT?: CredencialWhereInput | CredencialWhereInput[]
    PasswordHash?: StringFilter<"Credencial"> | string
    Rol?: StringFilter<"Credencial"> | string
    Estado?: BoolFilter<"Credencial"> | boolean
    Empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
  }, "CredencialKey" | "EmpKey" | "Usuario">

  export type CredencialOrderByWithAggregationInput = {
    CredencialKey?: SortOrder
    EmpKey?: SortOrder
    Usuario?: SortOrder
    PasswordHash?: SortOrder
    Rol?: SortOrder
    Estado?: SortOrder
    _count?: CredencialCountOrderByAggregateInput
    _avg?: CredencialAvgOrderByAggregateInput
    _max?: CredencialMaxOrderByAggregateInput
    _min?: CredencialMinOrderByAggregateInput
    _sum?: CredencialSumOrderByAggregateInput
  }

  export type CredencialScalarWhereWithAggregatesInput = {
    AND?: CredencialScalarWhereWithAggregatesInput | CredencialScalarWhereWithAggregatesInput[]
    OR?: CredencialScalarWhereWithAggregatesInput[]
    NOT?: CredencialScalarWhereWithAggregatesInput | CredencialScalarWhereWithAggregatesInput[]
    CredencialKey?: IntWithAggregatesFilter<"Credencial"> | number
    EmpKey?: IntWithAggregatesFilter<"Credencial"> | number
    Usuario?: StringWithAggregatesFilter<"Credencial"> | string
    PasswordHash?: StringWithAggregatesFilter<"Credencial"> | string
    Rol?: StringWithAggregatesFilter<"Credencial"> | string
    Estado?: BoolWithAggregatesFilter<"Credencial"> | boolean
  }

  export type CanalReversaWhereInput = {
    AND?: CanalReversaWhereInput | CanalReversaWhereInput[]
    OR?: CanalReversaWhereInput[]
    NOT?: CanalReversaWhereInput | CanalReversaWhereInput[]
    CanalKey?: IntFilter<"CanalReversa"> | number
    CanalID?: IntFilter<"CanalReversa"> | number
    NombreCanal?: StringFilter<"CanalReversa"> | string
    Descripcion?: StringFilter<"CanalReversa"> | string
    Reservas?: ReservasListRelationFilter
  }

  export type CanalReversaOrderByWithRelationInput = {
    CanalKey?: SortOrder
    CanalID?: SortOrder
    NombreCanal?: SortOrder
    Descripcion?: SortOrder
    Reservas?: ReservasOrderByRelationAggregateInput
  }

  export type CanalReversaWhereUniqueInput = Prisma.AtLeast<{
    CanalKey?: number
    AND?: CanalReversaWhereInput | CanalReversaWhereInput[]
    OR?: CanalReversaWhereInput[]
    NOT?: CanalReversaWhereInput | CanalReversaWhereInput[]
    CanalID?: IntFilter<"CanalReversa"> | number
    NombreCanal?: StringFilter<"CanalReversa"> | string
    Descripcion?: StringFilter<"CanalReversa"> | string
    Reservas?: ReservasListRelationFilter
  }, "CanalKey">

  export type CanalReversaOrderByWithAggregationInput = {
    CanalKey?: SortOrder
    CanalID?: SortOrder
    NombreCanal?: SortOrder
    Descripcion?: SortOrder
    _count?: CanalReversaCountOrderByAggregateInput
    _avg?: CanalReversaAvgOrderByAggregateInput
    _max?: CanalReversaMaxOrderByAggregateInput
    _min?: CanalReversaMinOrderByAggregateInput
    _sum?: CanalReversaSumOrderByAggregateInput
  }

  export type CanalReversaScalarWhereWithAggregatesInput = {
    AND?: CanalReversaScalarWhereWithAggregatesInput | CanalReversaScalarWhereWithAggregatesInput[]
    OR?: CanalReversaScalarWhereWithAggregatesInput[]
    NOT?: CanalReversaScalarWhereWithAggregatesInput | CanalReversaScalarWhereWithAggregatesInput[]
    CanalKey?: IntWithAggregatesFilter<"CanalReversa"> | number
    CanalID?: IntWithAggregatesFilter<"CanalReversa"> | number
    NombreCanal?: StringWithAggregatesFilter<"CanalReversa"> | string
    Descripcion?: StringWithAggregatesFilter<"CanalReversa"> | string
  }

  export type PagoWhereInput = {
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    PagoKey?: IntFilter<"Pago"> | number
    PagoID?: IntFilter<"Pago"> | number
    Metodo?: StringFilter<"Pago"> | string
    Moneda?: StringFilter<"Pago"> | string
    Reservas?: ReservasListRelationFilter
  }

  export type PagoOrderByWithRelationInput = {
    PagoKey?: SortOrder
    PagoID?: SortOrder
    Metodo?: SortOrder
    Moneda?: SortOrder
    Reservas?: ReservasOrderByRelationAggregateInput
  }

  export type PagoWhereUniqueInput = Prisma.AtLeast<{
    PagoKey?: number
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    PagoID?: IntFilter<"Pago"> | number
    Metodo?: StringFilter<"Pago"> | string
    Moneda?: StringFilter<"Pago"> | string
    Reservas?: ReservasListRelationFilter
  }, "PagoKey">

  export type PagoOrderByWithAggregationInput = {
    PagoKey?: SortOrder
    PagoID?: SortOrder
    Metodo?: SortOrder
    Moneda?: SortOrder
    _count?: PagoCountOrderByAggregateInput
    _avg?: PagoAvgOrderByAggregateInput
    _max?: PagoMaxOrderByAggregateInput
    _min?: PagoMinOrderByAggregateInput
    _sum?: PagoSumOrderByAggregateInput
  }

  export type PagoScalarWhereWithAggregatesInput = {
    AND?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    OR?: PagoScalarWhereWithAggregatesInput[]
    NOT?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    PagoKey?: IntWithAggregatesFilter<"Pago"> | number
    PagoID?: IntWithAggregatesFilter<"Pago"> | number
    Metodo?: StringWithAggregatesFilter<"Pago"> | string
    Moneda?: StringWithAggregatesFilter<"Pago"> | string
  }

  export type ReservasWhereInput = {
    AND?: ReservasWhereInput | ReservasWhereInput[]
    OR?: ReservasWhereInput[]
    NOT?: ReservasWhereInput | ReservasWhereInput[]
    ReservaKey?: IntFilter<"Reservas"> | number
    HotelKey?: IntFilter<"Reservas"> | number
    ClienteKey?: IntFilter<"Reservas"> | number
    HabKey?: IntFilter<"Reservas"> | number
    FechaKey?: IntFilter<"Reservas"> | number
    EmpKey?: IntFilter<"Reservas"> | number
    CanalKey?: IntFilter<"Reservas"> | number
    PagoKey?: IntFilter<"Reservas"> | number
    NochesReservadas?: IntFilter<"Reservas"> | number
    CantidadHuespedes?: IntFilter<"Reservas"> | number
    IngresoHabitacion?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFilter<"Reservas"> | number
    IngresoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    Hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    Habitacion?: XOR<HabitacionScalarRelationFilter, HabitacionWhereInput>
    Fecha?: XOR<FechaScalarRelationFilter, FechaWhereInput>
    Empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    CanalReversa?: XOR<CanalReversaScalarRelationFilter, CanalReversaWhereInput>
    Pago?: XOR<PagoScalarRelationFilter, PagoWhereInput>
  }

  export type ReservasOrderByWithRelationInput = {
    ReservaKey?: SortOrder
    HotelKey?: SortOrder
    ClienteKey?: SortOrder
    HabKey?: SortOrder
    FechaKey?: SortOrder
    EmpKey?: SortOrder
    CanalKey?: SortOrder
    PagoKey?: SortOrder
    NochesReservadas?: SortOrder
    CantidadHuespedes?: SortOrder
    IngresoHabitacion?: SortOrder
    IngresoServicios?: SortOrder
    DescuentoTotal?: SortOrder
    ImpuestoTotal?: SortOrder
    LeadTimeReserva?: SortOrder
    IngresoTotal?: SortOrder
    Hotel?: HotelOrderByWithRelationInput
    Cliente?: ClienteOrderByWithRelationInput
    Habitacion?: HabitacionOrderByWithRelationInput
    Fecha?: FechaOrderByWithRelationInput
    Empleado?: EmpleadoOrderByWithRelationInput
    CanalReversa?: CanalReversaOrderByWithRelationInput
    Pago?: PagoOrderByWithRelationInput
  }

  export type ReservasWhereUniqueInput = Prisma.AtLeast<{
    ReservaKey?: number
    AND?: ReservasWhereInput | ReservasWhereInput[]
    OR?: ReservasWhereInput[]
    NOT?: ReservasWhereInput | ReservasWhereInput[]
    HotelKey?: IntFilter<"Reservas"> | number
    ClienteKey?: IntFilter<"Reservas"> | number
    HabKey?: IntFilter<"Reservas"> | number
    FechaKey?: IntFilter<"Reservas"> | number
    EmpKey?: IntFilter<"Reservas"> | number
    CanalKey?: IntFilter<"Reservas"> | number
    PagoKey?: IntFilter<"Reservas"> | number
    NochesReservadas?: IntFilter<"Reservas"> | number
    CantidadHuespedes?: IntFilter<"Reservas"> | number
    IngresoHabitacion?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFilter<"Reservas"> | number
    IngresoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    Hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    Habitacion?: XOR<HabitacionScalarRelationFilter, HabitacionWhereInput>
    Fecha?: XOR<FechaScalarRelationFilter, FechaWhereInput>
    Empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    CanalReversa?: XOR<CanalReversaScalarRelationFilter, CanalReversaWhereInput>
    Pago?: XOR<PagoScalarRelationFilter, PagoWhereInput>
  }, "ReservaKey">

  export type ReservasOrderByWithAggregationInput = {
    ReservaKey?: SortOrder
    HotelKey?: SortOrder
    ClienteKey?: SortOrder
    HabKey?: SortOrder
    FechaKey?: SortOrder
    EmpKey?: SortOrder
    CanalKey?: SortOrder
    PagoKey?: SortOrder
    NochesReservadas?: SortOrder
    CantidadHuespedes?: SortOrder
    IngresoHabitacion?: SortOrder
    IngresoServicios?: SortOrder
    DescuentoTotal?: SortOrder
    ImpuestoTotal?: SortOrder
    LeadTimeReserva?: SortOrder
    IngresoTotal?: SortOrder
    _count?: ReservasCountOrderByAggregateInput
    _avg?: ReservasAvgOrderByAggregateInput
    _max?: ReservasMaxOrderByAggregateInput
    _min?: ReservasMinOrderByAggregateInput
    _sum?: ReservasSumOrderByAggregateInput
  }

  export type ReservasScalarWhereWithAggregatesInput = {
    AND?: ReservasScalarWhereWithAggregatesInput | ReservasScalarWhereWithAggregatesInput[]
    OR?: ReservasScalarWhereWithAggregatesInput[]
    NOT?: ReservasScalarWhereWithAggregatesInput | ReservasScalarWhereWithAggregatesInput[]
    ReservaKey?: IntWithAggregatesFilter<"Reservas"> | number
    HotelKey?: IntWithAggregatesFilter<"Reservas"> | number
    ClienteKey?: IntWithAggregatesFilter<"Reservas"> | number
    HabKey?: IntWithAggregatesFilter<"Reservas"> | number
    FechaKey?: IntWithAggregatesFilter<"Reservas"> | number
    EmpKey?: IntWithAggregatesFilter<"Reservas"> | number
    CanalKey?: IntWithAggregatesFilter<"Reservas"> | number
    PagoKey?: IntWithAggregatesFilter<"Reservas"> | number
    NochesReservadas?: IntWithAggregatesFilter<"Reservas"> | number
    CantidadHuespedes?: IntWithAggregatesFilter<"Reservas"> | number
    IngresoHabitacion?: DecimalWithAggregatesFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalWithAggregatesFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalWithAggregatesFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalWithAggregatesFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntWithAggregatesFilter<"Reservas"> | number
    IngresoTotal?: DecimalWithAggregatesFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
  }

  export type HotelCreateInput = {
    HotelID: number
    Nombre: string
    Cadena: string
    Ciudad: string
    Pais: string
    Estrellas: number
    Direccion: string
    Habitaciones?: HabitacionCreateNestedManyWithoutHotelInput
    Reservas?: ReservasCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateInput = {
    HotelKey?: number
    HotelID: number
    Nombre: string
    Cadena: string
    Ciudad: string
    Pais: string
    Estrellas: number
    Direccion: string
    Habitaciones?: HabitacionUncheckedCreateNestedManyWithoutHotelInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelUpdateInput = {
    HotelID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Cadena?: StringFieldUpdateOperationsInput | string
    Ciudad?: StringFieldUpdateOperationsInput | string
    Pais?: StringFieldUpdateOperationsInput | string
    Estrellas?: IntFieldUpdateOperationsInput | number
    Direccion?: StringFieldUpdateOperationsInput | string
    Habitaciones?: HabitacionUpdateManyWithoutHotelNestedInput
    Reservas?: ReservasUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    HotelKey?: IntFieldUpdateOperationsInput | number
    HotelID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Cadena?: StringFieldUpdateOperationsInput | string
    Ciudad?: StringFieldUpdateOperationsInput | string
    Pais?: StringFieldUpdateOperationsInput | string
    Estrellas?: IntFieldUpdateOperationsInput | number
    Direccion?: StringFieldUpdateOperationsInput | string
    Habitaciones?: HabitacionUncheckedUpdateManyWithoutHotelNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyInput = {
    HotelKey?: number
    HotelID: number
    Nombre: string
    Cadena: string
    Ciudad: string
    Pais: string
    Estrellas: number
    Direccion: string
  }

  export type HotelUpdateManyMutationInput = {
    HotelID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Cadena?: StringFieldUpdateOperationsInput | string
    Ciudad?: StringFieldUpdateOperationsInput | string
    Pais?: StringFieldUpdateOperationsInput | string
    Estrellas?: IntFieldUpdateOperationsInput | number
    Direccion?: StringFieldUpdateOperationsInput | string
  }

  export type HotelUncheckedUpdateManyInput = {
    HotelKey?: IntFieldUpdateOperationsInput | number
    HotelID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Cadena?: StringFieldUpdateOperationsInput | string
    Ciudad?: StringFieldUpdateOperationsInput | string
    Pais?: StringFieldUpdateOperationsInput | string
    Estrellas?: IntFieldUpdateOperationsInput | number
    Direccion?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateInput = {
    ClienteID: number
    Nombre: string
    Apellido: string
    Genero: string
    FechaNacimiento: Date | string
    Nacionalidad: string
    TipoCliente: string
    Reservas?: ReservasCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    ClienteKey?: number
    ClienteID: number
    Nombre: string
    Apellido: string
    Genero: string
    FechaNacimiento: Date | string
    Nacionalidad: string
    TipoCliente: string
    Reservas?: ReservasUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    ClienteID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Genero?: StringFieldUpdateOperationsInput | string
    FechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    Nacionalidad?: StringFieldUpdateOperationsInput | string
    TipoCliente?: StringFieldUpdateOperationsInput | string
    Reservas?: ReservasUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    ClienteKey?: IntFieldUpdateOperationsInput | number
    ClienteID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Genero?: StringFieldUpdateOperationsInput | string
    FechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    Nacionalidad?: StringFieldUpdateOperationsInput | string
    TipoCliente?: StringFieldUpdateOperationsInput | string
    Reservas?: ReservasUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    ClienteKey?: number
    ClienteID: number
    Nombre: string
    Apellido: string
    Genero: string
    FechaNacimiento: Date | string
    Nacionalidad: string
    TipoCliente: string
  }

  export type ClienteUpdateManyMutationInput = {
    ClienteID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Genero?: StringFieldUpdateOperationsInput | string
    FechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    Nacionalidad?: StringFieldUpdateOperationsInput | string
    TipoCliente?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    ClienteKey?: IntFieldUpdateOperationsInput | number
    ClienteID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Genero?: StringFieldUpdateOperationsInput | string
    FechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    Nacionalidad?: StringFieldUpdateOperationsInput | string
    TipoCliente?: StringFieldUpdateOperationsInput | string
  }

  export type TipoHabCreateInput = {
    TipoHabID: number
    Descripcion: string
    Categoria: string
    CapacidadMax: number
    TarifaEstandar: Decimal | DecimalJsLike | number | string
    Habitaciones?: HabitacionCreateNestedManyWithoutTipoHabInput
  }

  export type TipoHabUncheckedCreateInput = {
    TipoHabKey?: number
    TipoHabID: number
    Descripcion: string
    Categoria: string
    CapacidadMax: number
    TarifaEstandar: Decimal | DecimalJsLike | number | string
    Habitaciones?: HabitacionUncheckedCreateNestedManyWithoutTipoHabInput
  }

  export type TipoHabUpdateInput = {
    TipoHabID?: IntFieldUpdateOperationsInput | number
    Descripcion?: StringFieldUpdateOperationsInput | string
    Categoria?: StringFieldUpdateOperationsInput | string
    CapacidadMax?: IntFieldUpdateOperationsInput | number
    TarifaEstandar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Habitaciones?: HabitacionUpdateManyWithoutTipoHabNestedInput
  }

  export type TipoHabUncheckedUpdateInput = {
    TipoHabKey?: IntFieldUpdateOperationsInput | number
    TipoHabID?: IntFieldUpdateOperationsInput | number
    Descripcion?: StringFieldUpdateOperationsInput | string
    Categoria?: StringFieldUpdateOperationsInput | string
    CapacidadMax?: IntFieldUpdateOperationsInput | number
    TarifaEstandar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Habitaciones?: HabitacionUncheckedUpdateManyWithoutTipoHabNestedInput
  }

  export type TipoHabCreateManyInput = {
    TipoHabKey?: number
    TipoHabID: number
    Descripcion: string
    Categoria: string
    CapacidadMax: number
    TarifaEstandar: Decimal | DecimalJsLike | number | string
  }

  export type TipoHabUpdateManyMutationInput = {
    TipoHabID?: IntFieldUpdateOperationsInput | number
    Descripcion?: StringFieldUpdateOperationsInput | string
    Categoria?: StringFieldUpdateOperationsInput | string
    CapacidadMax?: IntFieldUpdateOperationsInput | number
    TarifaEstandar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TipoHabUncheckedUpdateManyInput = {
    TipoHabKey?: IntFieldUpdateOperationsInput | number
    TipoHabID?: IntFieldUpdateOperationsInput | number
    Descripcion?: StringFieldUpdateOperationsInput | string
    Categoria?: StringFieldUpdateOperationsInput | string
    CapacidadMax?: IntFieldUpdateOperationsInput | number
    TarifaEstandar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type HabitacionCreateInput = {
    HabitacionID: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
    Hotel: HotelCreateNestedOneWithoutHabitacionesInput
    TipoHab: TipoHabCreateNestedOneWithoutHabitacionesInput
    Reservas?: ReservasCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUncheckedCreateInput = {
    HabitacionKey?: number
    HabitacionID: number
    HotelKey: number
    TipoHabKey: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
    Reservas?: ReservasUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUpdateInput = {
    HabitacionID?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
    Hotel?: HotelUpdateOneRequiredWithoutHabitacionesNestedInput
    TipoHab?: TipoHabUpdateOneRequiredWithoutHabitacionesNestedInput
    Reservas?: ReservasUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateInput = {
    HabitacionKey?: IntFieldUpdateOperationsInput | number
    HabitacionID?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    TipoHabKey?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
    Reservas?: ReservasUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionCreateManyInput = {
    HabitacionKey?: number
    HabitacionID: number
    HotelKey: number
    TipoHabKey: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
  }

  export type HabitacionUpdateManyMutationInput = {
    HabitacionID?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HabitacionUncheckedUpdateManyInput = {
    HabitacionKey?: IntFieldUpdateOperationsInput | number
    HabitacionID?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    TipoHabKey?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FechaCreateInput = {
    Fecha: Date | string
    Año: number
    Trimestre: number
    Mes: number
    Dia: number
    DiaSemana: string
    EsFinDeSemana: boolean
    Reservas?: ReservasCreateNestedManyWithoutFechaInput
  }

  export type FechaUncheckedCreateInput = {
    FechaKey?: number
    Fecha: Date | string
    Año: number
    Trimestre: number
    Mes: number
    Dia: number
    DiaSemana: string
    EsFinDeSemana: boolean
    Reservas?: ReservasUncheckedCreateNestedManyWithoutFechaInput
  }

  export type FechaUpdateInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Año?: IntFieldUpdateOperationsInput | number
    Trimestre?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Dia?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    EsFinDeSemana?: BoolFieldUpdateOperationsInput | boolean
    Reservas?: ReservasUpdateManyWithoutFechaNestedInput
  }

  export type FechaUncheckedUpdateInput = {
    FechaKey?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Año?: IntFieldUpdateOperationsInput | number
    Trimestre?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Dia?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    EsFinDeSemana?: BoolFieldUpdateOperationsInput | boolean
    Reservas?: ReservasUncheckedUpdateManyWithoutFechaNestedInput
  }

  export type FechaCreateManyInput = {
    FechaKey?: number
    Fecha: Date | string
    Año: number
    Trimestre: number
    Mes: number
    Dia: number
    DiaSemana: string
    EsFinDeSemana: boolean
  }

  export type FechaUpdateManyMutationInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Año?: IntFieldUpdateOperationsInput | number
    Trimestre?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Dia?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    EsFinDeSemana?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FechaUncheckedUpdateManyInput = {
    FechaKey?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Año?: IntFieldUpdateOperationsInput | number
    Trimestre?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Dia?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    EsFinDeSemana?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmpleadoCreateInput = {
    EmpleadoID: number
    Nombre: string
    Apellido: string
    Puesto: string
    Departamento: string
    FechaContratacion: Date | string
    Reservas?: ReservasCreateNestedManyWithoutEmpleadoInput
    Credencial?: CredencialCreateNestedOneWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateInput = {
    EmpleadoKey?: number
    EmpleadoID: number
    Nombre: string
    Apellido: string
    Puesto: string
    Departamento: string
    FechaContratacion: Date | string
    Reservas?: ReservasUncheckedCreateNestedManyWithoutEmpleadoInput
    Credencial?: CredencialUncheckedCreateNestedOneWithoutEmpleadoInput
  }

  export type EmpleadoUpdateInput = {
    EmpleadoID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Puesto?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    FechaContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Reservas?: ReservasUpdateManyWithoutEmpleadoNestedInput
    Credencial?: CredencialUpdateOneWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateInput = {
    EmpleadoKey?: IntFieldUpdateOperationsInput | number
    EmpleadoID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Puesto?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    FechaContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Reservas?: ReservasUncheckedUpdateManyWithoutEmpleadoNestedInput
    Credencial?: CredencialUncheckedUpdateOneWithoutEmpleadoNestedInput
  }

  export type EmpleadoCreateManyInput = {
    EmpleadoKey?: number
    EmpleadoID: number
    Nombre: string
    Apellido: string
    Puesto: string
    Departamento: string
    FechaContratacion: Date | string
  }

  export type EmpleadoUpdateManyMutationInput = {
    EmpleadoID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Puesto?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    FechaContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpleadoUncheckedUpdateManyInput = {
    EmpleadoKey?: IntFieldUpdateOperationsInput | number
    EmpleadoID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Puesto?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    FechaContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredencialCreateInput = {
    Usuario: string
    PasswordHash: string
    Rol?: string
    Estado?: boolean
    Empleado: EmpleadoCreateNestedOneWithoutCredencialInput
  }

  export type CredencialUncheckedCreateInput = {
    CredencialKey?: number
    EmpKey: number
    Usuario: string
    PasswordHash: string
    Rol?: string
    Estado?: boolean
  }

  export type CredencialUpdateInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
    Empleado?: EmpleadoUpdateOneRequiredWithoutCredencialNestedInput
  }

  export type CredencialUncheckedUpdateInput = {
    CredencialKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CredencialCreateManyInput = {
    CredencialKey?: number
    EmpKey: number
    Usuario: string
    PasswordHash: string
    Rol?: string
    Estado?: boolean
  }

  export type CredencialUpdateManyMutationInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CredencialUncheckedUpdateManyInput = {
    CredencialKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CanalReversaCreateInput = {
    CanalID: number
    NombreCanal: string
    Descripcion: string
    Reservas?: ReservasCreateNestedManyWithoutCanalReversaInput
  }

  export type CanalReversaUncheckedCreateInput = {
    CanalKey?: number
    CanalID: number
    NombreCanal: string
    Descripcion: string
    Reservas?: ReservasUncheckedCreateNestedManyWithoutCanalReversaInput
  }

  export type CanalReversaUpdateInput = {
    CanalID?: IntFieldUpdateOperationsInput | number
    NombreCanal?: StringFieldUpdateOperationsInput | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Reservas?: ReservasUpdateManyWithoutCanalReversaNestedInput
  }

  export type CanalReversaUncheckedUpdateInput = {
    CanalKey?: IntFieldUpdateOperationsInput | number
    CanalID?: IntFieldUpdateOperationsInput | number
    NombreCanal?: StringFieldUpdateOperationsInput | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Reservas?: ReservasUncheckedUpdateManyWithoutCanalReversaNestedInput
  }

  export type CanalReversaCreateManyInput = {
    CanalKey?: number
    CanalID: number
    NombreCanal: string
    Descripcion: string
  }

  export type CanalReversaUpdateManyMutationInput = {
    CanalID?: IntFieldUpdateOperationsInput | number
    NombreCanal?: StringFieldUpdateOperationsInput | string
    Descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CanalReversaUncheckedUpdateManyInput = {
    CanalKey?: IntFieldUpdateOperationsInput | number
    CanalID?: IntFieldUpdateOperationsInput | number
    NombreCanal?: StringFieldUpdateOperationsInput | string
    Descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type PagoCreateInput = {
    PagoID: number
    Metodo: string
    Moneda: string
    Reservas?: ReservasCreateNestedManyWithoutPagoInput
  }

  export type PagoUncheckedCreateInput = {
    PagoKey?: number
    PagoID: number
    Metodo: string
    Moneda: string
    Reservas?: ReservasUncheckedCreateNestedManyWithoutPagoInput
  }

  export type PagoUpdateInput = {
    PagoID?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
    Moneda?: StringFieldUpdateOperationsInput | string
    Reservas?: ReservasUpdateManyWithoutPagoNestedInput
  }

  export type PagoUncheckedUpdateInput = {
    PagoKey?: IntFieldUpdateOperationsInput | number
    PagoID?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
    Moneda?: StringFieldUpdateOperationsInput | string
    Reservas?: ReservasUncheckedUpdateManyWithoutPagoNestedInput
  }

  export type PagoCreateManyInput = {
    PagoKey?: number
    PagoID: number
    Metodo: string
    Moneda: string
  }

  export type PagoUpdateManyMutationInput = {
    PagoID?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
    Moneda?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUncheckedUpdateManyInput = {
    PagoKey?: IntFieldUpdateOperationsInput | number
    PagoID?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
    Moneda?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasCreateInput = {
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
    Hotel: HotelCreateNestedOneWithoutReservasInput
    Cliente: ClienteCreateNestedOneWithoutReservasInput
    Habitacion: HabitacionCreateNestedOneWithoutReservasInput
    Fecha: FechaCreateNestedOneWithoutReservasInput
    Empleado: EmpleadoCreateNestedOneWithoutReservasInput
    CanalReversa: CanalReversaCreateNestedOneWithoutReservasInput
    Pago: PagoCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpdateInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Hotel?: HotelUpdateOneRequiredWithoutReservasNestedInput
    Cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    Habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    Fecha?: FechaUpdateOneRequiredWithoutReservasNestedInput
    Empleado?: EmpleadoUpdateOneRequiredWithoutReservasNestedInput
    CanalReversa?: CanalReversaUpdateOneRequiredWithoutReservasNestedInput
    Pago?: PagoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateManyInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpdateManyMutationInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUncheckedUpdateManyInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type HabitacionListRelationFilter = {
    every?: HabitacionWhereInput
    some?: HabitacionWhereInput
    none?: HabitacionWhereInput
  }

  export type ReservasListRelationFilter = {
    every?: ReservasWhereInput
    some?: ReservasWhereInput
    none?: ReservasWhereInput
  }

  export type HabitacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelCountOrderByAggregateInput = {
    HotelKey?: SortOrder
    HotelID?: SortOrder
    Nombre?: SortOrder
    Cadena?: SortOrder
    Ciudad?: SortOrder
    Pais?: SortOrder
    Estrellas?: SortOrder
    Direccion?: SortOrder
  }

  export type HotelAvgOrderByAggregateInput = {
    HotelKey?: SortOrder
    HotelID?: SortOrder
    Estrellas?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    HotelKey?: SortOrder
    HotelID?: SortOrder
    Nombre?: SortOrder
    Cadena?: SortOrder
    Ciudad?: SortOrder
    Pais?: SortOrder
    Estrellas?: SortOrder
    Direccion?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    HotelKey?: SortOrder
    HotelID?: SortOrder
    Nombre?: SortOrder
    Cadena?: SortOrder
    Ciudad?: SortOrder
    Pais?: SortOrder
    Estrellas?: SortOrder
    Direccion?: SortOrder
  }

  export type HotelSumOrderByAggregateInput = {
    HotelKey?: SortOrder
    HotelID?: SortOrder
    Estrellas?: SortOrder
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

  export type ClienteCountOrderByAggregateInput = {
    ClienteKey?: SortOrder
    ClienteID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Genero?: SortOrder
    FechaNacimiento?: SortOrder
    Nacionalidad?: SortOrder
    TipoCliente?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    ClienteKey?: SortOrder
    ClienteID?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    ClienteKey?: SortOrder
    ClienteID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Genero?: SortOrder
    FechaNacimiento?: SortOrder
    Nacionalidad?: SortOrder
    TipoCliente?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    ClienteKey?: SortOrder
    ClienteID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Genero?: SortOrder
    FechaNacimiento?: SortOrder
    Nacionalidad?: SortOrder
    TipoCliente?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    ClienteKey?: SortOrder
    ClienteID?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TipoHabCountOrderByAggregateInput = {
    TipoHabKey?: SortOrder
    TipoHabID?: SortOrder
    Descripcion?: SortOrder
    Categoria?: SortOrder
    CapacidadMax?: SortOrder
    TarifaEstandar?: SortOrder
  }

  export type TipoHabAvgOrderByAggregateInput = {
    TipoHabKey?: SortOrder
    TipoHabID?: SortOrder
    CapacidadMax?: SortOrder
    TarifaEstandar?: SortOrder
  }

  export type TipoHabMaxOrderByAggregateInput = {
    TipoHabKey?: SortOrder
    TipoHabID?: SortOrder
    Descripcion?: SortOrder
    Categoria?: SortOrder
    CapacidadMax?: SortOrder
    TarifaEstandar?: SortOrder
  }

  export type TipoHabMinOrderByAggregateInput = {
    TipoHabKey?: SortOrder
    TipoHabID?: SortOrder
    Descripcion?: SortOrder
    Categoria?: SortOrder
    CapacidadMax?: SortOrder
    TarifaEstandar?: SortOrder
  }

  export type TipoHabSumOrderByAggregateInput = {
    TipoHabKey?: SortOrder
    TipoHabID?: SortOrder
    CapacidadMax?: SortOrder
    TarifaEstandar?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HotelScalarRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type TipoHabScalarRelationFilter = {
    is?: TipoHabWhereInput
    isNot?: TipoHabWhereInput
  }

  export type HabitacionCountOrderByAggregateInput = {
    HabitacionKey?: SortOrder
    HabitacionID?: SortOrder
    HotelKey?: SortOrder
    TipoHabKey?: SortOrder
    NumeroHab?: SortOrder
    Piso?: SortOrder
    Capaciddd?: SortOrder
    Vista?: SortOrder
  }

  export type HabitacionAvgOrderByAggregateInput = {
    HabitacionKey?: SortOrder
    HabitacionID?: SortOrder
    HotelKey?: SortOrder
    TipoHabKey?: SortOrder
    Piso?: SortOrder
    Capaciddd?: SortOrder
  }

  export type HabitacionMaxOrderByAggregateInput = {
    HabitacionKey?: SortOrder
    HabitacionID?: SortOrder
    HotelKey?: SortOrder
    TipoHabKey?: SortOrder
    NumeroHab?: SortOrder
    Piso?: SortOrder
    Capaciddd?: SortOrder
    Vista?: SortOrder
  }

  export type HabitacionMinOrderByAggregateInput = {
    HabitacionKey?: SortOrder
    HabitacionID?: SortOrder
    HotelKey?: SortOrder
    TipoHabKey?: SortOrder
    NumeroHab?: SortOrder
    Piso?: SortOrder
    Capaciddd?: SortOrder
    Vista?: SortOrder
  }

  export type HabitacionSumOrderByAggregateInput = {
    HabitacionKey?: SortOrder
    HabitacionID?: SortOrder
    HotelKey?: SortOrder
    TipoHabKey?: SortOrder
    Piso?: SortOrder
    Capaciddd?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FechaCountOrderByAggregateInput = {
    FechaKey?: SortOrder
    Fecha?: SortOrder
    Año?: SortOrder
    Trimestre?: SortOrder
    Mes?: SortOrder
    Dia?: SortOrder
    DiaSemana?: SortOrder
    EsFinDeSemana?: SortOrder
  }

  export type FechaAvgOrderByAggregateInput = {
    FechaKey?: SortOrder
    Año?: SortOrder
    Trimestre?: SortOrder
    Mes?: SortOrder
    Dia?: SortOrder
  }

  export type FechaMaxOrderByAggregateInput = {
    FechaKey?: SortOrder
    Fecha?: SortOrder
    Año?: SortOrder
    Trimestre?: SortOrder
    Mes?: SortOrder
    Dia?: SortOrder
    DiaSemana?: SortOrder
    EsFinDeSemana?: SortOrder
  }

  export type FechaMinOrderByAggregateInput = {
    FechaKey?: SortOrder
    Fecha?: SortOrder
    Año?: SortOrder
    Trimestre?: SortOrder
    Mes?: SortOrder
    Dia?: SortOrder
    DiaSemana?: SortOrder
    EsFinDeSemana?: SortOrder
  }

  export type FechaSumOrderByAggregateInput = {
    FechaKey?: SortOrder
    Año?: SortOrder
    Trimestre?: SortOrder
    Mes?: SortOrder
    Dia?: SortOrder
  }

  export type CredencialNullableScalarRelationFilter = {
    is?: CredencialWhereInput | null
    isNot?: CredencialWhereInput | null
  }

  export type EmpleadoCountOrderByAggregateInput = {
    EmpleadoKey?: SortOrder
    EmpleadoID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Puesto?: SortOrder
    Departamento?: SortOrder
    FechaContratacion?: SortOrder
  }

  export type EmpleadoAvgOrderByAggregateInput = {
    EmpleadoKey?: SortOrder
    EmpleadoID?: SortOrder
  }

  export type EmpleadoMaxOrderByAggregateInput = {
    EmpleadoKey?: SortOrder
    EmpleadoID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Puesto?: SortOrder
    Departamento?: SortOrder
    FechaContratacion?: SortOrder
  }

  export type EmpleadoMinOrderByAggregateInput = {
    EmpleadoKey?: SortOrder
    EmpleadoID?: SortOrder
    Nombre?: SortOrder
    Apellido?: SortOrder
    Puesto?: SortOrder
    Departamento?: SortOrder
    FechaContratacion?: SortOrder
  }

  export type EmpleadoSumOrderByAggregateInput = {
    EmpleadoKey?: SortOrder
    EmpleadoID?: SortOrder
  }

  export type EmpleadoScalarRelationFilter = {
    is?: EmpleadoWhereInput
    isNot?: EmpleadoWhereInput
  }

  export type CredencialCountOrderByAggregateInput = {
    CredencialKey?: SortOrder
    EmpKey?: SortOrder
    Usuario?: SortOrder
    PasswordHash?: SortOrder
    Rol?: SortOrder
    Estado?: SortOrder
  }

  export type CredencialAvgOrderByAggregateInput = {
    CredencialKey?: SortOrder
    EmpKey?: SortOrder
  }

  export type CredencialMaxOrderByAggregateInput = {
    CredencialKey?: SortOrder
    EmpKey?: SortOrder
    Usuario?: SortOrder
    PasswordHash?: SortOrder
    Rol?: SortOrder
    Estado?: SortOrder
  }

  export type CredencialMinOrderByAggregateInput = {
    CredencialKey?: SortOrder
    EmpKey?: SortOrder
    Usuario?: SortOrder
    PasswordHash?: SortOrder
    Rol?: SortOrder
    Estado?: SortOrder
  }

  export type CredencialSumOrderByAggregateInput = {
    CredencialKey?: SortOrder
    EmpKey?: SortOrder
  }

  export type CanalReversaCountOrderByAggregateInput = {
    CanalKey?: SortOrder
    CanalID?: SortOrder
    NombreCanal?: SortOrder
    Descripcion?: SortOrder
  }

  export type CanalReversaAvgOrderByAggregateInput = {
    CanalKey?: SortOrder
    CanalID?: SortOrder
  }

  export type CanalReversaMaxOrderByAggregateInput = {
    CanalKey?: SortOrder
    CanalID?: SortOrder
    NombreCanal?: SortOrder
    Descripcion?: SortOrder
  }

  export type CanalReversaMinOrderByAggregateInput = {
    CanalKey?: SortOrder
    CanalID?: SortOrder
    NombreCanal?: SortOrder
    Descripcion?: SortOrder
  }

  export type CanalReversaSumOrderByAggregateInput = {
    CanalKey?: SortOrder
    CanalID?: SortOrder
  }

  export type PagoCountOrderByAggregateInput = {
    PagoKey?: SortOrder
    PagoID?: SortOrder
    Metodo?: SortOrder
    Moneda?: SortOrder
  }

  export type PagoAvgOrderByAggregateInput = {
    PagoKey?: SortOrder
    PagoID?: SortOrder
  }

  export type PagoMaxOrderByAggregateInput = {
    PagoKey?: SortOrder
    PagoID?: SortOrder
    Metodo?: SortOrder
    Moneda?: SortOrder
  }

  export type PagoMinOrderByAggregateInput = {
    PagoKey?: SortOrder
    PagoID?: SortOrder
    Metodo?: SortOrder
    Moneda?: SortOrder
  }

  export type PagoSumOrderByAggregateInput = {
    PagoKey?: SortOrder
    PagoID?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type HabitacionScalarRelationFilter = {
    is?: HabitacionWhereInput
    isNot?: HabitacionWhereInput
  }

  export type FechaScalarRelationFilter = {
    is?: FechaWhereInput
    isNot?: FechaWhereInput
  }

  export type CanalReversaScalarRelationFilter = {
    is?: CanalReversaWhereInput
    isNot?: CanalReversaWhereInput
  }

  export type PagoScalarRelationFilter = {
    is?: PagoWhereInput
    isNot?: PagoWhereInput
  }

  export type ReservasCountOrderByAggregateInput = {
    ReservaKey?: SortOrder
    HotelKey?: SortOrder
    ClienteKey?: SortOrder
    HabKey?: SortOrder
    FechaKey?: SortOrder
    EmpKey?: SortOrder
    CanalKey?: SortOrder
    PagoKey?: SortOrder
    NochesReservadas?: SortOrder
    CantidadHuespedes?: SortOrder
    IngresoHabitacion?: SortOrder
    IngresoServicios?: SortOrder
    DescuentoTotal?: SortOrder
    ImpuestoTotal?: SortOrder
    LeadTimeReserva?: SortOrder
    IngresoTotal?: SortOrder
  }

  export type ReservasAvgOrderByAggregateInput = {
    ReservaKey?: SortOrder
    HotelKey?: SortOrder
    ClienteKey?: SortOrder
    HabKey?: SortOrder
    FechaKey?: SortOrder
    EmpKey?: SortOrder
    CanalKey?: SortOrder
    PagoKey?: SortOrder
    NochesReservadas?: SortOrder
    CantidadHuespedes?: SortOrder
    IngresoHabitacion?: SortOrder
    IngresoServicios?: SortOrder
    DescuentoTotal?: SortOrder
    ImpuestoTotal?: SortOrder
    LeadTimeReserva?: SortOrder
    IngresoTotal?: SortOrder
  }

  export type ReservasMaxOrderByAggregateInput = {
    ReservaKey?: SortOrder
    HotelKey?: SortOrder
    ClienteKey?: SortOrder
    HabKey?: SortOrder
    FechaKey?: SortOrder
    EmpKey?: SortOrder
    CanalKey?: SortOrder
    PagoKey?: SortOrder
    NochesReservadas?: SortOrder
    CantidadHuespedes?: SortOrder
    IngresoHabitacion?: SortOrder
    IngresoServicios?: SortOrder
    DescuentoTotal?: SortOrder
    ImpuestoTotal?: SortOrder
    LeadTimeReserva?: SortOrder
    IngresoTotal?: SortOrder
  }

  export type ReservasMinOrderByAggregateInput = {
    ReservaKey?: SortOrder
    HotelKey?: SortOrder
    ClienteKey?: SortOrder
    HabKey?: SortOrder
    FechaKey?: SortOrder
    EmpKey?: SortOrder
    CanalKey?: SortOrder
    PagoKey?: SortOrder
    NochesReservadas?: SortOrder
    CantidadHuespedes?: SortOrder
    IngresoHabitacion?: SortOrder
    IngresoServicios?: SortOrder
    DescuentoTotal?: SortOrder
    ImpuestoTotal?: SortOrder
    LeadTimeReserva?: SortOrder
    IngresoTotal?: SortOrder
  }

  export type ReservasSumOrderByAggregateInput = {
    ReservaKey?: SortOrder
    HotelKey?: SortOrder
    ClienteKey?: SortOrder
    HabKey?: SortOrder
    FechaKey?: SortOrder
    EmpKey?: SortOrder
    CanalKey?: SortOrder
    PagoKey?: SortOrder
    NochesReservadas?: SortOrder
    CantidadHuespedes?: SortOrder
    IngresoHabitacion?: SortOrder
    IngresoServicios?: SortOrder
    DescuentoTotal?: SortOrder
    ImpuestoTotal?: SortOrder
    LeadTimeReserva?: SortOrder
    IngresoTotal?: SortOrder
  }

  export type HabitacionCreateNestedManyWithoutHotelInput = {
    create?: XOR<HabitacionCreateWithoutHotelInput, HabitacionUncheckedCreateWithoutHotelInput> | HabitacionCreateWithoutHotelInput[] | HabitacionUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutHotelInput | HabitacionCreateOrConnectWithoutHotelInput[]
    createMany?: HabitacionCreateManyHotelInputEnvelope
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
  }

  export type ReservasCreateNestedManyWithoutHotelInput = {
    create?: XOR<ReservasCreateWithoutHotelInput, ReservasUncheckedCreateWithoutHotelInput> | ReservasCreateWithoutHotelInput[] | ReservasUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutHotelInput | ReservasCreateOrConnectWithoutHotelInput[]
    createMany?: ReservasCreateManyHotelInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type HabitacionUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<HabitacionCreateWithoutHotelInput, HabitacionUncheckedCreateWithoutHotelInput> | HabitacionCreateWithoutHotelInput[] | HabitacionUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutHotelInput | HabitacionCreateOrConnectWithoutHotelInput[]
    createMany?: HabitacionCreateManyHotelInputEnvelope
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
  }

  export type ReservasUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<ReservasCreateWithoutHotelInput, ReservasUncheckedCreateWithoutHotelInput> | ReservasCreateWithoutHotelInput[] | ReservasUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutHotelInput | ReservasCreateOrConnectWithoutHotelInput[]
    createMany?: ReservasCreateManyHotelInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type HabitacionUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HabitacionCreateWithoutHotelInput, HabitacionUncheckedCreateWithoutHotelInput> | HabitacionCreateWithoutHotelInput[] | HabitacionUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutHotelInput | HabitacionCreateOrConnectWithoutHotelInput[]
    upsert?: HabitacionUpsertWithWhereUniqueWithoutHotelInput | HabitacionUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HabitacionCreateManyHotelInputEnvelope
    set?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    disconnect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    delete?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    update?: HabitacionUpdateWithWhereUniqueWithoutHotelInput | HabitacionUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HabitacionUpdateManyWithWhereWithoutHotelInput | HabitacionUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
  }

  export type ReservasUpdateManyWithoutHotelNestedInput = {
    create?: XOR<ReservasCreateWithoutHotelInput, ReservasUncheckedCreateWithoutHotelInput> | ReservasCreateWithoutHotelInput[] | ReservasUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutHotelInput | ReservasCreateOrConnectWithoutHotelInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutHotelInput | ReservasUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: ReservasCreateManyHotelInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutHotelInput | ReservasUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutHotelInput | ReservasUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type HabitacionUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HabitacionCreateWithoutHotelInput, HabitacionUncheckedCreateWithoutHotelInput> | HabitacionCreateWithoutHotelInput[] | HabitacionUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutHotelInput | HabitacionCreateOrConnectWithoutHotelInput[]
    upsert?: HabitacionUpsertWithWhereUniqueWithoutHotelInput | HabitacionUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HabitacionCreateManyHotelInputEnvelope
    set?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    disconnect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    delete?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    update?: HabitacionUpdateWithWhereUniqueWithoutHotelInput | HabitacionUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HabitacionUpdateManyWithWhereWithoutHotelInput | HabitacionUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
  }

  export type ReservasUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<ReservasCreateWithoutHotelInput, ReservasUncheckedCreateWithoutHotelInput> | ReservasCreateWithoutHotelInput[] | ReservasUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutHotelInput | ReservasCreateOrConnectWithoutHotelInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutHotelInput | ReservasUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: ReservasCreateManyHotelInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutHotelInput | ReservasUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutHotelInput | ReservasUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservasCreateWithoutClienteInput, ReservasUncheckedCreateWithoutClienteInput> | ReservasCreateWithoutClienteInput[] | ReservasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutClienteInput | ReservasCreateOrConnectWithoutClienteInput[]
    createMany?: ReservasCreateManyClienteInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ReservasUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservasCreateWithoutClienteInput, ReservasUncheckedCreateWithoutClienteInput> | ReservasCreateWithoutClienteInput[] | ReservasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutClienteInput | ReservasCreateOrConnectWithoutClienteInput[]
    createMany?: ReservasCreateManyClienteInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservasUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservasCreateWithoutClienteInput, ReservasUncheckedCreateWithoutClienteInput> | ReservasCreateWithoutClienteInput[] | ReservasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutClienteInput | ReservasCreateOrConnectWithoutClienteInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutClienteInput | ReservasUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservasCreateManyClienteInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutClienteInput | ReservasUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutClienteInput | ReservasUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservasCreateWithoutClienteInput, ReservasUncheckedCreateWithoutClienteInput> | ReservasCreateWithoutClienteInput[] | ReservasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutClienteInput | ReservasCreateOrConnectWithoutClienteInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutClienteInput | ReservasUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservasCreateManyClienteInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutClienteInput | ReservasUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutClienteInput | ReservasUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type HabitacionCreateNestedManyWithoutTipoHabInput = {
    create?: XOR<HabitacionCreateWithoutTipoHabInput, HabitacionUncheckedCreateWithoutTipoHabInput> | HabitacionCreateWithoutTipoHabInput[] | HabitacionUncheckedCreateWithoutTipoHabInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutTipoHabInput | HabitacionCreateOrConnectWithoutTipoHabInput[]
    createMany?: HabitacionCreateManyTipoHabInputEnvelope
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
  }

  export type HabitacionUncheckedCreateNestedManyWithoutTipoHabInput = {
    create?: XOR<HabitacionCreateWithoutTipoHabInput, HabitacionUncheckedCreateWithoutTipoHabInput> | HabitacionCreateWithoutTipoHabInput[] | HabitacionUncheckedCreateWithoutTipoHabInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutTipoHabInput | HabitacionCreateOrConnectWithoutTipoHabInput[]
    createMany?: HabitacionCreateManyTipoHabInputEnvelope
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type HabitacionUpdateManyWithoutTipoHabNestedInput = {
    create?: XOR<HabitacionCreateWithoutTipoHabInput, HabitacionUncheckedCreateWithoutTipoHabInput> | HabitacionCreateWithoutTipoHabInput[] | HabitacionUncheckedCreateWithoutTipoHabInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutTipoHabInput | HabitacionCreateOrConnectWithoutTipoHabInput[]
    upsert?: HabitacionUpsertWithWhereUniqueWithoutTipoHabInput | HabitacionUpsertWithWhereUniqueWithoutTipoHabInput[]
    createMany?: HabitacionCreateManyTipoHabInputEnvelope
    set?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    disconnect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    delete?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    update?: HabitacionUpdateWithWhereUniqueWithoutTipoHabInput | HabitacionUpdateWithWhereUniqueWithoutTipoHabInput[]
    updateMany?: HabitacionUpdateManyWithWhereWithoutTipoHabInput | HabitacionUpdateManyWithWhereWithoutTipoHabInput[]
    deleteMany?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
  }

  export type HabitacionUncheckedUpdateManyWithoutTipoHabNestedInput = {
    create?: XOR<HabitacionCreateWithoutTipoHabInput, HabitacionUncheckedCreateWithoutTipoHabInput> | HabitacionCreateWithoutTipoHabInput[] | HabitacionUncheckedCreateWithoutTipoHabInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutTipoHabInput | HabitacionCreateOrConnectWithoutTipoHabInput[]
    upsert?: HabitacionUpsertWithWhereUniqueWithoutTipoHabInput | HabitacionUpsertWithWhereUniqueWithoutTipoHabInput[]
    createMany?: HabitacionCreateManyTipoHabInputEnvelope
    set?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    disconnect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    delete?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    update?: HabitacionUpdateWithWhereUniqueWithoutTipoHabInput | HabitacionUpdateWithWhereUniqueWithoutTipoHabInput[]
    updateMany?: HabitacionUpdateManyWithWhereWithoutTipoHabInput | HabitacionUpdateManyWithWhereWithoutTipoHabInput[]
    deleteMany?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutHabitacionesInput = {
    create?: XOR<HotelCreateWithoutHabitacionesInput, HotelUncheckedCreateWithoutHabitacionesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutHabitacionesInput
    connect?: HotelWhereUniqueInput
  }

  export type TipoHabCreateNestedOneWithoutHabitacionesInput = {
    create?: XOR<TipoHabCreateWithoutHabitacionesInput, TipoHabUncheckedCreateWithoutHabitacionesInput>
    connectOrCreate?: TipoHabCreateOrConnectWithoutHabitacionesInput
    connect?: TipoHabWhereUniqueInput
  }

  export type ReservasCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<ReservasCreateWithoutHabitacionInput, ReservasUncheckedCreateWithoutHabitacionInput> | ReservasCreateWithoutHabitacionInput[] | ReservasUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutHabitacionInput | ReservasCreateOrConnectWithoutHabitacionInput[]
    createMany?: ReservasCreateManyHabitacionInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ReservasUncheckedCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<ReservasCreateWithoutHabitacionInput, ReservasUncheckedCreateWithoutHabitacionInput> | ReservasCreateWithoutHabitacionInput[] | ReservasUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutHabitacionInput | ReservasCreateOrConnectWithoutHabitacionInput[]
    createMany?: ReservasCreateManyHabitacionInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HotelUpdateOneRequiredWithoutHabitacionesNestedInput = {
    create?: XOR<HotelCreateWithoutHabitacionesInput, HotelUncheckedCreateWithoutHabitacionesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutHabitacionesInput
    upsert?: HotelUpsertWithoutHabitacionesInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutHabitacionesInput, HotelUpdateWithoutHabitacionesInput>, HotelUncheckedUpdateWithoutHabitacionesInput>
  }

  export type TipoHabUpdateOneRequiredWithoutHabitacionesNestedInput = {
    create?: XOR<TipoHabCreateWithoutHabitacionesInput, TipoHabUncheckedCreateWithoutHabitacionesInput>
    connectOrCreate?: TipoHabCreateOrConnectWithoutHabitacionesInput
    upsert?: TipoHabUpsertWithoutHabitacionesInput
    connect?: TipoHabWhereUniqueInput
    update?: XOR<XOR<TipoHabUpdateToOneWithWhereWithoutHabitacionesInput, TipoHabUpdateWithoutHabitacionesInput>, TipoHabUncheckedUpdateWithoutHabitacionesInput>
  }

  export type ReservasUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<ReservasCreateWithoutHabitacionInput, ReservasUncheckedCreateWithoutHabitacionInput> | ReservasCreateWithoutHabitacionInput[] | ReservasUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutHabitacionInput | ReservasCreateOrConnectWithoutHabitacionInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutHabitacionInput | ReservasUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: ReservasCreateManyHabitacionInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutHabitacionInput | ReservasUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutHabitacionInput | ReservasUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasUncheckedUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<ReservasCreateWithoutHabitacionInput, ReservasUncheckedCreateWithoutHabitacionInput> | ReservasCreateWithoutHabitacionInput[] | ReservasUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutHabitacionInput | ReservasCreateOrConnectWithoutHabitacionInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutHabitacionInput | ReservasUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: ReservasCreateManyHabitacionInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutHabitacionInput | ReservasUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutHabitacionInput | ReservasUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasCreateNestedManyWithoutFechaInput = {
    create?: XOR<ReservasCreateWithoutFechaInput, ReservasUncheckedCreateWithoutFechaInput> | ReservasCreateWithoutFechaInput[] | ReservasUncheckedCreateWithoutFechaInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutFechaInput | ReservasCreateOrConnectWithoutFechaInput[]
    createMany?: ReservasCreateManyFechaInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ReservasUncheckedCreateNestedManyWithoutFechaInput = {
    create?: XOR<ReservasCreateWithoutFechaInput, ReservasUncheckedCreateWithoutFechaInput> | ReservasCreateWithoutFechaInput[] | ReservasUncheckedCreateWithoutFechaInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutFechaInput | ReservasCreateOrConnectWithoutFechaInput[]
    createMany?: ReservasCreateManyFechaInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ReservasUpdateManyWithoutFechaNestedInput = {
    create?: XOR<ReservasCreateWithoutFechaInput, ReservasUncheckedCreateWithoutFechaInput> | ReservasCreateWithoutFechaInput[] | ReservasUncheckedCreateWithoutFechaInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutFechaInput | ReservasCreateOrConnectWithoutFechaInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutFechaInput | ReservasUpsertWithWhereUniqueWithoutFechaInput[]
    createMany?: ReservasCreateManyFechaInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutFechaInput | ReservasUpdateWithWhereUniqueWithoutFechaInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutFechaInput | ReservasUpdateManyWithWhereWithoutFechaInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasUncheckedUpdateManyWithoutFechaNestedInput = {
    create?: XOR<ReservasCreateWithoutFechaInput, ReservasUncheckedCreateWithoutFechaInput> | ReservasCreateWithoutFechaInput[] | ReservasUncheckedCreateWithoutFechaInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutFechaInput | ReservasCreateOrConnectWithoutFechaInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutFechaInput | ReservasUpsertWithWhereUniqueWithoutFechaInput[]
    createMany?: ReservasCreateManyFechaInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutFechaInput | ReservasUpdateWithWhereUniqueWithoutFechaInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutFechaInput | ReservasUpdateManyWithWhereWithoutFechaInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<ReservasCreateWithoutEmpleadoInput, ReservasUncheckedCreateWithoutEmpleadoInput> | ReservasCreateWithoutEmpleadoInput[] | ReservasUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutEmpleadoInput | ReservasCreateOrConnectWithoutEmpleadoInput[]
    createMany?: ReservasCreateManyEmpleadoInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type CredencialCreateNestedOneWithoutEmpleadoInput = {
    create?: XOR<CredencialCreateWithoutEmpleadoInput, CredencialUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: CredencialCreateOrConnectWithoutEmpleadoInput
    connect?: CredencialWhereUniqueInput
  }

  export type ReservasUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<ReservasCreateWithoutEmpleadoInput, ReservasUncheckedCreateWithoutEmpleadoInput> | ReservasCreateWithoutEmpleadoInput[] | ReservasUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutEmpleadoInput | ReservasCreateOrConnectWithoutEmpleadoInput[]
    createMany?: ReservasCreateManyEmpleadoInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type CredencialUncheckedCreateNestedOneWithoutEmpleadoInput = {
    create?: XOR<CredencialCreateWithoutEmpleadoInput, CredencialUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: CredencialCreateOrConnectWithoutEmpleadoInput
    connect?: CredencialWhereUniqueInput
  }

  export type ReservasUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<ReservasCreateWithoutEmpleadoInput, ReservasUncheckedCreateWithoutEmpleadoInput> | ReservasCreateWithoutEmpleadoInput[] | ReservasUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutEmpleadoInput | ReservasCreateOrConnectWithoutEmpleadoInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutEmpleadoInput | ReservasUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: ReservasCreateManyEmpleadoInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutEmpleadoInput | ReservasUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutEmpleadoInput | ReservasUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type CredencialUpdateOneWithoutEmpleadoNestedInput = {
    create?: XOR<CredencialCreateWithoutEmpleadoInput, CredencialUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: CredencialCreateOrConnectWithoutEmpleadoInput
    upsert?: CredencialUpsertWithoutEmpleadoInput
    disconnect?: CredencialWhereInput | boolean
    delete?: CredencialWhereInput | boolean
    connect?: CredencialWhereUniqueInput
    update?: XOR<XOR<CredencialUpdateToOneWithWhereWithoutEmpleadoInput, CredencialUpdateWithoutEmpleadoInput>, CredencialUncheckedUpdateWithoutEmpleadoInput>
  }

  export type ReservasUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<ReservasCreateWithoutEmpleadoInput, ReservasUncheckedCreateWithoutEmpleadoInput> | ReservasCreateWithoutEmpleadoInput[] | ReservasUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutEmpleadoInput | ReservasCreateOrConnectWithoutEmpleadoInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutEmpleadoInput | ReservasUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: ReservasCreateManyEmpleadoInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutEmpleadoInput | ReservasUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutEmpleadoInput | ReservasUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type CredencialUncheckedUpdateOneWithoutEmpleadoNestedInput = {
    create?: XOR<CredencialCreateWithoutEmpleadoInput, CredencialUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: CredencialCreateOrConnectWithoutEmpleadoInput
    upsert?: CredencialUpsertWithoutEmpleadoInput
    disconnect?: CredencialWhereInput | boolean
    delete?: CredencialWhereInput | boolean
    connect?: CredencialWhereUniqueInput
    update?: XOR<XOR<CredencialUpdateToOneWithWhereWithoutEmpleadoInput, CredencialUpdateWithoutEmpleadoInput>, CredencialUncheckedUpdateWithoutEmpleadoInput>
  }

  export type EmpleadoCreateNestedOneWithoutCredencialInput = {
    create?: XOR<EmpleadoCreateWithoutCredencialInput, EmpleadoUncheckedCreateWithoutCredencialInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutCredencialInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type EmpleadoUpdateOneRequiredWithoutCredencialNestedInput = {
    create?: XOR<EmpleadoCreateWithoutCredencialInput, EmpleadoUncheckedCreateWithoutCredencialInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutCredencialInput
    upsert?: EmpleadoUpsertWithoutCredencialInput
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutCredencialInput, EmpleadoUpdateWithoutCredencialInput>, EmpleadoUncheckedUpdateWithoutCredencialInput>
  }

  export type ReservasCreateNestedManyWithoutCanalReversaInput = {
    create?: XOR<ReservasCreateWithoutCanalReversaInput, ReservasUncheckedCreateWithoutCanalReversaInput> | ReservasCreateWithoutCanalReversaInput[] | ReservasUncheckedCreateWithoutCanalReversaInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutCanalReversaInput | ReservasCreateOrConnectWithoutCanalReversaInput[]
    createMany?: ReservasCreateManyCanalReversaInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ReservasUncheckedCreateNestedManyWithoutCanalReversaInput = {
    create?: XOR<ReservasCreateWithoutCanalReversaInput, ReservasUncheckedCreateWithoutCanalReversaInput> | ReservasCreateWithoutCanalReversaInput[] | ReservasUncheckedCreateWithoutCanalReversaInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutCanalReversaInput | ReservasCreateOrConnectWithoutCanalReversaInput[]
    createMany?: ReservasCreateManyCanalReversaInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ReservasUpdateManyWithoutCanalReversaNestedInput = {
    create?: XOR<ReservasCreateWithoutCanalReversaInput, ReservasUncheckedCreateWithoutCanalReversaInput> | ReservasCreateWithoutCanalReversaInput[] | ReservasUncheckedCreateWithoutCanalReversaInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutCanalReversaInput | ReservasCreateOrConnectWithoutCanalReversaInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutCanalReversaInput | ReservasUpsertWithWhereUniqueWithoutCanalReversaInput[]
    createMany?: ReservasCreateManyCanalReversaInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutCanalReversaInput | ReservasUpdateWithWhereUniqueWithoutCanalReversaInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutCanalReversaInput | ReservasUpdateManyWithWhereWithoutCanalReversaInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasUncheckedUpdateManyWithoutCanalReversaNestedInput = {
    create?: XOR<ReservasCreateWithoutCanalReversaInput, ReservasUncheckedCreateWithoutCanalReversaInput> | ReservasCreateWithoutCanalReversaInput[] | ReservasUncheckedCreateWithoutCanalReversaInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutCanalReversaInput | ReservasCreateOrConnectWithoutCanalReversaInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutCanalReversaInput | ReservasUpsertWithWhereUniqueWithoutCanalReversaInput[]
    createMany?: ReservasCreateManyCanalReversaInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutCanalReversaInput | ReservasUpdateWithWhereUniqueWithoutCanalReversaInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutCanalReversaInput | ReservasUpdateManyWithWhereWithoutCanalReversaInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasCreateNestedManyWithoutPagoInput = {
    create?: XOR<ReservasCreateWithoutPagoInput, ReservasUncheckedCreateWithoutPagoInput> | ReservasCreateWithoutPagoInput[] | ReservasUncheckedCreateWithoutPagoInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutPagoInput | ReservasCreateOrConnectWithoutPagoInput[]
    createMany?: ReservasCreateManyPagoInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ReservasUncheckedCreateNestedManyWithoutPagoInput = {
    create?: XOR<ReservasCreateWithoutPagoInput, ReservasUncheckedCreateWithoutPagoInput> | ReservasCreateWithoutPagoInput[] | ReservasUncheckedCreateWithoutPagoInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutPagoInput | ReservasCreateOrConnectWithoutPagoInput[]
    createMany?: ReservasCreateManyPagoInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ReservasUpdateManyWithoutPagoNestedInput = {
    create?: XOR<ReservasCreateWithoutPagoInput, ReservasUncheckedCreateWithoutPagoInput> | ReservasCreateWithoutPagoInput[] | ReservasUncheckedCreateWithoutPagoInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutPagoInput | ReservasCreateOrConnectWithoutPagoInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutPagoInput | ReservasUpsertWithWhereUniqueWithoutPagoInput[]
    createMany?: ReservasCreateManyPagoInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutPagoInput | ReservasUpdateWithWhereUniqueWithoutPagoInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutPagoInput | ReservasUpdateManyWithWhereWithoutPagoInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ReservasUncheckedUpdateManyWithoutPagoNestedInput = {
    create?: XOR<ReservasCreateWithoutPagoInput, ReservasUncheckedCreateWithoutPagoInput> | ReservasCreateWithoutPagoInput[] | ReservasUncheckedCreateWithoutPagoInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutPagoInput | ReservasCreateOrConnectWithoutPagoInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutPagoInput | ReservasUpsertWithWhereUniqueWithoutPagoInput[]
    createMany?: ReservasCreateManyPagoInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutPagoInput | ReservasUpdateWithWhereUniqueWithoutPagoInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutPagoInput | ReservasUpdateManyWithWhereWithoutPagoInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutReservasInput = {
    create?: XOR<HotelCreateWithoutReservasInput, HotelUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HotelCreateOrConnectWithoutReservasInput
    connect?: HotelWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutReservasInput = {
    create?: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReservasInput
    connect?: ClienteWhereUniqueInput
  }

  export type HabitacionCreateNestedOneWithoutReservasInput = {
    create?: XOR<HabitacionCreateWithoutReservasInput, HabitacionUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HabitacionCreateOrConnectWithoutReservasInput
    connect?: HabitacionWhereUniqueInput
  }

  export type FechaCreateNestedOneWithoutReservasInput = {
    create?: XOR<FechaCreateWithoutReservasInput, FechaUncheckedCreateWithoutReservasInput>
    connectOrCreate?: FechaCreateOrConnectWithoutReservasInput
    connect?: FechaWhereUniqueInput
  }

  export type EmpleadoCreateNestedOneWithoutReservasInput = {
    create?: XOR<EmpleadoCreateWithoutReservasInput, EmpleadoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutReservasInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type CanalReversaCreateNestedOneWithoutReservasInput = {
    create?: XOR<CanalReversaCreateWithoutReservasInput, CanalReversaUncheckedCreateWithoutReservasInput>
    connectOrCreate?: CanalReversaCreateOrConnectWithoutReservasInput
    connect?: CanalReversaWhereUniqueInput
  }

  export type PagoCreateNestedOneWithoutReservasInput = {
    create?: XOR<PagoCreateWithoutReservasInput, PagoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: PagoCreateOrConnectWithoutReservasInput
    connect?: PagoWhereUniqueInput
  }

  export type HotelUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<HotelCreateWithoutReservasInput, HotelUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HotelCreateOrConnectWithoutReservasInput
    upsert?: HotelUpsertWithoutReservasInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutReservasInput, HotelUpdateWithoutReservasInput>, HotelUncheckedUpdateWithoutReservasInput>
  }

  export type ClienteUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReservasInput
    upsert?: ClienteUpsertWithoutReservasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutReservasInput, ClienteUpdateWithoutReservasInput>, ClienteUncheckedUpdateWithoutReservasInput>
  }

  export type HabitacionUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<HabitacionCreateWithoutReservasInput, HabitacionUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HabitacionCreateOrConnectWithoutReservasInput
    upsert?: HabitacionUpsertWithoutReservasInput
    connect?: HabitacionWhereUniqueInput
    update?: XOR<XOR<HabitacionUpdateToOneWithWhereWithoutReservasInput, HabitacionUpdateWithoutReservasInput>, HabitacionUncheckedUpdateWithoutReservasInput>
  }

  export type FechaUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<FechaCreateWithoutReservasInput, FechaUncheckedCreateWithoutReservasInput>
    connectOrCreate?: FechaCreateOrConnectWithoutReservasInput
    upsert?: FechaUpsertWithoutReservasInput
    connect?: FechaWhereUniqueInput
    update?: XOR<XOR<FechaUpdateToOneWithWhereWithoutReservasInput, FechaUpdateWithoutReservasInput>, FechaUncheckedUpdateWithoutReservasInput>
  }

  export type EmpleadoUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<EmpleadoCreateWithoutReservasInput, EmpleadoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutReservasInput
    upsert?: EmpleadoUpsertWithoutReservasInput
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutReservasInput, EmpleadoUpdateWithoutReservasInput>, EmpleadoUncheckedUpdateWithoutReservasInput>
  }

  export type CanalReversaUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<CanalReversaCreateWithoutReservasInput, CanalReversaUncheckedCreateWithoutReservasInput>
    connectOrCreate?: CanalReversaCreateOrConnectWithoutReservasInput
    upsert?: CanalReversaUpsertWithoutReservasInput
    connect?: CanalReversaWhereUniqueInput
    update?: XOR<XOR<CanalReversaUpdateToOneWithWhereWithoutReservasInput, CanalReversaUpdateWithoutReservasInput>, CanalReversaUncheckedUpdateWithoutReservasInput>
  }

  export type PagoUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<PagoCreateWithoutReservasInput, PagoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: PagoCreateOrConnectWithoutReservasInput
    upsert?: PagoUpsertWithoutReservasInput
    connect?: PagoWhereUniqueInput
    update?: XOR<XOR<PagoUpdateToOneWithWhereWithoutReservasInput, PagoUpdateWithoutReservasInput>, PagoUncheckedUpdateWithoutReservasInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HabitacionCreateWithoutHotelInput = {
    HabitacionID: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
    TipoHab: TipoHabCreateNestedOneWithoutHabitacionesInput
    Reservas?: ReservasCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUncheckedCreateWithoutHotelInput = {
    HabitacionKey?: number
    HabitacionID: number
    TipoHabKey: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
    Reservas?: ReservasUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionCreateOrConnectWithoutHotelInput = {
    where: HabitacionWhereUniqueInput
    create: XOR<HabitacionCreateWithoutHotelInput, HabitacionUncheckedCreateWithoutHotelInput>
  }

  export type HabitacionCreateManyHotelInputEnvelope = {
    data: HabitacionCreateManyHotelInput | HabitacionCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type ReservasCreateWithoutHotelInput = {
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
    Cliente: ClienteCreateNestedOneWithoutReservasInput
    Habitacion: HabitacionCreateNestedOneWithoutReservasInput
    Fecha: FechaCreateNestedOneWithoutReservasInput
    Empleado: EmpleadoCreateNestedOneWithoutReservasInput
    CanalReversa: CanalReversaCreateNestedOneWithoutReservasInput
    Pago: PagoCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutHotelInput = {
    ReservaKey?: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateOrConnectWithoutHotelInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutHotelInput, ReservasUncheckedCreateWithoutHotelInput>
  }

  export type ReservasCreateManyHotelInputEnvelope = {
    data: ReservasCreateManyHotelInput | ReservasCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type HabitacionUpsertWithWhereUniqueWithoutHotelInput = {
    where: HabitacionWhereUniqueInput
    update: XOR<HabitacionUpdateWithoutHotelInput, HabitacionUncheckedUpdateWithoutHotelInput>
    create: XOR<HabitacionCreateWithoutHotelInput, HabitacionUncheckedCreateWithoutHotelInput>
  }

  export type HabitacionUpdateWithWhereUniqueWithoutHotelInput = {
    where: HabitacionWhereUniqueInput
    data: XOR<HabitacionUpdateWithoutHotelInput, HabitacionUncheckedUpdateWithoutHotelInput>
  }

  export type HabitacionUpdateManyWithWhereWithoutHotelInput = {
    where: HabitacionScalarWhereInput
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyWithoutHotelInput>
  }

  export type HabitacionScalarWhereInput = {
    AND?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
    OR?: HabitacionScalarWhereInput[]
    NOT?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
    HabitacionKey?: IntFilter<"Habitacion"> | number
    HabitacionID?: IntFilter<"Habitacion"> | number
    HotelKey?: IntFilter<"Habitacion"> | number
    TipoHabKey?: IntFilter<"Habitacion"> | number
    NumeroHab?: StringFilter<"Habitacion"> | string
    Piso?: IntFilter<"Habitacion"> | number
    Capaciddd?: IntFilter<"Habitacion"> | number
    Vista?: BoolFilter<"Habitacion"> | boolean
  }

  export type ReservasUpsertWithWhereUniqueWithoutHotelInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutHotelInput, ReservasUncheckedUpdateWithoutHotelInput>
    create: XOR<ReservasCreateWithoutHotelInput, ReservasUncheckedCreateWithoutHotelInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutHotelInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutHotelInput, ReservasUncheckedUpdateWithoutHotelInput>
  }

  export type ReservasUpdateManyWithWhereWithoutHotelInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutHotelInput>
  }

  export type ReservasScalarWhereInput = {
    AND?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
    OR?: ReservasScalarWhereInput[]
    NOT?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
    ReservaKey?: IntFilter<"Reservas"> | number
    HotelKey?: IntFilter<"Reservas"> | number
    ClienteKey?: IntFilter<"Reservas"> | number
    HabKey?: IntFilter<"Reservas"> | number
    FechaKey?: IntFilter<"Reservas"> | number
    EmpKey?: IntFilter<"Reservas"> | number
    CanalKey?: IntFilter<"Reservas"> | number
    PagoKey?: IntFilter<"Reservas"> | number
    NochesReservadas?: IntFilter<"Reservas"> | number
    CantidadHuespedes?: IntFilter<"Reservas"> | number
    IngresoHabitacion?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFilter<"Reservas"> | number
    IngresoTotal?: DecimalFilter<"Reservas"> | Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateWithoutClienteInput = {
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
    Hotel: HotelCreateNestedOneWithoutReservasInput
    Habitacion: HabitacionCreateNestedOneWithoutReservasInput
    Fecha: FechaCreateNestedOneWithoutReservasInput
    Empleado: EmpleadoCreateNestedOneWithoutReservasInput
    CanalReversa: CanalReversaCreateNestedOneWithoutReservasInput
    Pago: PagoCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutClienteInput = {
    ReservaKey?: number
    HotelKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateOrConnectWithoutClienteInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutClienteInput, ReservasUncheckedCreateWithoutClienteInput>
  }

  export type ReservasCreateManyClienteInputEnvelope = {
    data: ReservasCreateManyClienteInput | ReservasCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ReservasUpsertWithWhereUniqueWithoutClienteInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutClienteInput, ReservasUncheckedUpdateWithoutClienteInput>
    create: XOR<ReservasCreateWithoutClienteInput, ReservasUncheckedCreateWithoutClienteInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutClienteInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutClienteInput, ReservasUncheckedUpdateWithoutClienteInput>
  }

  export type ReservasUpdateManyWithWhereWithoutClienteInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutClienteInput>
  }

  export type HabitacionCreateWithoutTipoHabInput = {
    HabitacionID: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
    Hotel: HotelCreateNestedOneWithoutHabitacionesInput
    Reservas?: ReservasCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUncheckedCreateWithoutTipoHabInput = {
    HabitacionKey?: number
    HabitacionID: number
    HotelKey: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
    Reservas?: ReservasUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionCreateOrConnectWithoutTipoHabInput = {
    where: HabitacionWhereUniqueInput
    create: XOR<HabitacionCreateWithoutTipoHabInput, HabitacionUncheckedCreateWithoutTipoHabInput>
  }

  export type HabitacionCreateManyTipoHabInputEnvelope = {
    data: HabitacionCreateManyTipoHabInput | HabitacionCreateManyTipoHabInput[]
    skipDuplicates?: boolean
  }

  export type HabitacionUpsertWithWhereUniqueWithoutTipoHabInput = {
    where: HabitacionWhereUniqueInput
    update: XOR<HabitacionUpdateWithoutTipoHabInput, HabitacionUncheckedUpdateWithoutTipoHabInput>
    create: XOR<HabitacionCreateWithoutTipoHabInput, HabitacionUncheckedCreateWithoutTipoHabInput>
  }

  export type HabitacionUpdateWithWhereUniqueWithoutTipoHabInput = {
    where: HabitacionWhereUniqueInput
    data: XOR<HabitacionUpdateWithoutTipoHabInput, HabitacionUncheckedUpdateWithoutTipoHabInput>
  }

  export type HabitacionUpdateManyWithWhereWithoutTipoHabInput = {
    where: HabitacionScalarWhereInput
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyWithoutTipoHabInput>
  }

  export type HotelCreateWithoutHabitacionesInput = {
    HotelID: number
    Nombre: string
    Cadena: string
    Ciudad: string
    Pais: string
    Estrellas: number
    Direccion: string
    Reservas?: ReservasCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutHabitacionesInput = {
    HotelKey?: number
    HotelID: number
    Nombre: string
    Cadena: string
    Ciudad: string
    Pais: string
    Estrellas: number
    Direccion: string
    Reservas?: ReservasUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutHabitacionesInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutHabitacionesInput, HotelUncheckedCreateWithoutHabitacionesInput>
  }

  export type TipoHabCreateWithoutHabitacionesInput = {
    TipoHabID: number
    Descripcion: string
    Categoria: string
    CapacidadMax: number
    TarifaEstandar: Decimal | DecimalJsLike | number | string
  }

  export type TipoHabUncheckedCreateWithoutHabitacionesInput = {
    TipoHabKey?: number
    TipoHabID: number
    Descripcion: string
    Categoria: string
    CapacidadMax: number
    TarifaEstandar: Decimal | DecimalJsLike | number | string
  }

  export type TipoHabCreateOrConnectWithoutHabitacionesInput = {
    where: TipoHabWhereUniqueInput
    create: XOR<TipoHabCreateWithoutHabitacionesInput, TipoHabUncheckedCreateWithoutHabitacionesInput>
  }

  export type ReservasCreateWithoutHabitacionInput = {
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
    Hotel: HotelCreateNestedOneWithoutReservasInput
    Cliente: ClienteCreateNestedOneWithoutReservasInput
    Fecha: FechaCreateNestedOneWithoutReservasInput
    Empleado: EmpleadoCreateNestedOneWithoutReservasInput
    CanalReversa: CanalReversaCreateNestedOneWithoutReservasInput
    Pago: PagoCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutHabitacionInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateOrConnectWithoutHabitacionInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutHabitacionInput, ReservasUncheckedCreateWithoutHabitacionInput>
  }

  export type ReservasCreateManyHabitacionInputEnvelope = {
    data: ReservasCreateManyHabitacionInput | ReservasCreateManyHabitacionInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutHabitacionesInput = {
    update: XOR<HotelUpdateWithoutHabitacionesInput, HotelUncheckedUpdateWithoutHabitacionesInput>
    create: XOR<HotelCreateWithoutHabitacionesInput, HotelUncheckedCreateWithoutHabitacionesInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutHabitacionesInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutHabitacionesInput, HotelUncheckedUpdateWithoutHabitacionesInput>
  }

  export type HotelUpdateWithoutHabitacionesInput = {
    HotelID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Cadena?: StringFieldUpdateOperationsInput | string
    Ciudad?: StringFieldUpdateOperationsInput | string
    Pais?: StringFieldUpdateOperationsInput | string
    Estrellas?: IntFieldUpdateOperationsInput | number
    Direccion?: StringFieldUpdateOperationsInput | string
    Reservas?: ReservasUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutHabitacionesInput = {
    HotelKey?: IntFieldUpdateOperationsInput | number
    HotelID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Cadena?: StringFieldUpdateOperationsInput | string
    Ciudad?: StringFieldUpdateOperationsInput | string
    Pais?: StringFieldUpdateOperationsInput | string
    Estrellas?: IntFieldUpdateOperationsInput | number
    Direccion?: StringFieldUpdateOperationsInput | string
    Reservas?: ReservasUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type TipoHabUpsertWithoutHabitacionesInput = {
    update: XOR<TipoHabUpdateWithoutHabitacionesInput, TipoHabUncheckedUpdateWithoutHabitacionesInput>
    create: XOR<TipoHabCreateWithoutHabitacionesInput, TipoHabUncheckedCreateWithoutHabitacionesInput>
    where?: TipoHabWhereInput
  }

  export type TipoHabUpdateToOneWithWhereWithoutHabitacionesInput = {
    where?: TipoHabWhereInput
    data: XOR<TipoHabUpdateWithoutHabitacionesInput, TipoHabUncheckedUpdateWithoutHabitacionesInput>
  }

  export type TipoHabUpdateWithoutHabitacionesInput = {
    TipoHabID?: IntFieldUpdateOperationsInput | number
    Descripcion?: StringFieldUpdateOperationsInput | string
    Categoria?: StringFieldUpdateOperationsInput | string
    CapacidadMax?: IntFieldUpdateOperationsInput | number
    TarifaEstandar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TipoHabUncheckedUpdateWithoutHabitacionesInput = {
    TipoHabKey?: IntFieldUpdateOperationsInput | number
    TipoHabID?: IntFieldUpdateOperationsInput | number
    Descripcion?: StringFieldUpdateOperationsInput | string
    Categoria?: StringFieldUpdateOperationsInput | string
    CapacidadMax?: IntFieldUpdateOperationsInput | number
    TarifaEstandar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpsertWithWhereUniqueWithoutHabitacionInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutHabitacionInput, ReservasUncheckedUpdateWithoutHabitacionInput>
    create: XOR<ReservasCreateWithoutHabitacionInput, ReservasUncheckedCreateWithoutHabitacionInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutHabitacionInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutHabitacionInput, ReservasUncheckedUpdateWithoutHabitacionInput>
  }

  export type ReservasUpdateManyWithWhereWithoutHabitacionInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutHabitacionInput>
  }

  export type ReservasCreateWithoutFechaInput = {
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
    Hotel: HotelCreateNestedOneWithoutReservasInput
    Cliente: ClienteCreateNestedOneWithoutReservasInput
    Habitacion: HabitacionCreateNestedOneWithoutReservasInput
    Empleado: EmpleadoCreateNestedOneWithoutReservasInput
    CanalReversa: CanalReversaCreateNestedOneWithoutReservasInput
    Pago: PagoCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutFechaInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateOrConnectWithoutFechaInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutFechaInput, ReservasUncheckedCreateWithoutFechaInput>
  }

  export type ReservasCreateManyFechaInputEnvelope = {
    data: ReservasCreateManyFechaInput | ReservasCreateManyFechaInput[]
    skipDuplicates?: boolean
  }

  export type ReservasUpsertWithWhereUniqueWithoutFechaInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutFechaInput, ReservasUncheckedUpdateWithoutFechaInput>
    create: XOR<ReservasCreateWithoutFechaInput, ReservasUncheckedCreateWithoutFechaInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutFechaInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutFechaInput, ReservasUncheckedUpdateWithoutFechaInput>
  }

  export type ReservasUpdateManyWithWhereWithoutFechaInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutFechaInput>
  }

  export type ReservasCreateWithoutEmpleadoInput = {
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
    Hotel: HotelCreateNestedOneWithoutReservasInput
    Cliente: ClienteCreateNestedOneWithoutReservasInput
    Habitacion: HabitacionCreateNestedOneWithoutReservasInput
    Fecha: FechaCreateNestedOneWithoutReservasInput
    CanalReversa: CanalReversaCreateNestedOneWithoutReservasInput
    Pago: PagoCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutEmpleadoInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateOrConnectWithoutEmpleadoInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutEmpleadoInput, ReservasUncheckedCreateWithoutEmpleadoInput>
  }

  export type ReservasCreateManyEmpleadoInputEnvelope = {
    data: ReservasCreateManyEmpleadoInput | ReservasCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type CredencialCreateWithoutEmpleadoInput = {
    Usuario: string
    PasswordHash: string
    Rol?: string
    Estado?: boolean
  }

  export type CredencialUncheckedCreateWithoutEmpleadoInput = {
    CredencialKey?: number
    Usuario: string
    PasswordHash: string
    Rol?: string
    Estado?: boolean
  }

  export type CredencialCreateOrConnectWithoutEmpleadoInput = {
    where: CredencialWhereUniqueInput
    create: XOR<CredencialCreateWithoutEmpleadoInput, CredencialUncheckedCreateWithoutEmpleadoInput>
  }

  export type ReservasUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutEmpleadoInput, ReservasUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<ReservasCreateWithoutEmpleadoInput, ReservasUncheckedCreateWithoutEmpleadoInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutEmpleadoInput, ReservasUncheckedUpdateWithoutEmpleadoInput>
  }

  export type ReservasUpdateManyWithWhereWithoutEmpleadoInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type CredencialUpsertWithoutEmpleadoInput = {
    update: XOR<CredencialUpdateWithoutEmpleadoInput, CredencialUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<CredencialCreateWithoutEmpleadoInput, CredencialUncheckedCreateWithoutEmpleadoInput>
    where?: CredencialWhereInput
  }

  export type CredencialUpdateToOneWithWhereWithoutEmpleadoInput = {
    where?: CredencialWhereInput
    data: XOR<CredencialUpdateWithoutEmpleadoInput, CredencialUncheckedUpdateWithoutEmpleadoInput>
  }

  export type CredencialUpdateWithoutEmpleadoInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CredencialUncheckedUpdateWithoutEmpleadoInput = {
    CredencialKey?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
    Estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmpleadoCreateWithoutCredencialInput = {
    EmpleadoID: number
    Nombre: string
    Apellido: string
    Puesto: string
    Departamento: string
    FechaContratacion: Date | string
    Reservas?: ReservasCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutCredencialInput = {
    EmpleadoKey?: number
    EmpleadoID: number
    Nombre: string
    Apellido: string
    Puesto: string
    Departamento: string
    FechaContratacion: Date | string
    Reservas?: ReservasUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutCredencialInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutCredencialInput, EmpleadoUncheckedCreateWithoutCredencialInput>
  }

  export type EmpleadoUpsertWithoutCredencialInput = {
    update: XOR<EmpleadoUpdateWithoutCredencialInput, EmpleadoUncheckedUpdateWithoutCredencialInput>
    create: XOR<EmpleadoCreateWithoutCredencialInput, EmpleadoUncheckedCreateWithoutCredencialInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutCredencialInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutCredencialInput, EmpleadoUncheckedUpdateWithoutCredencialInput>
  }

  export type EmpleadoUpdateWithoutCredencialInput = {
    EmpleadoID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Puesto?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    FechaContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Reservas?: ReservasUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutCredencialInput = {
    EmpleadoKey?: IntFieldUpdateOperationsInput | number
    EmpleadoID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Puesto?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    FechaContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Reservas?: ReservasUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type ReservasCreateWithoutCanalReversaInput = {
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
    Hotel: HotelCreateNestedOneWithoutReservasInput
    Cliente: ClienteCreateNestedOneWithoutReservasInput
    Habitacion: HabitacionCreateNestedOneWithoutReservasInput
    Fecha: FechaCreateNestedOneWithoutReservasInput
    Empleado: EmpleadoCreateNestedOneWithoutReservasInput
    Pago: PagoCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutCanalReversaInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateOrConnectWithoutCanalReversaInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutCanalReversaInput, ReservasUncheckedCreateWithoutCanalReversaInput>
  }

  export type ReservasCreateManyCanalReversaInputEnvelope = {
    data: ReservasCreateManyCanalReversaInput | ReservasCreateManyCanalReversaInput[]
    skipDuplicates?: boolean
  }

  export type ReservasUpsertWithWhereUniqueWithoutCanalReversaInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutCanalReversaInput, ReservasUncheckedUpdateWithoutCanalReversaInput>
    create: XOR<ReservasCreateWithoutCanalReversaInput, ReservasUncheckedCreateWithoutCanalReversaInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutCanalReversaInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutCanalReversaInput, ReservasUncheckedUpdateWithoutCanalReversaInput>
  }

  export type ReservasUpdateManyWithWhereWithoutCanalReversaInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutCanalReversaInput>
  }

  export type ReservasCreateWithoutPagoInput = {
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
    Hotel: HotelCreateNestedOneWithoutReservasInput
    Cliente: ClienteCreateNestedOneWithoutReservasInput
    Habitacion: HabitacionCreateNestedOneWithoutReservasInput
    Fecha: FechaCreateNestedOneWithoutReservasInput
    Empleado: EmpleadoCreateNestedOneWithoutReservasInput
    CanalReversa: CanalReversaCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutPagoInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateOrConnectWithoutPagoInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutPagoInput, ReservasUncheckedCreateWithoutPagoInput>
  }

  export type ReservasCreateManyPagoInputEnvelope = {
    data: ReservasCreateManyPagoInput | ReservasCreateManyPagoInput[]
    skipDuplicates?: boolean
  }

  export type ReservasUpsertWithWhereUniqueWithoutPagoInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutPagoInput, ReservasUncheckedUpdateWithoutPagoInput>
    create: XOR<ReservasCreateWithoutPagoInput, ReservasUncheckedCreateWithoutPagoInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutPagoInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutPagoInput, ReservasUncheckedUpdateWithoutPagoInput>
  }

  export type ReservasUpdateManyWithWhereWithoutPagoInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutPagoInput>
  }

  export type HotelCreateWithoutReservasInput = {
    HotelID: number
    Nombre: string
    Cadena: string
    Ciudad: string
    Pais: string
    Estrellas: number
    Direccion: string
    Habitaciones?: HabitacionCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutReservasInput = {
    HotelKey?: number
    HotelID: number
    Nombre: string
    Cadena: string
    Ciudad: string
    Pais: string
    Estrellas: number
    Direccion: string
    Habitaciones?: HabitacionUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutReservasInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutReservasInput, HotelUncheckedCreateWithoutReservasInput>
  }

  export type ClienteCreateWithoutReservasInput = {
    ClienteID: number
    Nombre: string
    Apellido: string
    Genero: string
    FechaNacimiento: Date | string
    Nacionalidad: string
    TipoCliente: string
  }

  export type ClienteUncheckedCreateWithoutReservasInput = {
    ClienteKey?: number
    ClienteID: number
    Nombre: string
    Apellido: string
    Genero: string
    FechaNacimiento: Date | string
    Nacionalidad: string
    TipoCliente: string
  }

  export type ClienteCreateOrConnectWithoutReservasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
  }

  export type HabitacionCreateWithoutReservasInput = {
    HabitacionID: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
    Hotel: HotelCreateNestedOneWithoutHabitacionesInput
    TipoHab: TipoHabCreateNestedOneWithoutHabitacionesInput
  }

  export type HabitacionUncheckedCreateWithoutReservasInput = {
    HabitacionKey?: number
    HabitacionID: number
    HotelKey: number
    TipoHabKey: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
  }

  export type HabitacionCreateOrConnectWithoutReservasInput = {
    where: HabitacionWhereUniqueInput
    create: XOR<HabitacionCreateWithoutReservasInput, HabitacionUncheckedCreateWithoutReservasInput>
  }

  export type FechaCreateWithoutReservasInput = {
    Fecha: Date | string
    Año: number
    Trimestre: number
    Mes: number
    Dia: number
    DiaSemana: string
    EsFinDeSemana: boolean
  }

  export type FechaUncheckedCreateWithoutReservasInput = {
    FechaKey?: number
    Fecha: Date | string
    Año: number
    Trimestre: number
    Mes: number
    Dia: number
    DiaSemana: string
    EsFinDeSemana: boolean
  }

  export type FechaCreateOrConnectWithoutReservasInput = {
    where: FechaWhereUniqueInput
    create: XOR<FechaCreateWithoutReservasInput, FechaUncheckedCreateWithoutReservasInput>
  }

  export type EmpleadoCreateWithoutReservasInput = {
    EmpleadoID: number
    Nombre: string
    Apellido: string
    Puesto: string
    Departamento: string
    FechaContratacion: Date | string
    Credencial?: CredencialCreateNestedOneWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutReservasInput = {
    EmpleadoKey?: number
    EmpleadoID: number
    Nombre: string
    Apellido: string
    Puesto: string
    Departamento: string
    FechaContratacion: Date | string
    Credencial?: CredencialUncheckedCreateNestedOneWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutReservasInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutReservasInput, EmpleadoUncheckedCreateWithoutReservasInput>
  }

  export type CanalReversaCreateWithoutReservasInput = {
    CanalID: number
    NombreCanal: string
    Descripcion: string
  }

  export type CanalReversaUncheckedCreateWithoutReservasInput = {
    CanalKey?: number
    CanalID: number
    NombreCanal: string
    Descripcion: string
  }

  export type CanalReversaCreateOrConnectWithoutReservasInput = {
    where: CanalReversaWhereUniqueInput
    create: XOR<CanalReversaCreateWithoutReservasInput, CanalReversaUncheckedCreateWithoutReservasInput>
  }

  export type PagoCreateWithoutReservasInput = {
    PagoID: number
    Metodo: string
    Moneda: string
  }

  export type PagoUncheckedCreateWithoutReservasInput = {
    PagoKey?: number
    PagoID: number
    Metodo: string
    Moneda: string
  }

  export type PagoCreateOrConnectWithoutReservasInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutReservasInput, PagoUncheckedCreateWithoutReservasInput>
  }

  export type HotelUpsertWithoutReservasInput = {
    update: XOR<HotelUpdateWithoutReservasInput, HotelUncheckedUpdateWithoutReservasInput>
    create: XOR<HotelCreateWithoutReservasInput, HotelUncheckedCreateWithoutReservasInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutReservasInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutReservasInput, HotelUncheckedUpdateWithoutReservasInput>
  }

  export type HotelUpdateWithoutReservasInput = {
    HotelID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Cadena?: StringFieldUpdateOperationsInput | string
    Ciudad?: StringFieldUpdateOperationsInput | string
    Pais?: StringFieldUpdateOperationsInput | string
    Estrellas?: IntFieldUpdateOperationsInput | number
    Direccion?: StringFieldUpdateOperationsInput | string
    Habitaciones?: HabitacionUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutReservasInput = {
    HotelKey?: IntFieldUpdateOperationsInput | number
    HotelID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Cadena?: StringFieldUpdateOperationsInput | string
    Ciudad?: StringFieldUpdateOperationsInput | string
    Pais?: StringFieldUpdateOperationsInput | string
    Estrellas?: IntFieldUpdateOperationsInput | number
    Direccion?: StringFieldUpdateOperationsInput | string
    Habitaciones?: HabitacionUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type ClienteUpsertWithoutReservasInput = {
    update: XOR<ClienteUpdateWithoutReservasInput, ClienteUncheckedUpdateWithoutReservasInput>
    create: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutReservasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutReservasInput, ClienteUncheckedUpdateWithoutReservasInput>
  }

  export type ClienteUpdateWithoutReservasInput = {
    ClienteID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Genero?: StringFieldUpdateOperationsInput | string
    FechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    Nacionalidad?: StringFieldUpdateOperationsInput | string
    TipoCliente?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateWithoutReservasInput = {
    ClienteKey?: IntFieldUpdateOperationsInput | number
    ClienteID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Genero?: StringFieldUpdateOperationsInput | string
    FechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    Nacionalidad?: StringFieldUpdateOperationsInput | string
    TipoCliente?: StringFieldUpdateOperationsInput | string
  }

  export type HabitacionUpsertWithoutReservasInput = {
    update: XOR<HabitacionUpdateWithoutReservasInput, HabitacionUncheckedUpdateWithoutReservasInput>
    create: XOR<HabitacionCreateWithoutReservasInput, HabitacionUncheckedCreateWithoutReservasInput>
    where?: HabitacionWhereInput
  }

  export type HabitacionUpdateToOneWithWhereWithoutReservasInput = {
    where?: HabitacionWhereInput
    data: XOR<HabitacionUpdateWithoutReservasInput, HabitacionUncheckedUpdateWithoutReservasInput>
  }

  export type HabitacionUpdateWithoutReservasInput = {
    HabitacionID?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
    Hotel?: HotelUpdateOneRequiredWithoutHabitacionesNestedInput
    TipoHab?: TipoHabUpdateOneRequiredWithoutHabitacionesNestedInput
  }

  export type HabitacionUncheckedUpdateWithoutReservasInput = {
    HabitacionKey?: IntFieldUpdateOperationsInput | number
    HabitacionID?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    TipoHabKey?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FechaUpsertWithoutReservasInput = {
    update: XOR<FechaUpdateWithoutReservasInput, FechaUncheckedUpdateWithoutReservasInput>
    create: XOR<FechaCreateWithoutReservasInput, FechaUncheckedCreateWithoutReservasInput>
    where?: FechaWhereInput
  }

  export type FechaUpdateToOneWithWhereWithoutReservasInput = {
    where?: FechaWhereInput
    data: XOR<FechaUpdateWithoutReservasInput, FechaUncheckedUpdateWithoutReservasInput>
  }

  export type FechaUpdateWithoutReservasInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Año?: IntFieldUpdateOperationsInput | number
    Trimestre?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Dia?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    EsFinDeSemana?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FechaUncheckedUpdateWithoutReservasInput = {
    FechaKey?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Año?: IntFieldUpdateOperationsInput | number
    Trimestre?: IntFieldUpdateOperationsInput | number
    Mes?: IntFieldUpdateOperationsInput | number
    Dia?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    EsFinDeSemana?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmpleadoUpsertWithoutReservasInput = {
    update: XOR<EmpleadoUpdateWithoutReservasInput, EmpleadoUncheckedUpdateWithoutReservasInput>
    create: XOR<EmpleadoCreateWithoutReservasInput, EmpleadoUncheckedCreateWithoutReservasInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutReservasInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutReservasInput, EmpleadoUncheckedUpdateWithoutReservasInput>
  }

  export type EmpleadoUpdateWithoutReservasInput = {
    EmpleadoID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Puesto?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    FechaContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Credencial?: CredencialUpdateOneWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutReservasInput = {
    EmpleadoKey?: IntFieldUpdateOperationsInput | number
    EmpleadoID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Apellido?: StringFieldUpdateOperationsInput | string
    Puesto?: StringFieldUpdateOperationsInput | string
    Departamento?: StringFieldUpdateOperationsInput | string
    FechaContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Credencial?: CredencialUncheckedUpdateOneWithoutEmpleadoNestedInput
  }

  export type CanalReversaUpsertWithoutReservasInput = {
    update: XOR<CanalReversaUpdateWithoutReservasInput, CanalReversaUncheckedUpdateWithoutReservasInput>
    create: XOR<CanalReversaCreateWithoutReservasInput, CanalReversaUncheckedCreateWithoutReservasInput>
    where?: CanalReversaWhereInput
  }

  export type CanalReversaUpdateToOneWithWhereWithoutReservasInput = {
    where?: CanalReversaWhereInput
    data: XOR<CanalReversaUpdateWithoutReservasInput, CanalReversaUncheckedUpdateWithoutReservasInput>
  }

  export type CanalReversaUpdateWithoutReservasInput = {
    CanalID?: IntFieldUpdateOperationsInput | number
    NombreCanal?: StringFieldUpdateOperationsInput | string
    Descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CanalReversaUncheckedUpdateWithoutReservasInput = {
    CanalKey?: IntFieldUpdateOperationsInput | number
    CanalID?: IntFieldUpdateOperationsInput | number
    NombreCanal?: StringFieldUpdateOperationsInput | string
    Descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUpsertWithoutReservasInput = {
    update: XOR<PagoUpdateWithoutReservasInput, PagoUncheckedUpdateWithoutReservasInput>
    create: XOR<PagoCreateWithoutReservasInput, PagoUncheckedCreateWithoutReservasInput>
    where?: PagoWhereInput
  }

  export type PagoUpdateToOneWithWhereWithoutReservasInput = {
    where?: PagoWhereInput
    data: XOR<PagoUpdateWithoutReservasInput, PagoUncheckedUpdateWithoutReservasInput>
  }

  export type PagoUpdateWithoutReservasInput = {
    PagoID?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
    Moneda?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUncheckedUpdateWithoutReservasInput = {
    PagoKey?: IntFieldUpdateOperationsInput | number
    PagoID?: IntFieldUpdateOperationsInput | number
    Metodo?: StringFieldUpdateOperationsInput | string
    Moneda?: StringFieldUpdateOperationsInput | string
  }

  export type HabitacionCreateManyHotelInput = {
    HabitacionKey?: number
    HabitacionID: number
    TipoHabKey: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
  }

  export type ReservasCreateManyHotelInput = {
    ReservaKey?: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type HabitacionUpdateWithoutHotelInput = {
    HabitacionID?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
    TipoHab?: TipoHabUpdateOneRequiredWithoutHabitacionesNestedInput
    Reservas?: ReservasUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateWithoutHotelInput = {
    HabitacionKey?: IntFieldUpdateOperationsInput | number
    HabitacionID?: IntFieldUpdateOperationsInput | number
    TipoHabKey?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
    Reservas?: ReservasUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateManyWithoutHotelInput = {
    HabitacionKey?: IntFieldUpdateOperationsInput | number
    HabitacionID?: IntFieldUpdateOperationsInput | number
    TipoHabKey?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservasUpdateWithoutHotelInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    Habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    Fecha?: FechaUpdateOneRequiredWithoutReservasNestedInput
    Empleado?: EmpleadoUpdateOneRequiredWithoutReservasNestedInput
    CanalReversa?: CanalReversaUpdateOneRequiredWithoutReservasNestedInput
    Pago?: PagoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutHotelInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUncheckedUpdateManyWithoutHotelInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateManyClienteInput = {
    ReservaKey?: number
    HotelKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpdateWithoutClienteInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Hotel?: HotelUpdateOneRequiredWithoutReservasNestedInput
    Habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    Fecha?: FechaUpdateOneRequiredWithoutReservasNestedInput
    Empleado?: EmpleadoUpdateOneRequiredWithoutReservasNestedInput
    CanalReversa?: CanalReversaUpdateOneRequiredWithoutReservasNestedInput
    Pago?: PagoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutClienteInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUncheckedUpdateManyWithoutClienteInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type HabitacionCreateManyTipoHabInput = {
    HabitacionKey?: number
    HabitacionID: number
    HotelKey: number
    NumeroHab: string
    Piso: number
    Capaciddd: number
    Vista: boolean
  }

  export type HabitacionUpdateWithoutTipoHabInput = {
    HabitacionID?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
    Hotel?: HotelUpdateOneRequiredWithoutHabitacionesNestedInput
    Reservas?: ReservasUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateWithoutTipoHabInput = {
    HabitacionKey?: IntFieldUpdateOperationsInput | number
    HabitacionID?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
    Reservas?: ReservasUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateManyWithoutTipoHabInput = {
    HabitacionKey?: IntFieldUpdateOperationsInput | number
    HabitacionID?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    NumeroHab?: StringFieldUpdateOperationsInput | string
    Piso?: IntFieldUpdateOperationsInput | number
    Capaciddd?: IntFieldUpdateOperationsInput | number
    Vista?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservasCreateManyHabitacionInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpdateWithoutHabitacionInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Hotel?: HotelUpdateOneRequiredWithoutReservasNestedInput
    Cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    Fecha?: FechaUpdateOneRequiredWithoutReservasNestedInput
    Empleado?: EmpleadoUpdateOneRequiredWithoutReservasNestedInput
    CanalReversa?: CanalReversaUpdateOneRequiredWithoutReservasNestedInput
    Pago?: PagoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutHabitacionInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUncheckedUpdateManyWithoutHabitacionInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateManyFechaInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    EmpKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpdateWithoutFechaInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Hotel?: HotelUpdateOneRequiredWithoutReservasNestedInput
    Cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    Habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    Empleado?: EmpleadoUpdateOneRequiredWithoutReservasNestedInput
    CanalReversa?: CanalReversaUpdateOneRequiredWithoutReservasNestedInput
    Pago?: PagoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutFechaInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUncheckedUpdateManyWithoutFechaInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateManyEmpleadoInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    CanalKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpdateWithoutEmpleadoInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Hotel?: HotelUpdateOneRequiredWithoutReservasNestedInput
    Cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    Habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    Fecha?: FechaUpdateOneRequiredWithoutReservasNestedInput
    CanalReversa?: CanalReversaUpdateOneRequiredWithoutReservasNestedInput
    Pago?: PagoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutEmpleadoInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUncheckedUpdateManyWithoutEmpleadoInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateManyCanalReversaInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    PagoKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpdateWithoutCanalReversaInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Hotel?: HotelUpdateOneRequiredWithoutReservasNestedInput
    Cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    Habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    Fecha?: FechaUpdateOneRequiredWithoutReservasNestedInput
    Empleado?: EmpleadoUpdateOneRequiredWithoutReservasNestedInput
    Pago?: PagoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutCanalReversaInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUncheckedUpdateManyWithoutCanalReversaInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    PagoKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasCreateManyPagoInput = {
    ReservaKey?: number
    HotelKey: number
    ClienteKey: number
    HabKey: number
    FechaKey: number
    EmpKey: number
    CanalKey: number
    NochesReservadas: number
    CantidadHuespedes: number
    IngresoHabitacion: Decimal | DecimalJsLike | number | string
    IngresoServicios: Decimal | DecimalJsLike | number | string
    DescuentoTotal: Decimal | DecimalJsLike | number | string
    ImpuestoTotal: Decimal | DecimalJsLike | number | string
    LeadTimeReserva: number
    IngresoTotal: Decimal | DecimalJsLike | number | string
  }

  export type ReservasUpdateWithoutPagoInput = {
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Hotel?: HotelUpdateOneRequiredWithoutReservasNestedInput
    Cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    Habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    Fecha?: FechaUpdateOneRequiredWithoutReservasNestedInput
    Empleado?: EmpleadoUpdateOneRequiredWithoutReservasNestedInput
    CanalReversa?: CanalReversaUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutPagoInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservasUncheckedUpdateManyWithoutPagoInput = {
    ReservaKey?: IntFieldUpdateOperationsInput | number
    HotelKey?: IntFieldUpdateOperationsInput | number
    ClienteKey?: IntFieldUpdateOperationsInput | number
    HabKey?: IntFieldUpdateOperationsInput | number
    FechaKey?: IntFieldUpdateOperationsInput | number
    EmpKey?: IntFieldUpdateOperationsInput | number
    CanalKey?: IntFieldUpdateOperationsInput | number
    NochesReservadas?: IntFieldUpdateOperationsInput | number
    CantidadHuespedes?: IntFieldUpdateOperationsInput | number
    IngresoHabitacion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IngresoServicios?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DescuentoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ImpuestoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LeadTimeReserva?: IntFieldUpdateOperationsInput | number
    IngresoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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