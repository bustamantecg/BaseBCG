import React from 'react';
import tiendaImg from '../../assets/img/tienda.jpg';
import tiendaImg03 from '../../assets/img/tienda03.jpg';
import tiendaImg04 from '../../assets/img/tienda04.jpg';
import tiendaImg05 from '../../assets/img/tienda05.jpg';

const NuestroCatalogo = () => {
    return (
        <div className="container mx-auto p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">Nuestro Catálogo</h1>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Texto descriptivo */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                            <i class="bi bi-journal-medical"></i> Novedoso Catálogo
                        </h2>
                        <p className="text-base leading-relaxed">
                            Nuestro novedoso catálogo lo prodrás disponer desde cualquier dispositivo
                            estes o no en línea.
                        </p>
                        <p className="text-base leading-relaxed">
                            Encontraras información de cada prenda, en tiempo record,
                             utlizando diferentes criterios de filtros:                            
                        </p>
                        <div className='text-base leading-relaxed'>
                            <ul className="list bg-base-100 rounded-box shadow-md">

                                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Filtros de busquedas</li>

                                <li className="list-row">
                                    <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                                    <div className="list-col-grow">
                                        <div>Precio</div>
                                        <div className="text-xs font-semibold opacity-60">Solo ingresas el importe para ontener un listado de 
                                            prendas con Menor, Mayor o un Rango de precios.</div>
                                    </div>
                                </li>

                                <li className="list-row">
                                    <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
                                    <div className="list-col-grow">
                                        <div>Descripción</div>
                                        <div className="text-xs font-semibold opacity-60">Ingresas un nombre y obtendras un listado ordenado alfabeticamente.</div>
                                    </div>
                                </li>

                                <li className="list-row">
                                    <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
                                    <div className="list-col-grow">
                                        <div>Talle</div>
                                        <div className="text-xs font-semibold opacity-60">Ingresas el Talle, por ejemplo: XL y obtendras un listado ordenado alfabeticamente de todas las prendas con ese talle.</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Imagen representativa */}
                    <div className="carousel carousel-vertical rounded-box h-96 overflow-hidden">
                        {[
                            tiendaImg,
                            tiendaImg03,
                            tiendaImg04,
                            tiendaImg05,
                        ].map((src, index) => (
                            <div className="carousel-item" key={index}>
                                <img
                                    src={src}
                                    alt={'imagen-${index}'}
                                    className="w-full h-auto object-cover" // Clases para hacer la imagen responsiva
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuestroCatalogo