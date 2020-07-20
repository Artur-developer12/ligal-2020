import React from 'react';
import css from './showing.module.scss'
const Showing = () => {

    return (
        <div className={css.showing}>
            <div className={css.showing_item}>
                <div className={css.showing_number}>100+</div>
                <div className={css.showing_text}> участников</div>
            </div>
            <div className={css.showing_item}>
                <div className={css.showing_number}>5</div>
                <div className={css.showing_text}> Дней</div>
            </div>
            <div className={css.showing_item}>
                <div className={css.showing_number}>15+</div>
                <div className={css.showing_text}>  Мероприятий</div>
            </div>
            <div className={css.showing_item}>
                <div className={css.showing_number}>11+</div>
                <div className={css.showing_text}> мероприятий</div>
            </div>
        </div>
    );
}

export default Showing;
