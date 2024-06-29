import React from 'react'
import SquareCard from './SquareCard'
import HorizonatalCard from './HorizonatalCard'

function LandingScreenThree() {
  return (
    <div className='w-8/12'>
        <div className='text-center pt-10'>
            <h1 className='text-white text-5xl font-semibold font-sans'>Earn with Sperax</h1>
            <h2 className='text-gray-200 text-xl font-thin py-5'>Effortlessly Unlock Diverse Earning Opportunities</h2>
        </div>
        <div>
            <div className='flex space-x-8 w-full'>
                <SquareCard heading={"Hold USDs"} description={"Earn up to 10% APR in auto-yield on the USDs held in your wallet"} link1={"Mint USDs"} link2={"Buy USDs"} image1={"../../screen3_img1.svg"} image2={"../../screen3_childimg1.svg"}/>
                <SquareCard heading={"Provide Liquidity"} description={"Stake your liquidity pool tokens in our designated farms to earn xSPA rewards"} link1={"Earn through Farms"} link2={"Learn More"} image1={"../../img_two_screen3.svg"} image2={"../../childImg_two_screen3.svg"}/>
            </div>
            <HorizonatalCard />
        </div>
    </div>
  )
}

export default LandingScreenThree