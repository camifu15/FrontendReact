import React from "react";


const CompMenu = () => {


 return (


    <div>
        <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

                <span className="fs-4">WebSite FullStack</span>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link ">Inicio</a></li>
                <li className="nav-item"><a href="/tareas" className="nav-link ">Tarea</a></li>
                <li className="nav-item"><a href="/proveedor" className="nav-link ">Proveedores</a></li>
            </ul>
        </nav>




    </div>
 )
}

export default CompMenu