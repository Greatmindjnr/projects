import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MainBody = () => {
    return (
        <>
            <div>

                <div className='lg:flex  justify-center md:block ml-24  sm:block'>
                    <div className=' h-92 contains'>
                        <div><p className=' lg:text-7xl font-bold pt-44  pr-44 md:mt-2 text-3xl font-serif'>Study to become a global talent</p>
                            <p className='lg:text-black py-4 text-xl pr-4 line-clamp-2 md:text-xs text-black'>Learn new tech skills using world-class curriculum and top industry experts.</p>
                            <div><button className='btn text-l py-3 px-5'> Start Now <span className='right mt-1 ml-2 '><FontAwesomeIcon icon={faAngleRight} /></span></button></div></div>
                    </div>
                    <div className=' sm:mt-4 '><img className='modelimg' src="/sqimodel.png" alt="" /></div>

                </div>
            </div>

          
        </>
    
    )
}

export default MainBody



