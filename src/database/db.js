//Importamos Sequelize
import { Sequelize } from 'sequelize';

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