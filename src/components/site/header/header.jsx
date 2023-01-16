import { Link } from 'react-router-dom';
import logo from '../../../img/svg/Group 12.svg'

function Header({languageContent}) {
    window.addEventListener('scroll', function() {
        if (window.innerHeight-window.innerHeight/100*30 >= window.scrollY) {
            document.getElementById('header').classList.remove('activ')
        }else{
            document.getElementById('header').classList.add('activ')
        }
    });

    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <div id='header' className="header">
            <div className="conteiner">
                <div className="header-inner">
                    <div className="left-links">
                        <Link to={'/'} className="header-link header-link-home">{languageContent.header.home}</Link>
                        <Link to={'/contact'} className="header-link">{languageContent.header.contact}</Link>
                    </div>
                    <div className="header-link">
                        <img src={logo} alt="" className="header-logo" />
                    </div>
                    <div className="right-links">
                        <a href='/portfolio' className="header-link">{languageContent.header.prtfolio}</a>
                        <button onClick={openForm} className="header-link header-btn">{languageContent.header.konsul}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;