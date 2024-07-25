import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const URL = 'https://backendtest1-b1rm.onrender.com/api/tareas/';


const CompMostrarTareas = () => {

    const[tareas, setTareas] = useState([]);

    useEffect(()=>{
        getTareas();
    },[])

        //Funcion Mostrar tareas

        const getTareas = async () =>{
            const res = await axios.get(URL);
            setTareas(res.data);

        }

        //Funcion eliminar tareas

        const eliminarTareas = async(id)=>{
            await axios.delete(`${URL}${id}`);
            getTareas();
        }
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                 <Link to='/tareas/agregar' className="btn btn-primary mt-2 mb-2">Agregar</Link>
                    <table className="table">
                        <thead className="tablehebg">
                            <tr>
                                <th>Nombre</th>
                                <th>Responsable</th>
                                <th>Fecha</th>
                                <th>Comentarios</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tareas.map((tar, index)=> (
                                <tr key={index}>
                                    <td>{tar.nombre}</td>
                                    <td>{tar.responsable}</td>
                                    <td>{tar.fecha}</td>
                                    <td>{tar.comentarios}</td>
                                    <td>
                                        <Link to={`/tareas/editar/${tar._id}`}
                                        className="btn btn-success mt-2 mb-2">Editar</Link>
                                        <button onClick={() => eliminarTareas(tar._id)}
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

export default CompMostrarTareas;