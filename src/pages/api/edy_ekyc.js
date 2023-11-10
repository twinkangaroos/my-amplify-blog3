// npm install mysql
// npm install @aws-sdk/client-secrets-manager
const mysql = require('mysql');
import {
    SecretsManagerClient,
    GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const EdyEkyc = async(req, res) => {
    // ■How to Enable CORS on Vercel
    // https://vercel.com/guides/how-to-enable-cors
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  
    try{
        // headers {
        //     'cache-control': '',
        //     'x-forwarded-host': 'localhost:3000',
        //     'x-forwarded-proto': 'http',
        //     'x-forwarded-port': '3000',
        //     'x-forwarded-for': '::1',
        //     'accept-language': 'ja,en-US;q=0.9,en;q=0.8',
        //     referer: 'http://localhost:3001/',
        //     'sec-fetch-dest': 'empty',
        //     'sec-fetch-mode': 'cors',
        //     'sec-fetch-site': 'same-site',
        //     origin: 'http://localhost:3001',
        //     accept: '*/*',
        //     'content-type': 'text/plain;charset=UTF-8',
        //     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        //     'sec-ch-ua-mobile': '?0',
        //     'sec-ch-ua-platform': '"macOS"',
        //     'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        //     'content-length': '236',
        //     host: 'localhost:3000',
        //     'x-middleware-invoke': '',
        //     'x-invoke-path': '/api/edy_ekyc',
        //     'x-invoke-query': '%7B%7D',
        //     connection: 'close'
        // }
        // body {
        //     "applyNo":"MOSHIKOMI0123456789012345678901234567890",
        //     "ekycUserId":"USER1234561234567890",
        //     "docType":"01",
        //     "docFrontImage":null,
        // }
        
        // Example) req.body={"applyNo":"MOSHIKOMI01", "ekycUserId":"USER1", ...}
        // JSON.parse(req.body)=body {
        //      applyNo: 'MOSHIKOMI01',
        //      ekycUserId: 'USER1',
        // }
        if (!req.body) {
            const response = {
                statusCode: 500,
                body: {
                    "result": "1",
                    "errorCode": "100"
                }
            }
            return res.status(500).json(response)
        }
        const body = JSON.parse(req.body);
        const headers = req.headers;
        
        // ※ちなみに以下でも取得可
        //console.log("applyNo1", body.applyNo)
        const applyNo = body["applyNo"] || "";
        const ekycUserId = body["ekycUserId"] || "";
        const docType = body["docType"] || "";
        const docFrontImage = body["docFrontImage"] || "";
        const docFrontImage2 = body["docFrontImage2"] || "";
        const docFrontImage3 = body["docFrontImage3"] || "";
        const docFrontImage4 = body["docFrontImage4"] || "";
        const docFrontImage5 = body["docFrontImage5"] || "";
        const docFrontImage6 = body["docFrontImage6"] || "";
        const xForwardefFor = headers && headers["x-forwarded-for"] || "";
        const userAgent = headers && headers["user-agent"] || "";
        const currentDate = new Date().toISOString();

        // 挿入するデータ
        const insertRecord = {
            id: currentDate,
            applyNo: applyNo,
            ekycUserId: ekycUserId,
            ipAddress: xForwardefFor,
            userAgent: userAgent,
            ekycStartDate: currentDate,
            ekycEndDate: currentDate,
            docType: docType,
            docFrontImage: docFrontImage,
            docFrontImage2: docFrontImage2,
            docFrontImage3: docFrontImage3,
            docFrontImage4: docFrontImage4,
            docFrontImage5: docFrontImage5,
            docFrontImage6: docFrontImage6,
            timestamp: currentDate
        };

        // MySQL接続情報をSecretManagerから取得
        const secret_name = "devMySQLUser";
        const client = new SecretsManagerClient({
            region: "ap-northeast-1",
        });

        const secretRes = await client.send(
            new GetSecretValueCommand({
                SecretId: secret_name,
                VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
            })
        );
        
        const secret = secretRes.SecretString;
        // {"username":"xxx","password":"xxx","engine":"mysql",
        // "host":"database-1.cluster-xxx.ap-northeast-1.rds.amazonaws.com",
        // "port":3306,"dbClusterIdentifier":"database-1"}
        const secretJson = JSON.parse(secret);

        const connection = mysql.createConnection({
            host: 'localhost',
            user: secretJson.username,
            password: secretJson.password,
            database: 'post1'
        });
        connection.connect((err) => {
            if (err) {
                console.log('接続エラー: ' + err.stack);
                const response = {
                    statusCode: 500,
                    body: {
                        "result": "1",
                        "errorCode": "200"
                    }
                }
                return res.status(500).json(response)
            }
            const query = 'INSERT INTO ekyc SET ?'
            const result = connection.query(query, insertRecord);
            console.log('データが挿入されました:');
        });
        
        const response = {
            statusCode: 200,
            body: {
                "result": "0", 
                "errorCode": ""
            }
        }
        return res.status(200).json(response)
    } catch(err){
        console.log("An error has occured!!", err)
        const response = {
            statusCode: 500,
            body: {
                "result": "1",
                "errorCode": "200"
            }
        }
        return res.status(500).json(response)
    }
}

export default EdyEkyc;

// ■413 Body exceeded 1mb limit · Issue #53087 · vercel/next.js
// https://github.com/vercel/next.js/issues/53087
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '20mb',
        },
    },
}
