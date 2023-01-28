import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { alluser } from '../../api/services/alluser'
import Modal from '../common/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { GrAdd } from "react-icons/gr"
import { MdEdit, MdDelete } from "react-icons/md"
import { deleteUserfunc } from '../../api/services/deleteUser'
import { BiLogOut } from "react-icons/bi"
import { singleUser } from '../../api/services/singleUser'

const Dashboard = () => {
    const alluserdata = useSelector(store => store.userReducer)

    const [modal, setModal] = useState({ edit: { state: false, data: {} }, add: false })
    const [userdata, setUserdata] = useState({})
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()
        navigate("/login")
    }

    let activecount = 0
    alluserdata.alluser.map((data) => {
        if (data.isActive === "active") {
            activecount++
        }
        return null
    })
    console.log(userdata);

    useEffect(() => {
        singleUser(setUserdata)
        // setUserdata(fetchuserdata)
    }, [])
    useEffect(() => {
        if (localStorage.getItem("userid") || sessionStorage.getItem("userid")) {
        } else {
            navigate("/login")
        }
    }, [])

    useEffect(() => {
        dispatch(alluser())
    }, [])
    return (
        <div className=' relative h-screen'>
            <div className=' bg-blue-500 flex items-center justify-evenly  '>
                <div className='font-bold   text-center text-white capitalize'>
                    <div>
                        hey, {userdata?.firstname}
                    </div>
                    <div>
                        Role: {userdata?.role}
                    </div>
                </div>
                <div className=' font-bold  py-10  text-center text-white '> Dashboard</div>
                <button onClick={logout} className=' text-xl text-white mx-10 bg-blue-800 p-2 rounded-full'><BiLogOut /></button>
            </div>

            {
                userdata?.role === "admin" ?
                    <div className=' mx-auto max-w-6xl w-full border mt-6'>
                        <div className=' grid grid-cols-9 p-2 bg-gray-700 text-white font-bold'>
                            <div className=''>S.No.</div>
                            <div className=''>Firstname</div>
                            <div className=''>Lastname</div>
                            <div className=' col-span-2'>Email</div>
                            <div className=''>Phone</div>
                            <div className=''>Active</div>
                            <div className=''>Role</div>

                            <div className=''>Actions</div>

                        </div>
                        <div className='grid grid-cols-9 p-2  font-semibold'>
                            {
                                alluserdata.alluser.map((data, index) => {

                                    return (
                                        <>
                                            <div className=' mb-3'>{index + 1}</div>
                                            <div>{data.firstname}</div>
                                            <div>{data.lastname}</div>
                                            <div className=' col-span-2'>{data.email}</div>
                                            <div>{data.phonenumber}</div>
                                            <div className='capitalize'>{data.isActive}</div>
                                            <div className='capitalize'>{data.role}</div>

                                            <div className=' flex justify-center items-center gap-2'>
                                                <button onClick={() => setModal({ edit: { state: true, data: data }, add: false })} className=' text-white bg-green-700 font-semibold rounded-2xl px-3 py-1 text-center'><MdEdit /></button>

                                                <button onClick={() => { dispatch(deleteUserfunc(data.id)) }} className=' text-white bg-red-500 font-semibold rounded-2xl px-3 py-1 text-center'><MdDelete /></button>

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className=' max-w-4xl mx-auto my-6'>
                        Since you are not admin you do not have access to view details of users
                    </div>

            }


            <div className=' max-w-4xl w-full mx-auto my-9 font-semibold'>
                <div>Total Users: <span>{alluserdata.alluser.length}</span></div>
                <div>Total Active Users: <span>{activecount}</span></div>
                <div> InActive Users: <span>{alluserdata.alluser.length - activecount}</span></div>


            </div>

            {userdata?.role === "admin" && <button onClick={() => setModal({ edit: { state: false, data: {} }, add: true })} className=' absolute bottom-8 right-8  bg-gray-600 p-2 text-xl  rounded-full'>
                <GrAdd />
            </button>}

            {
                modal.add && <Modal type="adduser" setModal={setModal} />
            }
            <div className=' '>
                {
                    modal.edit.state && <Modal type="edituser" setModal={setModal} editdata={modal.edit.data} />
                }
            </div>

        </div>
    )
}

export default Dashboard