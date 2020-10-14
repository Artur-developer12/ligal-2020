import { useEffect } from 'react';
import style from './header.module.scss'
import Links from 'next/link'
import {Link} from "react-scroll";

const header = ({headData}) => {
    const {API_URL} = process.env
   
    const headerBg = { backgroundImage: `url(${API_URL + headData.bg.url})` }

    useEffect(()=>{
        
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        const styles = getComputedStyle(document.documentElement)
        console.log('css var', styles.getPropertyValue('--vh') )

        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            console.log('resize css var', styles.getPropertyValue('--vh') )

            
        });
    })

    return (
        <header className={style.header} id="main">
             <div className={'container ' + style.header_containerBg}> 
                 <div className={style.header_intro}>
                    <div className={style.header_intro_date}><i className="far fa-calendar-alt"></i> {headData.subtitle}</div>
                    <div className={style.header_intro_title}>{headData.title}<br/>{headData.name}</div>
                    <Links href={'/'}>
                        <a className="btn">Регистрация закрыта</a>
                    </Links>
                </div>
             </div>
        </header>
    );
}

export default header;
