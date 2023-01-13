import { useEffect } from "react";
import Rellax from "rellax";
import Form from "../form/form";
import Page from "../page/page";
import Header from "./header/header";

function Pingwing() {
    useEffect(()=>{
        let rellax = new Rellax('.rellax')
    })
    return(
        <div className="pngwing">
            <Header/> 
            <Form/>
            <div className="paralax"> 
                <div className="scal"> 
                    <div className="pingwing-text rellax" data-rellax-speed="-6">PINGWING</div>
                    <div className="obloko-back rellax" data-rellax-speed="-3"></div>
                    <div className="luna-logo rellax" data-rellax-speed="-3"></div> 
                    <div className="obloko-midle rellax" data-rellax-speed="-2"></div>   
                    <div className="obloko-front rellax" data-rellax-speed="-1"></div>
                    <div className="back-scal rellax" data-rellax-speed="-2"></div>   
                    <div className="pingwing-slogan rellax" data-rellax-speed="-8">КРЕАТИВНО, КРУТО И СВЕЖО</div> 
                    <div className="front-scal rellax" data-rellax-speed="1"></div> 
                    <div className="content rellax" data-rellax-speed="5">   
                        <Page/>  
                    </div>  
                </div> 
            </div>
        </div>   
    ) 
} 

export default Pingwing;