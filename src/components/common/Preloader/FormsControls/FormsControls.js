import React from "react";
import styles from "./FormsControls.module.css";

// Обертка для поля формы с отображением ошибок
const FormControl = ({ input, meta, children, ...props }) => {
  const hasError = meta?.touched && meta?.error; // Проверяем, что meta и meta.touched не undefined
  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
      {children}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

// Компонент для textarea
export const Textarea = ({ field, form, ...props }) => {
  return <textarea {...props.input} {...props} {...field} />;
};

// Компонент для input
export const Input = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <input {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

export default FormControl;
