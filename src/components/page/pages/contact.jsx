import beh from '../../../img/svg/Vector (1).svg'
import inst from '../../../img/svg/Vector (2).svg'
import tg from '../../../img/svg/Subtract.svg'
import mail from '../../../img/svg/Subtract (1).svg'

function Contact({languageContent}) {
    console.log(languageContent)
    return(
        <div className="Contact page-pading">
            <div className="Contact-page-title">
                <div className="page-title">{languageContent.main.contact.title}</div>
                <div className="page-desc">{languageContent.main.contact.desc}</div>
                <div className="contact-liks">
                    <a className="contact-link">
                        <img src={beh} alt="" className="contact-links-icon" />
                    </a>
                    <a className="contact-link">
                        <img src={inst} alt="" className="contact-links-icon" />
                    </a>
                    <a className="contact-link">
                        <img src={tg} alt="" className="contact-links-icon" />
                    </a>
                    <a className="contact-link">
                        <img src={mail} alt="" className="contact-links-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;