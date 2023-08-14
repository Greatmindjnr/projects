 
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
 
 const Header = () => {
   return (
     <>


 <div className='sm:flex md:flex lg:flex h-26  bg-white justify-center fixed  z-50 menu '>

     <div className="w-20 h-20"><img src="/co.jpg" alt="" /></div>

     <div className=' md: text-white block text-2xl mt-6  lg:hidden '> <FontAwesomeIcon icon={faBars} /></div>
      <div className=' sm:hidden md:hidden lg:flex text-center  mt-6  pr-1 ml-80  font-medium '>
        <div className='pr-10' >About <span><FontAwesomeIcon icon={faAngleDown} /></span></div>
        <div className='pr-10'>Programmes <span><FontAwesomeIcon icon={faAngleDown} /></span></div>
        <div className='pr-10'>Admission <span><FontAwesomeIcon icon={faAngleDown} /></span></div>
        <div className='pr-10'>Eportal <span><FontAwesomeIcon icon={faAngleDown} /></span></div>
        <div className='pr-10'>SQI Scholarship</div>
        <div className='pr-10'>News</div>
        </div>
     </div>

     <div>

    
     </div>
{/* <div>

  <div className=' header lg:flex justify-around '>
    <div><img className='w-20 h-20' src="/co.jpg" alt="" /></div>
    <div className='lg:flex mt-7 bg-white  md:hidden sm:hidden'>
    <div><p  className='pr-10'>About <span><FontAwesomeIcon icon={faAngleDown}/></span></p></div>
    <div><p className='pr-10'>Programmes <span><FontAwesomeIcon icon={faAngleDown}/></span></p></div>
    <div><p className='pr-10'>Admission <span><FontAwesomeIcon icon={faAngleDown}/></span></p></div>
    <div><p className='pr-10'>E-portal <span><FontAwesomeIcon icon={faAngleDown}/></span></p></div>
    <div><p className='pr-10'>SQI Scholarship</p></div>
    <div><p className='pr-10'>News</p></div>
    </div>

  </div>
</div> */}

     

     
     </>
   )
 }
 
 export default Header
 
//  <div className='lg:flex h-26 w-auto bg-green-800 justify-around md:flex sm:flex '>

//      <div className="w-20 h-20"><img src="/co.jpg" alt="" /></div>

//      <div className=' md: text-white block text-2xl mt-6   lg:hidden '> <FontAwesomeIcon icon={faBars} /></div>
//       <div className='lg:flex text-center  mt-6 bg-slate-200  md:hidden'>
//         <div className='pr-10' >About <span><FontAwesomeIcon icon={faAngleDown} /></span></div>
//         <div className='pr-10'>Programmes <span><FontAwesomeIcon icon={faAngleDown} /></span></div>
//         <div className='pr-10'>Admission <span><FontAwesomeIcon icon={faAngleDown} /></span></div>
//         <div className='pr-10'>Eportal <span><FontAwesomeIcon icon={faAngleDown} /></span></div>
//         <div className='pr-10'>SQI Scholarship</div>
//         <div className='pr-10'>News</div>
//         </div>
//      </div>

//      <div>

//       <div className='flex'></div>
//      </div>