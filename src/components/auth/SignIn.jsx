import React, { useState } from 'react'
import { auth } from '../../firebase'
// import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((err) => {
            console.log("ERR", err);
        })
    }

    return (
        <div className='container'>
            <form onSubmit={signIn}>
                <h1>Log In to your Account</h1>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default SignIn