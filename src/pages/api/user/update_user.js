import { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } from '@aws-sdk/client-cognito-identity-provider'

const UpdateUser = async(req, res) => {
    if (req.method !== 'POST') {
        res.status(400).json({ message: 'Bad request...' });
        return;
    }
    try{
        const userPoolId = "ap-northeast-1_ATtA9H3FZ"
        const region = "ap-northeast-1"
        const token = await req.headers.authorization
        const client = new CognitoIdentityProviderClient({ region: region })
        const params = {
            UserPoolId: userPoolId,
            Username: req.body.username,
            Enabled: req.body.enabled, // TODO:falseでセットしても機能しない？
            UserAttributes: [
                // TODO:emailを更新すると、Verification code: xxxx のメールが飛ぶためdisabledに。
                {
                    Name: "email",
                    Value: req.body.email
                },
                {
                    Name: "custom:group",
                    Value: req.body.group_id
                },
            ],
            AccessToken: token
        }
        // ■AdminUpdateUserAttributesCommand | @aws-sdk/client-cognito-identity-provider
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cognito-identity-provider/classes/adminupdateuserattributescommand.html
        const command = new AdminUpdateUserAttributesCommand(params)
        const response = await client.send(command)
        console.log('ユーザー属性の更新が成功しました:', response);
        return res.status(200).json({ message: 'ユーザー属性の更新が成功しました' });
    } catch(err){
        console.log(err)
        return res.status(400).json({ message: err })
    }
}

export default UpdateUser
