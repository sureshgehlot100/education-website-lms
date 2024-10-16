import React, { useContext, useEffect, } from 'react'
import logo from '../img/logo (1).svg'
import minlogo from '../img/logo-mini.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { mainContext } from '../Context';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'

function Header() {

  const nav = useNavigate();

  let { changemenu, setchangeMenu } = useContext(mainContext);

  const IfAdminLoggedIn = () => {
    const ifAdmin = Cookies.get('admin');

    console.log(ifAdmin);
    if (!ifAdmin) {

      nav('/');

    }
  };
  useEffect(() => { IfAdminLoggedIn() }, []);

  const logOutAdmin = () => {
    Cookies.remove('admin');

    nav('/');
  }

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200  py-2.5  shadow-lg relative z-[999]">
          <div className="flex  justify-between items-center mx-auto ">
            <div className={` duration-[0.5s] mx-5  ${changemenu === true ? 'w-[3%] ' : 'w-[16%]'}`}>
              <a href="#" className="flex items-center text-2xl font-bold">
                {
                  changemenu === true ? (
                    <img src={`https://opsight.ai/logo.jpg`} className="mr-3 h-6 sm:h-9" />
                  ) : (
                    <>
                      <img src={`https://opsight.ai/logo.jpg`} className="mr-3 h-6 sm:h-9" />
                      <span>Opsight</span>
                      <span className="self-center text-2xl font-bold whitespace-nowrap text-green-600 ">.AI</span>
                    </>
                  )
                }
              </a>
            </div>
            <div className={`flex items-center lg:order-2 w-[84%] duration-[0.5s] ${changemenu === true ? 'w-[97%]' : 'w-[84%]'}  justify-between`}>
              <FontAwesomeIcon icon={faBars} onClick={() => setchangeMenu(!changemenu)} />
              <div>
                <button onClick={logOutAdmin} className="text-gray-800   focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log Out</button>
                <a href="#" className=" bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">My Profile</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header