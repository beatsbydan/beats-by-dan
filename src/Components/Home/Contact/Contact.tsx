import React, {useState} from 'react'
import './Contact.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import { ValidateContactForm } from './ValidateContactForm'
import message from '../../../Assets/Images/message.svg'

type inputsType = {
    name: string,
    email: string,
    phone: string,
    message: string
}

type errorsType = {
    name: boolean,
    email: boolean,
    phone: boolean,
    message: boolean,
    none: boolean
}

const Contact:React.FC = () => {
    const [inputs, setInputs] = useState<inputsType>(
        {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    
        )
    const [inputErrors, setInputErrors] = useState<errorsType>(
        {
            name: false,
            email: false,
            phone: false,
            message: false,
            none: false,
        }
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setInputs(prev => {
            return { ...prev, [name]: value}
        })
    }
    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setInputs(prev => {
            return { ...prev, [name]: value}
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setInputErrors(ValidateContactForm(inputs))

        if(inputErrors.none){

        }
    }

    return (
        <div className='contact' id='contact'>
            <div className="contactLeft">
                <h1>Get in Touch</h1>
                <form action="">
                    <Input
                        name='name'
                        type='text'
                        value={inputs.name}
                        error={inputErrors.name}
                        handleInputChange={handleChange}
                        handleTextAreaChange={handleTextAreaChange}
                        placeholder='Name'
                    />
                    <Input
                        name='email'
                        type='text'
                        value={inputs.email}
                        error={inputErrors.email}
                        handleInputChange={handleChange}
                        handleTextAreaChange={handleTextAreaChange}
                        placeholder='Email'
                    />
                    <Input
                        name='phone'
                        type='number'
                        value={inputs.phone}
                        error={inputErrors.phone}
                        handleInputChange={handleChange}
                        handleTextAreaChange={handleTextAreaChange}
                        placeholder='Phone Number'
                    />
                    <Input
                        name='message'
                        type='message'
                        value={inputs.message}
                        error={inputErrors.message}
                        handleInputChange={handleChange}
                        handleTextAreaChange={handleTextAreaChange}
                        placeholder='Send a message'
                    />
                    <Button
                        text="Send a message"
                        type='submit'
                        action={handleSubmit}
                    />
                </form>
            </div>
            <div className="contactRight">
                <img src={message} alt="message" />
            </div>
        </div>
    )
}

export default Contact