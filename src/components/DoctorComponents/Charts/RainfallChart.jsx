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

  const [doctorAppointments, setDoctorAppointments] = useState({
    loading: true,
    result: [],
    err: "",
    reload: 0,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setDoctorAppointments({ ...doctorAppointments, loading: true });
    axios
      .get(`http://localhost:8070/doctor/allMyReservations/${auth.id}`, {
        headers: {
          Authorization: `Bearer ${auth.refreshToken}`,
        },
      })
      .then((response) => {
        console.log("success");
        console.log(response.data);
        setDoctorAppointments({
          ...doctorAppointments,
          result: response.data,
          loading: false,
          err: "",
        });
          console.log("this is data " + response.data);
        // Update the data state variable with the chart data
        setData(getChartData(response.data));
      })
      .catch((err) => {
        console.log(err);
        setDoctorAppointments({
          ...doctorAppointments,
          loading: false,
          err: "there is something wrong",
        });
      });
  }, [doctorAppointments.reload + 1]);

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