import React from 'react'
import Styles from '../main.css'


function SectionTheme (props){
    return(
        <section style={{backgroundColor:props.color}} className="section-theme">
            {props.children}
        </section>
    )
}




export default SectionTheme