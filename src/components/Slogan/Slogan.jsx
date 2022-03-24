import React from 'react'
import Cards from "../../assets/desktop/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-36 relative my-14 font-extrabold text-white md:my-28 md:grid grid-cols-3 md:items-center md:text-48">
        <div className="text-center md:col-span-1 md:col-start-2">
            <p>
                Earn <span className="text-purple-300">More</span>
            </p>
            <p className=""> Pay less </p>
            <button className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded hover:bg-pink-500 transition-all duration-300 md:text-24 md:px-8 md:py[8px]">
                Start
            </button>
        </div>
        <div className="mt-[69px] md:absolute md:right-[-5rem]">
            <img src={Cards} alt=""/>
        </div>
    </section>
  )
}

export default Slogan