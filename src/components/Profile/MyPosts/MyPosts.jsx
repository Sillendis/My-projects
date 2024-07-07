import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Textarea } from "../../common/Preloader/FormsControls/FormsControls";

// Определяем схему валидации для Formik
const validationSchema = Yup.object({
  newPostText: Yup.string()
    .required("Post text is required")
    .max(10, "Post text cannot exceed 10 characters"),
});

const MyPosts = (props) => {
  // Отображаем посты
  const postsElements = props.posts.map((p, index) => (
    <Post key={index} message={p.words} likesCount={p.likesCount} />
  ));

  // Обработчик отправки формы
  const addNewPost = (values, { resetForm }) => {
    props.addPost(values.newPostText);
    resetForm(); // Сбрасываем форму после отправки
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <Formik
          initialValues={{ newPostText: "" }}
          validationSchema={validationSchema}
          onSubmit={addNewPost}
        >
          <Form>
            <div>
              <Field
                name="newPostText"
                placeholder="Enter your text, bitch"
                component={Textarea}
              />
            </div>
            <button type="submit">Add post</button>
            <button type="button" onClick={() => props.removePost()}>
              Remove
            </button>
          </Form>
        </Formik>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
