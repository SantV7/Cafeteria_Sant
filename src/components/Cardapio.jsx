import '../styles/cardapio.css'
import coffee_img from '../img/coffee_img.jpg'
import CardsCardapio from './CardsCardapio'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'


const Cardapio = () => {

    useEffect(() => {
        ScrollReveal().reveal('.content_info' ,
         {
          duration: 1000,
          reset: true
        })
    }, [])


    return(
        <>
         <main>
            <div className='content_info'>
                <div id='wellcome_msg'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quo
                    , quaerat neque mollitia quod corrupti dolor autem modi molestiae itaque
                    fugiat, recusandae iusto voluptas possimus sequi tempore sint praesentium? 
                    Asperiores.</p>
                </div>


                <div id='photo_area_info'>
                    <img id='local_coffee' src={coffee_img} alt="Local da cafeteria" />
                </div>
            </div>
            
                <CardsCardapio /> 

         </main>
        </>
    )
}

export default Cardapio

