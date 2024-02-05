import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragDrop = () => {
    const [image, setImage] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
    // Assuming you only want to handle one file
    const file = acceptedFiles[0];
    
    // Use FileReader to read the file as a data URL
    const reader = new FileReader();
    reader.onloadend = () => {
        setImage(reader.result);
    };
    reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps , isDragActive } = useDropzone({ onDrop });

    return (
        <div>
        <div {...getRootProps()} style={dropzoneStyle}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
        </div>
        {image && (
            <div style={imagePreviewStyle}>
            <img src={image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        )}
        </div>
    );
};

const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

const imagePreviewStyle = {
    marginTop: '20px',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    overflow: 'hidden',
};

export default DragDrop;
