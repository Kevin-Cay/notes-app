import React, {useState, useEffect} from 'react'
import {NotesList} from './NotesList'
import {Search } from './Search'
import {nanoid} from 'nanoid'
import {Header} from './Header'
import moment from 'moment'
import db from '../firebase/firebase_config' 
import {collection, getDocs, addDoc, doc, getDoc, setDoc, updateDocs, deleteDoc} from '../firebase/firebase_config'

function Home({userEmail}) {
    const [notes, setNotes] = useState(null)
    const [darkMode, setDarkMode] = useState(false);
    const [searchText, setSearchText] = useState('');


  async function searchNotesFromDb(userId){
    //create a doc reference
    //const documentRef= collection(db, `notesUsers/${userId}/notes`);
    // //search document
    // const consulta = await getDoc(documentRef);
    //validate document
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



  useEffect(()=>{
    async function searchNotes(){
      const result = await searchNotesFromDb(userEmail);
      //result.docs.map((note) => (console.log(note.id)))
      setNotes(result.docs)
      //setNotes(result.docs.map((note) => ({id: note.id, date: moment(note.data().date.toDate()).calendar() , data: note.data()})))
    }
    searchNotes();
  }, [])

  


  async function handleDeleteNote(userId ){
    //const deleteNote = (notes.docs.filter((note) => (note.id !== userId?  note : null)))
    const deleteNote = (notes.filter((note) => note.id !== userId ));
    await deleteDoc(doc(collection(db, `notesUsers/${userEmail}/notes`),`${userId}`) );
      //update database 
      console.log('-1 note');
    setNotes(deleteNote)
  }

  async function handleAddNote(text){
    try {
            const response = await addDoc(collection(db, `notesUsers/${userEmail}/notes`),{
                text: text,
                date: new Date()
            });
            const result = await searchNotesFromDb(userEmail);
     
           setNotes(result.docs)
            
    } catch (error) {
        console.log(error);
    }
}

  //  function handleSearchText(){
  //     const searchNotes = (notes.filter((note) => note.data().text === searchText ));
  //     setNotes(searchNotes);
  // }
    return (
        <div className={`${darkMode && 'dark-mode'}`} >
      <div className='container' >
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} /> 
        { notes?  <NotesList id={userEmail} notes={notes.filter((note) => note.data().text.toLowerCase().includes(searchText))} 
        handleDeleteNote={handleDeleteNote}
        handleAddNote={handleAddNote}
         />: null}
      </div>
    </div>
    )
}

export default Home
