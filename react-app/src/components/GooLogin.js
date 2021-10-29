import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import { useHistory} from 'react-router'


const clientId = '580438353989-onl30iqb482mrin0nn53f5su6d6vrnle.apps.googleusercontent.com'

function GooLogin(){
    const history = useHistory()

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj)
        axios.post('http://localhost:5000/api/routes/signin/google',{
            name: res.profileObj.name,
            email: res.profileObj.email
        }).then((res)=>{
            localStorage.setItem('user', JSON.stringify(res.data))
        })
    }
    const onFailure = (res) => {
        console.log('[Login failed] res:', res)
    }

    let users = JSON.parse(localStorage.getItem('user'));
    if(users === null){
        history.push('/')
    }else{
        history.push('/home')
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