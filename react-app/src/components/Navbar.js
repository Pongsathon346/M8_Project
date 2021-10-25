import styled from 'styled-components'

function Navbar ({className}) {
    return(
        <div className={className}>
            <div className="nav-box">
                <h1>MLyrics</h1>
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
    background-color: #f4f4f8;
    .nav-box{
        display: flex;
        justify-content: space-between;
    }
    .nav-box h1{
        margin-left: 2rem;
    }
    .nav-box-right{
        margin-top: 2rem;
        margin-right: 2rem;
    }
    .nav-box-right a{
        margin: 0 2rem;
    }
`;