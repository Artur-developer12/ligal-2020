import React, { useState } from 'react';
import RegInner from '../components/reg/RegInner'
import Head from 'next/head'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, makeStyles } from '@material-ui/core';
import css from './registration.module.scss';

 





const reg = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false);
 
 
    return (
        <React.Fragment>
            <Head>
                <title>Регистрация</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={css.container}>
                <div className={css.inner}>
                    <h1 className={css.title}>Регистрация на форум</h1>
                    <RegInner OpenDialog={setOpen}/>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Регистрация прошла успешно
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        ок
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default reg;
