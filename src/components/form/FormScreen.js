import styles from './FormScreen.module.css';
import { useState, useRef } from 'react';

const FormScreen = (props) => {
    const [submitted, setSubmitted] = useState(false)
    const nameRef = useRef('')
    const phoneRef = useRef('')
    const emailRef = useRef('')
    const reasonRef = useRef('') // New ref for event date
    const reciver = "Nofarhalfonmakeup@gmail.com"

    const submitHandler = async(e) => {
        e.preventDefault()
        const name = nameRef?.current?.value
        const phone = phoneRef?.current?.value
        const email = emailRef?.current?.value
        const reason = reasonRef?.current?.value // Get the event date value

        if(name.trim().length <= 2) {
            alert("אנא הכניסי שם מלא ")
            return;
        }
        if(phone.trim().length !== 10) {
            alert("אנא הכניסי מספר טלפון הכולל 10 ספרות ")
            return;
        }
        if(!email.includes("@")) {
            alert("אנא הכניסי מייל תקין ")
            return;
        }

        const formData = {
            name: name,
            phone: phone,
            email: email,
            reason: reason, // Add the event date to formData
            reciver: reciver
        }

        const response = await fetch('https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        
        if(response.ok) {
            alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
            nameRef.current.value = ""
            phoneRef.current.value = ""
            emailRef.current.value = ""
            reasonRef.current.value = "" // Clear the event date input
            setSubmitted(true)
        }
    }

    return <>
        <div className={styles.title} id="צרי קשר">{props.title}</div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="שם מלא"
                    ref={nameRef}
                />
                <input
                    type="tel"
                    className={styles.input}
                    placeholder="מספר טלפון"
                    ref={phoneRef}
                />
                <input
                    type="email"
                    className={styles.input}
                    placeholder="מייל"
                    ref={emailRef}
                />
         <input
    type="text"
    className={styles.input}
    placeholder="תאריך האירוע"
    ref={reasonRef}
/>
                <button onClick={submitHandler} className={styles.button}>
                    נופר, בואי נדבר!
                </button>
            </form>
        </div>
    </>
};

export default FormScreen;