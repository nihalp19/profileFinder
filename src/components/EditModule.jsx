import React, { useState, useEffect } from 'react'
import ImageUploader from '../cloudnairy/uploadimage'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setEditModule, updateProfile } from '../Store/profileSlice'
import { RxCross1 } from "react-icons/rx";
function EditModule() {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profiles.EditableProfile)
    const imgUrl = useSelector((state) => state.profiles.imgUrl)

    console.log(profile);

    const handleEdit = (id) => {
        dispatch(setEditModule())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedProfile = {
            ...profile,
            name,
            description: desigination,
            contact,
            interests,
            address,
            photo: imgUrl,
        };
        dispatch(updateProfile(updatedProfile))
        dispatch(setEditModule())
    }

    const [desigination, setDesigination] = useState()
    const [contact, setContact] = useState()
    const [interests, setInterest] = useState()
    const [address, setAddress] = useState()
    const [name, setName] = useState()


    useEffect(() => {
        if (profile) {
            setName(profile.name || "");
            setDesigination(profile.description || "");
            setContact(profile.contact || "");
            setInterest(profile.interests || "");
            setAddress(profile.address || "");
        }
    }, [profile]);

    return (
        <div className='w-full h-f relative'>
            <div className='w-full flex justify-center items-center h-[calc(100vh-72px)]'>
                <form onSubmit={handleSubmit} className='w-[500px] bg-black relative text-center flex flex-col border-2 rounded-md p-5'>
                    <RxCross1 className='absolute top-4 right-4 text-white' onClick={handleEdit} />
                    <h3 className='text-2xl text-white'>Edit Profile</h3>
                    <input className='p-2 rounded-md border my-2' value={name} type="text" placeholder='Joe Doe' onChange={(e) => setName(e.target.value)} />
                    <input className='p-2 rounded-md border my-2' value={desigination} type="text" placeholder='desigination' onChange={(e) => setDesigination(e.target.value)} />
                    <input className='p-2 rounded-md border my-2' value={contact} type="email" placeholder='example@gmail.com' onChange={(e) => setContact(e.target.value)} />
                    <input className='p-2 rounded-md border my-2' value={interests} type="text" placeholder='Ex:- coding,Reading' onChange={(e) => setInterest(e.target.value)} />
                    <input className='p-2 rounded-md border my-2' value={address} type='text' placeholder='pune mahaarastra' onChange={(e) => setAddress(e.target.value)} />
                    <div className='my-2 flex justify-start'>
                        <ImageUploader />
                    </div>
                    <button type=' submit ' className='bg-white mt-2  rounded-md px-2 py-2'>Edit</button>
                </form>
            </div>
        </div>
    )
}


export default EditModule