import React from 'react'
import Styles from '../main.css'
import SectionTheme from './SectionTheme'

function WhyUs (){
    return(
        <SectionTheme color="#FFF4F1">
            <h1>WHY CHOOSE US?</h1>
            {/* Higher Payouts section */}
            <div className="higher-payouts">
                <div className="higher-payouts-header">
                    <h2>HIGHER PAYOUTS</h2>
                </div>
                <p>we’re able to pay out more than our competitin 
                    for a number of reasons.
                    <span>click here to See why.</span></p>
            </div>
            {/* Initial Offer section */}
            <div className="initial-offer">
                <h2>RECIEVE INITIAL OFFER VIA TEXT
                    <span>(XXX)-XXX-$$$$</span>
                </h2>
                <p>we will pre determine whether we are interested in your 
                    items & send an offer. so, You wont have to leave 
                    your  home unless you’re sure we’re interested in your pieces.  
                </p>
            </div>
            {/* Convenient Drop offs section */}
            <div className="drop-offs">
                <h2>CONVENIENT DROP OFFS OR SHIPPING</h2>
                <p>No Waiting in Line! Schedule a drop off time or ship your items 
                    in to get paid. Shipping costs for the label will be split
                    50/50. find out more details on shipping reimbursement.
                </p>
            </div>
        </SectionTheme >
    )
}




export default WhyUs