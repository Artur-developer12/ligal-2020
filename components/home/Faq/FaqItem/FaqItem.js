import {useState} from 'react';
import css from './faqItem.module.scss'
import { CSSTransition} from 'react-transition-group'


const FaqItem = ({faqItem}) => {
    const [veiwAnswer, setVeiwAnswer] = useState(false)
     
    
    return (
        <div onClick={()=>setVeiwAnswer(!veiwAnswer)} className={css.faq_item}>
            <div className={css.faq_item_questions}>
                <div className={css.faq_item_questions_text}>{faqItem.question}</div>
                <CSSTransition
                     in={veiwAnswer}
                     classNames='faqBtn'   
                     timeout={600} 
                >
                    <div className={css.faq_item_questions_btn}></div>
                </CSSTransition>
            </div>
                <CSSTransition
                    in={veiwAnswer}
                    appear={true}
                    classNames='animate'   
                    timeout={600} 
                    unmountOnExit={true}
                >
                    <div className={css.faq_item_answer}>{faqItem.answer}</div>
                </CSSTransition>


        </div>
    );
}

export default FaqItem;
