import Rellax from "rellax";
import About from "../../page/pages/about";
import { motion } from "framer-motion";
import { useEffect } from "react";


function Paralax({languageContent}) {
    const anime = () => document.getElementById('p-s').classList.add('activ-p-s')

    const setRellax = () => {
        let rellax = new Rellax('.rellax',{
        })
        window.addEventListener('scroll', function() {
            document.getElementById('obloko-front').style.right = '-' +  window.scrollY * 0.7 + 'px'
            document.getElementById('obloko-midle').style.left =  '-' +  window.scrollY * 0.3 + 'px'
            document.getElementById('obloko-back').style.left =  '-' + window.scrollY * 0.1 + 'px'
            document.getElementById('scroll1').style.opacity =  1 - window.scrollY * 0.005
        });
    }

    useEffect(()=>{
        setTimeout(()=>{
            anime()
        },2000)
        setRellax()
    })


    const animeteLdin= {
        hidden: {
          left: -700,
        },
        visible:{
            left:0,
          transition:{ 
            delay: 0,
          },
        },
      }
    return(
        <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.5, once: true}} className="paralax"> 
            <div className="scal"> 
                <div className="pngwing2 "></div>
                <div className="pingwing-text rellax" data-rellax-speed="-8">PINGWING</div>
                <div className="luna-logo rellax" data-rellax-speed="-13"></div> 
                <div className="oblakS">
                    <div id="obloko-back" className="obloko-back rellax" data-rellax-speed="-10"></div>
                    <div id="obloko-midle" className="obloko-midle rellax" data-rellax-speed="-8"></div>   
                    <div id="obloko-front" className="obloko-front rellax" data-rellax-speed="-7"></div>
                </div>
                <div className="back-scal rellax" data-rellax-speed="-11"></div>   
                <div className="pingwing-slogan rellax" data-rellax-speed="-13">{languageContent.paralax}</div> 
                <div className="front-scal rellax" data-rellax-speed="-9"></div> 
                <div id="content" className="content rellax" data-rellax-speed="-11"> 
                    <div id="ocean" className="ocean">
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div id="About-page" className="">
                            <About languageContent={languageContent}/>
                        </div> 
                    </div>  
                </div>  
                <div id="scroll1" className="scroll rellax" data-rellax-speed="-7">
                    <div className="scroll-inner">
                        <div className="scrolldown" >
                            <div className="chevrons">
                                <div className="chevrondown"></div>
                                <div className="chevrondown"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ldin" className="ldina rellax" data-rellax-speed="-7">
                    <motion.div variants={animeteLdin} className="ldin-n l-p"></motion.div >
                    <motion.div variants={animeteLdin} className="ldin l-p"></motion.div >  
                    <div id="p-s" className="p-s l-p2"></div >   
                </div> 
            </div> 
        </motion.div>
    )
}

export default Paralax;