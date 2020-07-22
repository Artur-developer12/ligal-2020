import React from 'react';
import css from './navBtn.module.scss'
const NavBtn = ({menu, active}) => {

    return (
        <div onClick={menu} className={`${css['wrapper-menu']} ${active && css.open}`}>
            <div className={`${css['line-menu']} ${css.half} ${css.start}`}></div>
            <div className={css['line-menu']}></div>
            <div className={`${css['line-menu']} ${css.half} ${css.end}`}></div>
        </div>
    );
}

export default NavBtn;
