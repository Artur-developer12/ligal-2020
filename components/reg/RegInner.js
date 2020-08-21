import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, MenuItem } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import css from './reg.module.scss';

 

function reg() {


    const education = [
        {
          value: 'none',
          label: 'None',
        },
        {
          value: '0-20',
          label: '0 to 20',
        },
        {
          value: '21-50',
          label: '21 to 50',
        },
        {
          value: '51-100',
          label: '51 to 100',
        },
      ];



  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
      }}
      validate={values => {
        const errors= {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.name){
            errors.name = 'пусто'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formItem}>
            <Field
                component={TextField}
                type="text"
                label="Имя"
                name="name"
                className={css.input}
            />
            <Field
                component={TextField}
                type="text"
                label="Фамилия"
                name="surname"
                className={css.input}
            />
          </div>

          <div className={css.formItem}>
            <Field
                component={TextField}
                type="text"
                label="Отчество"
                name="patronymic"
                className={css.input}
            />
            <Field
                component={TextField}
                type="text"
                label="Возраст"
                name="age"
                className={css.input}
            />
          </div>
          <div className={css.formItem}>
            <Field
                component={TextField}
                type="text"
                name="education"
                label="Образование"
                select
                variant="standard"
                margin="normal"
                className={css.input}
                
                >
                {education.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </Field>

            <Field
                component={TextField}
                type="text"
                name="region"
                label="Регион проживания"
                select
                variant="standard"
                margin="normal"
                className={css.input}
                
                >
                {education.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </Field>
          </div>
          <div className={css.formItem}>
            <Field
                component={TextField}
                type="text"
                label="Номер телефона"
                name="age"
                className={css.input}
            />
            <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                className={css.input}
            />
          </div>
          <div className={css.passportData}>
              <h2 className={css.passportTitle}>Паспортные данные</h2>
              <div className={css.formItem}>
                <Field
                    component={TextField}
                    type="text"
                    label="Серия"
                    name="age"
                    className={css.input}
                />
                <Field
                    component={TextField}
                    type="text"
                    label="Номер"
                    name="age"
                    className={css.input}
                />
              </div>

              <div className={css.formItem}>
                <Field
                    component={TextField}
                    type="text"
                    label="Дата выдачи"
                    name="age"
                    className={css.input}
                />
                <Field
                    component={TextField}
                    type="text"
                    label="Код подразделения"
                    name="age"
                    className={css.input}
                />
              </div>
          </div>   

          
          {isSubmitting && <LinearProgress />}
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
            className={css.btn}
          >
            Регистрация
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default reg