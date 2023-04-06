import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  BarElement,
} from 'chart.js';
import { Bar, Doughnut, Line, Radar } from 'react-chartjs-2';
import MenuDropdown from './MenuDropdown';
import { useRecoilState } from 'recoil';
import { dataMenuDropdown } from '../atoms/modelAtom';
import Calendar from './Calender';
import CarTable from './CarTable';
import { SVGProps, useState } from 'react';
import item from '../types';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const dataLine = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'red',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,
    },
    {
      label: 'My Second Dataset',
      data: [70, 20, 30, 80, 44, 50, 46],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,
    },
  ],
};
const dataLine1 = {
  labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'April', 'May', 'June', 'July', 'Quarter 4'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 66, 90, 91, 22, 33, 40, 50],
      borderColor: 'red',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,
    },
    {
      label: 'My Second Dataset',
      data: [88, 66, 23, 66, 78, 89, 46, 66],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,
    },
  ],
};
const dataLine2 = {
  labels: ['2002', '2003', '2004', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [99, 55, 88, 33, 58, 21, 45],
      borderColor: 'red',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,
    },
    {
      label: 'My Second Dataset',
      data: [90, 25, 32, 86, 46, 58, 40],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,
    },
  ],
};

const dataDoughnut = {
  labels: ['Red', 'Green', 'Blue'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const optionsDoughnut = {
  responsive: true,
  maintainAspectRatio: false,
};

const optionsLine: any = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',

      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  },
};

const dataBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 12, 55, 58, 65, 88, 92],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [8, 10, 42, 44, 50, 60, 80],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
export default function Content({ selectedItem }: { selectedItem: item }) {
  const [menuDropdownValue, setMenuDropdownValue] = useRecoilState(dataMenuDropdown);

  const handleDataMenuDropdownUpdate = (newData: string) => {
    setMenuDropdownValue(newData);
  };
  switch (selectedItem?.id) {
    case 1:
      return (
        <>
          <div className="gridContainer">
            <div className="gridItem col-span-2">
              <Doughnut data={dataDoughnut} options={optionsDoughnut} />
            </div>
            <div className="gridItem col-span-2">
              <Calendar />
            </div>
            <div className="gridItem col-span-2 flex justify-center items-center">
              <Bar data={dataBar} options={optionsBar} />
            </div>
            <div className="gridItem col-span-2 lg:col-span-3 md:col-span-2">
              <CarTable />
            </div>
            <div className="gridItem col-span-2 lg:col-span-3 md:col-span-2 relative">
              {menuDropdownValue === 'month' ? (
                <Line data={dataLine} options={optionsLine} />
              ) : menuDropdownValue === 'quarter' ? (
                <Line data={dataLine1} options={optionsLine} />
              ) : (
                <Line data={dataLine2} options={optionsLine} />
              )}
              <MenuDropdown onDataUpdate={() => handleDataMenuDropdownUpdate} />
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <p>Some other content specific to item 2</p>
        </>
      );
    case 3:
      return (
        <>
          <p>Some other content specific to item 3</p>
        </>
      );
    default:
      return <p>Please select an item from the sidebar</p>;
  }
}
