import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase";
import AddNote from "./notes/AddNote";
import NoteLists from "./notes/NoteLists";
// import MainTodo from "./todos/todo";
import { AuthContext } from "../Auth";

const Home = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    async function fetchData() {
      const db = firebase.firestore();
      return db
        .collection("users")
        .doc(currentUser.uid)
        .get()
        .then(function (doc) {
          const itemsData = [];
          itemsData.push({ ...doc.data(), id: doc.id });
          setItems(itemsData);
        });
    }
    fetchData();
  }, []);
  // const onCreate = () => {
  //   const db = firebase.firestore();
  //   db.collection("users_msg/kok").add({ info: newItemName });
  // };
  // const onCreate = () => {
  //   const db = firebase.firestore();
  //   db.collection("users_msg")
  //     .doc(`${currentUser.uid}`)
  //     .set({ info: newItemName });
  // };

  return (
    <div className='HomeView'>
      <div className='home-contain'>
        <a className='button' href='#popup1'>
          Account Details
        </a>
        <div id='popup1' className='overlay'>
          <div className='popup'>
            <h1>Hello you logged in as {currentUser.displayName}</h1>
            <a class='close' href='#'>
              &times;
            </a>
            <h2>with {currentUser.email}</h2>
            {items.map((item) => (
              <h3 key={item.id}>USERNAME : {item.username}</h3>
            ))}
          </div>
        </div>
      </div>
      <div className='note-contain'>
        <AddNote />
        <NoteLists />
      </div>
      {/* <h2>Todo list</h2>
      <MainTodo /> */}
    </div>
  );
};

export default Home;
