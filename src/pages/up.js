import React, { useState } from 'react';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        // ファイルをアップロードする処理
        const result = await Storage.put(selectedFile.name, selectedFile);
        console.log('File uploaded successfully:', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
}

export default FileUpload;