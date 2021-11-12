import React from 'react'
import {auth, signOut} from '../firebase/firebase_config'
import{ AiOutlineCloseCircle} from 'react-icons/ai'

export const Header = ({handleToggleDarkMode, darkMode}) => {
    return (
        <div className='header' >
            <h1>Notes</h1>
            <div className="headerOptions" >
            <button 
            className='theme headerbutton' 
            onClick={() => 
                handleToggleDarkMode((previousDarkMode) => !previousDarkMode) }  
            >
                Theme {darkMode? "🌞" :"🌙" }
            </button>
            <div className="signoutbutton" onClick={() => (signOut(auth), console.log("user out")) } >
                <AiOutlineCloseCircle />
                    Log Out 
            </div>
            </div>  
            

        </div>
    )
}
