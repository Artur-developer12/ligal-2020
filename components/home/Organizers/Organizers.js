import { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import css from './organizers.module.scss'
import OrgItem from './OrgItem/OrgItem.js'
 


const Organizers = ({org}) => {
    
    return (
        <div className={css.organizers} id="oranizanires">
            <div className="container">
                <div className={css.organizers_inner}>
                    <h2 className={"title " +  css.organizers_title}>Организаторы</h2>
                    <div className={css.organizers_block}>
                         {org.map((item, index) => <OrgItem key={index} OrgItem={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Organizers;
