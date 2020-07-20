import React from 'react';
import css from  './partners.module.scss'
 

const Partners = () => {
    return (
        <div className={css.partners}>
            <div className="container">
                <div className={`title ${css.partners_title}`}>Наши Партнеры</div>
                <div className={css.partners_inner}>
                    <div className={css.partners_item}>
                        <div className={css.partners_item_img}>
                            <img src='partners/Circassian.png' alt="circassian"/>
                        </div>
                    </div>
                    <div className={css.partners_item}>
                        <div className={css.partners_item_img}>
                            <img src='partners/rosmol.png' alt="rosmol"/>
                        </div>
                    </div>
                    <div className={css.partners_item}>
                        <div className={css.partners_item_img}>
                            <img src='partners/resource.svg' alt="resource"/>
                        </div>
                    </div>
                    <div className={css.partners_item}>
                        <div className={css.partners_item_img}>
                            <img src='partners/kbsu.png' alt="kbsu"/>
                        </div>
                    </div>
                    <div className={css.partners_item}>
                        <div className={css.partners_item_img}>
                            <img src='partners/volCentr.png' alt="volCentr"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;
