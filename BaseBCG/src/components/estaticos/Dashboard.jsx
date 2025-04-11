import Proximamente from "./Proximamente"
import About from "./About"
import Contacto from "./Contacto"
import NuestroCatalogo from "./NuestroCatalogo"

const Dashboard = () => {
  return (
    <div className="p-4">    
      
      <About />
      <div className="divider divider-info"><i class="bi bi-star-fill"></i></div>
      <NuestroCatalogo />  
      <div className="divider divider-info"><i class="bi bi-star-fill"></i></div>
      <Contacto />
      <div className="divider divider-info"><i class="bi bi-star-fill"></i></div>
      <Proximamente />
    </div>
  )
}

export default Dashboard