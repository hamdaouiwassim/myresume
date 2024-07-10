"use client";

import AuthService from "@/services/auth.service";
import { useState } from "react";
import { toast } from "sonner";

export default function () {
    const [loading,setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    });

    const register = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            //const response = await AuthService.register(form)
            //if (response.status == 201) {
                toast.success('Account created successfully ...');
            //}
            setLoading(false);
        } catch (Err) {
            setLoading(false);
            console.log(Err);
            toast('Erreur while creating this account ...');

        }

    }

    return (

        <form onSubmit={register} className="p-4 my-0 mx-auto w-1/2 text-gray-500">

            <div className="text-l flex flex-col mb-4">
                <label className="mb-1.5 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mx-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                    Email :</label>
                <input className="py-1.5 px-6 border rounded" placeholder="Youremail@test.com" type="text" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="text-l flex flex-col mb-4">
                <label className="mb-1.5 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mx-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
</svg>

                    Password :</label>
                <input className="py-1.5 px-6 border rounded" type="password" placeholder="Your password here" value={form.password} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="text-l flex flex-col mb-4">
                <label className="mb-1.5 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mx-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
</svg>

                    Confirm password :</label>
                <input className="py-1.5 px-6 border rounded" type="password" placeholder="Repeat your password here" value={form.password_confirmation} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="py-2 flex justify-end">
                <button type="submit" className=" bg-blue-700 text-white rounded px-6 py-1.5 hover:bg-blue-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mx-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>

                    Create your account</button>
            </div>
        </form>


    )
}