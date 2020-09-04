import React from 'react';
import css from './privacy.module.scss'

const privacy = ({privacy}) => {
    return (
<div className={css.container}>
    <h1>Политика в отношении обработки персональных данных</h1> 
    <div dangerouslySetInnerHTML={{__html:privacy.position}}></div>

</div>
    );
}


export async function getServerSideProps() {
    const {API_URL} = process.env
    const privacy = await fetch(`${API_URL}/privacy`)
    const privacyRes = await privacy.json()

    return{
        props:{
            privacy: privacyRes
        }
    }


}
export default privacy;
