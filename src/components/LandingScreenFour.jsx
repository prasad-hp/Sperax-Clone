import React from 'react'
import HorWhiteCard from './HorWhiteCard'
import ButtonLink from './ButtonLink'

function LandingScreenFour() {
  return (
    <div className='lg:w-8/12 w-11/12'>
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex w-full justify-between mt-40'>
                <h1 className='text-white text-5xl font-semibold font-sans'>Partner with us</h1>
                <button className="bg-transparent lg:inline-block hidden text-new-blue text-sm py-2 px-4 rounded-full border-new-blue border">Contact Us</button>
            </div>
            <div className='flex flex-col justify-center items-center space-y-8'>
                <HorWhiteCard heading={"Liquidity bootstrap options for protocols launching on Arbitrum"} desc={"Protocols interested in launching their tokens on Arbitrum and looking for liquidity can request SPA incentives if they pair their tokens against USDs."} imgLoc={"../../partner.svg"}/>
                <HorWhiteCard heading={"Perfect portfolio mix for Neobanks, Trading and Asset management apps"} desc={"Integrate with USDs to pass on our stable organic yield to your end users"} imgLoc={"../../streetbeat.svg"}/>
                <HorWhiteCard heading={"Ideal Stable Asset for Centralized Exchanges"} desc={"Integrate with USDs to pass on our stable organic yield to your end users"} imgLoc={"../../coins.svg"}/>
                <button className="bg-transparent inline-block lg:hidden w-3/4 h-12 text-new-blue text-sm py-2 px-4 rounded-full border-new-blue border">Contact Us</button>
            
            </div>
            <div className='grid w-3/4 md:grid-cols-3 md:grid-rows-1 grid-rows-3 gap-5 mt-24 mb-10'>
                <ButtonLink link={"https://coinmarketcap.com/currencies/sperax/"} name={"Coinmarketcap"} img1={"../../marketcap.svg"} img2={"../../redirect.svg"} />
                <ButtonLink link={"https://defillama.com/protocol/sperax"} name={"Defilama"} img1={"../../Defilama.svg"} img2={"../../redirect.svg"} />
                <ButtonLink link={"https://www.coingecko.com/en/coins/sperax"} name={"Coingecko"} img1={"../../coingecko.svg"} img2={"../../redirect.svg"} />
            </div>
        </div>
    </div>
  )
}

export default LandingScreenFour