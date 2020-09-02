import React from 'react';
import css from './ProgramDay.module.scss'
import { motion } from "framer-motion";

const ProgramDay = ({item, selectDay, chooseDay}) => {
    const selectBtn = {
        closed: { 
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 0.49)',
            scale: 1

         },
        open: { 
            backgroundColor: '#4B528E',
            color: 'rgba(255, 255, 255, 1)',
            scale: 1.1

        },
        
      }


    const activeBtn = chooseDay.id===item.id ? true : false
    
    return (
        <React.Fragment>
            <motion.div 
                onClick={()=>selectDay(item)} 
                className={`${css.program_day_btn}`}
                variants={selectBtn}
                animate={activeBtn ? 'open': 'closed'}
                transition={{duration: 0.1}}
            >
                {item.day}
            </motion.div>
        </React.Fragment>
    );
}

export default ProgramDay;
