import React from 'react';
import css from  './partners.module.scss'
 

const partners = [
    {
        img: 'partners/Circassian.png',
        alt: 'circassian'
    },
    {
        img: 'partners/rosmol.png',
        alt: 'rosmol'
    },
    {
        img: 'partners/resource.svg',
        alt: 'resource',
    },
    {
        img: 'partners/kbsu.png',
        alt: 'kbsu'
    },
    {
        img: 'partners/volCentr.png',
        alt: 'volCentr'
    },
]

const Partners = () => {
    return (
        <div className={css.partners}>
            <div className="container">
                <div className={`title ${css.partners_title}`}>Наши Партнеры</div>
                <div className={css.partners_inner}>
                    {partners.map((item, index) => {
                        return(
                        <div className={css.partners_item} key={index}>
                            <div className={css.partners_item_img}>
                                <img src={item.img} alt={item.alt}/>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Partners;
