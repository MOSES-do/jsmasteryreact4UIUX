import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({ info }) =>
(

    <div className="flex flex-1 py-[2rem] justify-center px-6 flex-col gap-[25px] leading-[25px] rounded-[20px] max-w-[300px] xs:min-w-[300px] min-w-[60%] feedback-card">
        <img src={quotes} alt="quote" className="w-[30px] object-contain" />
        <h4 className="text-white font-normal text-[18px] leading-[32px] font-poppins">{info.content}</h4>

        <div className="flex flex-row items-center">
            <div className="w-100% h-100%  rounded-full">
                <img className=" object-contain w-[50px] h-[50px] mr-2" src={info.img} alt="person 1 " />
            </div>
            <div className="flex flex-col">
                <h4 className="text-white font-poppins font-semibold">{info.name}</h4>
                <p className="text-dimWhite font-poppins font-normal text-[13px]">{info.title}</p>
            </div>

        </div>
    </div>

)


export default FeedbackCard