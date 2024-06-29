import React from 'react'
import LinkCard from './LinkCard'
import Article from './Article'

function LandingScreenSeven() {
  return (
    <div className='w-screen flex items-center justify-center flex-col'>
                <div className='bg-[url("../../spartan_bg.svg")] bg-top bg-cover bg-origin-content bg-no-repeat w-10/12 flex items-center flex-col justify-center'>
                    <img src="../../Macot.svg" alt="Macot" className='w-80 h-auto py-20'/>
                </div>
        <div className='w-8/12'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-7xl text-white font-sans font-semibold text-center p-10 w-3/4'>Join the SPArtan army!!</h1>
                <div className='flex lg:flex-row flex-col items-center justify-around w-full space-x-5 space-y-4 mt-10'>
                    <LinkCard bg={"bg-blue-800"} icon={"../../discord.svg"} hoverBg={"hover:bg-blue-900"} name={"Discord"} count={"3,635"}/>
                    <LinkCard bg={"bg-sky-400"} icon={"../../twitter.svg"} hoverBg={"hover:bg-sky-600"} name={"Twitter"} count={"3,635"}/>
                    <LinkCard bg={"bg-sky-500"} icon={"../../telegram.svg"} hoverBg={"hover:bg-sky-700"} name={"Telegram"} count={"3,635"}/>
                    <LinkCard bg={"bg-orange-600"} icon={"../../subStack.svg"} hoverBg={"hover:bg-orange-700"} name={"Substack"} count={"3,635"}/>
                </div>
                <h2 className='text-white text-5xl font-semibold font-sans mt-36 text-center'>Keep up with Sperax</h2>
                <h4 className='text-white text-xl lg:w-1/3 md:w-2/3 w-10/12 text-center mt-5'>Latest Substack posts with all recent developments and updates</h4>
                <form className='m-5 lg:flex-row flex flex-col justify-center items-center'>
                    <input type="text" placeholder='Enter your Email' className='rounded-full bg-slate-600 h-10 pl-3'/>
                    <input type="submit" className='text-sm font-semibold rounded-full bg-cyan-500 w-28 h-10 m-2 text-white'/>
                </form>
                <div className='w-full flex flex-col lg:flex-row items-start justify-between space-y-4 space-x-3 py-5'>
                    <Article img={"../../article1Img.jpg"} heading={"Creators Grant Program - Cycle 5 results"} date={"MAR 5"}/>
                    <Article img={"../../article2Img.png"} heading={"Demeter 2.0 is coming"} date={"FEB 27"}/>
                    <Article img={"../../article3Img.jpg"} heading={"Sperax Roadmap 2024"} date={"JAN 24"}/>
                    <Article img={"../../article4Img.jpg"} heading={"Road So Far"} date={"JAN 23"}/>
                </div>
                <button className="bg-transparent hover:text-cyan-400 duration-150 my-10 text-white text-sm py-2 px-4 h-12 w-32 rounded-full border-cyan-500 border">View All →</button>
                <div className='w-full flex flex-col items-center justify-center pt-28 text-white font-sans'>
                    <img src="../../audited.svg" alt="Autited" />
                    <h3 className='text-2xl py-2 text-center'>Audited & Verified</h3>
                    <h1 className='text-5xl font-semibold pt-2 pb-5 text-center'>The most secure protocol for money</h1>
                    <div className='flex lg:flex-row flex-col space-y-3 items-center justify-center w-full px-10 py-10 space-x-4'>
                        <img src="../../quantstamp.svg" alt="quantstamp" />
                        <img src="../../slowmist.svg" alt="slowmist" />
                        <img src="../../certik.svg" alt="certik" />
                        <img src="../../Peck.svg" alt="Peck" />
                    </div>
                    <button className="bg-transparent hover:text-cyan-400 duration-150 my-10 text-white text-sm py-2 px-4 h-12 w-32 rounded-full border-cyan-500 border">View Reports </button>
                </div>
                <div className='bg-white rounded-3xl lg:h-52 w-full text-center flex items-center flex-col justify-center'>
                    <p className='font-light text-xl py-4'>Featured in top tech news publishers</p>
                    <div className='flex lg:flex-row flex-col space-y-3 justify-center items-center space-x-8 py-3'>
                        <img src="coindesk.svg" alt="coindesk" />
                        <img src="yahoo.svg" alt="yahoo" />
                        <img src="messari.svg" alt="Messari" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingScreenSeven