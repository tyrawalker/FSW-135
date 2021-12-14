//required
import React, {useContext, useState} from 'react'
import AuthForm from './authform.js'
import { UserContext } from '../context/userProvider.js'


const initInputs = {username: '', password: ''}

//toggle between user sign up and user login.
export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login} = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]:value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    return(
        <div classname = 'auth-container'>
            <h1>Rock the Vote</h1>
            {!toggle ?
            <>
                <AuthForm
                    handleChange= {handleChange}
                    handleSubmit = {handleSignup}
                    inputs = {inputs}
                    btnText = 'Sign Up'
                />
                <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
            </>
            :
            <>
            <AuthForm 
                handleChange = {handleChange}
                handleSubmit = {handleLogin}
                inputs = {inputs}
                btnText = 'Login'
            />
            <p onClick={() => setToggle(prev => !prev)}>Sign up Here!</p>
            </>
}
            </div>     
    )
}