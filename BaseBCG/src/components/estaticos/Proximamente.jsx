import React from 'react'
import nuevaTienda from '../../assets/img/tienda_nueva.jpg';
import bocetoTienda from '../../assets/img/boceto_tienda.jpg';

const Proximamente = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-10">Proximamente</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Nuestro nuevo local a punto de ser realidad
                            </h2>
                        </div>
                        <p className="text-white/90 sm:mt-4 sm:block">
                            El resultado final supera con creces cualquier expectativa.
                            Un espacio donde la elegancia se fusiona con la comodidad,
                            creando un ambiente exclusivo e íntimo.
                        </p>
                        <p className="text-white/90 sm:mt-4 sm:block">
                            Prepárese para descubrir una experiencia de compra inigualable
                            en un lugar que, por ahora, permanece en secreto.
                            La ubicación de nuestra nueva boutique de élite es una sorpresa que revelaremos muy pronto…
                            ¡Manténgase atento a nuestras redes sociales para el anuncio oficial! La espera valdrá la pena.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt=""
                            src={bocetoTienda}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                        <img
                            alt=""
                            src={nuevaTienda}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proximamente