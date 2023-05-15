//Importamos DataTypeSequelize
import { DataTypes } from 'sequelize'; 
//Importamos la configuración de la base de datos
import { sequelize } from '../database/db.js';

export const Tramites = sequelize.define('tramite', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipo: { type: DataTypes.STRING },
    estado: { type: DataTypes.STRING }
}, {
    timestamps: false
});


