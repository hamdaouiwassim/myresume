"use client";

import AuthService from "@/services/auth.service";
import { useState } from "react";
import { toast } from "sonner";

export default function () {
    const [loading,setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
        
    });

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            //const response = await AuthService.login(form)
            //if (response.status == 201) {
                toast('Login successfully ...');
           // }
            setLoading(false);
        } catch (Err) {
            setLoading(false);
            console.log(Err);
            toast('Erreur while Login to this account ...');

        }

    }

    return (

        <form onSubmit={login} className="p-4 my-0 mx-auto w-1/2 text-gray-600">

            <div className="text-l flex flex-col mb-2">
                <label className="mb-1.5">Email </label>
                <input className="py-1.5 px-2.5 border rounded" placeholder="Youremail@test.com" type="text" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="text-l flex flex-col mb-2">
                <label className="mb-1.5">Password </label>
                <input className="py-1.5 px-2.5 border rounded" type="password" placeholder="Your password here" value={form.password} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
           
            <div className="py-2 flex justify-end">
                <button type="submit" className=" bg-blue-700 text-white rounded px-6 py-1.5 hover:bg-blue-600">Login</button>
            </div>
        </form>


    )
}