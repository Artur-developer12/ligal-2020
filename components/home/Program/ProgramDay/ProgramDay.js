import React from 'react';
import css from './ProgramDay.module.scss'

const ProgramDay = ({item, selectDay, chooseDay}) => {
    let  active



    chooseDay && chooseDay.id===item.id ? active = css.active : null
    
    return (
        <React.Fragment>
            <div onClick={()=>selectDay(item)} className={`${css.program_day_btn} ${active}`}>{item.day}</div>
        </React.Fragment>
    );
}

export default ProgramDay;
