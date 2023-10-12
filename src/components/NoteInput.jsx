import React from 'react';
import { useState } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {addNote} from '../Slice/NotesSlice';
import { nanoid } from '@reduxjs/toolkit';

function NoteInput() {
    const [text, setText] = useState('');
    const [bgcolor, setBgColor] = useState("red");

    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    const handleNote = () => {
      if (text === "") {
        alert("Please enter some text");
        return;
      }
      const notes = items.filter((item) => item.note === text)
      if(notes.length) {
        alert('you already added this Note');
        return;
      }
      dispatch(addNote({id : nanoid(10), note : text, bgcolor}));
      setText('');
    }
  return (
    <div className='container mt-3'>
      <textarea  className='text-area'
       placeholder='Write a note ...' 
       rows={5} cols={50}
       value={text}
       onChange={(e) => setText(e.target.value)}
       />
       <div>
        <button onClick={handleNote}>ADD</button>
       </div>
    </div>
  )
};

export default NoteInput
