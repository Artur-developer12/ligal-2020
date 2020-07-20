import React from 'react';
import style from './header.module.scss'
import {Link} from "react-scroll";

const header = ({headData}) => {
   

    return (
        <div className={style.header} id="main">
             <div className={'container ' + style.header_containerBg}> 
                 <div className={style.header_intro}>
                    <div className={style.header_intro_date}><i className="far fa-calendar-alt"></i> 1-5 декабря</div>
                    <div className={style.header_intro_title}>Межрегиональный юридический форум <br/> «ЛИГАЛ – 2020»</div>
                    <div className="btn">Регистрация</div>
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
        </div>
    );
}

export default header;
