import { Outlet, Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">📊 Dashboard</h2>
      <nav className="mb-4">
        <Link to="users" className="btn btn-outline btn-sm mr-2">Usuarios</Link>
        <Link to="settings" className="btn btn-outline btn-sm">Configuración</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard