import { useEffect } from "react";

function Portfolio() {
    useEffect(()=>{
        document.getElementById('root').style.height = 'auto'
        document.getElementById('root').style.overflow = 'initial'
      })
    return(
        <div className="tehwork">
            <div id='about-text-none' className="about-text-none none">About</div>
            <div className="tehwork-content-inner">
                <div className="tehwork-content-title">Технические работы</div>
                <div className="tehwork-content-bottom">
                    <div className="tehwork-content-bottom-desc">Возникли небольшие технические шоколадки. Мы уже работаем над их устранением.</div>
                    <a href='/' className="ErrorPage404-content-btn">НА ГЛАВНУЮ</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;