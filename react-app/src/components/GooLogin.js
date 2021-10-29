import { GoogleLogin } from 'react-google-login'


const clientId = '580438353989-onl30iqb482mrin0nn53f5su6d6vrnle.apps.googleusercontent.com'

function GooLogin(){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj)

    }

    const onFailure = (res) => {
        console.log('[Login failed] res:', res)
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    )
}

export default GooLogin