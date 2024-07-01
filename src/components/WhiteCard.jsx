import React, { useEffect, useState } from 'react';

function WhiteCard(props) {
  const [selectedTab, setSelectedTab] = useState('Buy SPA');
  const [display, setDisplay] = useState(props.display);

  useEffect(() => {
    setDisplay(!display);
  }, [props.display]);

  return (
    <div className={`p-4 fixed top-10 bottom-0 right-0 left-0 m-auto bg-white rounded-md shadow-lg max-w-md min-h-fit max-h-svh mt-5 lg:w-2/4 mx-auto z-30 ${display ? "inline-block" : "hidden"} overflow-y-auto`}>
        <div className='w-full flex justify-end'>
          <button className='' onClick={() => setDisplay(!display)}> X </button>
        </div>
        <div className="flex items-center h-8 justify-between space-x-2 bg-gray-200 rounded-full p-1 w-3/5 mx-auto">
        <button 
            className={`px-4 py-2 h-7 flex items-center rounded-full transition-transform duration-500 ${selectedTab === 'Buy SPA' ? 'bg-white shadow' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('Buy SPA')}>
            Buy SPA
        </button>
        <button 
            className={`px-4 py-2 h-7 flex items-center rounded-full transition-transform duration-500 ${selectedTab === 'Buy USDs' ? 'bg-white shadow' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('Buy USDs')}>
            Buy USDs
        </button>
        </div>
      <div>
        <div className="mb-4">
          <h2 className="font-semibold text-sm py-3">With Fiat</h2>
          <div className="flex flex-col space-y-2 rounded-xl border">
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'>Transak</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'>Onmeta (INR/PHP)</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
          </div>
        </div>
        <div className={`mb-4 w-full ${selectedTab === 'Buy SPA' ? "inline-block" : "hidden" }`}>
          <h2 className="font-semibold text-sm py-5">Centralised Exchange</h2>
          <div className="flex flex-col space-y-2 border rounded-xl">
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'> Coinbase.com</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'>Gate.io</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'>Huobi</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'>Kucoin</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
          </div>
        </div>
        <div className={`mb-4 w-full`}>
          <h2 className="font-semibold text-sm py-5">Decentralised Exchange</h2>
          <div className="flex flex-col space-y-2 border rounded-xl">
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'> Uniswap | USDC.e-USDs</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'>Uniswap | SPA-USDs</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'>Camelot | USDC-USDs</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
            <div className="flex justify-between items-center p-2 px-4 ">
              <span className='text-sm font-semibold text-gray-600'>Camelot | SPA-USDs</span>
              <a href="#" className="text-new-blue text-xs font-semibold flex items-center">
                <img src="../../arrow-up-right.svg" alt="arrow" className='h-5 pr-2'/>
                BUY</a>
            </div>
          </div>
        </div>
        <div className={`mb-4 ${selectedTab === 'Buy SPA' ? "hidden" : "inline-block"}`}>
          <a href="#" className="text-new-blue text-sm font-semibold flex items-center underline underline-offset-4">Mint USDs
          <img src="../../arrow-up-right.svg" alt="arrow" className='h-6 pl-1'/>
          </a>
        </div>
        <div className='flex justify-center items-center w-full'>
          <a href="#" className="text-new-blue text-sm text-center underline underline-offset-4">More info on How to buy USDs</a>
          <img src="../../arrow-up-right.svg" alt="arrow" className='h-6 pl-1'/>
        </div>
      </div>
    </div>
  );
}

export default WhiteCard;
