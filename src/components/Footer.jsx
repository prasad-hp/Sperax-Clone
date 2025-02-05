import React from 'react'

function Footer() {
  return (
    <footer className='lg:w-8/12 w-11/12 text-white '>
        <div className='w-full flex lg:flex-row flex-col lg:items-center items-start justify-center lg:h-screen'>
            <section className='lg:w-1/2 w-full flex-col flex justify-start'>
                <div className='flex justify-start space-x-3 my-5'>
                    <img src="../../SperaxLogo.svg" alt="SperaxLogo" />
                    <h1 className='text-xl font-semibold'>Sperax</h1>
                </div>
                <div className='flex space-x-5 items-center justify-start mt-5'>
                    <a href="/">
                        <img src="../../discord.svg" alt="Discord Icon" className='hover:scale-110 transition duration-150'/>
                    </a>
                    <a href="/">
                        <img src="../../telegram.svg" alt="Telegram Icon" className='hover:scale-110 transition duration-150'/>
                    </a>
                    <a href="/">
                        <img src="../../twitter.svg" alt="Twitter Icon" className='hover:scale-110 transition duration-150'/>
                    </a>
                    <a href="/">
                        <img src="../../subStack.svg" alt="Substack Icon" className='hover:scale-110 transition duration-150'/>
                    </a>
                </div>
                <p className='font-light text-sm mt-2'>Sperax Foundation © Sperax 2020. All rights reserved.</p>
                <form className='my-10 lg:w-9/12 flex flex-col items-start w-full'>
                    <p className='font-semibold text-lg'>Subscribe to Our Newsletter to keep up with our latest updates</p>
                    <input type="text" placeholder='Enter your Email' className='rounded-full bg-slate-600 h-10 pl-3 mt-2 lg:w-80 w-3/4'/>
                    <input type="submit" className='text-sm font-semibold rounded-full bg-new-blue w-28 h-10 mt-2 text-white hover:cursor-pointer'/>
                 </form>
            </section>
            <section className='lg:w-1/2 w-full lg:pl-20 flex lg:flex-row flex-col justify-end items-start'>
                <section className='lg:w-1/2 w-full flex flex-col items-start justify-start lg:space-y-24 space-y-5'>
                    <div className='flex flex-col items-start lg:space-y-7 space-y-2'>
                        <h4 className='text-lg font-medium'>
                            Governance
                        </h4>
                        <h5 className='font-light text-sm'>
                            Forum
                        </h5>
                        <h5 className='font-light text-sm'>
                            Snapshot
                        </h5>
                    </div>
                    <div className='flex flex-col items-start lg:space-y-7 space-y-2'>
                        <h4 className='text-lg font-medium'>
                        Resources
                        </h4>
                        <h5 className='font-light text-sm'>
                        Brandkit
                        </h5>
                        <h5 className='font-light text-sm'>
                        Doc
                        </h5>
                    </div>
                </section>
                <section className='lg:w-1/2 w-full flex flex-col items-start justify-start lg:space-y-24 space-y-5'>
                        <div className='flex flex-col items-start lg:space-y-7 space-y-2'>
                            <h4 className='text-lg font-medium'>
                            Terms and Conditions
                            </h4>
                            <h5 className='font-light text-sm'>
                            Terms of use
                            </h5>
                            <h5 className='font-light text-sm'>
                            Privacy Policy
                            </h5>
                        </div>
                        <div className='flex flex-col items-start lg:space-y-7 space-y-2'>
                            <h4 className='text-lg font-medium'>
                            Developers
                            </h4>
                            <h5 className='font-light text-sm'>
                            GitHub
                            </h5>
                        </div>
                        <div className='flex flex-col items-start lg:space-y-7 space-y-2'>
                            <h4 className='text-lg font-med ium'>
                            Contact Us
                            </h4>
                            <h5 className='font-light text-sm pb-5 lg:pb-0'>
                            contact@sperax.io
                            </h5>
                        </div>
                </section>
            </section>
        </div>
    </footer>
  )
}

export default Footer