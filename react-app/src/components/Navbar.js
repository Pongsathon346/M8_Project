import styled from 'styled-components'

function Navbar ({className}) {
    return(
        <div className={className}>
            <div className="nav-box">
                <label>MLyrics</label>
                <div className="nav-box-right">
                    <a href="#">Favorite</a>
                    <label>Username</label>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default styled(Navbar)`
    background-color: black;
    .nav-box{
        display: flex;
        justify-content: space-between;
        color: blueviolet;
    }
    .nav-box label{
        font-size:50px;
        font-weight:500;
    }
    .nav-box-right{
        margin-top: 2rem;
        margin-right: 2rem;
    }
    .nav-box-right a{
        margin: 0 2rem;
    }
`;