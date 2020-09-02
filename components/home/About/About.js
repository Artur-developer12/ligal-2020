import css from './about.module.scss'
 


const About = () => {


    const about = [
        
        {
            title: 'Оценка грамотности',
            text: 'Оценить текущий уровень правовой грамотности молодежи',
            img: 'about/about-icon-1.svg'
        },
        {
            title: 'Развитие грамотности',
            text: 'Повысить уровень правовой культуры молодежи',
            img: 'about/about-icon-2.svg'

        },
        {
            title: 'Создание проектов',
            text: 'Развитие творческого потенциала через исследовательскую  и командную деятельность ',
            img: 'about/about-icon-3.svg'

        },
        {
            title: 'Нахождение партнеров',
            text: 'Наладить партнерские отношения с высшими учебными заведениями СКФО',
            img: 'about/about-icon-4.svg'

        },
       
    ]
    return (
        <div className={css.about} id="about">
            <div className="container">
                <div className={css.about_inner}>
                    <div className={css.about_headers}>
                        <div className="title">О форуме</div>
                        <div className="subtitle">Повышение уровня правовой культуры молодежи, включая уровень осведомлённости и юридической грамотности </div>
                    </div>
                    <div className={css.about_blocks}>
                        {
                            about.map((item, index) => {
                                return(
                                    <div className={css.about_item} key={index}>
                                        <div className={css.about_item_img}>
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className={css.about_item_title}>{item.title}</div>
                                        <div className={css.about_item_subtitle}>{item.text}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default About;
