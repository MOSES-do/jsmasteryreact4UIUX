import React from 'react'
import styles, { layout } from '../style'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const TopRow = () => (
    <div className={`${styles.flexCenter} flex-1 justify-center gap-[100px] items-center md:flex-row flex-col`}>
        <h2 className={`${styles.heading2} flex-1 flex md:justify-start justify-center items-center xs:leading-[76.8px] leading-[66.8px] `}>What people are <br className="sm:block hidden" /> saying about us.</h2>

        <p className={`${styles.paragraph} flex-1  justify-start  flex  md:mt-0 -mt-[80px]`}>Everything you need to accept card payments
            <br className="sm:block hidden" />
            and grow your business anywhere on the planet
        </p>
    </div>
)

const Testimonials = () => (
    <section className={`flex w-[100%] flex-col ${styles.paddingY} relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

        <TopRow />

        <div className={`${styles.flexCenter} md:justify-between justify-start  md:mt-[50px] mt-24 flex w-[100%]  md:flex-row md:flex-no-wrap flex-wrap flex-1 gap-[4rem] `} >
            {
                feedback.map((info, index) => (
                    <FeedbackCard key={info.id} info={info} index={index} />
                ))
            }
        </div>

    </section >

)

export default Testimonials