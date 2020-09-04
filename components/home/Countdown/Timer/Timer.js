import {useEffect, useState, useRef} from 'react';
import css from './timer.module.scss'

const Timer = ({dateTimer}) => {


    var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];
    function decOfNum(number, titles){
        if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
        return titles[decCache[number]];
    }

    const [tymeDays, setTymeDays] = useState('00')
    const [tymeHours, setTymeHours] = useState('00')
    const [tymeMinutes, setTymeMinutes] = useState('00')
    const [tymeSeconds, setTymeSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdounDate = new Date(dateTimer).getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdounDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 *24))
            const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)))
            const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if( distance < 0){
                //stop
                clearInterval(interval.current)
            }else{
                setTymeDays(days)
                setTymeHours(hours)
                setTymeMinutes(minuts)
                setTymeSeconds(seconds)

            }
        },1000)
    }

    useEffect(()=>{
        startTimer()
        return () =>{
            clearInterval(interval.current)
        }
    })


    return (
        <div className={css.countdown_timer}>
            <div className={css.countdown_timer_item}>
                <div className={css.countdown_timer_number}>{tymeDays}</div>
                <div className={css.countdown_timer_text}>
                    {decOfNum(tymeDays, ['День', 'Дня', 'Дней'])}
                </div>
            </div>

            <div className={css.countdown_timer_dots}>:</div>

            <div className={css.countdown_timer_item}>
                <div className={css.countdown_timer_number}>{tymeHours}</div>
                <div className={css.countdown_timer_text}>
                    {decOfNum(tymeHours, ['Час', 'Часа', 'Часов'])}
                </div>
            </div>

            <div className={css.countdown_timer_dots}>:</div>

            <div className={css.countdown_timer_item}>
                <div className={css.countdown_timer_number}>{tymeMinutes}</div>
                <div className={css.countdown_timer_text}>
                    {decOfNum(tymeMinutes, ['Минута', 'Минуты', 'Минут'])}
                </div>
            </div>

            <div className={css.countdown_timer_dots}>:</div>

            <div className={css.countdown_timer_item}>
                <div className={css.countdown_timer_number}>{tymeSeconds}</div>
                <div className={css.countdown_timer_text}>
                    {decOfNum(tymeSeconds, ['Секунда', 'Секунды', 'Секунд'])}
                </div>
            </div>
        </div>
    );
}

export default Timer;
