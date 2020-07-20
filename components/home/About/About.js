import css from './about.module.scss'
 


const About = () => {
    return (
        <div className={css.about} id="about">
            <div className="container">
                <div className={css.about_inner}>
                    <div className={css.about_headers}>
                        <div className="title">О форуме</div>
                        <div className="subtitle">Повышение уровня правовой культуры молодежи, включая уровень осведомлённости и юридической грамотности </div>
                    </div>
                    <div className={css.about_blocks}>
                        <div className={css.about_item}>
                            <div className={css.about_item_img}>
                                <img src='about/about-icon-1.svg' alt=""/>
                            </div>
                            <div className={css.about_item_title}>Оценка грамотности</div>
                            <div className={css.about_item_subtitle}>Оценить текущий уровень правовой грамотности молодежи</div>
                        </div>

                        <div className={css.about_item}>
                            <div className={css.about_item_img}>
                                <img src='about/about-icon-2.svg' alt=""/>
                            </div>
                            <div className={css.about_item_title}>Развитие грамотности</div>
                            <div className={css.about_item_subtitle}>Повысить уровень правовой культуры молодежи</div>
                        </div>

                        <div className={css.about_item}>
                            <div className={css.about_item_img}>
                                <img src='about/about-icon-3.svg' alt=""/>
                            </div>
                            <div className={css.about_item_title}>Создание проектов</div>
                            <div className={css.about_item_subtitle}>Развитие творческого потенциала через исследовательскую,  и командную деятельность </div>
                        </div>

                        <div className={css.about_item}>
                            <div className={css.about_item_img}>
                                <img src='about/about-icon-4.svg' alt=""/>
                            </div>
                            <div className={css.about_item_title}>Нахождение партнеров</div>
                            <div className={css.about_item_subtitle}>Наладить партнерские отношения с высшими учебными заведениями СКФО</div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default About;
