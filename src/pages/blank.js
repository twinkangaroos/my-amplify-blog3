import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify, Auth } from 'aws-amplify'



const Blank = () => {

    const handleSignOut = (e) => {
        e.preventDefault()
        Auth.signOut()
    }
    
    return (
        <>
            <div>
                空っぽのページです。
            </div>
            <div>
                <a href="." onClick={handleSignOut}>
                Sign Out
                </a>
            </div>
        </>
    )
}

export default withAuthenticator(Blank)
