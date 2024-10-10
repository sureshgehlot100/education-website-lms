import React from 'react'

function Header() {
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
                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Logout
                </button>

                {/* <!-- My Profile link --> */}
                <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out ml-2">
                    My Profile
                </a>
            </div>
        </div>
    )
}

export default Header