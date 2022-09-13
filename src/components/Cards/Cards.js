import React from "react";
import { useState } from 'react';
import Button from "./Button";
import './Rangebar.css'
import './Cards.css'
import './Paycard.css'
import './Donecard.css'
    
const Cards=(props)=>{ 
    //State hook to navigate from donate Card to Pay Card & close Pay Card
    const[showPay, setshowPay] = useState(true)
    //State hook to navigate from pay Card to done Card 
    const[showDone, setshowDone] =useState(false)
    
    //function to refresh page
    function refreshPage() {
        window.location.reload(false);
      }
      
    return(
        <>
        {/* Looping Array values using Props */}
            {props.details.map( (val, index)=>(
            <div className="ItemRow">
                <div className="my-card" key={index}>
                    {/* Condition if showPay useState is true */}
                    {showPay &&<>

                    {/* Donate Card */}
                    <img src={val.img} className="card-image" alt="donation-fund-raisers"/>
                    <h1 className="card-heading">{val.heading}</h1>
                    <div className="slide-container">
                        <span className="bar"><span className={val.fill} id="progressbar"></span></span>
                        <input type="range" min="1" max="100" value={val.value} className={val.cname} id="rangeslider"/>
                    </div>
                    <label className="card-price">{val.price}</label> <label className="card-text">Raised</label>

                    {/* Button to empty Donate Card & to view Pay Card */}
                    <Button thisname="donate-btn" text="Donate Now" onClick={() =>setshowPay(!showPay)}/>
                    </>}


                    {/* Condition if showPay useState is false & showDone is false */}
                    {showDone || <>{showPay ||<>

                    {/* Pay Card */}
                        <div className="close-container">
                        <div className="close-btn" onClick={()=>setshowPay(!showPay)}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABDElEQVRoge3ZXQqCQBSG4a8WUdIWbbmBtRq70A8kxBw9fzOc96oukvOg6QwCWZZlLdUD6LyHwDRDf/THTwAjgAG+mG6eYZxnKu4G4DUf4APgITba/u6LGd5nZvDEiCGYB0YcwSwxaghmgVFHME2MGYJpYMwRTBLjhmASGHcEO4MJg2BHMOEQrAQTFsH2YMIj2BamGgRbw1SHYMs9xPDzOcJGrajlmVE/E1etAwO4/PleRU1cWmt/7Ajb5qK27k7VYPbcYsNjSp4TYTFHHnbhMGee2GEwEssOd4zk2skNo7EANMdormLNMBZLcXWM5X5CDeOxKRLHeO7sxDARtqcimGZevQGNvAzNsiyL1xcbE8X3wv0coQAAAABJRU5ErkJggg==" className="close-img" alt="close_image"/>
                        </div>
                        <div className="heading-container">
                        <h1 className="pay-heading">Select the amount that you want to donate</h1>
                        </div>
                        </div>
                        <div className="radio-button">
                        <label className="custom-radio">
                            <input type="radio" name="pay" value={"$10"}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="pay" value={"$50"}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="pay" value={"$100"}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="pay" value={"$500"}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="pay" value={"$1000"}/>
                            <span className="checkmark"></span>
                        </label>
                        </div>
                        <div className="pay-amount">
                        <ul className="radio-text" >
                            <li>$10</li>
                            <li>$50</li>
                            <li>$100</li>
                            <li>$500</li>
                            <li>$1000</li>
                        </ul>
                        </div>
                        <div className="ItemRow">

                        {/* Button to empty Pay Card & to view Done Card */}
                        <Button thisname="pay-btn" text="Pay Now" onClick={()=>setshowDone(!showDone)}/>
                        </div>
                    </>}</>}

                    {/* Condition if showDone useState is true */}
                    {showDone &&<>

                    {/* Done Card */}
                        <img src="https://drive.google.com/uc?export=view&id=1MdizifZ1ygK6J6-bxZHIfG1rdQRunJge" className="done-img" alt="done"/>
                        <h1 className="text-success">You have successfully made the donation!</h1>
                        <div className="ItemRow">

                        {/* Button to Refresh Page & get back to default */}    
                        <Button thisname="done-btn" text="Done" onClick={refreshPage} />
                        </div>
                    </>}
                </div>
            </div>
            ))}
        </>
    )
}

export default Cards