import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './DragDrop.scss';
import { IoCloudUploadOutline } from "react-icons/io5";
import { ShowResult } from '../ShowResult/ShowResult';

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
        <>
            <div className="dropzone-container">
                <div {...getRootProps()} className='dropzone'>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                            <p>Drop X-Ray here...</p> :
                            <p>Drag and drop your X-Ray here or click here to upload.</p>
                        }
                </div>
                <div className="img-btn">
                    {image && (
                        <div className='image-preview'>
                            <img src={image} alt="Preview" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                        </div>
                    )}
                    <ShowResult />
                </div>
            </div>
        </>
    );
};
export default DragDrop;
