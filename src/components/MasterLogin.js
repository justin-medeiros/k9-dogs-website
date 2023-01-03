import React, { useState } from 'react'

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

    return(
        <div>
            <div className='login--container'>
                <h1>Login to master account.</h1>
                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                </form>
            </div>
           
        </div>
    )
}