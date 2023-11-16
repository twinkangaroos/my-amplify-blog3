const mysql = require('mysql');
import {
    SecretsManagerClient,
    GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const EdyGetEkyc = async(req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  
    try{
        // リクエスト不要（※IPアドレスチェックはどこかで必要）
        //const body = JSON.parse(req.body);
        
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
            host: 'localhost', // DEBUG for Local
            //host: secretJson.host,
            user: secretJson.username,
            password: secretJson.password,
            database: 'post1'
        });

        connection.connect((err) => {
            if (err) {
                console.log('接続エラー:(' + currentDate + ') ' + err.stack);
                const response = {
                    statusCode: 501,
                    body: {
                        "result": "1",
                        "errorCode": "501"
                    }
                }
                return res.status(501).json(response)
            } else {
                // 未取得分のみ取得（TODO：取得件数の最大値は決める必要あり）
                const limit = '10'
                const query = 'SELECT id, createdAt, ekyc, gottenAt FROM ekyc2 WHERE gottenAt IS NULL LIMIT ' + limit
                const result = connection.query(query, (error, results) => {
                    console.log("error", error);
                    if (error) {
                        console.log("A select error has occured!!", err)
                        const response = {
                            statusCode: 502,
                            body: {
                                "result": "1",
                                "errorCode": "501"
                            }
                        }
                        return res.status(502).json(response)
                    }
                    else {
                        if (results.length === 0) {
                            // No records found
                            const response = {
                                statusCode: 200,
                                body: {
                                    "result": "0",
                                    "errorCode": "",
                                    "message": "No records found.",
                                }
                            }
                            return res.status(200).json(response);
                        }
                        // 取得した結果をループで処理
                        for (const row of results) {
                            const updateQuery = 'UPDATE ekyc2 SET gottenAt = CURRENT_TIMESTAMP() WHERE id = ?';
                            connection.query(updateQuery, [row.id], (updateError, updateResults) => {
                                if (updateError) {
                                    console.log("An Update error has occured!!", err)
                                    const response = {
                                        statusCode: 503,
                                        body: {
                                            "result": "1",
                                            "errorCode": "503"
                                        }
                                    }
                                    return res.status(503).json(response)
                                } else {
                                    console.log(`Record with id ${row.id} updated successfully.`);
                                }
                            });
                        }

                        const response = {
                            statusCode: 200,
                            body: {
                                "result": "0", 
                                "errorCode": "",
                                "message": results.length + " records was processed.",
                                "results": results,
                            }
                        }
                        return res.status(200).json(response)
                    }
                })
            }
        })
    } catch(err){
        console.log("An error has occured!!", err)
        const response = {
            statusCode: 500,
            body: {
                "result": "1",
                "errorCode": "500"
            }
        }
        return res.status(500).json(response)
    }
}

export default EdyGetEkyc;

// ■413 Body exceeded 1mb limit · Issue #53087 · vercel/next.js
// https://github.com/vercel/next.js/issues/53087
// export const config = {
//     api: {
//         bodyParser: {
//             sizeLimit: '20mb',
//         },
//     },
// }
