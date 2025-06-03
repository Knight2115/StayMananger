
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.HotelScalarFieldEnum = {
  HotelKey: 'HotelKey',
  HotelID: 'HotelID',
  Nombre: 'Nombre',
  Cadena: 'Cadena',
  Ciudad: 'Ciudad',
  Pais: 'Pais',
  Estrellas: 'Estrellas',
  Direccion: 'Direccion'
};

exports.Prisma.ClienteScalarFieldEnum = {
  ClienteKey: 'ClienteKey',
  ClienteID: 'ClienteID',
  Nombre: 'Nombre',
  Apellido: 'Apellido',
  Genero: 'Genero',
  FechaNacimiento: 'FechaNacimiento',
  Nacionalidad: 'Nacionalidad',
  TipoCliente: 'TipoCliente'
};

exports.Prisma.TipoHabScalarFieldEnum = {
  TipoHabKey: 'TipoHabKey',
  TipoHabID: 'TipoHabID',
  Descripcion: 'Descripcion',
  Categoria: 'Categoria',
  CapacidadMax: 'CapacidadMax',
  TarifaEstandar: 'TarifaEstandar'
};

exports.Prisma.HabitacionScalarFieldEnum = {
  HabitacionKey: 'HabitacionKey',
  HabitacionID: 'HabitacionID',
  HotelKey: 'HotelKey',
  TipoHabKey: 'TipoHabKey',
  NumeroHab: 'NumeroHab',
  Piso: 'Piso',
  Capaciddd: 'Capaciddd',
  Vista: 'Vista'
};

exports.Prisma.FechaScalarFieldEnum = {
  FechaKey: 'FechaKey',
  Fecha: 'Fecha',
  Año: 'Año',
  Trimestre: 'Trimestre',
  Mes: 'Mes',
  Dia: 'Dia',
  DiaSemana: 'DiaSemana',
  EsFinDeSemana: 'EsFinDeSemana'
};

exports.Prisma.EmpleadoScalarFieldEnum = {
  EmpleadoKey: 'EmpleadoKey',
  EmpleadoID: 'EmpleadoID',
  Nombre: 'Nombre',
  Apellido: 'Apellido',
  Puesto: 'Puesto',
  Departamento: 'Departamento',
  FechaContratacion: 'FechaContratacion'
};

exports.Prisma.CredencialScalarFieldEnum = {
  CredencialKey: 'CredencialKey',
  EmpKey: 'EmpKey',
  Usuario: 'Usuario',
  PasswordHash: 'PasswordHash',
  Rol: 'Rol',
  Estado: 'Estado'
};

exports.Prisma.CanalReversaScalarFieldEnum = {
  CanalKey: 'CanalKey',
  CanalID: 'CanalID',
  NombreCanal: 'NombreCanal',
  Descripcion: 'Descripcion'
};

exports.Prisma.PagoScalarFieldEnum = {
  PagoKey: 'PagoKey',
  PagoID: 'PagoID',
  Metodo: 'Metodo',
  Moneda: 'Moneda'
};

exports.Prisma.ReservasScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
