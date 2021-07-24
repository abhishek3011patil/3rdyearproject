import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <div>
            <button  className={`btn btn-primary  ${props.classes} `}  type="submit" >{props.name}</button>
        </div>
    )
}

export default Button
