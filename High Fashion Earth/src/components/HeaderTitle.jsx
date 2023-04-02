import React from 'react'
import Styles from '../main.css'
import {TiThMenu} from 'react-icons/ti'

function HeaderTitle (){
    return(
        
        <div className="header-title_container">
            <TiThMenu className="hamburger-menu"/>
            <h3 className="header-title_title">HIGH FASHION EARTH</h3>
        </div>
                
    )
}




export default HeaderTitle