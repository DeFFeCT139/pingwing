import { useEffect } from "react";

function Portfolio() {
    useEffect(()=>{
        document.getElementById('content').classList.add('error-page')
    })
    return(
        <div className="tehwork">
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