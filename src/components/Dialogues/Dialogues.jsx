import React from "react";
import s from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";
import MessageItem from "./MessageItem/MessageItem";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Textarea } from "../common/Preloader/FormsControls/FormsControls";

const validationSchema = Yup.object({
  newMessageBody: Yup.string()
    .required("Message is required")
    .max(150, "Message cannot exceed 150 characters"),
});

const Dialogues = (props) => {
  let state = props.dialoguesPage;
  let dialoguesElements = state.dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <MessageItem message={m.words} />
  ));

  // Обработчик отправки формы
  const addNewMessage = (values, { resetForm }) => {
    props.SendMessage(values.newMessageBody);
    resetForm(); // Сброс формы после отправки
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>{dialoguesElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <Formik
        initialValues={{ newMessageBody: "" }}
        validationSchema={validationSchema}
        onSubmit={addNewMessage}
      >
        {({ touched, errors }) => (
          <Form>
            <div>
              <Field
                as={Textarea}
                name="newMessageBody"
                placeholder="Enter your message"
              />
              <ErrorMessage name="newMessageBody" component="div" />
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Dialogues;
