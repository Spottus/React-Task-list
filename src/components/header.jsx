import React from 'react'
import TaskMenu from './taskmenu'

const Header = ({title}) =>{
    return (
        <header className = 'header'>
        <h1>{title}</h1> 
        </header>
    )
}


export default Header