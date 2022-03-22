import React, {useState, useEffect} from 'react'
import {NotesList} from './NotesList'
import {Search } from './Search'
import {Header} from './Header'
import db from '../firebase/firebase_config' 
import {collection, getDocs, addDoc, doc, setDoc, deleteDoc} from '../firebase/firebase_config'


/**
 * 
 * @param {variable} param0 user email
 * @returns 
 */
function Home({userEmail}) {
    const [notes, setNotes] = useState(null)
    const [darkMode, setDarkMode] = useState(false);
    const [searchText, setSearchText] = useState('');


    /**
     * 
     * @param {variable} userId User Id 
     * @returns array of notes from the database
     */
  async function searchNotesFromDb(userId){
    const documents = await getDocs(collection(db, `notesUsers/${userId}/notes`))
    if(documents.docs.length > 0){
      return documents
    }else{
      await setDoc(doc(collection(db, `notesUsers/${userId}/notes`)),
            {text: "example note",
            date: new Date()} );
      const newDocuments = await getDocs(collection(db, `notesUsers/${userId}/notes`));
      return newDocuments
    }
  }


  /**
   * Load the notes from the database
   */
  useEffect(()=>{
    async function searchNotes(){
      const result = await searchNotesFromDb(userEmail);
      setNotes(result.docs)
    }
    searchNotes();
  }, [])

  

/**
 * 
 * @param {variable} noteId the Id of the note to delete
 */
  async function handleDeleteNote(noteId){
    const deleteNote = (notes.filter((note) => note.id !== noteId ));
    await deleteDoc(doc(collection(db, `notesUsers/${userEmail}/notes`),`${noteId}`) );
    setNotes(deleteNote)
  }

  /**
   * 
   * @param {text} text value of the note to add 
   */
  async function handleAddNote(text){
    try {
            await addDoc(collection(db, `notesUsers/${userEmail}/notes`),{
                text: text,
                date: new Date()
            });
            const result = await searchNotesFromDb(userEmail);
            setNotes(result.docs)  
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div className={`${darkMode && 'dark-mode'}`} >
      <div className='container' >
        <Header darkMode={darkMode} handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} /> 
        { notes?  <NotesList 
        id={userEmail} 
        notes={notes.filter((note) => note.data().text.toLowerCase().includes(searchText))} 
        handleDeleteNote={handleDeleteNote}
        handleAddNote={handleAddNote}
        darkMode={darkMode}
         />: null}
      </div>
    </div>
    )
}

export default Home
