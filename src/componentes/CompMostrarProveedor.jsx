import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const URL = 'https://backendtest1-b1rm.onrender.com/api/proveedor/';


const CompMostrarProveedor = () => {

    const[proveedor, setProveedor] = useState([]);

    useEffect(()=>{
        getProveedor();
    },[])

        //Funcion Mostrar proveedores

        const getProveedor = async () =>{
            const res = await axios.get(URL);
            setProveedor(res.data);

        }

        //Funcion eliminar proveedor

        const eliminarProveedor = async(id)=>{
            await axios.delete(`${URL}${id}`);
            getProveedor();
        }
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                 <Link to='/proveedor/agregar' className="btn btn-primary mt-2 mb-2">Agregar</Link>
                    <table className="table">
                        <thead className="tablehebg">
                            <tr>
                                <th>Nombre</th>
                                <th>ContactoPrincipal</th>
                                <th>Telefono</th>
                                <th>CorreoElectronico</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proveedor.map((tar, index)=> (
                                <tr key={index}>
                                    <td>{tar.nombre}</td>
                                    <td>{tar.contactoPrincipal}</td>
                                    <td>{tar.telefono}</td>
                                    <td>{tar.correoElectronico}</td>
                                    <td>
                                        <Link to={`/proveedor/editar/${tar._id}`}
                                        className="btn btn-success mt-2 mb-2">Editar</Link>
                                        <button onClick={() => eliminarProveedor(tar._id)}
                                        className="btn btn-danger mt-2 mb-2">Eliminar</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>





        </div>
    )
}

export default CompMostrarProveedor;