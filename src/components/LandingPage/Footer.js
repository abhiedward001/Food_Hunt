import React from 'react'

function Footer() {
    return (
        <div className='footer flex flex-wrap justify-between bg-black text-white '>
            <div className='pt-10 px-4 h-full '>
                <h1 className='text-4xl font-bold pt-2'>Company</h1>
                <ul className='py-12 ' >
                    <li className='py-2'> Contacts</li>
                    <li className='py-2'> Careers</li>
                    <li className='py-2'> About Us</li>
                </ul>
            </div>

            <div className='py-10 px-4'>
                <h1 className='text-4xl font-bold '>Product</h1>
                <ul className='py-12' >
                    <li className='py-2'> Contacts</li>
                    <li className='py-2'> Careers</li>
                    <li className='py-2'> About Us</li>
                </ul>
            </div>

            <div className='py-10 px-4'>
                <h1 className='text-4xl font-bold '>Complaince</h1>
                <ul className='py-12' >
                    <li className='py-2'> Contacts</li>
                    <li className='py-2'> Careers</li>
                    <li className='py-2'> About Us</li>
                </ul>
            </div>
          
            <div className='py-10 px-4'>
            <ul className='flex flex-wrap px-4'>
                <li className='px-4 text-4xl'><i class="fa-solid fa-envelope"></i></li>
                <li className='px-4 text-4xl'><i class="fa-brands fa-linkedin"></i></li>
                <li className='px-4 text-4xl'><i class="fa-brands fa-github"></i></li>

            </ul>
            </div>
        </div>
    )
}

export default Footer