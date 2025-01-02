import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Sidebar from '../../component/Sidebar';

const Dashboard = () => {
  const [active, setActive] = useState('Webmin');
  const [collapsed, setCollapsed] = useState({
    Webmin: false,
    Virtualmin: false,
    System: false,
    Servers: false,
  });

  const toggleCollapse = (item) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ['Individual', 'Property', 'Government'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'], // Change border color to white
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Change legend text color to white
        },
      },
    },
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar active={active} setActive={setActive} collapsed={collapsed} toggleCollapse={toggleCollapse} />
      {/* Main Content */}
      <div className="w-5/6 bg-white p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800 rounded shadow text-white">
            <h3 className="text-lg font-bold mb-2">Threat Alerts</h3>
            <p>Displays real-time threat detection.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded shadow text-white">
            <h3 className="text-lg font-bold mb-2">Firewall Status</h3>
            <p>Ensures active firewalls.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded shadow text-white">
            <h3 className="text-lg font-bold mb-2">Vulnerability Scan</h3>
            <p>Lists recent vulnerabilities found.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded shadow text-white">
            <h3 className="text-lg font-bold mb-2">Incident Response</h3>
            <p>Tracks the status of investigations.</p>
          </div>
        </div>
        <div className="mt-4 w-1/4 h-1/2">
          <h2 className="text-xl font-semibold mb-4">Cyber Crimes</h2>
          <div className="p-4 bg-gray-800 rounded shadow text-white h-full">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;