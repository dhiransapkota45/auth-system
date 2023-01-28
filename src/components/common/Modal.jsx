import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaSolarPanel } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { postuser } from '../../api/services/addUser';
import { editputUser } from '../../api/services/editUser';

const Modal = ({ setModal, editdata = {}, type }) => {
  const { firstname, lastname, email, phonenumber, isActive, password, role, id } = editdata
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (type === "adduser") {
      // dispatch(adduser(data))
      dispatch(postuser(data))
    } else if (type === "edituser") {
      console.log(editdata);
      // dispatch(edituser({ ...data, id: data.email }))
      dispatch(editputUser(data, id && id))
    }
    setModal({ edit: { state: false, data: {} }, add: false })
  }
  const defaultValues = {
    firstname: firstname ? firstname : "",
    lastname: lastname ? lastname : "",
    email: email ? email : "",
    phonenumber: phonenumber ? phonenumber : "",
    isActive: isActive ? isActive : "",
    password: password ? password : "",
    role: role ? role : "",
  }

  return (
    <>
      <div onClick={() => setModal({ edit: { state: false, data: {} }, add: false })} className=' absolute top-0 left-0 w-screen h-screen backdrop-blur'></div>
      <div className='  absolute top-20 w-fit  left-[400px]   flex justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='   w-96 flex flex-col gap-5 border bg-gray-800 px-4 py-8 rounded-lg'>

          <div className='  overflow-hidden'>
            <span className=' text-white'>firstname</span>
            <input {...register("firstname")} defaultValue={defaultValues.firstname} type="text" className='p-2 outline-none w-full rounded-md bg-gray-600 text-white' placeholder='firstname' />
          </div>
          <div className=' overflow-hidden'>
            <span className=' text-white'>lastname</span>

            <input {...register("lastname")} defaultValue={defaultValues.lastname} type="text" className='p-2 outline-none w-full bg-gray-600 rounded-md text-white' placeholder='lastname' />
          </div>
          <div className='  overflow-hidden'>
            <span className=' text-white'>email</span>

            <input {...register("email")} defaultValue={defaultValues.email} type="email" className='p-2 outline-none w-full bg-gray-600 text-white rounded-md' placeholder='email' />
          </div>
          <div className='  overflow-hidden'>
            <span className=' text-white'>password</span>

            <input {...register("password")} defaultValue={defaultValues.password} type="text" className='p-2 outline-none w-full bg-gray-600 rounded-md text-white' placeholder='password' />
          </div>
          <div className='  overflow-hidden'>
            <span className=' text-white'>IsActive</span>

            <select {...register("isActive")} defaultValue={defaultValues.isActive} type="text" className='p-2 outline-none w-full bg-gray-600 rounded-md text-white' placeholder='isActive' >
              <option value="active" selected>Active</option>
              <option value="inactive">Inactive</option>

            </select>
          </div>
          <div className='  overflow-hidden'>
            <span className=' text-white'>phone</span>

            <input {...register("phonenumber")} defaultValue={defaultValues.phonenumber} type="number" className='p-2 outline-none w-full bg-gray-600 rounded-md text-white' placeholder='phone' />
          </div>
          <div className='  overflow-hidden'>
            <span className=' text-white'>IsAdmin</span>

            <select {...register("role")} defaultValue={defaultValues.role} type="text" className='p-2 outline-none w-full bg-gray-600 text-white rounded-md' placeholder='role' >
              <option value="admin" selected>Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button className=' p-2 text-white font-bold border rounded' type='submit'>submit</button>
        </form>
      </div>
    </>
  )
}

export default Modal