import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";


const URL = 'https://backendtest1-b1rm.onrender.com/api/proveedor/';

const CompAgregarProveedor = () => {

    const [nombre, setNombre] = useState('');
    const [contactoPrincipal, setContactoPrincipal] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');

    // hacemos la funcion guardar tareas
    async function guardarProveedor(e) {
        e.preventDefault();
        await axios.post(URL, {
            nombre: nombre, contactoprincipal: contactoPrincipal, telefono: telefono,
            correoelectronico: correoElectronico
        });
        navigate('/proveedor/');
    }

    return(
        <div>
            <h3>Formulario Guardar Proveedores</h3>
            <form onSubmit={guardarProveedor}>

                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombre} onChange={(e)=> setNombre(e.target.value)}
                    type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Contacto Principal</label>
                    <input value={contactoPrincipal} onChange={(e)=> setContactoPrincipal(e.target.value)}
                    type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input value={telefono} onChange={(e)=> setTelefono(e.target.value)}
                    type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Correo Electronico</label>
                    <input value={correoElectronico} onChange={(e)=> setCorreoElectronico(e.target.value)}
                    type="email" className="form-control"/>
                </div>

                    <button type="submit" className="btn btn-primary">Guardar</button>

            </form>
        </div>

    )
}

export default CompAgregarProveedor;