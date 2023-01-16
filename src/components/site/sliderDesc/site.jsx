import image from '../../../img/svg/image 6 (1).svg'

function Sites({languageContent}) {
    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <div className="about-skills-desc-item">
            <div className="duble-name">{languageContent.site.title}</div>
            <div className="about-skills-desc-item-inner">
                <div className="about-skills-desc-item-name">{languageContent.site.title}</div>
                <div className="about-skills-desc-item-desc">
                    <div className="about-skills-desc-item-desc-left">
                        <div className="about-skills-desc-item-desc-text">{languageContent.site.desc}</div>
                        <div className="about-skills-desc-item-desc-pluse">
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.site.btns.one}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.site.btns.two}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.site.btns.three}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.site.btns.for}</div>
                        </div>
                        <div className="btn-box-about">
                            <button onClick={openForm} className="about-skills-btn">{languageContent.site.btns.free}</button>
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