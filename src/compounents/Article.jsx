import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from  'react-query';

function Article() {
    const [covidData, setcovidData] = useState([]);
    const params = useParams();

    useQuery(['covidData', 'sample-data'], () => {
        return fetch('https://api.covid19api.com/summary').then(result => {
            return result.json()
        }).then(data => {
            setcovidData(data.Countries)
        })
    })

    if(covidData) {
        covidData.map(data => {
            if (data.ID === params.id) {
                return data;
            }
        })
    };

    return (
        <div className='my-8 mx-4'>
            <h1>{params.id}</h1>
        </div>
    )
}

export default Article
