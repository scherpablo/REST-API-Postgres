//Importamos Router
import { Router } from "express";
//Importamos el controlador de Tramites
import { obtenerTramites, obtenerTramite, obtenerTramiteTipo, obtenerTramiteEstado, crearTramite, actualizarTramite, eliminarTramite } from "../controllers/tramitesController.js";   

//Instanciamos Router
const router = Router();

//Creamos las Rutas de Tramites
router.get('/tramites', obtenerTramites)
router.get('/tramites/:id', obtenerTramite)
router.get('/tramites/tipo/:tipo', obtenerTramiteTipo)
router.get('/tramites/estado/:estado', obtenerTramiteEstado)
router.post('/tramites', crearTramite)
router.put('/tramites/:id', actualizarTramite)
router.delete('/tramites/:id', eliminarTramite)

//Exportamos las rutas
export default router;