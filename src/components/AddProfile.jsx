import React, { useState } from 'react';
import Navbar from './Navbar';
import ImageUploader from '../cloudnairy/uploadimage';
import { addProfile } from '../Store/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setImgUrl } from '../Store/profileSlice';

function AddProfile() {
    const [name, setName] = useState('');
    const [desigination, setDesigination] = useState('');
    const [contact, setContact] = useState('');
    const [interests, setInterest] = useState('');
    const [address, setAddress] = useState('');

    const imgUrl = useSelector(state => state.profiles.imgUrl);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!imgUrl) {
            alert("Please upload an image.");
            return;
        }

        const newProfile = {
            name,
            description: desigination,
            contact,
            interests,
            address,
            photo: imgUrl,
        };

        dispatch(addProfile(newProfile));
        dispatch(setImgUrl("")); 

        setName('');
        setDesigination('');
        setContact('');
        setInterest('');
        setAddress('');
    };

    return (
        <div className='w-full h-f'>
            <Navbar />
            <div className='w-full flex justify-center items-center h-[calc(100vh-72px)]'>
                <form onSubmit={handleSubmit} className='w-[500px] text-center flex flex-col border-2 rounded-md p-5'>
                    <h3 className='text-2xl'>Add New Profile</h3>
                    <input
                        className='p-2 rounded-md border my-2'
                        value={name}
                        type="text"
                        placeholder='Joe Doe'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='p-2 rounded-md border my-2'
                        value={desigination}
                        type="text"
                        placeholder='Designation'
                        onChange={(e) => setDesigination(e.target.value)}
                    />
                    <input
                        className='p-2 rounded-md border my-2'
                        value={contact}
                        type="email"
                        placeholder='example@gmail.com'
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <input
                        className='p-2 rounded-md border my-2'
                        value={interests}
                        type="text"
                        placeholder='Ex:- coding, Reading'
                        onChange={(e) => setInterest(e.target.value)}
                    />
                    <input
                        className='p-2 rounded-md border my-2'
                        value={address}
                        type="text"
                        placeholder='Pune, Maharashtra'
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <div className='my-2 flex justify-start'>
                        <ImageUploader />
                    </div>

                    <button type='submit' className='bg-black mt-2 text-white rounded-md px-2 py-2'>
                        Add Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProfile;
