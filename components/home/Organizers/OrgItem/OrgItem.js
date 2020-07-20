import React from 'react';
import css from './orgItem.module.scss'
import  '../../../../fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OrgItem = ({OrgItem}) => {
    const {API_URL} = process.env

    let bg  =   OrgItem.photo === null ? {backgroundImage: `url(noPhoto.jpg)`}: {backgroundImage: `url(${API_URL + OrgItem.photo.url})`} 
    return (
        <div>
            <div className={css.organizers_item} style={bg}>
                <div className={css.organizers_item_info}>
                    <div className={css.organizers_item_info_social}>
                        {OrgItem.instagram && <a href={OrgItem.instagram} target="_blank" ><FontAwesomeIcon  icon= {['fab', 'instagram']}/></a>}
                        {OrgItem.vkontact && <a href={OrgItem.vkontact} target="_blank"><FontAwesomeIcon   icon= {['fab', 'vk']} /></a>}
                    </div>
                    <div className={css.organizers_item_info_name}>
                        <span>{OrgItem.surname}</span>
                        <span>{OrgItem.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrgItem;
