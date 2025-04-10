import React from "react";
import { Link } from 'react-router-dom';

const Ubicacion = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">¿Dónde estamos?</h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Información de contacto */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold"><i class="bi bi-geo-alt-fill"></i> Nuestra Tienda central</h2>
            <p className="text-base">
              Tiendas Timpa<br /><br />
              Calle Padre Jacome Cardozo 2221 - Capital<br />
              San Fernando del Valle de Catamarca <br />
              Argentina<br />
              CP 4700<br />
            </p>              

            <div className="divider" />

            <Link className="btn btn-primary btn-wide cursor-pointer" to="/contacto">
               <i class="bi bi-person-lines-fill"></i>Contáctanos
            </Link>  
          </div>

          {/* Mapa de Google */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.498014220687!2d-65.77967858500084!3d-28.469581302056795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9421e1cbe457657d%3A0x9e4725f1e0a4f6e5!2sSan%20Fernando%20del%20Valle%20de%20Catamarca%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1616437694771!5m2!1ses-419!2sar"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
