import React from 'react'
import Styles from '../main.css'
import SectionTheme from './SectionTheme'
import FaqBlock from './FaqBlock'


function FAQS(){
    const faqTopics = ["Apparel","Shipping"]
    
    return(
        <SectionTheme color="rgba(255, 244, 241, 1)">
            <h1>FAQS</h1>
            <div className="all-faqs-container">
                <FaqBlock 
                question="What is..."
                answer="this is the answer"
                />
            </div>
        </SectionTheme>
    )
}




export default FAQS