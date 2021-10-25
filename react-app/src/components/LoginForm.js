import styled from 'styled-components'

function LoginForm({className}) {
    return(
        <div className={className}>
            <div className="row">
                <div className="col-7">
                    <h1>Login</h1>
                    <div>
                        <input type="text" name="username" placeholder="username"></input>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password"></input>
                    </div>
                    <div>
                        <button type="submit" value="Enter" >Enter</button>
                    </div>
                </div>
                <div className="col-5">
                    <div className="card social-block">
                        <div className="card-body">
                            <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                                <i className="fab fa-google"></i>
                                Sign Up with Google
                            </a>
                        </div>
                    </div>
                    <div className="card social-block">
                        <div className="card-body">
                            <a className="btn btn-block btn-social btn-facebook" href="/auth/facebook" role="button">
                                <i className="fab fa-facebook"></i>
                                Sign Up with Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(LoginForm)`
    
`