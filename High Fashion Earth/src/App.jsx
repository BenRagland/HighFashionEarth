import React from "react"
import Styles from './main.css'
import Header from './components/Header'
import WhoIs from "./components/WhoIs"
import WhyUs from './components/WhyUs'
import Directions from './components/Directions'
import MobileMenu from './components/MobileMenu'
import FAQS from './components/FAQS'


function App(){
    const [ menuOn , setMenuOn] = React.useState(false)
    function handleClick(e){
        console.log("clicked")
    }
    return(
        <div className="page-container">
            <MobileMenu style={ {display: menuOn ? "" : "none"}}/>
            <Header />
            <WhoIs />
            <WhyUs />
            <Directions />
            <FAQS />
        
            

        </div>
    )
}

export default App