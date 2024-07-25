import React from "react";
import fullstack from "../imagenes/fullstack.jpg"


const CompFooter = () => {
    return (
        <div>

        <div className="card-body">
            <h5 className="card-title">Avenida Siempre viva 742 - Evergreen Bogotá</h5>
            <p className="card-text">Correo LosSimpson@serviciodigital.com - telefonos (601) 3456789 - 3002435678</p>
            <img src={fullstack} className="App-logo1" alt="logo"/>
        </div>

        <div className="card-footer text-muted">
            Lunes - Viernes Horario 8:30 am - 6 pm
        </div>


        </div>
    )
}
export default CompFooter