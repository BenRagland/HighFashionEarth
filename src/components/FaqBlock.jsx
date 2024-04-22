import React from 'react'
import Styles from '../main.css'


function FaqBlock(props){
    const [ answerOn , setAnswerOn ] = React.useState(false)
    function handleClick(e){
        setAnswerOn((prev)=> !prev)
    }
    return(
        <div className="faq-block-component-container">
            <h1 style ={{display: props.faqTitle ? "":"none"}}
            className="faq-block-section-title">{props.faqTitle}
            </h1>
            <div onClick={handleClick} className="faq-block-continer">
                <h1>{props.question}</h1>
                <p style ={{display: answerOn ? "":"none"}} 
                >{props.answer}
                </p>
            </div>
        </div>
    )
}




export default FaqBlock