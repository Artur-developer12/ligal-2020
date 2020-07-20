import React from 'react';
import css from './faq.module.scss'
import FaqItem from './FaqItem/FaqItem'


const Faq = ({faq}) => {
    return (
        <div className={css.faq}>
            <div className="container">
                <div className={css.faq_inner}>
                    <div className={`title ${css.faq_title}`}>Часто задаваемы вопросы</div>
                    <div className={css.faq_block}>
                        {faq.map((item,index)=> <FaqItem key={index} faqItem={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
