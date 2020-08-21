import React from 'react';
import Link from 'next/link'
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
                            <Link href={'/registration'}>
                                <a className="btn">Зарегистрироваться</a>
                            </Link>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default Countdown;
