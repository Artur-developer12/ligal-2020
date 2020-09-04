import React from 'react';
import RegInner from '../components/reg/RegInner'
import Head from 'next/head'

import css from './registration.module.scss';
import { useEffect } from 'react';

const reg = () => {
     
 
 
    return (
        <React.Fragment>
            <Head>
                <title>Регистрация</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={css.container}>
                <div className={css.inner}>
                    <h1 className={css.title}>Регистрация на форум</h1>
                    <RegInner/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default reg;
