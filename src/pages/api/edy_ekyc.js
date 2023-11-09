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
        //     :
        // }
        
        const response = {
            statusCode: 200,
            body: {
                "result": "0", 
                "errorCode": ""
            }
        }
        return res.status(200).json(response)
        
    } catch(err){
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
