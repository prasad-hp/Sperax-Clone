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