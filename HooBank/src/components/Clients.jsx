import React from 'react'
import styles from '../style'
import { airbnb, binance, coinbase, dropbox } from '../assets'

const Clients = () => (
    <section id="clients" className={`${styles.flexCenter} ss:flex-row md:mt-4 mt-8 flex-col justify-center items-center w-[100%] gap-[2rem] ${styles.padding}`}>
        <div className="flex-1 flex gap-[2rem] justify-center">
            <img className="object-contain ss:w-[75%] w-[35%]" src={airbnb} alt="airbnb" />
        </div>

        <div className="flex-1 flex justify-center">
            <img className="object-contain ss:w-[75%] w-[35%]" src={binance} alt="binance" />
        </div>

        <div className="flex-1 flex justify-center">
            <img className="object-contain ss:w-[75%] w-[35%]" src={coinbase} alt="coinbase" />
        </div>

        <div className="flex-1 flex justify-center">
            <img className="object-contain ss:w-[75%] w-[35%]" src={dropbox} alt="dropbox" />
        </div>
    </section>
)


export default Clients