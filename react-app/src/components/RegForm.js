import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function RegForm ({ className }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const history = useHistory()

  function regSend (e) {
    e.preventDefault()
    if (password2 !== password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password did not match!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    } else {
      axios.post('http://localhost:5000/api/routes/reg', {
        username,
        password,
        email
      }).then((res) => {
        alert(res.data.message)
        Swal.fire(
            `${res.data.message}`,
            'You clicked the button!',
            'success'
        )
        history.push('/')
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      })
    }
  }

  return (
        <div className={className}>
            <div className="content">
                <div className="content2">
                <div className="wel">
                    <label htmlFor="fname">Sign Up - Mlyric</label>
                </div>
                <form >
                    <input type="text" id="fname" placeholder="Username" value={username} onChange={(event) => { setUsername(event.target.value) }} />
                    <input type="text" id="fname" placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                    <input type="password" id="fname" placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    <input type="password" id="fname" placeholder="Re-Password" value={password2} onChange={(event) => { setPassword2(event.target.value) }} />
                    <input type="submit" value="Sign Up" onClick={regSend} />
                    <span>Already logged in? </span>
                    <Link to='/'>Sign In</Link>
                </form>
                </div>
            </div>
        </div>
  )
}

export default styled(RegForm)`
.content {
  display:flex;
  justify-content:center;
  position: fixed;
  
  height:80%;
  width: 100%;
}

.content2 {
  text-align:center;
  position: fixed;
  width: 30%;
  bottom:34%;
}

.wel{
    font-size:50px;
    margin-bottom:20px;
    font-weight:500;
    color:#010334;
}

.form{
    background: rgba(0, 0, 0, 0.8);
    padding: 40px;
}

///////////
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=password], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color:black;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #010334;
    transition:0.3s ease-in-out;
}

`
