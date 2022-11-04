import React from 'react'
import '../../App.css';

const Home = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font font-Raleway">
      <div className="container px-5 py-24 mx-auto">

        <div className="my-14 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium font-Nunito title-font text-white mb-4">Waste Connect</h1>
        </div>

        <div className='flex justify-center space-x-20 font-Poppins'>
          <div className="flex justify-center ">
            <div className="block p-6 rounded-lg w-80 shadow-lg bg-gray-800 text-slate-300 space-y-8">
              <h5 className=" text-xl leading-tight font-medium mb-2">Total Lodged Complains</h5>
              <p className="text-3xl  ml-2">
                40
              </p>
              <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Learn More</button>
            </div>
          </div>

          
          <div className="flex justify-center ">
            <div className="block p-6 rounded-lg w-80 shadow-lg bg-gray-800 text-slate-300 space-y-8">
              <h5 className=" text-xl leading-tight font-medium mb-2">Total Complains Resolved</h5>
              <p className="text-3xl  ml-2">
                36
              </p>
              <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Learn More</button>
            </div>
          </div>

          
          <div className="flex justify-center ">
            <div className="block p-6 rounded-lg w-80 shadow-lg bg-gray-800 text-slate-300 space-y-8">
              <h5 className=" text-xl leading-tight font-medium mb-2">Total Bins Installed</h5>
              <p className="text-3xl  ml-2">
                4
              </p>
              <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Learn More</button>
            </div>
          </div>
        </div>

   </div>
    </section>
  )
}

export default Home