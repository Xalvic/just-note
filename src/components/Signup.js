import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "../firebase";

const Signup = ({ history }) => {
  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, name, username } = event.target.elements;
      // const user = firebase.auth().currentUser;
      const db = firebase.firestore();
      async function register() {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(() => {
            return firebase.auth().currentUser.updateProfile({
              displayName: name.value,
            });
          });
      }
      async function add() {
        return db.collection("users").doc(firebase.auth().currentUser.uid).set({
          username: username.value,
        });
      }
      try {
        await register();
        await add();
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className='Container'>
      <div className='Signup'>
        <h1>SignUp</h1>
        <form className='Form' onSubmit={handleSignup}>
          <div className='form-fields'>
            <input name='name' type='text' placeholder='type your full name' />
            <input
              name='username'
              type='text'
              placeholder='account username '
            />
            <input name='email' type='email' placeholder='type your email' />
            <input
              name='password'
              type='password'
              placeholder='type your password'
            />
          </div>
          <button type='submit'>
            Sign Up <i className='fa fa-long-arrow-alt-right'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Signup);
