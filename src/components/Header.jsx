import React from 'react'
import {auth, signOut} from '../firebase/firebase_config'
import{ AiOutlineCloseCircle} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'

export const Header = ({handleToggleDarkMode, darkMode}) => {
    return (
        <div className='header' >
            <h1>Notes</h1>
            <div className="headerOptions" >
            <button 
            className={`theme ${darkMode? "darkButton": "themeButton" }`}  
            onClick={() => 
                handleToggleDarkMode((previousDarkMode) => !previousDarkMode) }  
            >
            {darkMode? "🌞" :"🌙" }
            </button>
            <div className=" signoutbutton" onClick={() => (signOut(auth), console.log("user out")) } >
                <BiLogOutCircle size={'2em'}  />

            </div>
            </div>  
            

        </div>
    )
}
