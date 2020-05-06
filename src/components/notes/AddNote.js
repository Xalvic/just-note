import React, { useState, useContext } from "react";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { currentUser } = useContext(AuthContext);
  const db = firebase.firestore();
  const addNote = () => {
    db.collection(`users/${currentUser.uid}/notes`).add({
      title,
      body,
    });
    setTitle("");
    setBody("");
  };
  return (
    <div className='AddNotes'>
      <h2>Take a note</h2>
      <input
        className='note-title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />{" "}
      <br />
      <textarea
        className='note-content'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Your note ...'
      />
      <button className='Button' onClick={addNote}>
        Add <i class='fa fa-plus'></i>
      </button>
    </div>
  );
};
export default AddNote;
