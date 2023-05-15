//Importamos Sequelize
import { Sequelize } from 'sequelize';
//Importamos dotenv para poder utilizar las variables de entorno
import dotenv from 'dotenv';

//Instanciamos dotenv
dotenv.config();

//Creamos un objeto de conexión a la base de datos
export const sequelize = new Sequelize(
        process.env.PGDATABASE || "estudioScherpa",
        process.env.PGUSER || "postgres",
        process.env.PGPASSWORD ||"postgresdb", {
        host: process.env.PGHOST || "localhost",
        port: process.env.PGPORT || '5432',
        dialect: "postgres"
    }
);