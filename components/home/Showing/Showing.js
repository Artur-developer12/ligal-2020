import React from 'react';
import css from './showing.module.scss'
const Showing = () => {


    const showing = [
        {
            number: '100+',
            text: 'участников'
        },
        {
            number: '5',
            text: 'дней'
        },
        {
            number: '15+',
            text: 'мероприятий'
        },
        {
            number: '30+',
            text: 'крутых призов'
        },
    ]

    return (
        <div className={css.showing}>
            {
                showing.map((item, index) => {
                    return(
                        <div className={css.showing_item} key={index}>
                            <div className={css.showing_number}>{item.number}</div>
                            <div className={css.showing_text}>{item.text}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Showing;
