import React from 'react'
import Styles from '../main.css'
import SectionTheme from './SectionTheme'
import Instruction from './Instruction'

import GatheringIcon from '../assets/GatheringIcon.png'
import TakePic from '../assets/TakePic.png'
import RecieveOffer from '../assets/RecieveOffer.png'
import Delivery from '../assets/Delivery.png'
import MoneyRain from '../assets/MoneyRain.png'

function Directions (){
    return(
        <SectionTheme color="#F7EFED" sectionName="Seller Directions">
            <div className="directions-component-container" id="directions">
                <h1> Directions</h1>
                <Instruction 
                    image={GatheringIcon} 
                    number="1." 
                    instructions="Gather Your unwanted, Valuable Items, and lay 
                    them on a clean, flat, surface/ background."
                    details="{We accept everything from Marc Jacobs to Louis 
                        Vuitton, in good condition..We do not accept any major
                        flaws like stains, holes or missing parts.}"
                />

                <Instruction 
                    image={TakePic} 
                    number="2." 
                    instructions="Take A CLEAR PHOTO of the full Front, Back, and interior 
                    tags of each item."
                    details="{ It’s okay to send more then 1 photo to capture important 
                        details or to fit the whole piece into the picture. }"
                />

                <Instruction 
                    image={RecieveOffer} 
                    number="3." 
                    instructions="Text your photos to (xxx)xxx-xxxx & Receive Your initial
                    offer in 24-48hrs based on photos received."
                    details="{ ARainl offer will come after  verification & Authentication 
                        of your haul. }"
                />

                <Instruction 
                    image={Delivery} 
                    number="4." 
                    instructions="Ship your items or schedule A drop off. if shipping, we’ll 
                    split the cost 50/50. don’t forget to text your receipt & tracking info."
                    details="{ once we have your items in hand, We still need to verify 
                        authenticity and condition. }"
                />

                <Instruction 
                    image={MoneyRain} 
                    number="5." 
                    instructions="Get paid + 50% cost of shipping. At the moment we offer digital 
                    payments via venmo or zelle."
                    details="{ If there is an authentication failure , please Click to See our item 
                        return process. } " 
                    />
                <div className="directions-spacer"></div>
            </div>
        </SectionTheme >
    )
}
export default Directions