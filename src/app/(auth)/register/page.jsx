"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
const RegisterPage = () => {
     const { register,handleSubmit, formState:{ errors }} = useForm();
         const handleRegisterFunc = (data) =>{
            console.log(data)
         }
    
        //  console.log(errors)
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 '>
            <div className='p-4 bg-white rounded-xl'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                        {/* user name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type here name"
                            {...register("name", { required: "name field is required" })}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    {/* user url */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type here photo url"
                            {...register("photo", { required: "photo URL field is required" })}
                        />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                        {/* user email */}
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
                        {/* user password */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input"
                            placeholder="Type here password"
                            {...register("password", { required: "password field is required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Register</button>

                </form>
                
            </div>
        </div>
    );
};

export default RegisterPage;