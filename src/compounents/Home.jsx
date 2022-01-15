import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

function Home() {

    const [covidData, setcovidData] = useState([]);
    const [search, setsearch] = useState("");
    const [isLoading, setisLoading] = useState(true);

    // const variable for global information holding.
    const [newConfirmed, setnewConfirmed] = useState('');
    const [totalConfirmed, settotalConfirmed] = useState('');
    const [newDeaths, setnewDeaths] = useState('');
    const [totalDeaths, settotalDeaths] = useState('');

    useEffect(() => {
        fetch("https://api.covid19api.com/summary").then(response => {
            return response.json()
        }).then(data => {
            setcovidData(data.Countries)
            setnewConfirmed(data.Global.NewConfirmed)
            setnewDeaths(data.Global.NewDeaths)
            settotalConfirmed(data.Global.TotalConfirmed)
            settotalDeaths(data.Global.TotalDeaths)
            setisLoading(false)
        })
    }, [])

    const filteredData = covidData.filter(data => {
        return data.Country.toString().toLowerCase().includes(search.toString().toLowerCase())
    })


    return (
        <div className='py-8'>
            <div className='bg-shadecolor w-3/4 py-8 px-6 mx-auto rounded-md mb-8 drop-shadow-lg'>
                <h1 className='text-secondary text-2xl md:text-3xl font-firstfont font-semibold'>Global Covid Information</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 my-8'>
                    <h1 className='text-black-xl text-lg md:text-2xl'>NewConfirmed : {newConfirmed}</h1>
                    <h1 className='text-black-xl text-lg md:text-2xl'>NewDeaths : {newDeaths}</h1>
                    <h1 className='text-black-xl text-lg md:text-2xl'>TotalConfirmed : {totalConfirmed}</h1>
                    <h1 className='text-black-xl text-lg md:text-2xl'>TotalDeaths : {totalDeaths}</h1>
                </div>
                <a href="https://www.google.com/search?q=covid&oq=covid&aqs=chrome..69i57j69i59j0i131i433i512l2j0i131i433i457i512j69i60j69i61j69i60.1538j0j7&sourceid=chrome&ie=UTF-88" target="_blank" className='py-4 px-8 text-md text-bgcolor bg-secondary my-8 rounded-xl'>Know More</a>
            </div>
            <div className='py-4'>
                <input className='bg-green-600 border-2 border-green-400 text-stone-300 py-2 px-8 rounded-md' type="text" placeholder='search your country' onChange={e => {
                    setsearch(e.target.value)
                }}/>
            </div>
            <div className='py-4 px-8 grid grid-cols-1 xl:grid-cols-4 gap-4 md:grid-cols-3 2xl:grid-cols-6'>
                {isLoading && <h1>loading...</h1>}
                {filteredData.map((data) => {
                    return <CountryCard data={data} />
                })}
            </div>
        </div>
    )
}

export default Home
