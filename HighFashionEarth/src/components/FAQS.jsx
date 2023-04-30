import React from 'react'
import Styles from '../main.css'
import SectionTheme from './SectionTheme'
import FaqBlock from './FaqBlock'


function FAQS(){
    const faqTopics = ["Apparel","Shipping"]
    
    return(
        <SectionTheme color="rgba(255, 244, 241, 1)">
            
            <div className="all-faqs-container" id="faq">
                <h1>FAQ'S</h1>
                <FaqBlock 
                faqTitle="ABOUT THE APPAREL"
                question="What are some of the brands that we Buy?"
                answer="this is the answer"
                />
                <FaqBlock 
                question="What Condition is Accepeted for clothing?"
                answer="this is the answer"
                />
                {/* Pictures FAQ Section */}
                <FaqBlock 
                faqTitle="Pictures"
                question="What Do 'good' picture ook like?"
                answer="this is the answer"
                />
                <FaqBlock 
                question="What Do 'Bad' pictures look like"
                answer="this is the answer"
                />
                <FaqBlock 
                question="What should i say in the text with my photos?"
                answer="this is the answer"
                />
                <FaqBlock 
                question="How Long does a response take?"
                answer="this is the answer"
                />

                {/* Shipping FAQ Section */}
                <FaqBlock 
                faqTitle="Shipping"
                question="What is the shipping address?"
                answer="this is the answer"
                />
                <FaqBlock 
                question="How do I schedule a drop off? what's the location?"
                answer="this is the answer"
                />
                <FaqBlock 
                question="How do i get reimbursed for shipping?"
                answer="this is the answer"
                />
            </div>
        </SectionTheme>
    )
}




export default FAQS