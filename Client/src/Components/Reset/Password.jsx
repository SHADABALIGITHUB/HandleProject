import React, { useState } from 'react'
import axiosInstance from '../../lib/axiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Password = () => {
    const [isverified, setIsVerified] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [issame,setIsSame] = useState(true);
    const navigate = useNavigate();
    const handleClickToVerify = async () => {
        try {
            const res = await axiosInstance.post("/auth/resetpassword/verify",{email});
            if(res.data.success){
                setIsVerified(true);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);
        }
    }

    const handleClickToProceed = async () => {
        try {
            if(password!==confirmPass){
                toast.error("Password does not match");
                return;
            } 
            const res = await axiosInstance.patch("/auth/reset/password",{email,password});
            if(res.data.success){
                toast(res.data.message);
                navigate("/login");
            }

        } catch (error) {
            console.log(error);
            toast(error.response.data.error);
        }
    }

    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value);
        if(e.target.value != password){
            setIsSame(false);
        }
        else{
            setIsSame(true);
        }
    }

    return (
        <div className="flex bg-black text-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8 rounded-2xl">
            <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2 flex justify-center" />
                <h2 className="text-center text-2xl font-bold leading-tight flex justify-around items-center">
                    Reset Password
                </h2>
                <form
                    action="#"
                    className="mt-8"
                    method="POST"
                >
                    <div className="space-y-5">
                        <div>
                            <label className="text-sm font-medium">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Email"
                                    type="email"
                                    name='email'
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                />
                            </div>

                        </div>
                    </div>
                    {isverified && <div className="mt-2">
                        <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Password"
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <input
                            className={`flex h-10 w-full rounded-md border ${issame?"border-gray-300":"border-[red]"} bg-transparent px-3 my-2 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                            placeholder="Confirm Password"
                            type="password"
                            name='confirmPass'
                            value={confirmPass}
                            onChange={handleConfirmPass}
                        />
                    </div>}
                    <div>
                        {isverified ? <button
                            className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-white/80"
                            type="button"
                            onClick={handleClickToProceed}
                        >
                            Change Password
                        </button> :
                            <button
                                className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-white/80"
                                type="button"
                                onClick={handleClickToVerify}
                            >
                                Proceed
                            </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Password