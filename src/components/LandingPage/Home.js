import React from 'react'
import headerImage from '../../assets/headerFood.jpg';
import Header from './Header';
function Home() {
    return (

        <div className='w-full '>
            {/* <div className='Header mx-24  w-10/12 ' >
                <ul className='flex justify-between'>
                    <li className='text-xl font-bold px-10'>Home</li>
                    <li className='text-xl font-bold px-10'>Resturants</li>
                    <li className='text-xl font-bold px-10'>AboutUs</li>
                    <li className='text-xl font-bold px-10'>Privacy</li>
                    <button className='text-xl font-bold px-10'>Login</button>
                </ul>
            </div> */}

            <Header></Header>

            <div className='relative my-8'>
                <div className='search absolute top-44 left-80 mx-32  opacity-80 '>
                    <h2 className='text-4xl font-extrabold'>Order Now</h2>
                    <h3 className='text-2xl font-semibold my-2'>From your nearest resturants</h3>
                    <input className='bg-black w-[450px] h-[55px] rounded-lg px-4 ' type='text' placeholder='Type Your Delivery Location'></input>
                    <button className='w-[90px] h-[55px] bg-blue-200 rounded-lg mx-2' >Submit</button>
                    <h3 className='text-lg my-3 font-semibold'>We deliver in Bangalore,Delhi,Chandigarh,Hyderabad,Uttar Pradesh...</h3>
                </div>

                
                <div className='Image h-[500px]  w-11/12 mx-auto '>
                    <img className='h-[500px] w-full rounded-b-[350px] rounded-t-[20px] ' src={headerImage} alt='Not displaying'></img>
                </div>

                {/* <div id="default-carousel" className=" w-full" data-carousel="slide">

                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img className='h-[500px] w-full rounded-b-[350px] rounded-t-[20px] ' src={headerImage} alt='Not displaying'></img>
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img className='h-[500px] w-full rounded-b-[350px] rounded-t-[20px] ' src={headerImage} alt='Not displaying'></img>
                        </div>

                    </div>
                </div> */}

            </div>

        </div>

    )
}

export default Home;