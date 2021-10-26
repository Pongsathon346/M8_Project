import styled from 'styled-components'
import {Row, Col, Container} from 'react-bootstrap'

function LoginForm({className}) {
    // const signUserIn = async response => {
    //     console.log('Res -->', response)
    //     const { name, email, accessToken, userID } = response
    //     const user = { name, email, accessToken, userId: userID }
    
    //     await axios({
    //       method: 'post',
    //       url: 'http://localhost:5000/api/auth/facebook',
    //       data: {
    //         user
    //       }
    //     })
    //   }

      
    return(
        <div className={className}>
            <Container fluid>
            <div className="bigbox">
                <Col className="right-box">
                    <Row className="box">
                        <label>Login to Mlyric</label>
                        <Row className="input-box">
                            <input type="text" name="user" placeholder="username"></input>
                            <input type="password" name="pass" placeholder="password"></input>
                        </Row>
                        <Row className="sign">
                            <button className="button" type="submit" value="submit">Sign in</button>
                        </Row>
                    </Row>
                </Col>
            </div>
            </Container>
        </div>
    )
}

export default styled(LoginForm)`

  
  

    .bigbox{
        
        height:422px;
        width:350px;
        background-color: #f7f7f7;
        
    }
    .box {
       display:flex;
       justify-content:center;
    }

    label {
        text-align:center;
        font-size:30px
    }
    .input-box {
        display:flex;
       justify-content:center;
    }

    input[type=text]{
        width:300px;
        height:44px;
    }

    input[type=password]{
        width:300px;
        height:44px;
    }
    .sign {
        display:flex;
       justify-content:center;
    }

    .button{
        width:300px;
        height:45px;
    }
`