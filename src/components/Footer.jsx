import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import '../styles/footer.css'
import { useEffect } from "react";

const Footer = () => {

    useEffect(() => {
      ScrollReveal().reveal('#footer_email_adress', 
         {
          reset: true,
          delay: 40,
          duration:400,
          
         }
      )

    }, [])

    return(
        <>
         <footer>
            <div id="footer_email_adress">
                <a href="#email">CafeteriaSant@gmail.com</a>
                <a href="#email_patrocinio">CafeteriaSantNegocios@gmail.com</a>
            </div>

            <div id="footer_social">
                <FaInstagram className="social_icon"  id="i_instagram"/>
                <FaWhatsapp className="social_icon"  id="i_whatsapp"/>
                <FaYoutube className="social_icon"  id="i_youtube"/>
            </div>

        </footer>       
        </>
    )
}


export default Footer