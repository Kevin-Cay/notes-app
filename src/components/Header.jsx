import React from 'react'
import {auth, signOut} from '../firebase/firebase_config'
import {BiLogOutCircle} from 'react-icons/bi'

/**
 * 
 * @param {function, variable} param0, function to change the theme of the app, variable to know the theme of the app 
 * @returns 
 */
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
            <div className=" signoutbutton" onClick={() => (signOut(auth)) } >
                <BiLogOutCircle size={'2em'}  />
            </div>
            </div>  
            

        </div>
    )
}
