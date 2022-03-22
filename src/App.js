import React, {useState} from 'react'
import Home from './components/Home';
import { Log } from './components/Log';
import {auth, onAuthStateChanged } from './firebase/firebase_config'
import ReactLoading from 'react-loading';
import './index.css'

function Spinner(){
  return (
    <div className='spinner-container' >
      <ReactLoading className="spinner" type={'spin'} color={'#176cd3'} height={150} width={150}  />
    </div>
  )
}

function App() {
  const [userGlobal, setUserGlobal] = useState(null);
  const [loading, setLoading] = useState(true);

    //to see how the state of the user is changing 
  onAuthStateChanged(auth, (userFirebase)=>{
    userFirebase? setUserGlobal(userFirebase) : setUserGlobal(null)
    setLoading(false)
  })
  return (
    <>
      {userGlobal ? <Home userEmail={userGlobal.email} />: loading ?  <Spinner />:<Log setLoading={setLoading} />}
    </>
  );
}

export default App;
