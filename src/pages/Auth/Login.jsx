import React, { useState } from 'react'
import { Button } from '../../components/Button'
import login from '../../assets/images/login.svg'
import logo from '../../assets/images/logo.svg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)


  const handleLogin = (e) => {
    e.preventDefault()
    if(email && password){
        console.log(email,password)
        localStorage.setItem("access_token", "somerandomaccesstoken")
        window.location = "/"
      }
      return
  }

  return (
    <>
      <div className='auth'>
      <div className='loginImages'>
        <img src={logo} alt="logo" />
        <img src={login} alt="login" />
      </div>
      <div className='auth_input'>
        <form>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>

          <div className='input_group'>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
          </div>
          <div className='input_group'>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type={ isVisible ? "text" : "password"} placeholder='Password' />
            <span className='togglePass' onClick={() => setIsVisible(!isVisible)}>{ isVisible ? <span>Hide</span> : <span>Show</span> }</span>
          </div>
            

          <div id="forgotPassword">Forgot Password?</div>

          <Button handleClick={handleLogin} > Log in </Button>
        </form>

      </div>
    </div>
    </>
  )
}

export default Login