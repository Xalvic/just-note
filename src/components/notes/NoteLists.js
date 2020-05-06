import React, { useState, useEffect, useContext } from "react";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";

function useLists() {
  const [lists, setLists] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    firebase
      .firestore()
      .collection(`users/${currentUser.uid}/notes`)
      .onSnapshot((snapshot) => {
        const lists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLists(lists);
      });
  }, []);
  return lists;
}
const NoteLists = () => {
  const lists = useLists();
  const { currentUser } = useContext(AuthContext);
  const handleOnDelete = (id) => {
    firebase
      .firestore()
      .collection(`users/${currentUser.uid}/notes`)
      .doc(id)
      .delete();
  };
  return (
    <div className='NoteLists'>
      <h3>Your Notes</h3>
      {lists.map((list) => {
        return (
          <div className='list-item' key={list.id}>
            <div className='list-contain'>
              <div className='list-title'>{list.title}</div>
              <div className='list-content'>{list.body}</div>
            </div>
            <a onClick={() => handleOnDelete(list.id)}>
              <i className='fa fa-trash-alt'></i>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default NoteLists;
