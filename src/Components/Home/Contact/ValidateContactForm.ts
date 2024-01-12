type entryType = {
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

export const ValidateContactForm = (entry: entryType) => {
    const regexEmail = /^(?=.{1,256})(?=.{1,64}@.{1,255}$)(?=\S)(?:(?!@)[\w&'*+._%-]+(?:(?:(?<=\.)[a-zA-Z]{2,})|(?<!\.)))@(?=.{1,255}$)[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/

    const errors: errorsType = {
        name: false,
        email: false,
        phone: false,
        message: false,
        none: false
    }

    if(entry.name === ""){
        errors.name = true
    }
    if(!regexEmail.test(entry.email)){
        errors.email = true
    }
    if(entry.phone === ""){
        errors.phone = true
    }
    if(entry.message === ""){
        errors.name = true
    }

    if(Object.values(entry).every(value => value !== "") && regexEmail.test(entry.email)){
        errors.none = true
    }

    return errors
}