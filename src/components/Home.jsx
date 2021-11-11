import React, {useState, useEffect} from 'react'
import {NotesList} from './NotesList'
import {Search } from './Search'
import {nanoid} from 'nanoid'
import {Header} from './Header'
import db from '../firebase/firebase_config' 
import {collection, getDocs, addDoc} from '../firebase/firebase_config'

function Home({userEmail}) {
    const [notes, setNotes] = useState([])
    const [darkMode, setDarkMode] = useState(false);
    const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    const notesData = async () =>{
      const result = await getDocs(collection(db, 'notas'))
      setNotes(result.docs.map((note) => ({id: note.id, data: note.data()})))
    }
    notesData()
  }, [notes])

  console.log(userEmail);
  


  const handleDeleteNote =(id ) =>{
    const deleteNote = (notes.filter((note) => (note.id === id?  note.id : null)))
    // const data = doc(db, 'notas')
    // const notesData = async () =>{
    //   await updateDoc(data, {
    //     [id]: deleteField()
    //   })
    // }
    // notesData();
    console.log(deleteNote);
  }

 
//   async function handleAddNote(noteText){
//         try {
//                 const response = await addDoc(collection(db, "notas"),{
//                     text: noteText,
//                     date: new Date()
//                 });
//                 console.log('Nota escrita con id: ', response.id);
            
//         } catch (error) {
//             console.log(error);
//         }
//     }
  


  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }
    return (
        <div className={`${darkMode && 'dark-mode'}`} >
      <div className='container' >
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} /> 
        <NotesList notes={notes} 
        handleDeleteNote={handleDeleteNote}
         />
        {/* <NotesList notes={notes.filter((note) =>(
          note.text.toLowerCase().includes(searchText)
        ))} 
        handleAddNote={addNote} 
        handleDeleteNote={handleDeleteNote} /> */}
      </div>
    </div>
    )
}

export default Home
