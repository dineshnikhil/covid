import React from 'react'

function CountryCard(props) {
    return (
        <div key={props.data.id} className='bg-primary py-4 px-2 w-1/1 mx-1 my-3 rounded-xl drop-shadow-md'>
            <h1 className='text-secondary text-2xl font-firstfont font-semibold mb-4'>{props.data.Country}</h1>
            <p>TotalConfirmed : {props.data.TotalConfirmed}</p>
            <p className='mb-4'>NewConfirmed : {props.data.NewConfirmed}</p>
            {/* <a href="#" className='bg-shadecolor text-bgcolor text-lg px-6 py-2 rounded-md my-6 hover:bg-green-800'>Know More</a> */}
        </div>
    )
}

export default CountryCard
