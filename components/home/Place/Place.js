import React from 'react'
import css from './place.module.scss'

export default function Place({place}) {
  const {API_URL} = process.env

    return (
        <div className={css.place}>
            <div className="container">
                <div className={css.place_inner}>
                    <div className={css.place_info}>
                        <div className={css.place_subtitle}>Место проведения</div>
                        <div className={css.place_title}>{place.title}</div>
                        <div className={css.place_text}>{place.description}</div>
                    </div>
                    <div className={css.place_img}>
                        <img src={API_URL + place.photo.url} alt="кбгу"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
