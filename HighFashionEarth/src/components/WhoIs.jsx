import React from 'react'
import Styles from '../main.css'
import SectionTheme from './SectionTheme'

function WhoIs (){
    return(
        <SectionTheme color="#F7EFED">
            <div className="who-is-component-container" id="whoSection">
                <div className='who-is-heading'>
                    <h2>HIGH FASHION EARTH</h2>
                    <h1> WHO IS HIGH FASHION EARTH?</h1>
                </div>
                <p className="who-is-p">We’re a local resale brand, in Arlington, VA, 
                    supporting & promoting sustainability 
                    /environmentally friendly fashion. We specialize 
                    in resale and authentication of a number of 
                    High Quality brands. To keep it short and sweet..
                </p>
                <p className="who-is-bold">We BUY vintage/ luxury/ and street wear brands. </p> 
            </div>   
        </SectionTheme >
    )
}




export default WhoIs