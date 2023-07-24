import { CognitoIdentityProviderClient, AdminCreateUserCommand } from '@aws-sdk/client-cognito-identity-provider'

const CreateUser = async(req, res) => {
    if (req.method !== 'POST') {
        res.status(400).json({ message: 'Bad request...' });
        return;
    }
    try{
        const userPoolId = "ap-northeast-1_ATtA9H3FZ"
        const region = "ap-northeast-1"

        const token = await req.headers.authorization
        
        // 新しいUUIDを生成してUsernameにセットすると、以下のエラーが発生するため、emailをセット →　Useranameが自動セットされる。
        //　InvalidParameterException: Username should be an email.
        //const { v4: uuidv4 } = require('uuid');
        //const uuid = uuidv4();
        const client = new CognitoIdentityProviderClient({ region: region })
        const params = {
            UserPoolId: userPoolId,
            Username: req.body.email,
            UserAttributes: [
                {
                    Name: "email",
                    Value: req.body.email,
                },
                {
                    Name: "email_verified",
                    Value: "true",
                },
                {
                    Name: "custom:group",
                    Value: req.body.group_id,
                },
                
            ],
            //ValidationData: [ // サーバーサイドで追加チェックしたい場合に使う
            //    {
            //        Name: "STRING_VALUE", // required
            //        Value: "STRING_VALUE",
            //    },
            //],
            //TemporaryPassword: req.body.password,
            //ForceAliasCreation: false, // false: Eメールアドレスの提供不要＝emailがキーの設定のため指定不要。
            //MessageAction: "SUPPRESS", // "RESEND":サインアップ時に確認メッセージを送信 || "SUPPRESS",
            //DesiredDeliveryMediums: [
            //    "EMAIL",
            //],
            //ClientMetadata: {
            //    "<keys>": "STRING_VALUE",
            //},
            AccessToken: token
        }
        
        // ■AdminCreateUserCommand | @aws-sdk/client-cognito-identity-provider
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cognito-identity-provider/classes/admincreateusercommand.html
        const command = new AdminCreateUserCommand(params)
        const response = await client.send(command)
        console.log('ユーザーの登録が成功しました:');
        return res.status(200).json({ message: 'ユーザーの登録が成功しました' });
    } catch(err){
        console.log(err)
        return res.status(400).json({ message: err })
    }
}

export default CreateUser
