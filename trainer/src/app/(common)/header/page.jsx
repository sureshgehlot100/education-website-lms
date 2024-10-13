"use client"
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';

function Header() {
    const router = useRouter();

  const IfAdminLoggedIn = () => {
    const ifAdmin = Cookies.get('admin');

    console.log(ifAdmin);
    if (!ifAdmin) {

      router.push('/Login');

    }
  };
  useEffect(() => { IfAdminLoggedIn() }, []);

  const logOutAdmin = () => {
    Cookies.remove('admin');

    router.push('/Login');
  }
    return (
        <div class="flex justify-between items-center px-4 py-4 bg-[#FFFFFF]">
            {/* <!-- Logo --> */}
            <div class="flex items-center font-bold text-black text-2xl">
                <img src={`https://opsight.ai/logo.jpg`} className="mr-3 h-6 sm:h-9" />
                <span>Opsight</span>
                <span className="self-center text-2xl font-bold whitespace-nowrap text-green-600 ">.AI</span>
            </div>

            {/* <!-- Navigation --> */}
            <div class="flex items-center">
                {/* <!-- Login/Logout buttons --> */}
                <button onClick={logOutAdmin} className="text-gray-800   focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log Out</button>

                {/* <!-- My Profile link --> */}
                {/* <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out ml-2">
                    My Profile
                </a> */}
            </div>
        </div>
    )
}

export default Header