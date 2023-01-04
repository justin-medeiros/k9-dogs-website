import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {auth} from '../firebase-config'
import './css/ForgotPassword.css'

export default function ForgotPassword(){

    const [forgetPasswordEmail, setForgetPasswordEmail] = useState("")

    function submitClicked(){
        
    }

    return(
        <div className='forgot--password'>
            <div className='forgot--password--container'>
                <h1>Forgot password.</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e)=> {setForgetPasswordEmail(e.target.value)}}
                        name="email"
                        value={forgetPasswordEmail}
                    />
                    <button className='forgot--password--button'>Submit</button>
            </div>
        </div>
        
    )
}