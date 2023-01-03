import React, { useState } from 'react'
import './css/MasterLogin.css'

export default function Master(){

    const [loginData, changeLoginData] = useState({
        email: "", password: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        changeLoginData(oldLoginData => {
            return {...oldLoginData, 
                [name]:value // Will change the value of the form name
            }
        })

    }

    function loginButtonPressed(event){
        event.preventDefault()
    }

    function forgetPasswordClicked(){

    }

    return(
        <div className='master--login'>
<div className='master--login--container'>
                <h1>Login to master account.</h1>
                <form onSubmit={loginButtonPressed}>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={loginData.email}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                        value={loginData.password}
                    />
                    <h4 className='forgot--password' onClick={forgetPasswordClicked()}>Forgot password</h4>
                    <button className='master--login--button'>Login</button>
                </form>
            </div>
        </div>
        
    )
}