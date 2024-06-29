import React from 'react'

function LandingScreenTwo() {
  return (
        <div className='w-8/12 '>
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='text-white font-semibold font-sans text-5xl text-center py-20'>Unleash the Power of 
                    <div className='flex'>
                        <h1 className='text-cyan-400 font-semibold font-sans text-5xl'>Decentralized Finance</h1>
                        <h1 className='text-white font-semibold font-sans text-5xl'>with USDs.</h1>
                    </div>
                </div>
                <section className='flex justify-between space-x-20'>
                    <div className='w-1/3 flex text-left flex-col justify-start items-start'>
                        <div className='bg-gray-900 rounded-full w-20'>
                            <img src="../../minting.svg" alt="Minting" />
                        </div>
                        <h2 className='text-xl text-white'>Minting/Redeeming</h2>
                        <p className='font-thin text-gray-200 w-10/12'>One unit of USDs is always redeemable for a unit of underlying stablecoin.</p>
                    </div>
                    <div className='w-1/3 flex text-left flex-col justify-start items-start'>
                        <div className='bg-gray-900 rounded-full w-20'>
                            <img src="../../ratio.svg" alt="Minting" />
                        </div>
                        <h2 className='text-xl text-white'>Dynamic Collateral ratio</h2>
                        <p className='font-thin text-gray-200'>Diversified basket of collaterals reduce the reliance on a single stablecoin to generate yield while minimizing risk.</p>
                    </div>
                    <div className='w-1/3 flex text-left flex-col justify-start items-start'>
                        <div className='bg-gray-900 rounded-full w-20'>
                            <img src="../../fee.svg" alt="Minting" />
                        </div>
                        <h2 className='text-xl text-white'>Minting/Redeeming</h2>
                        <p className='font-thin text-gray-200 w-10/12'>Dynamic mint and redemption fees ensure the collateral is dynamically balanced</p>
                    </div>
                </section>
                <section className='flex flex-col justify-center items-center'>
                    <img src="../../screen2_banner.svg" alt="Banner" className='py-16'/>
                    <a className='flex items-center hover:cursor-pointer'>
                        <p className='text-2xl text-cyan-400'>
                            See detailed Model
                        </p>
                        <img src="../../arrow-up-right.svg" alt="Up Arrow" />    
                    </a>
                </section>
                <section className=''>
                    <div className='text-2xl text-white py-7'>
                        <p>USDs automates stablecoin yield generation by sending</p>
                        <p> collateral to audited DeFi protocols, managed via</p>
                        <p> governance</p>
                    </div>
                    <div className='flex justify-center space-x-8 py-5'>
                        <button className='w-48 bg-cyan-500 rounded-full h-14 font-semibold text-white hover:bg-cyan-700 hover:text-gray-300 hover:cursor-pointer'>Get USDs Token</button>
                        <button className='w-48 bg-cyan-500 rounded-full h-14 font-semibold text-white hover:bg-cyan-700 hover:text-gray-300 hover:cursor-pointer'>Get SPA Token</button>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default LandingScreenTwo