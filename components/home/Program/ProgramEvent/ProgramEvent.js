import React from 'react';
import css from './programEvent.module.scss'
import Leading from './Leading/leading'


const ProgramEvent = ({item}) => {
 
    const time = item.end ? `${item.start.slice(0,5)}-${item.end.slice(0,5)}`: item.start.slice(0,5)
    const place = item.place ? item.place: <span>-</span>

    return (
        <div className={css.program_event_item}>
            <div className={css.program_event_name}>{item.name}</div>
            <div className={css.program_event_place}>{place}</div>
            <div className={css.program_event_time}>{time}</div>
            <div className={css.program_event_leading}>
            {item.organizer ? <Leading leading={item.organizer}/>: <span>-</span>}
            </div>
        </div>
    );
}

export default ProgramEvent;
