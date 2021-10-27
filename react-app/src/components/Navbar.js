import styled from 'styled-components'

function Navbar ({className}) {
    return(
        <div className={className}>
            <div className="nav-box">
                <label className="logo">MLyrics</label>
                <div className="nav-box-right">
                    <a href="#">Favorite</a>
                    <label className="username">Username</label>
                    <a href="#">Logout</a>
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
    .nav-box-right a{
        margin: 0 2rem;
    }
    .username{
        color:black;
    }
`;