const Validations = (entry) => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let errors  = {}
    if(entry.name === ""){
        errors.name = "Fullname cannot be empty"
    }
    if(entry.email === ""){
        errors.email = "Email cannot be empty"
    }
    else if(!regexEmail.test(entry.email)){
        errors.email = "Provide a valid email"
    }
    if(entry.message === ""){
        errors.message = "Message cannot be empty"
    }
    if(Object.values(entry).every(value=>{
        return value !== ""
    })){
        errors.all = ""
    }
    return errors;
}
 
export default Validations;