// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-between min-h-screen p-24">
//       <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
//         <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }



import Image from 'next/image'
import { Carousel } from 'flowbite';

import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

  // for carousel




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

      <h5 className="text-xl" style={{ textAlign: "center" }}>Participate in different Events</h5>





      














    </>

  )
}