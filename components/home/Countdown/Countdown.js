import React from 'react';
import css  from './countdown.module.scss'
import Timer from './Timer/Timer'

const Countdown = ({countdown}) => {
    return (
        <div className={css.countdown}>
            <div className="container">
                <div className={css.countdown_inner}>
                    <div className={css.countdown_block}>
                        <div className={css.countdown_block_info}>
                            <div className={css.countdown_title}>{countdown.title}</div>
                            <Timer dateTimer={countdown.date}/>
                        </div>
                        <div className={css.countdown_block_link}>
                            <a className="btn" href={countdown.link}>Зарегистрироваться</a>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default Countdown;
