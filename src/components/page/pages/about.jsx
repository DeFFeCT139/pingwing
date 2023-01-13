import pc from '../../../img/svg/image 3 (1).svg'
import phone from '../../../img/svg/3 1 (1).svg'
import bot from '../../../img/svg/image 4 (1).svg'
import phone2 from '../../../img/svg/—Pngtree—social media marketing viral mms_5332751 1.svg'
import ListInfo from '../../site/sliderDesc/listInfo'
import { useState } from 'react'

function About() {
    let components = 'site'
    const [component, setComponent] = useState(components)
    const site = () =>setComponent(components = 'site');
    const apps = () =>setComponent(components = 'app');
    const bots = () =>setComponent(components = 'bot');
    const smms = () =>setComponent(components = 'smm');
    return(
        <div className="about page-pading">
            <div className="about-page-title">
                <div className="page-title">Мы – digital агенство полного цикла</div>
                <div className="page-desc">Наша команда рада помочь развитию вашего бизнеса</div>
                <button>НАШИ ПРОЕКТЫ</button>
                <div className="about-skills">
                    <div className="about-skills-trap">
                        <div onClick={site} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={pc} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">Сайты</div>
                        </div>
                        <div onClick={apps} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={phone} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">Приложения</div>
                        </div>
                        <div onClick={bots} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={bot} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">Боты</div>
                        </div>
                        <div onClick={smms} className="about-skills-trap-item">
                            <div className="about-skills-trap-item-img">
                                <img src={phone2} alt="" className="about-skills-trap-item-image" />                            </div>
                            <div className="about-skills-trap-item-title">SMM</div>
                        </div>
                    </div>
                    <div className="about-skills-desc">
                       <ListInfo components={component}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;