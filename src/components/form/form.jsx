import img from '../../img/svg/Group 5.svg'

function Form() {
    const formClose = () => document.getElementById('form').style.display = 'none'
    return(
        <div id="form" className="form">
             <div onClick={formClose} className="form-fone"></div>
             <div className="form-block">
                <div className="form-block-inner">
                    <div className="form-block-img">
                        <img src={img} alt="" className="form-block-image" />
                    </div>
                    <div className="form-block-user-name">
                        <div className="form-block-title">Как вас зовут?</div>
                        <input type="text" className="form-block-input" placeholder="Иван"/>
                    </div>
                    <div className="form-block-user-number">
                        <div className="form-block-title">Номер телефона или Telegram</div>
                        <input type='number'className="form-block-input" placeholder="+7 999 999 99 99"/>
                    </div>
                    <div className="form-block-btn">ПРОКОНСУЛЬТИРОВАТЬСЯ</div>
                </div>
             </div>
        </div>
    )
}

export default Form;