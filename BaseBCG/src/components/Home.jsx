import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">🏠 Página Home</h1>
                <button onClick={() => navigate('/about')} className="btn btn-primary mr-2">Ir a About</button>
                <button onClick={() => navigate('/dashboard')} className="btn btn-secondary">Ir a Dashboard</button>
            </div>


            
        </>
    )
}

export default Home