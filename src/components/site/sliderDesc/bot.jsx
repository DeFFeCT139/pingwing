import image from '../../../img/svg/image 9 (1).svg'

function Bots() {
    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <div className="about-skills-desc-item">
            <div className="duble-name">Боты</div>
            <div className="about-skills-desc-item-inner">
                <div className="about-skills-desc-item-name">Боты</div>
                <div className="about-skills-desc-item-desc">
                    <div className="about-skills-desc-item-desc-left">
                        <div className="about-skills-desc-item-desc-text">Если вашему бизнесу необходим <br/>сотрудник с искусственным интеллектом, который сможет оперативно помогать пользователям, наша команда создаст для вас Telegram, VK или Discord бота.</div>
                        <div className="about-skills-desc-item-desc-pluse">
                            <div className="about-skills-desc-item-desc-pluse-item">Удобные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Оптимизированные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Умные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Стабильные</div>
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

export default Bots;