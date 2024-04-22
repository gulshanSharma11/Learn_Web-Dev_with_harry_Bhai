import React, { useState } from 'react';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import uploadImageToCloudinary from '../utils/uploadCloudinary';

const ImageUploader = ({ onImageUpload }) => {
  const [loading, setLoading] = useState(false);
  const [previewURL, setPreviewURL] = useState('');
  const [formData, setFormData] = useState({
    photo: null,
  });

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    setLoading(true);
    try {
      const data = await uploadImageToCloudinary(file);
      setPreviewURL(data.url);
      setFormData({ photo: data.url });
      onImageUpload(data.url); // Pass the uploaded image URL to the parent component
      setLoading(false);
    } catch (error) {
      toast.error('Failed to upload image');
      setLoading(false);
    }
  };

  return (
    <div className="mb-5 flex items-center gap-3">
      {previewURL && (
        <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
          <img src={previewURL} alt="Uploaded" className="w-full rounded-full" />
        </figure>
      )}
      <div className="relative w-[130px] h-[50px]">
        <input
          type="file"
          onChange={handleFileInputChange}
          accept=".jpg, .jpeg, .png"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
        <label
          className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
        >
          {loading ? <HashLoader size={20} color="#ffffff" /> : 'Upload Photo'}
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
