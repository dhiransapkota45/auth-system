import React, { useState } from 'react'
import { login } from '../../api/services/authentication'
import { useNavigate } from 'react-router-dom'
import { FaLock, FaUserAlt } from "react-icons/fa"

const avatar =
    "https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg";


const Login = () => {
    const navigate = useNavigate()
    const [userdata, setUserdata] = useState({ email: "", password: "", rememberMe: false })
    const onchangeHandler = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }

    const onsubmitHandler = (e) => {
        console.log(userdata);
        e.preventDefault()
        login(userdata, navigate)
    }
    return (

        <div className="flex justify-center items-center h-screen relative">
            <form
                onSubmit={onsubmitHandler}
                className="flex border p-4 shadow-md px-8 flex-col items-center justify-center max-w-lg "
            >
                <img src={avatar} alt="" className=" w-16 rounded-full mb-6" />
                <div className=" font-sans text-2xl mb-6">Login</div>

                <div className=" border border-gray-200 w-full p-2 mb-6 flex items-center  rounded-md">
                    <FaUserAlt className="mx-3" />
                    <input
                        onChange={onchangeHandler}
                        name="email"
                        value={userdata.email}
                        placeholder="email"
                        type="text"
                        className=" focus:outline-none w-80"
                    />
                </div>

                <div className=" border border-gray-200 w-full p-2  mb-2 flex items-center  rounded-md">
                    <FaLock className="mx-3" />
                    <input
                        name="password"
                        onChange={onchangeHandler}
                        value={userdata.password}
                        placeholder="Password"
                        type="password"
                        className=" focus:outline-none w-full"
                    />
                </div>

                <div className=' w-full mb-6 flex gap-2 text-gray-500'>
                    <input name='rememberMe' onChange={(e) => setUserdata({ ...userdata, rememberMe: e.target.checked })} type="checkbox" />
                    <span>Remember Me</span>
                </div>

                <div className="w-full">
                    <button
                        className="w-full bg-emerald-600 p-2 text-md text-white
                 hover:bg-emerald-700 rounded-lg"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>


            <div className=' absolute bottom-0 bg-red-300 p-2'>
                For testing use email:arjun@email.com password:12345678
            </div>
        </div>
    )
}

export default Login