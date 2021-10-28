import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'


function LoginForm({className}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    
    function onClick(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/api/routes/login', {}, {
        auth: {
            username: username,
            password: password
        }
        }).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data));
            history.push('/Home');
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid username'
            })
        });
    }

    let users = JSON.parse(localStorage.getItem('user'));
    if(users === null){
        history.push('/')
    }else{
        history.push('/home')
    }

    return(
        <div className={className}>
            <div className="content">
                <div className="content2">
                <div className="wel">
                    <label for="fname">Sign In to Mlyric</label>
                </div>
                <form >
                    <input type="text" id="fname"  placeholder="Username" value={username} onChange={(event) => { setUsername(event.target.value)}} />
                    <input type="password" id="fname"  placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value)}} />
                    <input type="submit" value="Sign in" onClick={onClick} />
                    <a href="http://localhost:5000/api/auth/facebook" style={{color:'white'}} className="facebook">Login with facebook</a>
                    <span>Don't have an account yet? </span>
                    <Link to='/reg'>Sign Up</Link>
                </form>
                </div>
            </div>
        </div>
    )
}

export default styled(LoginForm)`
.content {
  display:flex;
  justify-content:center;
  position: fixed;
  
  height:100%;
  width: 100%;
}

.content2 {
  text-align:center;
  position: fixed;
  width: 30%;
  bottom:40%;
}

.wel{
    font-size:50px;
    margin-bottom:20px;
    font-weight:500;
    color: #010334;
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

.facebook{  
    background-color: #3d5d8e;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    text-decoration:none;
}

`