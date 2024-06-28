
import { Link } from "react-router-dom"
import "../styles/navbar.css"
import { useState } from "react"
export const Navbar = () => {

    const [isActive, setIsActive] = useState(true)

  return (
    <>
                    {/* navbar container */}
    <div className="navbar-container">
                    {/* logo social content*/}
        <div className="logo-social-content">
                    {/* Menu Hamburger */}
        <div className={isActive ? "menu-hamburger" :
                                    "menu-hamburger active" }
             onClick={()=>{setIsActive(!isActive)}}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
                    {/* logo */}
        <div className="logo">
            <h2 className="logo-h2">Academia</h2>
            <span>Online Education & Learning</span>
        </div>
                    {/* Social icons */}
        <div className={isActive ? "social-icons": "social-icons hide"}>
            <i className="fa-brands fa-facebook nav-icons"></i>
            <i className="fa-brands fa-instagram nav-icons"></i>
            <i className="fa-brands fa-youtube nav-icons"></i>
            <i className="fa-brands fa-x-twitter nav-icons"></i>
        </div>
        </div>

                        {/* ul links and button */}
        <div className={isActive ? "ul-links" : "ul-links active"}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">All Courses</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="links-button">Get Certificate</button>
        </div>
    </div>
    </>


  )
}
