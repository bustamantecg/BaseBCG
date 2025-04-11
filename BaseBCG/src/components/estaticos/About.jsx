import tiendaImg from '../../assets/img/tienda.jpg';
import tiendaImg02 from '../../assets/img/tienda02.jpg';
import tiendaImg03 from '../../assets/img/tienda03.jpg';
import tiendaImg04 from '../../assets/img/tienda04.jpg';
import tiendaImg05 from '../../assets/img/tienda05.jpg';

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Sobre Nosotros</h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Texto descriptivo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <i className="bi bi-shop-window"></i> Tiendas Timpa
            </h2>
            <p className="text-base leading-relaxed">
              Somos una tienda especializada en la venta de indumentaria para
              profesionales de la salud. Desde nuestros inicios, nos hemos
              enfocado en ofrecer productos de calidad, confortables y con
              diseños modernos pensados para médicas, enfermeras y personal
              sanitario.
            </p>

            <p className="text-base leading-relaxed">
              En Tiendas Timpa creemos que la imagen profesional también
              comunica dedicación y compromiso. Por eso, seleccionamos
              cuidadosamente cada prenda y ofrecemos atención personalizada en
              nuestra tienda central ubicada en San Fernando del Valle de
              Catamarca.
            </p>

            <p className="text-base leading-relaxed">
              Nuestro objetivo es seguir creciendo y acompañando con estilo a
              quienes cuidan de nuestra salud.
            </p>
          </div>

          {/* Imagen representativa */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="carousel carousel-center bg-neutral rounded-box w-full p-2 space-x-4">
              {[
                tiendaImg,
                tiendaImg02,
                tiendaImg03,
                tiendaImg04,
                tiendaImg05,
              ].map((src, index) => (
                <div className="carousel-item" key={index}>
                  <img
                    src={src}
                    alt={`imagen-${index}`}
                    className="w-64 h-64 object-cover rounded-box"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default About;
