import React, { useState } from 'react';

function Api() {
  const [selectedFile, setSelectedFile] = useState(null);  // State to hold the selected file
  const [emotion, setEmotion] = useState(null);  // State to hold the detected emotion

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);  // Update selected file state when a file is chosen
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    // Send the image to the Flask backend
    const response = await fetch('http://127.0.0.1:8000/upload-image', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
      }
    const data = await response.json();
    console.log(data);
    setEmotion(data.emotion);  // Update the emotion state with the response from the backend
  };

  return (
    <div>
      <h1>Upload Image for Emotion Detection</h1>
      <input type="file" onChange={handleFileChange} />  {/* File input */}
      <button onClick={uploadImage}>Upload Image</button>  {/* Button to upload image */}

      {emotion && <h2>Detected Emotion: {emotion}</h2>}  {/* Display detected emotion if available */}
    </div>
  );
}

export default Api;
