import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAdmin, setSearching, setSearchProfile } from '../Store/profileSlice';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const isAdmin = useSelector((state) => state.profiles.isAdmin)
  const isSearching = useSelector((state) => state.profiles.isSearching)
  const dispatch = useDispatch()

  console.log(isSearching);


  const handleToggle = () => {
    if (isAdmin) {
      dispatch(setAdmin())
      navigate("/")
    }
    else {
      dispatch(setAdmin())
      navigate("/admin")
    }
  }

  const handleSearch = (state) => {
    if (state) {
      dispatch(setSearching(state))
      dispatch(setSearchProfile(search))
    }else{
      dispatch(setSearching(state))
    }
  }



  return (
    <div className='bg-black w-full'>
      <nav className='flex items-center justify-between p-4  '>
        <div className='text-white text-3xl'>
          <Link to="/">Profile Finder</Link>
        </div>
        <div className='relative'>
          <input className=' pl-4 p-2 rounded-sm w-[400px]' value={search} type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} onFocus={() => handleSearch(true)} onBlur={() => handleSearch(false)} onKeyDown={() => handleSearch(true)} />
          <CiSearch className='absolute top-1 right-2' style={{ width: "25px", height: "35px" }} />
        </div>
        <div>
          <button className='bg-white px-6 py-2 rounded-md' onClick={handleToggle}>{isAdmin ? "view mode" : "Admin"}</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar