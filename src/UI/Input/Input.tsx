import React from 'react'
import './Input.css'

type inputType = {
    name: string,
    value: string,
    type: string,
    error: boolean,
    handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}

const Input:React.FC<inputType> = (props) => {
    return (
        <>
            {
                props.type === "message" 
                ? 
                <textarea
                    className={props.error ? 'errorField' : ''}
                    title={props.name}
                    name={props.name}
                    value={props.value}
                    onChange={props.handleTextAreaChange}
                    placeholder={props.placeholder}
                />
                :
                <input
                    className={props.error ? 'errorField' : ''}
                    title={props.name}
                    name={props.name}
                    value={props.value}
                    onChange={props.handleInputChange}
                    placeholder={props.placeholder}
                />
            }
        </>
        
    )
}

export default Input