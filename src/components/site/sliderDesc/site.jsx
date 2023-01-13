import image from '../../../img/svg/image 6 (1).svg'

function Sites() {
    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <div className="about-skills-desc-item">
            <div className="duble-name">Сайты</div>
            <div className="about-skills-desc-item-inner">
                <div className="about-skills-desc-item-name">Сайты</div>
                <div className="about-skills-desc-item-desc">
                    <div className="about-skills-desc-item-desc-left">
                        <div className="about-skills-desc-item-desc-text">Если у вашего бизнеса еще нет веб-сайта, то пришло время его создать.<br/>Сайт проинформирует пользователя <br/>о вашей компании, а также отобразит информацию об услугах или продуктах.</div>
                        <div className="about-skills-desc-item-desc-pluse">
                            <div className="about-skills-desc-item-desc-pluse-item">Удобные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Оптимизированные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Стильные</div>
                            <div className="about-skills-desc-item-desc-pluse-item">Конкурентоспособные</div>
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

export default Sites;