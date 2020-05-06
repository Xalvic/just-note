import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase";
import { AuthContext } from "../Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <div className='Container'>
      <div className='Login'>
        <h1>Login</h1>
        <form className='Form' onSubmit={handleLogin}>
          <div className='form-fields'>
            <input name='email' type='email' placeholder='type your email' />
            <input
              name='password'
              type='password'
              placeholder='type your password'
            />
          </div>
          <button type='submit'>
            {" "}
            Log in <i className='fa fa-long-arrow-alt-right'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
