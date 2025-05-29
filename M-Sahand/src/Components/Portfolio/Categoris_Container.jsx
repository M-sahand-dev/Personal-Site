import React from 'react'
import Category from './Categoris'

const Categoris_Container = () => {
    return (
        <div className="flex justify-center mb-12">
            <div className='inline-flex flex-wrap justify-center gap-2'>
                <Category>All</Category>
                <Category>Design</Category>
                <Category>Development</Category>
                <Category>Branding</Category>
            </div>
        </div>
    )
}

export default Categoris_Container