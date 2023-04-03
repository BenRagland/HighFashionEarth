import React from 'react'
import Styles from '../main.css'


function MobileMenu(props){

    
    return(
        <nav style={props.style} className="mobile-menu_container">
           
           <li>WHO ARE WE?</li>
           <li>WHY ARE WE THE BEST?</li>
           <li>SELLER DIRECTIONS</li>
           <li>FAQ'S</li>
           <li>CONTACT US</li>

        </nav>
    )
}




export default MobileMenu