import styled from 'styled-components'
import {useHistory} from 'react-router'
import { Link } from 'react-router-dom'



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
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className={className}>
            <div className="nav-box">
                <label className="logo">MLyrics</label>
                <div className="nav-box-right">
                    <label className="username">{name}</label>
                    <Link to="/fav" style={{textDecoration:'none'}}>Favorite</Link>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default styled(Navbar)`
    .nav-box{
        display: flex;
        justify-content: space-between;
        color: white;
        height: 5.5rem;
        
    }
    .nav-box .logo {
        color:black;
        margin-left:25px;
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
        margin-right:10px;
    }
`;