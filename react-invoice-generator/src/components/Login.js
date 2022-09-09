import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import '../scss/_login.scss';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [ loading ] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate();

async function handleSubmit(e) {
    e.preventDefault()
    try {
        await login(usernameRef.current.value, passwordRef.current.value)
        setError("Success")
        navigate("/invoice")
    } catch{
        setError("Log in failed")
        navigate("/login")
    }
      
}
    

  return (
    <div className="login-box">
        <h2>Login</h2>
        <center><h3>{error}</h3></center>
        <form>
            <div className="user-box">
                <input type="username" placeholder='Username' required={true} ref={usernameRef}/>
            </div>
            <div className="user-box">
                <input type="password" placeholder='Password' required={true} ref={passwordRef}/>
            </div>
            <button className='submit-button' disabled={loading} onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </div>
  )
}
