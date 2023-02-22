import React from 'react';
import axios from "axios";
import { useState } from 'react';

const Form = () => {
    const [businessName, setBusinessName] = useState();
    const [contactName, setContactName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [websiteName, setWebsiteName] = useState();

    const submitHandler = async(e) => {

        e.preventDefault();
        try{
            await axios.post(`http://localhost:8000/api/register`, {
                businessName,
                contactName,
                phoneNumber,
                email,
                websiteName
            }).then((response) => {
                console.log(response.data);
            })
        }
        catch(err){
            console.log(err);
        }
        
    }

    return (
        <>
            <form onSubmit={submitHandler}>Form</form>
        </>
        
    )
}

export default Form;