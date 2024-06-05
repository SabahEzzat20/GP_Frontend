import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Tooltip,
} from "recharts";
import { getAuthenticatedUser } from '../../../Helper/Storage.jsx';

const RainfallChart = () => {
  const auth = getAuthenticatedUser();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8070/doctor/myAppointments/${auth.id}`, {
        headers: {
          'Authorization': `Bearer ${auth.refreshToken}`,
        },
      })
      .then((response) => {
        const appointments = response.data;
        const chartData = getChartData(appointments);
        setData(chartData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError('Cannot retrieve appointments');
        setLoading(false);
      });
  }, [auth.id, auth.refreshToken]);
  const getChartData = (appointments) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const chartData = days.map((day) => {
      const dayAppointments = appointments.filter((appointment) => {
        const appointmentDate = new Date(appointment.date);
        return appointmentDate.getDay() === days.indexOf(day);
      });
      return {
        name: day,
        appointments: dayAppointments.length,
      };
    });
    return chartData;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
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
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 'dataMax']} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="appointments" fill="#C54B43" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
};

export default RainfallChart;
