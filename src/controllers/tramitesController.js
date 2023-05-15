//Importamos el modelo de Tramites
import { Tramites } from '../models/Tramites.js';

export const obtenerTramites = async (req, res) => {
    try {
        const tramites = await Tramites.findAll();
        res.json(tramites);
    } catch (error) {
        return res.status(500).json({ msg: error.msg });
    }
};
export const obtenerTramite = async (req, res) => {
    try {
        const { id } = req.params;
        const tramite = await Tramites.findByPk(id);
        res.json(tramite);
    } catch (error) {
        return res.status(500).json({ msg: error.msg });
    }
};
export const obtenerTramiteTipo = async (req, res) => {
    try {
        const { tipo } = req.params;
        const tramite = await Tramites.findAll({
            where : { tipo }
        });
            res.json(tramite);
    } catch (error) {
        return res.status(500).json({ msg: "Tipo de Tramite no encontrado" });
    }
};
export const obtenerTramiteEstado = async (req, res) => {
    try {
        const { estado } = req.params;
        const tramite = await Tramites.findAll({
        where : { estado }
    });
        res.json(tramite);
    } catch (error) {
        return res.status(500).json({ msg: "Tramite no encontrado, verifica los datos ingresados" });
    }
};     
export const crearTramite = async (req, res) => {
    const { tipo, estado, clienteId } = req.body;
    try {
        const nuevoTramite = await Tramites.create({
            tipo,
            estado,
            clienteId,
        });
            res.json(nuevoTramite);
    } catch (error) {
        return res.status(500).json({ msg: error.msg });
    }
};
export const  actualizarTramite = async (req, res) => {
    try {
        const { id } = req.params;
        const { tipo, estado, clienteId } = req.body;
    
        const tramite = await Tramites.findByPk(id);
        tramite.tipo = tipo;
        tramite.estado = estado;
        tramite.clienteId = clienteId;
        await tramite.save();

        res.json(tramite);
    } catch (error) {
        return res.status(500).json({ msg: error.msg });
    }
};
export const eliminarTramite = async (req, res) => {
    try {
        const { id } = req.params;
        await Tramites.destroy({
            where : { id }
        });
            res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ msg: error.msg });
    }
};