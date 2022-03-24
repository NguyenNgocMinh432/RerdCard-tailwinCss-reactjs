import React from 'react'
import {FaUser} from 'react-icons/fa';
import {useSpring, animated} from 'react-spring';
import {BsFillCreditCardFill} from 'react-icons/bs';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';
const Content = () => {
    const customer = useSpring({customer: 10245, from: {customer: 0}});
    const card = useSpring({card: 12045, from: {card: 0}});
  return (
    <section className="md:flex md:flex-row">
        <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[12px] md:w-[20%]">
            <div className="mt-16 gap-8 flex items-start">
               <FaUser size={"22px"} className="mt-[12px]"/>
               <div className="text-26">
                   <animated.div>
                       {customer.customer.to((val)=>Math.floor(val))}
                   </animated.div>
                   <p className="text-13 font-semibold mb-36 md:text-16">
                   Customer
                    </p>
               </div>
            </div>
            <div className="gap-8 flex items-start mb-16">
                <BsFillCreditCardFill className="mt-[12px]" size={"22px"}/>
                <div className="text-26">
                    <animated.div>
                        {card.card.to((val)=>Math.floor(val))}
                    </animated.div>
                    <p className="text-13 font-semibold md:text-16">
                        Cards Issued
                    </p>
                </div>
            </div>
        </div>
        <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:mt-0 md:w-[30%] md:text-16 md:ml-[20%]">
                <div className="checkpoint md:mx-0">
                    <img src={checkIconMobile} alt=""/>
                    <p>
                        Card report sent to your phone every weeks
                    </p>
                </div>
                <div className="checkpoint  md:mx-0">
                    <img src={checkIconMobile} alt=""/>
                    <p>
                       No external fees
                    </p>
                </div>
                <p className="flex gap-8 ml-[70px] mr-[29px] items-center  md:mx-0">
                    <img src={checkIconMobile} alt=""/>
                    <p>
                        Set spending limits and restrictions 
                    </p>
                </p>
            </div>
    </section>
  )
}

export default Content