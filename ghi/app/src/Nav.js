import { NavLink, Outlet } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">Create sale</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/new">Create customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales_people/new">Create sales person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">Create automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/new">Create model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new">Create manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services/new">create a Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/new">Create technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <Outlet />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
