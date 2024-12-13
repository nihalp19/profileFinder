import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import avatar from "../assets/pexels-mart-production-7606016.jpg"

function ProfileList() {
    const profiles = useSelector(state => state.profiles.profiles)
    const isSearching = useSelector(state => state.profiles.isSearching)
    const searchedProfile = useSelector(state => state.profiles.searchedProfile)

    const dataToDisplay = isSearching ? searchedProfile : profiles;

    return (
        <div className='flex flex-wrap justify-center'>
            {dataToDisplay.length > 0 ? (
                dataToDisplay.map((d, i) => (
                    <Link to={`/profile/${d.id}`} key={i}>
                        <div className='w-[220px] h-[150px] rounded-md m-6 p-3 bg-black text-white transform transition duration-300 hover:scale-105'>
                            <div className='flex items-center gap-4'>
                                <img src={d.photo} className='w-[50px] h-[50px] rounded-full object-cover' alt="profile-pic" />
                                <p>{d.name}</p>
                            </div>
                            <p className='px-4 py-4'>{d.description}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No profiles found.</p>
            )}
        </div>
    )
}

export default ProfileList