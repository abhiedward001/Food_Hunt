import React from 'react';
import { useState} from 'react';
import ResturantCard from './RestuarantCard';


function Restuarant({filterResturants}) {
    
    const [view, setView] = useState(true);

    const viewAllRestuarantsHandler = () => {
        setView(!view);
    }

  return (
    <>
    <div className='Resturants my-3 w-full mx-auto bg-gray-200 '>
                <div className='justify-center text-center pt-20'>
                    <h1 className='text-3xl text-red-400 font-bold pb-3'>Featured Resturants</h1>
                    <h3 className='text-lg text-gray-400 font-semibold  pb-2'>Based on Ratings</h3>
                </div>

                <div className="resContainer flex flex-wrap  justify-center pb-5 mb-3">

                    {
                       view ? filterResturants.slice(0,3).map((item) => <ResturantCard resData={item} />):filterResturants.map((item) => <ResturantCard resData={item} />)
                    }

                </div>

                {view && <div className=' flex justify-center w-10/12 mx-auto'  >
                    <button className='bg-red-400 p-2 rounded-lg w-24 h-12 text-center mb-3 ' onClick={viewAllRestuarantsHandler}>View all</button>
                </div>
                }


            </div>
    </>
  )
}

export default Restuarant;