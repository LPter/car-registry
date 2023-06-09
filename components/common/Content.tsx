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
import { dataMenuDropdown } from '../../atoms/modelAtom';
import Calendar from './Calender';
import { ItemSideBar, Inspection, Car, Owner } from '../../models/index';
import Table from './Table';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import AlertProvider, { useConfirmAlert } from "./alert/AlertProvider";
import { countAutomaker } from '../../utils/handleCountAutomaker';
import { handleVehicleStatistics } from '../../utils/handleVehicleStatistics';
import { handleSplitData } from '../../utils/handleSplitData';

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

export default function Content({ selectedItem, inspections, cars, owners }: { 
  selectedItem: ItemSideBar,
  inspections: Inspection[],
  cars: Car[],
  owners: Owner[]
}) {
  const [menuDropdownValue, setMenuDropdownValue] = useRecoilState(dataMenuDropdown);

  const handleDataMenuDropdownUpdate = (newData: string) => {
    setMenuDropdownValue(newData);
  };

  const { showAlert } = useConfirmAlert();

  const handleDelete = () => {
    showAlert({
      title: "Confirm Deletion",
      confirmMessage: "Are you sure you want to delete this?",
      async onConfirm() {
        console.log("Stuff has been deleted");
      },
    });
  };

  const countsCar = countAutomaker(cars);
  const carAutomaker: string[] = Object.keys(countsCar); 
  const carCountsNumber: number[] = Object.values(countsCar); 
  
  const optionsDoughnut = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const dataDoughnut = {
    labels: carAutomaker,
    datasets: [
      {
        data: carCountsNumber,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#150c6c80', '#0ee43c80'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#150c6c80', '#0ee43c80'],
      },
    ],
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
        text: 'Line Chart - Inspected Cars - Expired Cars',
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

  const vehicleStatistics = handleVehicleStatistics(cars, inspections);
  
  const { months, quarters, years } = handleSplitData(vehicleStatistics);
  
  const monthlyLabel = months.map(item => item.month);
  const monthlyRegisteredVehicles = months.map(item => item.inspectedCars);
  const monthlyExpiredRegistration = months.map(item => item.expiredCars);
  
  const quarterlyLabel = quarters.map(item => item.month);
  const quarterlyRegisteredVehicles = quarters.map(item => item.inspectedCars);
  const quarterlyExpiredRegistration = quarters.map(item => item.expiredCars);

  const yearlyLabel = years.map(item => item.month);
  const yearlyRegisteredVehicles = years.map(item => item.inspectedCars);
  const yearlyExpiredRegistration = years.map(item => item.expiredCars);

  const dataLineMonthly = {
    labels: monthlyLabel,
    datasets: [
      {
        label: 'Registered vehicles',
        data: monthlyRegisteredVehicles,
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Expired registration',
        data: monthlyExpiredRegistration,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const dataLineQuarterly = {
    labels: quarterlyLabel,
    datasets: [
      {
        label: 'Registered vehicles',
        data: quarterlyRegisteredVehicles,
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Expired registration',
        data: quarterlyExpiredRegistration,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const dataLineYearly = {
    labels: yearlyLabel,
    datasets: [
      {
        label: 'Registered vehicles',
        data: yearlyRegisteredVehicles,
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Expired registration',
        data: yearlyExpiredRegistration,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const carsColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 20,
    },
    {
      field: 'number',
      headerName: 'Number',
      width: 100,
    },
    {
      field: 'registryCity',
      headerName: 'Registry City',
      width: 100,
    },
    {
      field: 'automaker',
      headerName: 'Auto maker',
      width: 100,
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 100,
    },
    {
      field: 'actions',
      headerName: 'HÀNH ĐỘNG',
      width: 130,
      renderCell: () => {
        return (
          <div className="flex justify-center items-center">
            <div className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <PencilSquareIcon className="h-5 w-5 text-[#1a27c4]" />
            </div>
            <div className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <TrashIcon className="h-5 w-5 text-[#db2828]" onClick={handleDelete} />
            </div>
          </div>
        );
      },
    },
  ];

  const inspectionsColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 40,
    },
    {
      field: 'certificate',
      headerName: 'Certificate',
      width: 300,
    },
    {
      field: 'expirationDate',
      headerName: 'Expiration Date',
      width: 300,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 300,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      width: 300,
    },
    {
      field: 'actions',
      headerName: 'HÀNH ĐỘNG',
      width: 130,
      renderCell: () => {
        return (
          <div className="flex justify-center items-center">
            <div className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <PencilSquareIcon className="h-5 w-5 text-[#1a27c4]" />
            </div>
            <div className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <TrashIcon className="h-5 w-5 text-[#db2828]" onClick={handleDelete} />
            </div>
          </div>
        );
      },
    },
  ];

  const ownersColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 40,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 240,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 240,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 240,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 240,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      width: 240,
    },
    {
      field: 'actions',
      headerName: 'HÀNH ĐỘNG',
      width: 130,
      renderCell: () => {
        return (
          <div className="flex justify-center items-center">
            <div className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <PencilSquareIcon className="h-5 w-5 text-[#1a27c4]" />
            </div>
            <div className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <TrashIcon className="h-5 w-5 text-[#db2828]" onClick={handleDelete} />
            </div>
          </div>
        );
      },
    },
  ];

  switch (selectedItem?.id) {
    case 1:
      return (
        <>
            <div className="gridContainer">
              <div className="gridItem h-[260px] col-span-2">
                <Doughnut data={dataDoughnut} options={optionsDoughnut} />
              </div>
              <div className="gridItem h-[260px] col-span-2">
                <Calendar />
              </div>
              <div className="gridItem h-[260px] col-span-2 flex justify-center items-center">
                <Bar data={dataBar} options={optionsBar} />
              </div>
              <div className="gridItem lg:h-[370px] xl:h-[470px] col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3">
                <Table<Car> columns={carsColumns} rows={cars} />
              </div>
              <div className="gridItem lg:h-[370px] xl:h-[470px] col-span-2 md:col-span-4 lg:col-span-3 xl:col-span-3 relative">
                {menuDropdownValue === 'month' ? (
                  <Line data={dataLineMonthly} options={optionsLine} />
                ) : menuDropdownValue === 'quarter' ? (
                  <Line data={dataLineQuarterly} options={optionsLine} />
                ) : (
                  <Line data={dataLineYearly} options={optionsLine} />
                )}
                <MenuDropdown onDataUpdate={() => handleDataMenuDropdownUpdate} />
              </div>
            </div>
        </>
      );
    case 2:
      return (
        <>
          <div className='w-full h-[750px]'>
            <Table<Inspection> columns={inspectionsColumns} rows={inspections} />
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div className='w-full h-[750px]'>
            <Table<Owner> columns={ownersColumns} rows={owners} />
          </div>
        </>
      );
    default:
      return <p>Please select an item from the sidebar</p>;
  }
}
