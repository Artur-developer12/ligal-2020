import React, { useEffect, useState } from 'react';
import style from './nav.module.scss'
import {Link} from "react-scroll";
import NavBtn from './NavBtn/NavBtn'


const Nav = () => {

    const [fixed, setFixed] = useState()
    const [active, setActive] = useState(false)

    const menu = () =>  setActive(!active)   
    
    useEffect(()=>{
        active === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto' 
        let headerHeight = document.querySelector('#main').scrollHeight
        window.onscroll = () =>  headerHeight <= pageYOffset === true ? setFixed(style.fixed):  setFixed('')

        // ссылки
        let btn = document.querySelectorAll(`.${style.header_nav_link}`)
        btn.forEach(item => item.onclick = () =>  setActive(false))
    })


    return (
        <div className={`${style.header_inner} ${fixed}`}>
            <div className="container">
                <div className={style.header_inner_navigate}>
                    <div className={style.header_logo}>
                        <img className={style.header_logo_img} src="logo.svg" alt="лого"/>
                        <div className={style.header_logo_text}>Лигал-2020</div>
                    </div>

                    <nav className={`${style.header_nav} ${active==true ? style.active: ''}`}>
                        <div className={style.header_nav_block}>
                            <Link 
                                className={style.header_nav_link} 
                                to="main" 
                                smooth={true} 
                                duration={1000}
                            >
                                Главная
                            </Link>
                            <Link 
                                className={style.header_nav_link} 
                                to="about"
                                smooth={true} 
                                duration={1000}

                            >
                                О форуме
                            </Link>
                            <Link 
                                className={style.header_nav_link} 
                                to="oranizanires" 
                                smooth={true} 
                                duration={1000}
                            >
                                Организаторы
                            </Link>
                            <Link 
                                className={style.header_nav_link} 
                                to="program" 
                                smooth={true} 
                                duration={1000}
                            >
                                Программа
                            </Link>
                            <a className={`btn ${style.header_nav_btn}`} href="!#">Принять участие</a>
                        </div>
                    </nav>
                    <NavBtn menu={menu} active={active}/>
                </div>
            </div>

        </div>
    );
}

export default Nav;
