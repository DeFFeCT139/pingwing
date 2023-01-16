import pc from '../../../img/svg/image 3 (1).svg'
import phone from '../../../img/svg/3 1 (1).svg'
import bot from '../../../img/svg/image 4 (1).svg'
import phone2 from '../../../img/svg/—Pngtree—social media marketing viral mms_5332751 1.svg'
import ListInfo from '../../site/sliderDesc/listInfo'
import { useState } from 'react'

function About({languageContent}) {
    let about = languageContent.main.about
    let components = 'site'
    const [component, setComponent] = useState(components)
    const site = () =>setComponent(components = 'site');
    const apps = () =>setComponent(components = 'app');
    const bots = () =>setComponent(components = 'bot');
    const smms = () =>setComponent(components = 'smm');
    return(
        <div className="about page-pading">
            <div className="about-page-title">
                <div className="page-title">{about.title}</div>
                <div className="page-desc">{about.desc}</div>
                <button>{about.btn}</button>
                <div className="about-skills">
                    <div className="about-skills-trap">
                        <div onClick={site} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={pc} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">{about.slider.site.title}</div>
                        </div>
                        <div onClick={apps} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={phone} alt="" className="about-skills-trap-item-image" />                            </div>
                                <div className="about-skills-trap-item-title">{about.slider.app.title}</div>
                        </div>
                        <div onClick={bots} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={bot} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">{about.slider.bot.title}</div>
                        </div>
                        <div onClick={smms} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={phone2} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">{about.slider.smm.title}</div>
                        </div>
                    </div>
                    <div className="about-skills-desc">
                       <ListInfo languageContent={about} components={component}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;