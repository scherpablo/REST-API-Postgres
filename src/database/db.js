//Importamos Sequelize
import { Sequelize } from 'sequelize';
//Importamos dotenv para poder utilizar las variables de entorno
import dotenv from 'dotenv';

//Instanciamos dotenv
dotenv.config();

//Creamos un objeto de conexión a la base de datos
export const sequelize = new Sequelize(
    "estudioScherpa",
    "postgres",
    "postgresdb",
    {
        host: "localhost",
        dialect: "postgres",
    }
);