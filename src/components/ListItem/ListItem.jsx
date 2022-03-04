import React from 'react'

export default function ListItem({name,text, setMenuOpen}) {
  return (
    <li onClick={ () => { setMenuOpen(false) }}>
        <a href={"#"+name}> {text} </a>
    </li>
  )
}
