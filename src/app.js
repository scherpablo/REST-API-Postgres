//Importamos express
import express from "express";
//Importamos las rutas de clientes
import clientesRoutes from "./routes/clientes.routes.js";
//Importamos las rutas de tramites
import tramitesRoutes from "./routes/tramites.routes.js";

//Instanciamos express
const app = express();

//Creamos Middleware para archivos Json
app.use(express.json());

//Utilizamos las rutas de clientes
app.use(clientesRoutes);
//Utilizamos las rutas de tramites
app.use(tramitesRoutes);

//Exportamos app
export default app;