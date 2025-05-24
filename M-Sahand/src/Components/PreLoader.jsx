import React from 'react'

const PreLoader = () => {
    return (
        <div id="preloader" className='hidden fixed inset-0 bg-gray-900 z-50 flex items-center justify-center'>
            <div className="loader animate-spin rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
    )
}

export default PreLoader