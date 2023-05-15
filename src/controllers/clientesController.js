//Importamos el modelo de Clientes
import { Clientes } from '../models/Clientes.js';
//Importamos el modelo de Tramites
import { Tramites } from '../models/Tramites.js';

//Creamos los controladores para cada una de las rutas
export const verClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll();    
        res.json(clientes)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
export const verCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Clientes.findByPk(id);
        res.json(cliente);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
export const verClienteApellido = async (req, res) => {
    //Buscar cliente por apellido
    try {        
        const { apellido } = req.params;
        const cliente = await Clientes.findAll({
            where: {
                apellido
            }
        });
            if (!cliente) return res.status(404).json({message: 'Apellido inexistente, por favor ingrese un apellido válido'});
            res.json(cliente);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};
export const verClienteCuit = async (req, res) => {
    //Buscar cliente por cuit
    try {
        const { cuit } = req.params;
        const cliente = await Clientes.findOne({
            where: {
                cuit
            }
    });
        if (!cliente) return res.status(404).json({message: 'CUIT inexistente, por favor ingrese un CUIT válido'});
        res.json(cliente);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};
export const crearCliente = async (req, res) => {    
    const { nombre, apellido, cuit, fecha_de_nacimiento, domicilio, localidad, codigo_postal, telefono, clave_anses, clave_afip } = req.body;
    try {        
        const nuevoCliente = await Clientes.create({
            nombre,
            apellido,
            cuit,
            fecha_de_nacimiento,
            domicilio,
            localidad,
            codigo_postal,
            telefono,
            clave_anses,
            clave_afip
        });
            res.json(nuevoCliente);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
export const actualizarCliente = async (req, res) => {   
    try {
        const { id } = req.params;
        const { nombre, apellido, cuit, fecha_de_nacimiento, domicilio, localidad, codigo_postal, telefono, clave_anses, clave_afip } = req.body

        const cliente = await Clientes.findByPk(id); 
        cliente.nombre = nombre;
        cliente.apellido = apellido;
        cliente.cuit = cuit;
        cliente.fecha_de_nacimiento = fecha_de_nacimiento;
        cliente.domicilio = domicilio;
        cliente.localidad = localidad;
        cliente.codigo_postal = codigo_postal;
        cliente.telefono = telefono;
        cliente.clave_anses = clave_anses;
        cliente.clave_afip = clave_afip
        await cliente.save();

        res.json(cliente);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};
export const eliminarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await Clientes.destroy({
            where: {
                id
            }
        });
            res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};
//Rutas para relacion entre tabla Clientes y Tramites
export const obtenerTramitesCliente = async (req, res) => {
    const { id } = req.params;
    const tramite = await Tramites.findAll({
        where : { clienteId : id }
    });
    res.json(tramite);
};
