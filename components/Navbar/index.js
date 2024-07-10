import Link from "next/link";
import ChooseLanguage from "../ChooseLanguage";

export default function () {
    return (
        <nav className="fixed top-0 justify-between bg-black text-white py-2 px-4 flex w-screen h-[60px] items-center">
            <div className="w-1/4 md:w-1/2">My Resume</div>
            <div className=" w-2/4 hidden lg:block">
                <ul className="flex">

                    <li className="mx-2 hover:text-green-600"> <Link className="flex items-center" href={`/home`}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mx-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        Home</Link> </li>
                    <li className="mx-2 hover:text-green-600"> <Link href={`/home`} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mx-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

                        About</Link> </li>
                    <li className="mx-2 hover:text-green-600"> <Link className="flex -items-center" href={`/home`}>
                        
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mx-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
</svg>

                        Contact</Link> </li>
                    <li className="mx-2 hover:text-green-600"> <Link href={`/home`} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mx-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
</svg>

                        
                        Services</Link> </li>

                </ul>
            </div>

            <div className="w-1/4 flex items-center justify-end md:w-1/2">
                <div className="mx-1">
                    <ChooseLanguage />
                </div>
                <Link href={`/register`}> <button className="border-2 border-green-600 mx-1 rounded px-3 py-1.5 hover:bg-green-700" >Register</button></Link>
                <Link href={`/login`}>   <button className="border-2 border-green-600 bg-green-600 mx-1 rounded px-3 py-1.5 hover:bg-transparent" >Login</button></Link>

            </div>
        </nav>
    )
}