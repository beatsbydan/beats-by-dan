import React, {useState} from 'react'
import './Contact.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import { ValidateContactForm } from './ValidateContactForm'

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
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
            <h1>Get in Touch</h1>
            <form action="">
                <Input
                    name='name'
                    type='text'
                    value={inputs.name}
                    error={inputErrors.name}
                    handleChange={handleChange}
                    placeholder='Name'
                />
                <Input
                    name='email'
                    type='text'
                    value={inputs.email}
                    error={inputErrors.email}
                    handleChange={handleChange}
                    placeholder='Email'
                />
                <Input
                    name='phone'
                    type='number'
                    value={inputs.phone}
                    error={inputErrors.phone}
                    handleChange={handleChange}
                    placeholder='Phone Number'
                />
                <Input
                    name='message'
                    type='message'
                    value={inputs.message}
                    error={inputErrors.message}
                    handleChange={handleChange}
                    placeholder='Send a Message'
                />
                <Button
                    text="Send a message"
                    type='submit'
                    action={handleSubmit}
                />
            </form>
        </div>
    )
}

export default Contact