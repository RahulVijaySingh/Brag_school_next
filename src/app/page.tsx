"use client";
import Image from 'next/image'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFaceAngry } from '@fortawesome/free-solid-svg-icons';



export default function Home() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };




  return (

    <>

      {/* <div className='w-full h-screen text-black bg-white'> */}
      <nav className="flex items-center justify-between h-20 px-6 py-4 bg-blue-100">
        {/* Left section */}

        <a href="https://schoolhues.com/">
          <div className="flex items-center">
            <Image src="/0.png" alt="Logo" width={160} height={64} />
          </div>
        </a>

        {/* Right section */}
        <div className="flex items-center mr-40 space-x-8">
          <a href="/login" className="text-black hover:text-blue-600">
            Login
          </a>
          <a href="/post-job" className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
            Post Job
          </a>
        </div>
      </nav>


      {/* nav content */}
      <div className="w-full bg-blue-100 h-[70vh] flex ">






        <h1 className='absolute top-1/3 left-[30%] text-black font-bold text-[32px] '>Over <span style={{ color: "blue" }}> 1200+ </span> jobs are waiting for you</h1>


        <div className="bg-white h-16 rounded-full flex justify-center items-center shrink  p-2 absolute top-[42%] left-[20%] text-black w-auto md:w-auto">
          <div className="flex items-center space-x-2">


            <FontAwesomeIcon icon={faCoffee} />
            <input type="text" placeholder="Search job" className="bg-transparent focus:outline-none" />
          </div>

          <div className="flex items-center ml-4 space-x-2">

            <i className="fa-solid fa-location-crosshairs fa-spin"></i>
            <input type="text" placeholder="Location" className="bg-transparent focus:outline-none" />
          </div>

          <div className="flex items-center ml-4 space-x-2">

            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Category" className="bg-transparent focus:outline-none" />
          </div>

          <button className="px-4 py-2 ml-4 mr-6 text-white bg-blue-500 rounded-full">Search</button>
          <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-full">Clear</button>
        </div>

        <small className='absolute top-[55%] left-[35%] text-black'>Popular Searches: Communication,Patience</small>
      </div>
      {/* Header  is finished */}




      <div className='h-32 mt-8'>
        <h1 className='mt-5   text-[32px] font-bold' style={{ textAlign: "center" }}>Current Vacancies in Different Schools</h1>
        <h5 className='mt-5 font-bold' style={{ textAlign: "center" }}>Find schools that deserve you!</h5>
      </div>




      <div style={{ width: "100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }} >
        <div className="grid grid-cols-3 gap-4">
          <div className="h-auto max-w-full overflow-hidden rounded-lg shadow-lg" style={{ height: "350px", width: "70%" }}>
            <div className="p-4 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
              <img src="1.jpg" alt="Image 1" />

            </div>
            <h1 >Global Public School <br />Hyderabad</h1>
          </div>
          <div className="h-auto max-w-full overflow-hidden rounded-lg shadow-lg" style={{ height: "400px" }}>
            <div className="p-4 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
              <img src="2.jpg" alt="Image 2" />
            </div>
          </div>
          <div className="h-auto max-w-full overflow-hidden rounded-lg shadow-lg" style={{ height: "400px" }}>
            <div className="p-4 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
              <img src="3.jpg" alt="Image 3" />
            </div>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-center mt-8">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
          View all schools
        </button>
      </div>


      {/* browse by category */}
      <div className="w-full  bg-blue-100 h-[70vh] mt-8   p-8">

        <h1 className='text-3xl font-bold text-center'>Browse by category</h1>

        <h1 className='mt-2 text-2xl text-center'>Browse openings in those categories</h1>
        <div className='flex items-center justify-between'>
          <div className='w-40 h-32 mt-8 rounded-2xl bg-sky-300'>
            <h1 className='p-2'>Primary Teacher</h1>
          </div>
          <div className='w-40 h-32 mt-8 rounded-2xl bg-sky-300'>
            <h1 className='p-2'>Senior Teacher</h1>
          </div>
          <div className='w-40 h-32 mt-8 rounded-2xl bg-sky-300'>
            <h1 className='p-2'>InterMediate Teacher</h1>
          </div>
        </div>


        <div className="flex items-center justify-center mt-8">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            View all category
          </button>
        </div>

      </div>


      <h1 className='mt-5 text-3xl font-bold' style={{ textAlign: "center" }}>Live Competitions</h1>

      <h5 className="mb-4 text-xl" style={{ textAlign: "center" }}>Participate in different Events</h5>




{/* carousel */}

<Carousel responsive={responsive}>
  
  <div className='m-2 card hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
    <img className='product--image'
     src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/Spelling-bee-2020-scaled-1.jpg?resize=2048%2C790&ssl=1" alt="carousel" />
     <h1 className='mt-32 text-4xl font-bold '>Spelling Competition</h1>
     <h1 className='font-bold'> August 2023</h1>
  </div>
 
  <div className='m-2 card hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
    <img className='product--image'
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Horse_riding_in_coca_cola_arena_-_melbourne_show_2005.jpg/1200px-Horse_riding_in_coca_cola_arena_-_melbourne_show_2005.jpg" alt="carousel" />
     <h1 className='text-4xl font-bold '>Horse Riding</h1>
     <h1 className='font-bold'> August 2023</h1>
  </div>
 
  <div className='m-2 card hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
    <img className='product--image'
     src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/Chess_Tournaments_00-1024x585-1.webp?ssl=1" alt="carousel" />
    <h1 className='mt-16 text-4xl font-bold '>Chess Tournament</h1>
     <h1 className='font-bold'> August 2023</h1>
  </div>
 
  <div className='m-2 card hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
    <img className='product--image'
     src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/code-challenge-banner.png?ssl=1" alt="carousel" />
     <h1 className='mt-32 text-4xl font-bold '>Kid CODING Challenge</h1>
     <h1 className='font-bold'> August 2023</h1>
  </div>
 
  <div className='m-2 card hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
    <img className='product--image'
     src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/chess-1.jpg?ssl=1" alt="carousel" />
    <h1 className='mt-16 text-3xl font-bold '>Chess FOR Seniors</h1>
     <h1 className='font-bold'> August 2023</h1>
  </div>
 
  

</Carousel>;



<div className="mb-5" style={{ width: "100%", height: "400px", display: "flex", backgroundColor: "#999999", justifyContent: "center", flexDirection: "column", alignItems: "center" }} >
      
      
      <h3 className='font-bold'>CANDIDATE</h3>
      <br />


      <h1 style={{ fontSize: "64px" }}>Find your dream job</h1>
      <h2 className='font-bold'>Recruiters looking for talent can find your resume based on</h2>
      <h2 className='font-bold'>keywords, job titles, skills and more.</h2>

     
    </div> 



{/* footer */}

<footer className="mx-3" style={{ display: "grid", gridTemplateColumns: "30% auto auto 30%" }}>
        <div className='mb-3 left-foot' style={{ display: "flex", flexDirection: "column", justifyContent: 'center' }} >
          <h4>About us</h4>
          <h5>SER Center, Prasadampadu, Vijayawada,</h5>
          <h5>India - 521108</h5>
          <h5>+91 9685511620</h5>
          <h5>hello@schoolhues.com</h5>
          <div >
          <FontAwesomeIcon icon={faFaceAngry} />
          <i className="mx-2 fa-brands fa-linkedin" ></i>
          <i className="mx-2 fa-brands fa-twitter"></i>
          <i className="mx-2 fa-brands fa-facebook-f"></i>
          </div>      
        </div>

        <div className='mb-3 left-foot' style={{ display: "flex", flexDirection: "column", justifyContent: 'center' }} >
          <h5>Company</h5>
          <h5>About us</h5>
          <h5>Blogs</h5>
          <h5>Contacts</h5>
        </div>

        <div className='mb-3 left-foot' style={{ display: "flex", flexDirection: "column", justifyContent: 'center' }} >
        <h5>Services</h5>
        <h5>Jobs</h5>
        <h5>Schools</h5>
        <h5>Candidate</h5>
        </div>

        <div>
        <img src="https://schoolhues.com/wp-content/uploads/2022/10/b.png" width="300" height="200" className="align-top d-inline-block" alt="" />
        </div>

      </footer>


      <div className='container m-5' style={{margin:"100px"}}>
      <h6>@ 2023 SchoolHues. All Right Reserved</h6>    
       </div>







    </>

  )
}