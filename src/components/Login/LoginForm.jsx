import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./../common/Preloader/FormsControls/FormsControls.module.css";

// Валидация формы с помощью Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address") // Сообщение об ошибке для неверного формата email
    .required("Email is required"), // Сообщение об ошибке для пустого email
  password: Yup.string().required("Password is required"), // Сообщение об ошибке для пустого пароля
  rememberMe: Yup.boolean(), // Для checkbox не требуется валидация
});

const LoginForm = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <Field
              placeholder="Email"
              name="email"
              type="email"
              // component={Input} // Убедитесь, что Input работает правильно с Formik
            />
            <ErrorMessage
              name="email"
              component="div"
              className={style.formSummaryError}
            />
          </div>
          <div>
            <Field
              placeholder="Password"
              name="password"
              type="password"
              // component={Input} // Убедитесь, что Input работает правильно с Formik
            />
            <ErrorMessage
              name="password"
              component="div"
              className={style.formSummaryError}
            />
          </div>
          <div>
            <Field
              type="checkbox"
              name="rememberMe"
              // component={Input} // Убедитесь, что Input корректно обрабатывает чекбоксы
            />
            Remember me
          </div>
          {error && <div className={style.formSummaryError}>{error}</div>}
          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
