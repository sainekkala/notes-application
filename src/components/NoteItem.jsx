import React from 'react'

function NoteItem({focus, items}) {
  return (
    <div className='container'>
      {items.length > 0 
       ? items.map((item) => (
        <div className='lead' key={item.id}>
            {item.note}
        </div>
       )) : focus && <div> Note not Found </div>
    }
    </div>
  )
}

export default NoteItem
