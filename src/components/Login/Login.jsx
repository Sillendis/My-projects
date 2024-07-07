import React, { useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm"; // Импортируем форму

const Login = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isAuth) {
      navigate("/profile", { replace: true });
    }
  }, [props.isAuth, navigate]);
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmit} error={props.error} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  error: state.auth.error,
});

export default connect(mapStateToProps, { login })(Login);
