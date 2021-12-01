import React from 'react';
import {Link} from 'react-router-dom'

export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>

            <nav>
            <a href="">home</a>  
            <a href="">project</a>  
            <a href="">About-us</a>
            </nav>
        </header>
    )
}