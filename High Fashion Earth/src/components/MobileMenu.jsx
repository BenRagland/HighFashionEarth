import React from 'react'
import Styles from '../main.css'


function MobileMenu(props){

    
    return(
        <nav onClick={props.click} style={props.style} className="mobile-menu_container">
           <h4>Menu</h4>
           <li>WHO ARE WE?</li>
           <li>WHY ARE WE THE BEST?</li>
           <li>SELLER DIRECTIONS</li>
           <li>FAQ'S</li>
           <li>CONTACT US</li>

        </nav>
    )
}




export default MobileMenu