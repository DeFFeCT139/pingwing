import image from '../../../img/svg/image 7 (1).svg'

function Apps() {
    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <div className="about-skills-desc-item">
            <div className="duble-name">Приложения</div>
            <div className="about-skills-desc-item-inner">
                <div className="about-skills-desc-item-name">Приложения</div>
                <div className="about-skills-desc-item-desc">
                    <div className="about-skills-desc-item-desc-left">
                        <div className="about-skills-desc-item-desc-text">Если вашей компании требуется индивидуальное решение.<br/>Наша команда имеет опыт разработки мобильных приложений, которые улучшат клиентоориентированность.</div>
                        <div className="about-skills-desc-item-desc-pluse">
                            <div className="about-skills-desc-item-desc-pluse-item">Удобные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Индивидуальные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Креативные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Производительные</div>
                        </div>
                        <div className="btn-box-about">
                            <button onClick={openForm} className="about-skills-btn">БЕСПЛАТНАЯ <br/> КОНСУЛЬТАЦИЯ</button>
                        </div>
                    </div>
                    <div className="about-skills-desc-item-desc-right">
                        <img src={image} alt="" className="about-skills-desc-item-desc-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apps;