import React, { useState } from 'react';
import RegInner from '../components/reg/RegInner'
import Head from 'next/head'
import css from './registration.module.scss';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 





const reg = () => {
    const [open, setOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('Регистрация прошла успешно')

    const openModal = async (message) => {
        await setModalMessage(message)
        await setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
 
    return (
        <React.Fragment>
            <Head>
                <title>Регистрация</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={css.container}>
                <div className={css.inner}>
                    <h1 className={css.title}>Регистрация на форум</h1>
                    <RegInner openModal={openModal}/>
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
                        {modalMessage}
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
