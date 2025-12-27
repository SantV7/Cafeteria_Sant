import { FaBars, FaCartShopping  } from "react-icons/fa6";
import '../styles/header.css'
import HeaderLinks from "./HeaderLinks";
import { useEffect } from "react";
const Header = () => {

    useEffect(() => {
        
    })

    return(
        <>
        <header>
            <div className="logo">
                <h1>Cafeteria</h1>
            </div>

            <nav>
              <HeaderLinks />
            </nav>

            <a id="contact" href="#contact">Contato</a>
            
            <div className="icon_area">
                <FaCartShopping className="icon_bars_menu"/>
                <FaBars className="icon_bars_menu" />
            </div>
        </header>
        
        </>
    )
}

export default Header