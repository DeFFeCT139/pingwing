import { useEffect, useState } from "react";
import Form from "../form/form";
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
        } else if(localStorage.getItem("lang") === 'Հայերեն'){
            setLang(languageContent = Language.ar)
            document.getElementById('select').value = 'Հայերեն'
        } else if(localStorage.getItem("lang") === 'Français'){
            setLang(languageContent = Language.fr)
            document.getElementById('select').value = 'Français'
        } else if(localStorage.getItem("lang") === 'Deutsch'){
            setLang(languageContent = Language.ger)
            document.getElementById('select').value = 'Deutsch'
        }
    }


    const selectChenge = (e) =>{
        if (e.target.value === 'Русский') {
            setLang(languageContent = Language.ru)
            localStorage.setItem("lang" ,e.target.value)
        } else if(e.target.value === 'English'){
            setLang(languageContent = Language.en)
            localStorage.setItem("lang", e.target.value)
        } else if(e.target.value === 'Հայերեն'){
            setLang(languageContent = Language.ar)
            localStorage.setItem("lang", e.target.value)
        } else if(e.target.value === 'Français'){
            setLang(languageContent = Language.fr)
            localStorage.setItem("lang", e.target.value)
        } else if(e.target.value === 'Deutsch'){
            setLang(languageContent = Language.ger)
            localStorage.setItem("lang", e.target.value)
        }
    }

    

    useEffect(()=>{
        startLang()
        setLangs()
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
    })

    

    return(
        <div id="pngwing" className="pngwing ">
            <div className="Select" id="#lang">
                <select id="select" className="" onChange={selectChenge}>
                    <option>Русский</option>
                    <option>English</option>
                    <option>Հայերեն</option>
                    <option>Deutsch</option>
                    <option>Français</option>
                </select>
            </div>
            <div className="menu-btn">
                <img src={menu} onClick={openMenu} alt="" className="menu-btn-img" />
            </div>
            <Header languageContent={lang}/> 
            <Menu languageContent={lang}/>
            <Form/>
            <Page languageContent={lang}/> 
        </div>    
    ) 
} 

export default Pingwing;