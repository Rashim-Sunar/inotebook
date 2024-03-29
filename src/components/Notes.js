import React, { useContext, useEffect, useRef,useState } from 'react'
import contextValue from "../context/notes/noteContext"
import Noteitems from "./Noteitems"
import AddNote from "./AddNote"

export default function Notes(props) {
    const context = useContext(contextValue);
    const { notes, getNote, editNote} = context;
    const [note, SetNote] = useState({id:"",etitle: "", edescription: "", etag: "default" })
    const reference = useRef(null);
    const refClose = useRef(null);
    useEffect(() => {
        getNote();
    }, []);

    const updateNote = (currentNote) => {
        reference.current.click();
        SetNote({id:currentNote._id ,etitle:currentNote.title , edescription:currentNote.description , etag : currentNote.tag});

    }

    const handleClick = (e) => {
        console.log("Updating the note",note)
        editNote(note.id,note.etitle ,note.edescription,note.etag);
        refClose.current.click();
        props.showAlert("Note updated successfully","success");
    }

    const onChange = (e) => {
        SetNote({ ...note, [e.target.name]: [e.target.value]});
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />

            <button type="button" ref={reference} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Note
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your notes</h2>
                    {notes.length===0 && <div className="container">No notes to display </div>}
                    {notes.map((note) => {
                        return <Noteitems key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
                    })}
            </div>
        </>
    )
}
