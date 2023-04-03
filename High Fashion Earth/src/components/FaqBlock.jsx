import React from 'react'
import Styles from '../main.css'


function FaqBlock(props){
   
    return(
        <div className="faqblock-continer">
            <h1>{props.question}</h1>
            <p>{props.answer}</p>
        </div>
    )
}




export default FaqBlock