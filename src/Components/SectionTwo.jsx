import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SectionTwo = () => {
    return (
        <div>
            <div>
                <div className='mt-3 bg-red-700 md:'><img className='sqiclass absolute' src="/sqiclass.jpeg" alt="" /> <div className='relative over'>
                    <div className='lg:text-white glance pt-36  md:'><p className='text-2xl'>SCICT AT A GLANCE</p>
                        <p className='text-sm pr-12 mt-3 tracking-wider '>SQI College of ICT offers both National Diploma and Professional Certificate programmes.</p>
                        <p className='mt-3 pr-18 text-sm tracking-wider'>The diploma Certificate conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI.</p>
                        <p className='mt-3 tracking-wider text-sm'>You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</p>
                        <button className='btns  mt-6 px-4 py-3 rounded'> Learn More <span className='arrows'><FontAwesomeIcon icon={faAngleRight} /></span></button></div></div></div>
            </div>
        </div>
    )
}

export default SectionTwo
