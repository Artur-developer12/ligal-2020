import React from 'react';
import style from './header.module.scss'
import Links from 'next/link'
import {Link} from "react-scroll";

const header = ({headData}) => {
    const {API_URL} = process.env
   
    const headerBg = {
        backgroundImage: `url(${API_URL + headData.bg.url})`
    }

    return (
        <header style={headerBg} className={style.header} id="main">
             <div className={'container ' + style.header_containerBg}> 
                 <div className={style.header_intro}>
                    <div className={style.header_intro_date}><i className="far fa-calendar-alt"></i> {headData.subtitle}</div>
                    <div className={style.header_intro_title}>{headData.title}<br/>{headData.name}</div>
                    <Links href={'/registration'}>
                        <a className="btn">Регистрация</a>
                    </Links>
                </div>
                <Link
                    className={style.header_arrow}
                    to="about"
                    smooth={true} 
                    duration={1000}
                >
                    <div className={style.header_arrow_line}></div>
                </Link>
                
             </div>
        </header>
    );
}

export default header;
