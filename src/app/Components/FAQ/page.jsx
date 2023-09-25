"use client"
import React from 'react'
import FaqCards from './FaqCards'

const FAQS = () => {
    return (
        <div className='py-20'>
            <div className='text-center '>
                <h2 className='font-[400] text-lg'>FAQs</h2>
                <h2 className='font-bold text-3xl'>Frequently asked questions</h2>
            </div>

            <div className='grid md:grid-cols-2 gap-10 mt-8'>
                <div>
                    <FaqCards title="How can I suscribe?" />
                </div>
                <div>
                    <FaqCards title="What is the duration for each project?" />
                </div>
                <div>
                    <FaqCards title="How many people on a team?" />
                </div>
                <div>
                    <FaqCards title="What language do I need to know before applying?" />
                </div>
                <div>
                    <FaqCards title="What do I get on premium suscription?" />
                </div>
                <div>
                    <FaqCards title="How can I suscribe?" />
                </div>
            </div>
        </div>
    )
}

export default FAQS