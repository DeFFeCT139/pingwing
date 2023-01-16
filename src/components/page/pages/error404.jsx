import { useEffect } from "react";

function ErrorPage() {
    useEffect(()=>{
        document.getElementById('content').classList.add('error-page')
    })
    return(
        <div className="ErrorPage404">
          <div className="conteiner">
            <div className="ErrorPage404-content">
                <div className="ErrorPage404-content-title">Страница не найдена.</div>
                <div className="ErrorPage404-content-desc">Кажется, что-то пошло не так! Страница, которую вы запрашиваете не существует. Возможно, она устарела, была удалена, или был введен неверный адрес в адресной строке.</div>
                <a href='/' className="ErrorPage404-content-btn">НА ГЛАВНУЮ</a>
            </div>
          </div>
        </div>
    )
}

export default ErrorPage;