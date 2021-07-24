import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div>
            <div className="card-body">
                <img src={props.image} alt={props.alt} />
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
                <a>LEARN MORE > </a>

            </div>
        </div>
    )
}

export default Card
