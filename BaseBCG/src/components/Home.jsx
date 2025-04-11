
import { useNavigate } from "react-router-dom";
import Articulos from '../components/articulos/Articulos'

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Articulos />     
    </>
  );
};

export default Home;
