import React,{useContext} from 'react'
import valueContext from "../context/notes/noteContext"

const Noteitems = (props) => {
  const context = useContext(valueContext);
  const {deleteNote} = context;
  const { note,updateNote } = props;
  return (
    <div className='col-md-4' >
      <div className="card my-3">
        <div className="card-body ">
          <div className="d-flex align-items-center">
            <h5 className="card-title" >{note.title}</h5>
            <i className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(note._id); props.showAlert("Note deleted successfully","success")} }></i>
            <i className="fa-regular fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Noteitems;
