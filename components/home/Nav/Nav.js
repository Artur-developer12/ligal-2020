import React, { useEffect, useState } from 'react';
import style from './nav.module.scss'
import Links from 'next/link'
import {Link} from "react-scroll";
import NavBtn from './NavBtn/NavBtn'


const Nav = () => {

    const [fixed, setFixed] = useState()
    const [active, setActive] = useState(false)

    const menu = () =>  setActive(!active)   
    
    useEffect(()=>{
        // отмена скролла 
        active === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto' 
        // при клике на ссылок свораивать меню 
        let btn = document.querySelectorAll(`.${style.header_nav_link}`)
        btn.forEach(item => item.onclick = () =>  setActive(false))



        // фиксированное меню
        let headerHeight = document.querySelector('#main').scrollHeight
        window.onscroll = () =>  headerHeight <= pageYOffset === true ? setFixed(style.fixed):  setFixed('')

    })

    const links = [
        {
            text: 'Главная',
            to: 'main'
        },
        {
            text: 'О форуме',
            to: 'about'
        },
        {
            text: 'Организаторы',
            to: 'oranizanires'
        },
        {
            text: 'Программа',
            to: 'program'
        },
    ]

    return (
        <div className={`${style.header_inner} ${fixed}`}>
            <div className="container">
                <div className={style.header_inner_navigate}>
                    <div className={style.header_logo}>
                        <img className={style.header_logo_img} src="logo.svg" alt="лого"/>
                        <div className={style.header_logo_text}>Лигал-2020</div>
                    </div>
                    
                    {/* объект анимаций */}
                    <nav className={` ${style.header_nav} ${active==true ? style.active: ''} `}>
                        <div className={style.header_nav_block}>
                            {
                                links.map((item,index) => {
                                    return(
                                        <Link 
                                            className={style.header_nav_link} 
                                            to={item.to} 
                                            smooth={true} 
                                            duration={1000}
                                            key={index}
                                            offset={-180}
                                        >
                                            {item.text}
                                        </Link>
                                    )
                                })
                            }
                            
                            <Links  href={'/registration'}>
                                <a  className={`btn ${style.header_nav_btn}`}>Принять участие</a>
                            </Links>
                        </div>
                    </nav>
                    {/* ///// объект анимаций */}

                    <NavBtn menu={menu} active={active}/>
                </div>
            </div>

        </div>
    );
}

export default Nav;
