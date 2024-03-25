import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
import UsMap from './USMap'

function ReviewCurrentPUCs() {
    return (
        <div className="">
            {/* Heading and buttons block container */}
            <section className='mb-24 mt-4 mx-20'>
                <div>
                    <h1 className={`text-4xl font-normal leading-8 mb-4 ${cairo.className} text-[#B6163E]`}>MODEL LEGISLATION</h1>
                    <p className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                {/* buttons container */}
                <div className='text-center mx-auto mt-10'>
                    <p>View:</p>
                    <div className='inline-block justify-center items-center bg-gray-200 rounded-full mt-2 space-x-2'>
                        <button className='px-8 py-2 bg-yellow-500 rounded-full'>
                            Database
                        </button>
                        <button className='px-8 py-2'>
                            Contributions
                        </button>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section>
                <UsMap />
            </section>

        </div>
    )
}

export default ReviewCurrentPUCs