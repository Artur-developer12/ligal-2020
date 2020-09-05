import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, MenuItem } from '@material-ui/core';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import Link from 'next/link'

import css from './reg.module.scss';



function reg() {



    const {API_URL} = process.env
    useEffect(()=>{
      document.body.style.overflow = 'auto' 
     })

    const education = [
        {
          value: 'Неоконченное среднее профессиональное образование',
        },
        {
          value: 'Среднее профессиональное образование',
        },
        {
          value: 'Неоконченное высшее образование ',
        },
        {
          value: 'Высшее образование — бакалавриат; специалитет',
        },
        {
          value: 'Высшее образование — магистратура;',
        },
        {
          value: 'Высшее образование — подготовка кадров высшей квалификации (аспирантура)',
        },
      ];

      const region = [
          {
            value: 'Республика Дагестан',
          },
          {
            value: 'Республика Ингушетия',
          },
          {
            value: 'Кабардино – Балкарская Республика',
          },
          {
            value: 'Республика Северная Осетия – Алания',
          },
          {
            value: 'Ставропольский край',
          },
          {
            value: 'Чеченская Республика',
          },
      ]

    
      const onRegistr = async (url,data)=>{
        try {
            const response = await fetch(url, {
              method: 'POST', // или 'PUT'
              body: JSON.stringify(data, null, 2), // данные могут быть 'строкой' или {объектом}!
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const json = await response.json();
            console.log('Успех:',json)
            return true
          } catch (error) {
            console.error('Ошибка:', error);
            return false
          }
      }
      const initialValues = {
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
        personalData: false
      }

      const validate = values => {
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
            errors.patronymic = 'Введите отчество'
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
            errors.number = 'Введите номер'
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
        if(values.personalData === false){
          errors.personalData = 'Нужно ваше согласие'
        }
        return errors;
      }


      const onSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout( async () => {
          await onRegistr(`${API_URL}/registereds`, values)
          await resetForm({})
          await setSubmitting(false);
        }, 500);
      }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
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
                {education.map((option, index) => (
                    <MenuItem style={{whiteSpace: 'normal'}} key={index} value={option.value}>
                    {option.value}
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
                {region.map((option, index) => (
                    <MenuItem style={{whiteSpace: 'normal'}} key={index} value={option.value}>
                      {option.value}
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
          <div className={css.personalData}>
            <Field
              component={CheckboxWithLabel}
              name="personalData"
              type="checkbox"
              Label={{ label: 'Согласен(а) на обработку моих персональных данных' }}
            />
          </div>
          <div className={css.privacy}>
              Нажимая кнопку "регистрация", я подтверждаю, что ознакомился с положениями, указанными в стаье  
          <Link href={'/privacy'}>
              <a>Политика конфиденциальности.</a> 
          </Link>

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
          <Link href={'/'}>
              <a className={css.link}>Назад на главную</a>
          </Link>
        </Form>
        
      )}
    </Formik>
  );
}

export default reg