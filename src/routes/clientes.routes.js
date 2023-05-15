//Importamos Router
import  { Router } from "express";
//Importamos el controlador de clientes
import { verClientes, verCliente, verClienteApellido, verClienteCuit, crearCliente, actualizarCliente, eliminarCliente, obtenerTramitesCliente } from "../controllers/clientesController.js";

//Instanciamos Router
const router = Router();

//Creamos las rutas
router.get('/clientes', verClientes);
router.get('/clientes/:id', verCliente);
router.get('/clientes/apellido/:apellido', verClienteApellido);
router.get('/clientes/cuit/:cuit', verClienteCuit);
router.post('/clientes', crearCliente);
router.put('/clientes/:id', actualizarCliente);
router.delete('/clientes/:id', eliminarCliente);

router.get('/clientes/:id/tramites', obtenerTramitesCliente);

//Exportamos router
export default router;