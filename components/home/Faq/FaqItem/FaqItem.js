import {useState} from 'react';
import css from './faqItem.module.scss'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FaqItem = ({faqItem}) => {
    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: { rotate: 0 },
        closed: { rotate: 135 },
      }

      const answer = {
        open: { 
            height: 0,
            opacity: 0
        },
        closed: { 
            height: 'auto',
            opacity: 1,

         },
      }
    
    return (
        <div onClick={()=>setIsOpen(!isOpen)} className={css.faq_item}>
            <div className={css.faq_item_questions}>
                <div className={css.faq_item_questions_text}>{faqItem.question}</div>
               
                    <motion.div
                        animate={isOpen ? "closed" : "open"}
                        variants={variants}
                        transition={{duration: 0.4, type:"spring", stiffness: 140}}
                    >
                        <FontAwesomeIcon className={css.faq_item_questions_btn} icon={['fas', 'plus']}/>
                    </motion.div>
            </div>
                <motion.div 
                    className={css.faq_item_answer}
                    animate={isOpen ? "closed" : "open"}
                    variants={answer}
                    transition={{duration: 0.4, type:"spring", stiffness: 140}}
                >
                    {faqItem.answer}
                </motion.div>
        </div>
    );
}

export default FaqItem;
