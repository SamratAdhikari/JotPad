import React, { useEffect, useState } from 'react'
import api from '../api'
import '../styles/Home.css'
import Note from '../components/Note';
import Logout from '../components/Logout'

function Home() {

    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        api.get('/api/notes/').
        then((res) => res.data).
        then((data) => {
            setNotes(data);
        })
        .catch((error) => alert(error))
    }


    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`).
        then((res) => {
            if (res.status === 204){
                alert("Note deleted!")
                null
            }
            else {
                alert('Failed to delete the note')
            }
            getNotes()

        }).catch((error) => alert(error))
    }

    const createNote = (e) => {
        e.preventDefault()
        api.post('api/notes/', {content, title}).
        then((res) => {
            if (res.status === 201){
                alert('Note created!')
                null
            }
            else {
                alert('Failed to create the note')
            }
            getNotes()
            
        }).catch((error) => alert(error))
    }

  return (
    <div>
        <Logout />
        
        <h2 className='create-note-title'>
            Create a Note
        </h2>

        <form onSubmit={createNote}>
            <label htmlFor='title'>Title</label>
            <br></br>
            <input 
            type='text' 
            id='title' 
            name='title' 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor='content'>Content</label>
            <br></br>
            <textarea 
            id='content' 
            name='content' 
            required 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />

            <br></br>
            <input 
            type='submit' 
            value='Submit'
            />
        </form>

        <div>
            {/* <h2>Notes</h2> */}
            {notes.map((note) => (
                <Note note={note} onDelete={deleteNote} key={note.id}/>
            ))}
        </div>
    </div>
  )
}

export default Home
