import React from 'react'
import { NavLink} from 'react-router-dom'

const Navbar=()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark" >
            <div className="container-fluid" >
                <NavLink className="navbar-brand" to="/"  style={{color:'white'}}>NewsHunt</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  
                <li className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/" style={{color:'white'}}>Home</NavLink>
                    </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/business" style={{color:'white'}}>Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/entertainment" style={{color:'white'}}>Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/general" style={{color:'white'}}>General</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/health" style={{color:'white'}}>Health</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/science" style={{color:'white'}}>Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sports" style={{color:'white'}}>Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/technology" style={{color:'white'}}>Technology</NavLink>
                        </li> 
                    </li>

                    {/* country */}
                    {/* <li className="nav-item dropdown">
                      <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
                        Country
                      </NavLink>
                      <ul className="dropdown-menu bg-dark">
                      <NavLink className="nav-link" to="/in" style={{color:'white'}}>India</NavLink>
                      <NavLink className="nav-link" to="/us" style={{color:'white'}}>United States</NavLink>
                      <NavLink className="nav-link" to="/br" style={{color:'white'}}>Brazil</NavLink>
                      <NavLink className="nav-link" to="/au" style={{color:'white'}}>Australia</NavLink>
                      </ul>
                    </li> */}
                    
                
                </div>
            </div>
        </nav>
      </div>
    )
}

export default Navbar;
