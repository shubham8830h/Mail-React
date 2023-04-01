import React from 'react'
import './reader.css'
const Reader = ({activeMail}) => {
  return (
    <div className='reader__section'>
      <h4>{activeMail.subject}</h4>
      <article>{activeMail.content}</article>
    </div>
  )
}

export default Reader
