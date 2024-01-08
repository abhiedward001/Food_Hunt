import React from 'react'

function Header() {
    return (
        <div className="headerContainer  bg-gray-800 h-280 w-full mb-4">
            <div className="Header flex justify-between ">
                <div className="headerIconContainer max-w-20">
                    <img className="h-20 max-w-20" src='https://uploads-ssl.webflow.com/623b199ca2171a083b6bb379/6387cc2b2c00617c6b094716_1024%20x%201024%2048%400.25.png' alt='' />
                </div>

                <ul className="flex  py-4 ">
                    <li className="px-4   text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased">HOME</li>
                    <li className="px-4   text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased">Resturants</li>
                    <li className="px-4   text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased">About Us</li>
                    <li className="px-4   text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased">Privacy</li>
                    <li className="px-4   text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased">Cart</li>
                    <button className="login-Btn px-2 text-white font-mono text-md font-bold hover:bg-gray-900 hover:rounded-md antialiased"> </button>
                </ul>
            </div>

        </div>
    )
}

export default Header