import React from 'react';
import css from './Participate.module.scss'


const Participate = () => {
    return (
        <div className={css.Participate}>
            <div className="container">
                <div className={css.Participate_inner}>
                    <h2 className={"title " + css.Participate_title }>Кто может участвовать?</h2>
                    <div className={css.Participate_block}>
                        <div className={css.Participate_item}>
                            <div className={css.Participate_item_title}>Участник форума - это</div>
                            <ul>
                                <li>студенты в возрасте от 18 до 26 лет на момент проведения форума</li>
                                <li>граждане Российской Федерации и граждане иностранных государств</li>
                            </ul>
                        </div>
                        <div className={css.Participate_item}>
                            <div className={css.Participate_item_title}>Как принять участие в форуме?</div>
                            <ul>
                                <li>Пройти регистрацию на нашем сайте</li>
                                <li>Дождаться оценки экспертов</li>
                                <li>Прийти на место сбора</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Participate;
