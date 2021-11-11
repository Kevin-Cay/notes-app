import React, {useState} from 'react'
import Home from './components/Home';
import {Log} from './components/Log';
import {auth, onAuthStateChanged } from './firebase/firebase_config'

function App() {
  const [userGlobal, setUserGlobal] = useState(null);


    //to see how the state of the user is changing 
  onAuthStateChanged(auth, (userFirebase)=>{
    userFirebase? setUserGlobal(userFirebase) : setUserGlobal(null)
  })


  return (
    <>
      {userGlobal ? <Home userEmail={userGlobal.email} />: <Log/>}
    </>
  );
}

export default App;
