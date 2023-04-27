import { useState } from "react";
import Validations from "./Validation/Validation";
import styles from './ContactMe.module.css'
const ContactMe = () => {
    const [formErrors, setFormErrors] = useState({})
    const [formDetails, setFormDetails] = useState({
        name: "",
        email:"",
        message:""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormDetails((prev)=>{
            return(
                {...prev, [name]: value}
            )
        })
    }
    const handleSubmit =  (e) => {
        setFormErrors(Validations(formDetails))
        if(formErrors.all !== ""){
            e.preventDefault()
        }
    }
    return ( 
        <div className={styles.contactMe}>
            <h1>Contact Me</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles.formBlock}>
                    <div className={styles.formElement}>
                        <label htmlFor="fullname">
                            Fullname
                            {<p className={styles.error}>{formErrors.name}</p>}
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="" 
                            className={formErrors.name ? styles.errorField : ''}
                            value={formDetails.name} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formElement}>
                        <label htmlFor="email">
                            Email
                            {<p className={styles.error}>{formErrors.email}</p>}
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="" 
                            className={formErrors.email ? styles.errorField : ''}
                            value={formDetails.email} 
                            placeholder="example@example.com"
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="message">
                        Message
                        {<p className={styles.error}>{formErrors.message}</p>}
                    </label>
                    <textarea 
                        name="message" 
                        id="" 
                        className={formErrors.message ? styles.errorField : ''}
                        cols="30" 
                        rows="10" 
                        value={formDetails.message} 
                        placeholder="Your message"
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <div className={styles.formActions}>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
     );
}
 
export default ContactMe;