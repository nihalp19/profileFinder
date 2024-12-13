import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import avatar from "../assets/pexels-mart-production-7606016.jpg"
import { setEditableProfile,setEditModule,DeleteProfile } from '../Store/profileSlice';
import { useDispatch } from 'react-redux';
import EditModule from '../components/EditModule';
function AdminPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const profiles = useSelector((state) => state.profiles.profiles)
    const isEditModuleOpen = useSelector((state) => state.profiles.isEditModuleOpen)
    

    const handleAddProfile = () => {
        navigate('/admin/addprofile')
    }

    const handleEdit = (id) => {
        dispatch(setEditModule())
        dispatch(setEditableProfile(id))
    }
    const handleDelete = (id) => {
        dispatch(DeleteProfile(id))
        
    }

    return (
        <div>
            <Navbar />
            <div className={isEditModuleOpen ? 'block fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50' : 'hidden'}>
                <EditModule/>
            </div>
            <div className='flex  flex-col items-center'>
                <button className='bg-black text-white px-6 py-4 rounded-md mt-4'onClick={handleAddProfile}>Add New Profile</button>
                <div className='w-[40%]'>
                    {profiles.map((p, i) => (
                        <div key={i} className='flex justify-between items-center rounded-md bg-black text-white p-4 mt-4'>
                            <div className='flex items-center gap-2'>
                                <img src={p.photo} alt="" className=' w-[50px] h-[50px] rounded-full object-cover' />
                                <p>{p.name}</p>
                            </div>
                            <div className='flex gap-4'>
                                <IoPencil className='text-white' style={{ width: "25px", height: "25px" }} onClick={() => handleEdit(p.id)}/>
                                <MdDelete className='text-white' style={{ width: "25px", height: "25px" }} onClick={() => handleDelete(p.id)}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AdminPage