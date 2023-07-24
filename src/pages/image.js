import { useState, useEffect } from 'react';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const Image = () => {
    const [content, setContent] = useState("")
    
    useEffect(() => {
        fetchImage()
        async function fetchImage() {
          const opt = {
            level: 'public'
          }
          await Storage.get("cat_2021_0409.jpeg", opt).then(value=> {
            setContent(<img src={value} />)
          })
        }
    }, []);
    
    return (
        <div>
          <h1>Image</h1>
          <div className="tab-content">
            <div id="tab2" className="my-2 tab-pane">
              { content }
            </div>
          </div>
      </div>
    )
}

export default Image