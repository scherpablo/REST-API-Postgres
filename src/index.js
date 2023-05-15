//Importamos app
import app from "./app.js";
//Importamos la instancia de sequelize
import { sequelize } from "./database/db.js";

//Definimos el puerto
const PORT = process.env.PORT || 8080;

//Comprobamos la conexion a la base de datos
async function main() {
    try {
        await sequelize.sync({ force: true });       
        //Escuhcmos el puerto
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.log("Error en la conexion", error);
        
    }
};

main();



