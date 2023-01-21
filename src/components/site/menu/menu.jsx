import menu from '../../../img/svg/Vector (5).svg'
import logo from '../../../img/svg/Group 12.svg'
import { Link } from 'react-router-dom';
import pin from '../../../img/svg/peng3.svg'
import { useEffect } from 'react';

function Menu({languageContent}) {
    const openForm = () => document.getElementById('form').style.display = 'block'
    const closeMenu = () => document.getElementById('menu').classList.remove('activ-menu')
    return(
        <div id='menu' className="menu">
            <div className="menu-top-header">
                <div className="menu-top-header-inner">
                    <div className="">
                        <img src={logo} alt="" className="header-logo-libk" />
                    </div>
                </div>
                <div className="menu-btn-header">
                    <img onClick={closeMenu} src={menu} alt="" className="menu-btn-header-img" />
                </div>
            </div>
            <div className="menu-bottom-header">
                <div className='header-link-menuuu'>
                    <Link to={'/'} className="header-link-menu header-link-home">{languageContent.header.home}</Link>
                </div>
                <div className='header-link-menuuu'>
                    <Link to={'/contact'} className="header-link-menu">{languageContent.header.contact}</Link>
                </div>
                <div className='header-link-menuuu'>
                    <a href='/portfolio' className="header-link-menu">{languageContent.header.prtfolio}</a> 
                </div>
                <div className='header-link-menuuu'>
                    <button onClick={openForm} className="header-link-menu header-btn">{languageContent.header.konsul}</button>
                </div>
                <img src={pin} alt="" className="pingvin" />
            </div>
        </div>
    )
}

export default Menu;