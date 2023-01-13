import Sites from '../sliderDesc/site'
import Apps from '../sliderDesc/apps'
import Bots from '../sliderDesc/bot'
import Smm from '../sliderDesc/smm'


function ListInfo({components}) {
    console.log(components)
    let content;
    
    if (components === 'site') {
        content = <Sites/>;
    } else if(components === 'app') {
        content = <Apps/>;
    } else if(components === 'bot') {
        content = <Bots/>;
    } else if(components === 'smm') {
        content = <Smm/>;
    }
    return(
        <div className="listInfo">
            {content}
        </div>
    )
}

export default ListInfo; 