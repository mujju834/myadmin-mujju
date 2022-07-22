import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ( {title,data,dataKey} ) => {
  return (
    <div className='chart'>
      <h3 className="charttitle"> {title} </h3>
      <ResponsiveContainer width='100%' aspect={4/1}>
        <LineChart data={data} >
<XAxis dataKey='name' stroke='#5550bd'  />
{/* <YAxis /> */}
<Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
<Tooltip />
<CartesianGrid stroke="#e0dfdf" strokeDasharray='5 5' />
        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}


export default Chart
