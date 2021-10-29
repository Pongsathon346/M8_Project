import styled from 'styled-components'
import {useHistory} from 'react-router'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import Googleout from './GooLogout';

function Navbar ({className}) {
    const history = useHistory()
    let name;
    let users = JSON.parse(localStorage.getItem('user'));
    if(users === null){
        history.push('/')
    }else{
       name = users.username
    }

    function logout() {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Logout!',
                'Your account has been logout.',
                'success',
                localStorage.clear(),
                history.push('/')
              )
            }
          })
    }

    return(
        <div className={className}>
            <div className="nav-box">
                <label className="logo">MLyric</label>
                <div className="nav-box-right">
                    <Link to="/home" className="home" style={{textDecoration:'none'}}>Home</Link>
                    <Link to="/fav" className="fav" style={{textDecoration:'none'}}>Favorite</Link>
                    <label className="username">{name}</label>
                    <button className="logout" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default styled(Navbar)`   
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    .nav-box{
        display: flex;
        justify-content: space-between;
        color: white;
        height: 5.5rem;
    }
    .nav-box .logo {
        color:black;
        margin-left:50px;
        font-size:48px;
        font-weight:500; 
    }
    
    .nav-box-right{
        margin-top: 2rem;
        margin-right: 2rem;
    }
    .nav-box-right button{
        margin: 0 2rem;
    }
    .username{
        color:black;
        margin-left:35px;
    }
    .logout{
        font-weight:500;
        
        border-radius:20px;
        transition: .2s ease-in;
        background-color:black;
        color: red;
    }

    .logout:hover{
        background-color:#b31b1b;
        color: black;
    }
    .fav{
        font-size:18px;
        color:black;
        font-weight:500;
        transition: .2s ease-in;
        padding:5px 10px;
    }
    
    .fav:hover{
        background-color:rosybrown;
        border-radius:20px;
        
    }

    .home{
        font-size:18px;
        color:black;
        font-weight:500;
        padding:5px 10px;
        margin-right:15px;
        transition: .2s ease-in;
    }

    .home:hover{
        background-color:rosybrown;
        border-radius:20px;
        
    }
`;