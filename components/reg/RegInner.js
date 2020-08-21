import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, MenuItem } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import css from './reg.module.scss';

 

function reg() {


    const education = [
        {
          value: 'Неоконченное среднее профессиональное образование',
          label: 'Неоконченное среднее профессиональное образование',
        },
        {
          value: 'Среднее профессиональное образование',
          label: 'Среднее профессиональное образование',
        },
        {
          value: 'Неоконченное высшее образование ',
          label: 'Неоконченное высшее образование ',
        },
        {
          value: 'Высшее образование — бакалавриат; специалитет',
          label: 'Высшее образование — бакалавриат; специалитет',
        },
        {
          value: 'Высшее образование — магистратура;',
          label: 'Высшее образование — магистратура;',
        },
        {
          value: 'Высшее образование — подготовка кадров высшей квалификации (аспирантура);',
          label: 'Высшее образование — подготовка кадров высшей квалификации (аспирантура);',
        },
      ];

      const region = [
          {
            value: 'Республика Дагестан',
            label: 'Республика Дагестан',   
          },
          {
            value: 'Республика Ингушетия',
            label: 'Республика Ингушетия',   
          },
          {
            value: 'Кабардино – Балкарская Республика',
            label: 'Кабардино – Балкарская Республика',   
          },
          {
            value: 'Республика Северная Осетия – Алания',
            label: 'Республика Северная Осетия – Алания',   
          },
          {
            value: 'Ставропольский край',
            label: 'Ставропольский край',   
          },
          {
            value: 'Ставропольский край',
            label: 'Чеченская Республика',   
          },
      ]



  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        patronymic:'',
        age:'',
        education:'',
        region:'',
        email: '',
        number:'',
        passportSeries:'',
        passportNumber:'',
        passportDate:'',
        passportCode:'',
      }}
      validate={values => {
        const errors= {};
        if (!values.email) {
          errors.email = 'Введите email';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Неверный адрес электронной почты';
        }
        if(!values.name){
            errors.name = 'Введите имя'
        }
        if(!values.surname){
            errors.surname = 'Введите фамилию'
        }
        if(!values.patronymic){
            errors.patronymic = 'Введите Отчество'
        }
        if(!values.age){
            errors.age = 'Введите возраст'
        }
        if(!values.education){
            errors.education = 'Выберите образование'
        }
        if(!values.region){
            errors.region = 'Выберите регион'
        }
        if(!values.number){
            errors.number = 'Выберите номер'
        }
        if(!values.passportSeries){
            errors.passportSeries = 'Введите серию паспорта'
        }
        if(!values.passportNumber){
            errors.passportNumber = 'Введите номер паспорта'
        }
        if(!values.passportDate){
            errors.passportDate = 'Введите дату выдачи паспорта'
        }
        if(!values.passportCode){
            errors.passportCode = 'Введите код подразделения'
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
                {region.map(option => (
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
                name="number"
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
                    name="passportSeries"
                    className={css.input}
                />
                <Field
                    component={TextField}
                    type="text"
                    label="Номер"
                    name="passportNumber"
                    className={css.input}
                />
              </div>

              <div className={css.formItem}>
                <Field
                    component={TextField}
                    type="text"
                    label="Дата выдачи"
                    name="passportDate"
                    className={css.input}
                />
                <Field
                    component={TextField}
                    type="text"
                    label="Код подразделения"
                    name="passportCode"
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