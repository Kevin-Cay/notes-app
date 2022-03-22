import React, {useEffect, useState} from 'react'
import {data} from '../demo-data/data'
import {HeaderLogin} from './HeaderLogin'

function Demo() {
    console.log(data)
  return (
    <div className="container" >
        <HeaderLogin />
    </div>
  )
}

export default Demo



