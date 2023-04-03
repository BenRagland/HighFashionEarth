import React from 'react'
import Styles from '../main.css'
import {Link} from 'react-scroll'

function MobileMenu(props){
    
    return(
        <div>

            <nav onClick={props.click} style={props.style} className="mobile-menu_container">
            <h4>
                    <Link
                    activeClass="active"
                    to="header"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >MENU</Link>
                </h4>
            <li >
                    <Link
                    activeClass="active"
                    to="whoSection"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >WHO ARE WE?</Link>
                </li>
            <li >
                    <Link
                    activeClass="active"
                    to="whyUs"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >WHY ARE WE THE BEST?</Link>
                    
                </li>
            <li>
                    <Link
                    activeClass="active"
                    to="directions"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >SELLER DIRECTIONS</Link>
                
                </li>
            <li>
                    <Link
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >FAQ'S</Link>
                
                </li>
            <li>
                    <Link
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >CONTACT US</Link>
                
            </li>

            </nav>
        </div>
    )
}




export default MobileMenu