import React from 'react'
import './folders.css'

const Folders = ({folderList, handleActiveFolder}) => {
  
  return (
    <div className='folder__section'>
      <h2>Folders</h2>
      <ul className="folders">
        {folderList.map((item, key) => (
          <li key={key} id={item}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#" onClick={()=>{handleActiveFolder(item.name)}} style={{margin:"1rem", fontSize:'1.15em'}}>
            <i className="icon__s" style={{paddingRight:"1rem"}}>
            {item.icon}
              </i>
              <strong>{item.name}</strong>

            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Folders
