import React from 'react';
import RegInner from '../components/reg/RegInner'
import Head from 'next/head'


const reg = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
 
    return (
        <React.Fragment>
            <Head>
                <title>Регистрация</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={style}>
                <RegInner/>
            </div>
        </React.Fragment>
    );
}

export default reg;
