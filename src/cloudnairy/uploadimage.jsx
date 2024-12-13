import React from 'react';
import { useDispatch } from 'react-redux';
import { setImgUrl } from '../Store/profileSlice';
import {CLOUD_NAME,CLOUD_PRESET} from "../Apikey"

function ImageUploader() {
  const dispatch = useDispatch();

  const uploadImage = async (files) => {
    const file = files[0];
    const cloudName = CLOUD_NAME
    const cloudPreset = CLOUD_PRESET
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', cloudPreset); 

      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.secure_url) {
          dispatch(setImgUrl(data.secure_url));  
          console.log('Image uploaded successfully:', data.secure_url);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => uploadImage(event.target.files)}
      />
    </div>
  );
}

export default ImageUploader;
