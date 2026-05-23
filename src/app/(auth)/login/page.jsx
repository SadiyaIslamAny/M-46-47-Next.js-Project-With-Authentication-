"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLoginFunc = async (data) => {
        console.log(data)
        const { email,password } = data;
        // console.log(email, name, photo, password)

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: "/",
        });
        // console.log(res, error)
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Signin Successful")
        }
    }

    const [isShowPassword, setIsShowPassword] = useState(false)
    // console.log(errors)

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 '>
            <div className='p-4 bg-white rounded-xl'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email address</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Type here email"
                            {...register("email", { required: "email field is required" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="input"
                            placeholder="Type here password"
                            {...register("password", { required: "password field is required" })}
                        />
                        <span className='absolute right-2 top-4 cursor-pointer' onClick={() =>setIsShowPassword(!isShowPassword)}>
                            {isShowPassword? <FaEye/> : <FaEyeSlash/>}
                        </span>
                        
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Login</button>

                </form>
                <p className='mt-4 text-center'>Dont have an account? <Link href={'/register'} className='text-blue-500 font-medium'>Register</Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;