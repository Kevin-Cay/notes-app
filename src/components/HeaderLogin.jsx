import React from 'react'
import {Log} from './Log'
import {BiLogInCircle} from 'react-icons/bi'


export const HeaderLogin = () => {

    const handleOpenLogin = () => {
        <Log />
    }
  return (
    <div className='header' >
        <h1>Notes</h1>
        <button className='login-button' onClick={handleOpenLogin} > <BiLogInCircle /> Login</button>
    </div>
  )
}

export default HeaderLogin