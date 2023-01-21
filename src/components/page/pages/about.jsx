import pc from '../../../img/svg/image 3 (1).svg'
import phone from '../../../img/svg/3 1 (1).svg'
import bot from '../../../img/svg/image 4 (1).svg'
import phone2 from '../../../img/svg/—Pngtree—social media marketing viral mms_5332751 1.svg'
import ListInfo from '../../site/sliderDesc/listInfo'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react'

function About({languageContent}) {
    let about = languageContent.main.about
    let components = 'site'
    
    const animeteContent= {
        hidden: {
          opacity: 0,
        },
        visible:{
          opacity: 1,
          transition:{ 
            delay: 0,
          },
        },
      }

    const [component, setComponent] = useState(components)
    const site = () =>{
        setComponent(components = 'site')
        let blocks = document.getElementsByClassName('about-skills-trap-item')
        for (let index = 0; index < blocks.length; index++) {
            blocks[index].classList.remove('activeBlock')
        }
        document.getElementById('site').classList.add('activeBlock')
    };
    const apps = () =>{
        setComponent(components = 'app')
        let blocks = document.getElementsByClassName('about-skills-trap-item')
        for (let index = 0; index < blocks.length; index++) {
            blocks[index].classList.remove('activeBlock')
        }
        document.getElementById('apps').classList.add('activeBlock')
    };
    const bots = () =>{
        setComponent(components = 'bot')
        let blocks = document.getElementsByClassName('about-skills-trap-item')
        for (let index = 0; index < blocks.length; index++) {
            blocks[index].classList.remove('activeBlock')
        }
        document.getElementById('bots').classList.add('activeBlock')
    };
    const smms = () =>{
        setComponent(components = 'smm')
        let blocks = document.getElementsByClassName('about-skills-trap-item')
        for (let index = 0; index < blocks.length; index++) {
            blocks[index].classList.remove('activeBlock')
        }
        document.getElementById('smms').classList.add('activeBlock')
    };

    return(
        <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.5, once: true}}  className="about page-pading">
            <motion.div variants={animeteContent} className="about-page-title">
                <div className="page-title">{about.title}</div>
                <div className="page-desc">{about.desc}</div>
                <button className='pade-btn'>{about.btn}</button>
                <div className="about-skills">
                    <div className="about-skills-trap">
                        <div id='site' onClick={site} className="about-skills-trap-item activeBlock">
                            <div className="about-skills-trap-item-img">
                                <img src={pc} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">{about.slider.site.title}</div>
                        </div>
                        <div id='apps' onClick={apps} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={phone} alt="" className="about-skills-trap-item-image" />                            </div>
                                <div className="about-skills-trap-item-title">{about.slider.app.title}</div>
                        </div>
                        <div id='bots' onClick={bots} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={bot} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">{about.slider.bot.title}</div>
                        </div>
                        <div id='smms' onClick={smms} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={phone2} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">{about.slider.smm.title}</div>
                        </div>
                    </div>
                    <div className="about-skills-desc">
                       <ListInfo languageContent={about} components={component}/>
                    </div>
                </div>
            </motion.div >
        </motion.div >
    )
}

export default About;