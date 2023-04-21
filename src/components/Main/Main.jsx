import React from 'react'
import './Main.scss'

const Main = ( props ) => {
  return (
    <main className='Main'>
        {props.children}
    </main>
  )
}

export default Main