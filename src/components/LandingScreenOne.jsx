import React, { useState } from 'react'
import WhiteCard from './WhiteCard'

function LandingScreenOne() {
    const [cardDisplay, setCardDisplay] = useState(true)

    function toggleCard(){
        setCardDisplay(!cardDisplay)
    }

  return (
      <div className='lg:w-8/12 md:w-10/12 w-11/12'>
        <div className='md:flex overflow-visible'>
            <section className='md:w-1/2 hidden md:inline-block'>
                <main className="text-left pt-20 pb-16">
                    <h1 className="text-5xl text-white text-left font-bold mb-4 font-sans">Stablecoin with built-in Auto-Yield on Arbitrum</h1>
                    <p className="mb-6 text-gray-200 text-left font-sans font-thin text-base">
                        Sperax USD (USDs) is the primary protocol under the Sperax ecosystem. USDs is a fully collateralized stablecoin backed by on-chain collateral and generates organic yield for its holders. USDs aims to be the premiere trading pair on all L2 chains.
                    </p>
                    <button className='bg-transparent border border-new-blue text-white rounded-full h-12 w-1/4 mt-2' onClick={()=>toggleCard()}>Get USDs →</button>
                    <div className="flex justify-around mt-5 space-x-3">
                        <div className='flex flex-col items-start w-5/12'>
                            <div className='flex items-center justify-start space-x-2'>
                                <img src="../../trending-up.svg" alt="Trending Logo" className='w-5'/>
                                <h2 className=" text-white text-sm">Auto Compounding</h2>
                            </div>
                            <p className='text-xs text-gray-300 w-11/12'>Rewards auto compound based on previous balance</p>
                        </div>
                        <div className='flex flex-col items-start w-4/12'>
                            <div className='flex items-center justify-start space-x-1'>
                                <img src="../../gift.svg" alt="Trending Logo" className='w-5'/>
                                <h2 className=" text-white">Gasless Reward</h2>
                            </div>
                            <p className='text-xs text-gray-300 w-11/12'>Gasless transfer of rewards directly to wallet</p>
                        </div>                    
                        <div className='flex flex-col items-start w-4/12'>
                            <div className='flex items-center justify-start space-x-2'>
                                <img src="../../refresh.svg" alt="Trending Logo" className='w-5'/>
                                <h2 className=" text-white">Stable Return</h2>
                            </div>
                            <p className='text-xs text-gray-300 w-11/12'>~10% APR', based on market conditions</p>  
                        </div>
                    </div>
                </main>
                <p className='text-white text-sm font-thin'>10% is the maximum APR under favorable market conditions. Any additional yield generated is stored in Yield Reserve for distribution during lean periods</p>
            </section>
            <section className='md:w-1/2 w-full bg-[url("")] overflow-visible'>
                <div className='w-full md:hidden text-white mt-10 flex flex-col items-center'>
                    <h1 className='text-4xl font-semibold text-center'>Stablecoin with built-in Auto-Yield on Arbitrum</h1>
                    <p className='font-light py-5'>Sperax USD (USDs) is the primary protocol under the Sperax ecosystem. USDs is a fully collateralized stablecoin backed by on-chain collateral and generates organic yield for its holders. USDs aims to be the premieretrading pair on all L2 chains.</p>
                    <button className='bg-new-blue text-white rounded-full h-14 w-3/4 my-2'>Launch App</button>
                    <button className='bg-transparent border border-new-blue text-white rounded-full h-14 w-3/4 mt-2' onClick={()=>toggleCard()}>Get USDs →</button>
                </div>
                <img src="../../speraxImgBg.svg" alt="Sperax Icon" className=''/>
                <div className='inline-block md:hidden'>
                    <div className="flex flex-col items-start mt-1 space-y-4">
                            <div className='flex flex-col items-start w-11/12'>
                                <div className='flex items-center justify-start space-x-2'>
                                    <img src="../../trending-up.svg" alt="Trending Logo" className='w-5'/>
                                    <h2 className=" text-white text-lg">Auto Compounding</h2>
                                </div>
                                <p className='text-sm text-gray-300 w-11/12'>Rewards auto compound based on previous balance</p>
                            </div>
                            <div className='flex flex-col items-start w-11/12'>
                                <div className='flex items-center justify-start space-x-1'>
                                    <img src="../../gift.svg" alt="Trending Logo" className='w-5'/>
                                    <h2 className=" text-white text-lg">Gasless Reward</h2>
                                </div>
                                <p className='text-sm text-gray-300 w-11/12'>Gasless transfer of rewards directly to wallet</p>
                            </div>                    
                            <div className='flex flex-col items-start w-11/12'>
                                <div className='flex items-center justify-start space-x-2'>
                                    <img src="../../refresh.svg" alt="Trending Logo" className='w-5'/>
                                    <h2 className=" text-white text-lg">Stable Return</h2>
                                </div>
                                <p className='text-sm text-gray-300 w-11/12'>~10% APR', based on market conditions</p>  
                            </div>
                            <p className='text-white text-sm font-thin'>10% is the maximum APR under favorable market conditions. Any additional yield generated is stored in Yield Reserve for distribution during lean periods</p>
                        </div>
                </div>
            </section>
        </div>
        <div className='transition duration-300'>
            <WhiteCard display = {cardDisplay}/>
        </div>
      </div>
    
  )
}

export default LandingScreenOne