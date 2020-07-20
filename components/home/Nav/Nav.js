import React, { useEffect, useState } from 'react';
import style from './nav.module.scss'
import {Link} from "react-scroll";


const Nav = () => {

    const [fixed, setFixed] = useState()
    useEffect(()=>{
        let headerHeight = document.querySelector('#main').scrollHeight
        window.onscroll = () =>{
            if(headerHeight <= pageYOffset){
                setFixed(style.fixed)
            }else{
                setFixed('')
            }
        }
    })


    return (
        <div className={`${style.header_inner} ${fixed}`}>
            <div className="container">
                <div className={style.header_inner_navigate}>
                    <div className={style.header_logo}>
                        <img className={style.header_logo_img} src="logo.svg" alt="лого"/>
                        <div className={style.header_logo_text}>Лигал-2020</div>
                    </div>

                    <nav className={style.header_nav}>
                        <Link 
                            className={style.header_nav_link} 
                            to="main" 
                            smooth={true} 
                            duration={1000}
                        >Главная
                        </Link>
                        <Link 
                            className={style.header_nav_link} 
                            to="about"
                            smooth={true} 
                            duration={1000}

                        >О форуме</Link>
                        <Link 
                            className={style.header_nav_link} 
                            to="oranizanires" 
                            smooth={true} 
                            duration={1000}
                        >Организаторы</Link>
                        <Link 
                            className={style.header_nav_link} 
                            to="program" 
                            smooth={true} 
                            duration={1000}
                        >Программа</Link>
                    
                        
                        <a className="btn" href="!#">Принять участие</a>
                    </nav>
                </div>
            </div>

        </div>
    );
}

export default Nav;
