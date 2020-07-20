import React from 'react';
import css from './leading.module.scss'


const leading = ({leading}) => {
    const {API_URL} = process.env
    const img =  leading.photo !== null ? API_URL + leading.photo.url: 'noPhoto.jpg'
    return (
        <React.Fragment>
            <div className={css.program_event_leading_img} >
                <img src={img} alt="logo"/>
            </div>
            <div className={css.program_event_leading_name}>
                <span>{leading.name}</span>
                <span>{leading.surname}</span>
            </div>
        </React.Fragment>
    );
}

export default leading;
