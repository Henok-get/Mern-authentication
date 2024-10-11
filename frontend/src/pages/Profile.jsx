import React from 'react'


import { useState, useEffect } from 'react';

import { useDispatch,useSelector} from 'react-redux';

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const [updateSuccess, setUpdateSuccess] = useState(false);
const {currentUser,loading,error} =useSelector((state)=>state.user);
  const [formData,setFormData]=useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
  const handleChange=(e)=>{
setFormData({...formData,[e.target.id]:e.target.value})
  }
  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
<h1 className='text-3xl font-semibold text-center my-7'>
  Profile
</h1>
<form  onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
        defaultValue={currentUser.username}
          type='text'
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
         onChange={handleChange}
        />
        <input defaultValue={currentUser.email}
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange}
        />
        <input
        
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
         onChange={handleChange}
        />
        <button
         
      className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
   {loading ? 'Loading...' : 'Update'}
        </button>
   
      </form>
      <div className='flex justify-between mt-5'>
        <span   onClick={handleDeleteAccount} className='text-red-700 cursor-pointer'>Delete Account</span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>Sign out</span>

      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
      <p className='text-green-700 mt-5'>
        {updateSuccess && 'User is updated successfully!'}
      </p>
    </div>
  )
}

export default Profile