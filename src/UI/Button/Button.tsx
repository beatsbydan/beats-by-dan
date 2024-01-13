import React from 'react'
import './Button.css'

type buttonType = {
    text: string,
    type: "submit" | "reset" | "button",
    action: (e: React.FormEvent) => void 
}

const defaultButton = () => {
    return
}
const Button:React.FC<buttonType> = (props) => {
    return (
        <button 
            type={props.type} 
            onClick={props.type === "submit" 
                        ? 
                            defaultButton 
                        : 
                            props.action
                    }
        >
            {props.text}
        </button>
    )
}

export default Button