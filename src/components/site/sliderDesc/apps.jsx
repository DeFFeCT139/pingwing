import image from '../../../img/svg/image 7 (1).svg'

function Apps({languageContent}) {
    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <div className="about-skills-desc-item">
            <div className="duble-name">{languageContent.app.title}</div>
            <div className="about-skills-desc-item-inner">
                <div className="about-skills-desc-item-name">{languageContent.app.title}</div>
                <div className="about-skills-desc-item-desc">
                    <div className="about-skills-desc-item-desc-left">
                        <div className="about-skills-desc-item-desc-text">{languageContent.app.desc}</div>
                        <div className="about-skills-desc-item-desc-pluse">
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.app.btns.one}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.app.btns.two}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.app.btns.three}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.app.btns.for}</div>
                        </div>
                        <div className="btn-box-about">
                            <button onClick={openForm} className="about-skills-btn">{languageContent.app.btns.free}</button>
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