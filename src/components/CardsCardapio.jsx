import '../styles/cardscardapio.css'
const CardsCardapio = () => {


    return(
        <>
            <div id="cardapio_area">
                <div className="card_cardapio_style">
                    <div>
                        <span className='tittle_food'>Torta</span>
                        <div className='price_style'>R$8,50</div>
                    </div>

                    <div>
                        <button className='btn_add'>Adicionar</button>
                    </div>                   
                </div>

                <div className="card_cardapio_style">
                    <div>
                        <span className='tittle_food'>Bolos</span>
                        <div className='price_style'>R$5,50</div>
                    </div>

                    <div>
                        <button className='btn_add'>Adicionar</button>
                    </div>
                </div>
                
                <div className="card_cardapio_style">
                    <div>
                        <span className='tittle_food'>Cafés</span>
                        <div className='price_style'>R$3 - R$7,75</div>
                    </div>

                    <div>
                        <button className='btn_add'>Adicionar</button>
                    </div>                    
                </div>
                
                <div className="card_cardapio_style">
                    <div>
                        <span className='tittle_food'>Chás</span>
                        <div className='price_style'>R$3 - R$5,50</div>
                    </div>

                    <div>
                        <button className='btn_add'>Adicionar</button>
                    </div>                    
                </div>

                <div className="card_cardapio_style">
                    <div>
                        <span className='tittle_food'>Doces</span>
                        <div className='price_style'>R$1,50 - R$4</div>
                    </div>

                    <div>
                        <button className='btn_add'>Adicionar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsCardapio