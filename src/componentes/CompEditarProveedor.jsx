import { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";


const URL = 'https://backendtest1-b1rm.onrender.com/api/proveedor/';

const CompEditarProveedor = () => {

    const [nombre, setNombre] = useState('');
    const [contactoPrincipal, setContactoPrincipal] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    // hacemos la funcion editar proveedor

    const editarProveedor = async(e) =>{
        e.preventDefault();
        await axios.put(`${URL}${id}`, {
            nombre:nombre, contactoprincipal:contactoPrincipal, telefono:telefono, 
            correoelectronico:correoElectronico
        })
        navigate('/proveedor');
    }

    useEffect(()=> {
        getProveedor();
    },[]);

    const getProveedor = async() =>{
        const res = await axios.get(`${URL}${id}`)
        setNombre(res.data.nombre)
        setContactoPrincipal(res.data.contactoPrincipal)
        setTelefono(res.data.telefono)
        setCorreoElectronico(res.data.correoElectronico)
    }

    return(
        <div>
            <h3>Formulario Editar Proveedores</h3>
            <form onSubmit={editarProveedor}>

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

                    <button type="submit" className="btn btn-primary">Editar</button>

            </form>
        </div>

    )
}


export default CompEditarProveedor;