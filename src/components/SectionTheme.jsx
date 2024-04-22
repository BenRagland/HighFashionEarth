import React from 'react'
import Styles from '../main.css'


function SectionTheme (props){
    return(
        <section style={{backgroundColor:props.color}} className="section-theme">
            {props.children}
            
            <div className="section-name-container">
                <h1>
                    {props.sectionName}
                </h1>
                <h1 className="section-name-label-two">
                    {props.sectionName}
                </h1>
            </div>
        </section>
    )
}




export default SectionTheme