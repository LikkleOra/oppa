import React, { useState } from 'react';

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // TODO: Replace with your actual upload endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      console.error(error);
      alert('File upload failed');
    }
  };

  return (
    <div className="p-4 border border-gray-500">
      <p>Uploader Component</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upload
      </button>
      {selectedFile && (
        <p>Selected file: {selectedFile.name}</p>
      )}
    </div>
  );
};

export default Uploader;
