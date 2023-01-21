import { useEffect, useState } from "react";
import Rellax from "rellax";
import Form from "../form/form";
import { motion } from "framer-motion";
import Page from "../page/page";
import Language from '../../config/LanguageСonfig.json'
import Header from "./header/header";
import menu from '../../img/svg/Vector (4).svg'
import Menu from "./menu/menu";


function Pingwing() {
    
    const openMenu = () => document.getElementById('menu').classList.add('activ-menu')
    
    let languageContent = Language.ru

    const [lang, setLang] = useState(languageContent)

    const startLang = () => {
        let userLang = navigator.language || navigator.userLanguage;
        if (userLang === 'ru-RU') {
            setLang(languageContent = Language.ru)
            document.getElementById('select').value = 'Русский'
        } else if (userLang === 'en-EN'){
            setLang(languageContent = Language.en)
            document.getElementById('select').value = 'English'
        } else {
            setLang(languageContent = Language.en)
            document.getElementById('select').value = 'English'
        }
        
    }

    const setLangs = () => {
        if (localStorage.getItem("lang") === 'Русский') {
            setLang(languageContent = Language.ru)
            document.getElementById('select').value = 'Русский'
        } else if(localStorage.getItem("lang") === 'English'){
            setLang(languageContent = Language.en)
            document.getElementById('select').value = 'English'
        }
    }


    const selectChenge = (e) =>{
        if (e.target.value === 'Русский') {
            setLang(languageContent = Language.ru)
            localStorage.setItem("lang" ,e.target.value)
        } else if(e.target.value === 'English'){
            setLang(languageContent = Language.en)
            localStorage.setItem("lang", e.target.value)
        }
    }
    const anime = () => document.getElementById('p-s').classList.add('activ-p-s')

    

    useEffect(()=>{
        startLang()
        setTimeout(()=>{
            anime()
        },2000)
        setLangs()
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
        let rellax = new Rellax('.rellax')
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
        <div className="pngwing">
            <div className="Select" id="#lang">
                <select id="select" onChange={selectChenge}>
                    <option>Русский</option>
                    <option>English</option>
                    <option>Deutsch</option>
                </select>
            </div>
            <div className="menu-btn">
                <img src={menu} onClick={openMenu} alt="" className="menu-btn-img" />
            </div>
            <Header languageContent={lang}/> 
            <Menu languageContent={lang}/>
            <Form/>
            <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.5, once: true}} className="paralax"> 
                <div className="scal"> 
                    <div className="pingwing-text rellax" data-rellax-speed="-6">PINGWING</div>
                    <div className="obloko-back rellax" data-rellax-speed="-3"></div>
                    <div className="luna-logo rellax" data-rellax-speed="-3"></div> 
                    <div className="obloko-midle rellax" data-rellax-speed="-2"></div>   
                    <div className="obloko-front rellax" data-rellax-speed="-1"></div>
                    <div className="back-scal rellax" data-rellax-speed="-2"></div>   
                    <div className="pingwing-slogan rellax" data-rellax-speed="-8">{lang.paralax}</div> 
                    <div className="front-scal rellax" data-rellax-speed="1"></div> 
                    <div id="content" className="content rellax" data-rellax-speed="5"> 
                        <div id="ocean" className="ocean">
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div id="About-page" className="">
                                <Page languageContent={lang}/> 
                            </div> 
                        </div>  
                    </div>  
                    <div className="scroll">
                        <div className="scroll-inner">
                            <div className="scrolldown" >
                                <div className="chevrons">
                                    <div className="chevrondown"></div>
                                    <div className="chevrondown"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="ldina rellax" data-rellax-speed="2">
                        <motion.div variants={animeteLdin} className="ldin-n l-p"></motion.div >
                        <motion.div variants={animeteLdin} className="ldin l-p"></motion.div >  
                        <div id="p-s" className="p-s l-p2"></div >   
                    </div> 
                </div> 
            </motion.div>
        </div>    
    ) 
} 

export default Pingwing;