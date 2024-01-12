import React from 'react'
import './Input.css'

type inputType = {
    name: string,
    value: string,
    type: string,
    error: boolean,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}

const Input:React.FC<inputType> = (props) => {
    return (
        <input
            className={props.error ? 'errorField' : ''}
            title={props.name}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
        />
    )
}

export default Input