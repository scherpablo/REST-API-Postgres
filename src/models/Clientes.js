//Importamos DataTypeSequelize
import { DataTypes } from 'sequelize'; 
//Importamos la configuración de la base de datos
import { sequelize } from '../database/db.js';
//Importamos el modelo de Tramites
import { Tramites } from './Tramites.js';

export const Clientes = sequelize.define('cliente', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: { type: DataTypes.STRING},
    apellido: { type: DataTypes.STRING},
    cuit: { type: DataTypes.STRING},
    fecha_de_nacimiento: { type: DataTypes.DATE},
    domicilio: { type: DataTypes.STRING},
    localidad: { type: DataTypes.STRING},
    codigo_postal: { type: DataTypes.STRING},
    telefono: { type: DataTypes.STRING},
    clave_anses: { type: DataTypes.STRING},
    clave_afip: { type: DataTypes.STRING}
}, {
    timestamps: false
});

//Creamos una relación de uno a muchos entre Clientes y Tramites
Clientes.hasMany(Tramites, {foreignKey: 'clienteId', sourceKey: 'id'});
//Creamos una relacion de muchos a uno entre Tramites y Clientes
Tramites.belongsTo(Clientes, { foreignKey: 'clienteId', targetKey: 'id' });
