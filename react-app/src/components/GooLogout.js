import { GoogleLogout } from 'react-google-login'

const clientId = '580438353989-onl30iqb482mrin0nn53f5su6d6vrnle.apps.googleusercontent.com'

function GooLogout () {
  const onSuccess = () => {
    alert('Logout made successfully!')
  }

  return (
        <div>
            <GoogleLogout style={{ display: 'none' }}
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
  )
}

export default GooLogout
