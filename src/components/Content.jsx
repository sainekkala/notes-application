import React from 'react';
import {useSelector} from "react-redux";
import Noteitem from "./NoteItem";

function Content() {
  const items = useSelector((state) => state.items);
  let showtext = items;
  const searchText = useSelector((state) => state.searchText);
  console.log(showtext)
  if (searchText && searchText !== "") {
    showtext =showtext.filter((text) => 
    text.note.toLowerCase().includes(searchText.toLowerCase())
    );
  } else {
    showtext = items;
  }
  return (
    <div>
      <Noteitem focus= {items.length > 0} items={showtext}/>
    </div>
  )
}

export default Content
