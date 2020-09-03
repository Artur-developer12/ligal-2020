import {useState} from 'react';
import css from  './program.module.scss'
import ProgramEvent from './ProgramEvent/ProgramEvent'
import ProgramDay from './ProgramDay/ProgramDay'



const Program = ({prog, org}) => {
    const [chooseDay, setChooseDay] = useState(prog[0])

    const selectDay = (item) =>{
        setChooseDay(item)
    }

    
    return (
        <div className={css.program} id="program">
            <div className="container">
                <div className={css.program_inner}>
                    <div className={`title ${css.program_title}`}>Программа</div>
                    <div className={css.program_day}>
                        <div className={css.program_day_title}>Расписание форума</div>
                        <div className={css.program_day_group}>
                           {prog.map((item,index)=><ProgramDay chooseDay={chooseDay} key={index} item={item} selectDay={selectDay}/>)} 
                        </div>
                    </div>
                    <div  className={css.program_event}>
                        <div className={css.program_event_titles}>
                            <div>Мероприятие</div>
                            <div>Место</div>
                            <div>Время</div>
                            <div>Ведущий</div>
                        </div>
                        <div className={css.program_event_timetable}>
                           {
                                chooseDay.program.map((item,index)=>{
                                    return(
                                        <ProgramEvent item={item} key={index} />
                                    )
                                })
                            } 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Program;
