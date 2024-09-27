import React, { useEffect, useState } from 'react'
import {Chart} from 'react-google-charts';

const Linechart = ({historicalData}) => {

    const [data,setData]=useState([["Date","Prices"]]);

    useEffect(()=>{
        let dataCopy=[["Date","Prices"]];
        if(historicalData.prices){
            historicalData.prices.slice(-10).forEach((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])   //The dates and prices can be pushed into the datacopy
            })
            setData(dataCopy);
        }
    },[historicalData])

  return (
    <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
    
    />
  )
}

export default Linechart
