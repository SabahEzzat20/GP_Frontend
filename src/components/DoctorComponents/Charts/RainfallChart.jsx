// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { getAuthenticatedUser } from "../../../Helper/Storage";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';


// const RainfallChart = () => {
//   const [data, setData] = useState({
//     loading: true,
//     result: [
//       {
//         id:'',
//         doctorName: '',
//       }
//     ],
//     err: '',
//     reload: 0,
//   })
//   const userToken = getAuthenticatedUser();
//   const refreshToken = userToken.refreshToken;
//   useEffect((doctorId) => {
//     setData({...data,loading: true})
//     axios
//       .get(`http://localhost:8070/doctor/allMyReservations/${doctorId}`, {
//         headers: {
//           'Authorization': `Bearer ${refreshToken}`
//         },
//       })
//       .then((resp) => {
//           setData({...data, result: resp.data , loading: false , err: ''})
          
//         })
//         .catch((err) => {
//           setData({...data, err:'something went wrong' , loading: false})
//         })
//   }, [data.reload+1]); 
// //   useEffect(() => {
// //     // Replace with your actual backend endpoint
// //     fetch('YOUR_BACKEND_ENDPOINT')
// //       .then(response => response.json())
// //       .then(data => setData(data))
// //       .catch(error => console.error('Error fetching data:', error));
// //   }, []);

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
//         <Tooltip />
//         <Bar dataKey="rainfall" fill="#82ca9d" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default RainfallChart;


import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
const RainfallChart = () => {
  const data = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <div >
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#C54B43"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#C54B43" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};
export default RainfallChart;