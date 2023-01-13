import image from '../../../img/svg/image 13 (1).svg'

function Smm() {
    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <div className="about-skills-desc-item">
            <div className="duble-name">SMM</div>
            <div className="about-skills-desc-item-inner">
                <div className="about-skills-desc-item-name">SMM</div>
                <div className="about-skills-desc-item-desc">
                    <div className="about-skills-desc-item-desc-left">
                        <div className="about-skills-desc-item-desc-text">Хотите продвигать аккуанты в соц. сетях? Наши маркетологи составят стратегию продвижения и упакуют ваш профиль “под ключ”. Мы знаем, как привлечь клиентов без больших затрат на рекламу.</div>
                        <div className="about-skills-desc-item-desc-pluse">
                            <div className="about-skills-desc-item-desc-pluse-item">Узнаваемость</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Актив</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Продажи</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Личный бренд</div>
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

export default Smm;