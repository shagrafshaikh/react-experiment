import React, { useEffect, useState } from 'react'

export default function ProjectsComponent() {
    const [result, updateResult] = useState([]);

    useEffect(function() {
        let target = "https://restcountries.com/v2/all"
        fetch(target).then(response => response.json())
                     .then(response =>  {
                        updateResult(response);
                    });
    
    }, [])

    return (
        <div className = "dashboard">
            {
                result ? result.map(function(item, index) {
                    return <div key={index}>
                            <h2>{item.name}</h2>
                            <img src={item.flag}></img>
                            <h3>{item.capital}</h3>
                        </div>
                })  : "Data not found"            
        }
        </div>
    )
    
}