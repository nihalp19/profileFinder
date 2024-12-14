import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { MapWithCity } from '../MapApi/Map'
import { useSelector } from 'react-redux'
function ProfileCard() {
    const profiles = useSelector(state => state.profiles.profiles)
    const [showMap, setShowMap] = useState(false)
    const { id } = useParams()
    const profile = profiles.find((profile) => profile.id === parseInt(id, 10));
    console.log(profile)
    return (
        <div>
            <Navbar />
            <div className='flex justify-center gap-5 w-full h-full m-4'>
                <div className='flex-1'>
                    <img src={profile.photo} alt={profile.name} className='w-full rounded-md' />
                </div>
                <div className='flex-1 p-4'>
                    <div className='bg-black w-[60%] rounded-md p-4 text-white'>
                        <p className='mt-2'>Name : {profile.name}</p>
                        <p className='mt-2'>Contact : {profile.contact}</p>
                        <p className='mt-2'>Description : {profile.description}</p>
                        <p className='mt-2'>Interest : {profile.interests}</p>
                        <p className='mt-2'>Address : {profile.address}</p>
                        <button className='bg-white text-black px-4 py-2 rounded-md mt-2' onClick={() => setShowMap((showMap) => !showMap)}>{showMap ? "Hide Map" : "Show Map"}</button>
                    </div>
                    {showMap && (
                        <div className='relative mt-2'>
                            <MapWithCity city={profile.address} />
                        </div>
                    )
                    }

                </div>
            </div>
        </div>
    )
}

export default ProfileCard