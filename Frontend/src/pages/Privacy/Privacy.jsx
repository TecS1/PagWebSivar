import React from "react";
import "./_Privacy.scss";

export function Privacy() {

  return (
    <>
      <div className="pol-datos">
        
        <h1>Politica de tratamiento de datos personales</h1>

          <iframe 
            id="polDatos"
            title="politica de Datos" 
            src="../../../poldatos.html"
          />
      </div>
    </>
  )
}
