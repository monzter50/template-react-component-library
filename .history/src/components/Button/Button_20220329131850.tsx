import React from 'react'
import './Button.css'

interface ButtonProps {
    label:string;
}

export default function Button({label}:ButtonProps){
    return(
        <button>{label}</button>
    )
}