import React from 'react'

function LandingScreenOne() {
  return (
      <div className='w-8/12 flex overflow-visible'>
        <section className='w-1/2'>
            <main className="text-left py-10">
                <h1 className="text-5xl text-white text-left font-bold mb-4">Stablecoin with built-in Auto-Yield on Arbitrum</h1>
                <p className="mb-6 text-gray-200 text-left">
                    Sperax USD (USDs) is the primary protocol under the Sperax ecosystem. USDs is a fully collateralized stablecoin backed by on-chain collateral and generates organic yield for its holders. USDs aims to be the premiere trading pair on all L2 chains.
                </p>
                <button className="bg-cyan-500 text-white text-sm py-2 px-4 rounded mb-6 text-left">Get USDs</button>
                <div className="flex justify-around mt-10 space-x-3">
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
            <p className='text-white text-sm'>10% is the maximum APR under favorable market conditions. Any additional yield generated is stored in Yield Reserve for distribution during lean periods</p>
        </section>
        <section className='w-1/2 bg-[url("")] overflow-visible'>
            <img src="../../speraxImgBg.svg" alt="Sperax Icon" className=''/>
        </section>
      </div>
    
  )
}

export default LandingScreenOne