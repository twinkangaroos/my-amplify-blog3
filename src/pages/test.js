import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import aws_exports from '../aws-exports'
Amplify.configure(aws_exports)

import { TextField, CheckboxField } from '@aws-amplify/ui-react';


const components = {
    SignUp: {
        FormFields() {
        //const { validationErrors } = useAuthenticator();
        return (
            <>
            {/* Re-use default `Authenticator.SignUp.FormFields` */}
            <Authenticator.SignUp.FormFields />
            {/* Append & require Terms & Conditions field to sign up  */}
            <TextField
                //errorMessage={validationErrors.acknowledgement as string}
                //hasError={!!validationErrors.acknowledgement}
                name="custom:group"
                value="グループA"
                label="グループ"
            />
            </>
        );
        }
    }
}

const Test = () => {
    
    return (
        <Authenticator signUpAttributes={[
            'email',
            'custom:group',
        ]}
        components={components}
        >
        {({ signOut, user }) => ( 
            <div>
                ログイン後のページです。
                <button onClick={signOut}>Sign out</button>
            </div>
        )}
        </Authenticator>
    )
}

export default Test
