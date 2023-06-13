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
import { dataChange, dataMenuDropdown } from '../../atoms/modelAtom';
import Calendar from './Calender';
import { ItemSideBar, Inspection, Car, Owner, User } from '../../models/index';
import Table from './Table';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import AlertProvider, { useConfirmAlert } from "./alert/AlertProvider";
import { countAutomaker } from '../../utils/handleCountAutomaker';
import { handleVehicleStatistics } from '../../utils/handleVehicleStatistics';
import { handleSplitData } from '../../utils/handleSplitData';
import { handleForcast } from '../../utils/handleForcast';
import { useAuth } from '../../hooks';
import { useEffect, useState } from 'react';
import { carApi, userApi } from '../../api-client';
import GenericForm from './GenericForm';
import { inspectionApi } from '../../api-client/inspection-api';
import { ownerApi } from '../../api-client/owner-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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

export default function Content({ selectedItem, inspections, cars, owners, users }: { 
  selectedItem: ItemSideBar,
  inspections: Inspection[],
  cars: Car[],
  owners: Owner[],
  users: User[],
}) {
  
  const [carData, setCarData] = useState(cars);
  const [inspectionData, setInspectionData] = useState(inspections);
  const [ownerData, setOwnerData] = useState(owners);
  const [userData, setUserData] = useState(users);

  const [eventDataChange, setEventDataChange] = useRecoilState(dataChange);

  const [seletedRowCar, setSelectedRowCar] = useState(cars[0]);
  const [seletedRowInspection, setSelectedRowInspection] = useState(inspections[0]);
  const [seletedRowOwner, setSelectedRowOwner] = useState(owners[0]);
  const [seletedRowUser, setSelectedRowUser] = useState(users[0]);

  const [showEditCar, setShowEditCar] = useState(false);
  const [showEditInspection, setShowEditInspection] = useState(false);
  const [showEditOwner, setShowEditOwner] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);

  const [menuDropdownValue, setMenuDropdownValue] = useRecoilState(dataMenuDropdown);
  const { profile } = useAuth()
  const handleDataMenuDropdownUpdate = (newData: string) => {
    setMenuDropdownValue(newData);
  };

  const fieldsCar = [
    { name: 'number', label: 'Number', type: 'text' },
    { name: 'registryCity', label: 'Registry City', type: 'text' },
    { name: 'automaker', label: 'Automaker', type: 'text' },
    { name: 'model', label: 'Model', type: 'text' },
    { name: 'engineType', label: 'Engine Type', type: 'text' },
    { name: 'fuelType', label: 'Fuel Type', type: 'text' },
    { name: 'purpose', label: 'Purpose', type: 'text' },
    { name: 'OwnerId', label: 'Owner Id', type: 'text' },
  ];

  const fieldsUser = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'centreName', label: 'Centre Name', type: 'text' },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'centreType', label: 'CentreType', type: 'text'},
    { name: 'region', label: 'Region', type: 'text'},
  ];

  const fieldsInspection = [
    { name: 'certificate', label: 'Certificate', type: 'text' },
    { name: 'expirationDate', label: 'Expiration Date', type: 'date' },
    { name: 'CarId', label: 'CarId', type: 'text' },
    { name: 'UserId', label: 'UserId', type: 'text' },
  ];

  const fieldsOwner = [
    { name: 'type', label: 'Type', type: 'text' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'address', label: 'address', type: 'text' },
  ];

  const { showAlert } = useConfirmAlert();

  function handleButtonCloseCar() {
    setShowEditCar(!showEditCar)
  }
  function handleButtonCloseInspection() {
    setShowEditInspection(!showEditInspection)
  }
  function handleButtonCloseOwner() {
    setShowEditOwner(!showEditOwner)
  }
  function handleButtonCloseUser() {
    setShowEditUser(!showEditUser)
  }

  const countsCar = countAutomaker(cars);
  const carAutomaker: string[] = Object.keys(countsCar); 
  const carCountsNumber: number[] = Object.values(countsCar); 

  // // doughnut chart
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

  // Line chart data and options
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
        data: [2, 3, 2, 4, 4, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Expired registration',
        data: [1, 2, 3, 3, 2, 3],
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
        data: [4, 6, 6, 5, 4, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Expired registration',
        data: [5, 3, 4, 4, 5, 6],
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
        data: [8, 9, 10, 6, 7, 5],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Expired registration',
        data: [7, 8, 5, 9, 8, 4],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  // bar chart
  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart forecast number of registered vehicles',
      },
    },
  };

  const dataForecast = handleForcast(monthlyRegisteredVehicles, monthlyExpiredRegistration);
  
  const { nextSixMonths ,forecastRegisteredVehicles, forecastExpiredRegistration } = dataForecast;

  const dataBar = {
    labels: nextSixMonths,
    datasets: [
      {
        label: 'Forecast Registered Vehicles',
        data: forecastRegisteredVehicles,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Forecast Expired Registration',
        data: forecastExpiredRegistration,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // column table
  const carsColumns1 = [
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
      renderCell: (params:any) => {
        return (
          <div className="flex justify-center items-center">
            <div className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <PencilSquareIcon className="h-5 w-5 text-[#1a27c4]" onClick={async () => {
                const res:any = await carApi.searchCar(params.row.number);
                setSelectedRowCar(res);
                setShowEditCar(!showEditCar);
              }}/>
            </div>
            <div className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <TrashIcon className="h-5 w-5 text-[#db2828]" onClick={async () => {
                try {
                  showAlert({
                    title: "Confirm Car Deletion",
                    confirmMessage: "Are you sure you want to delete this?",
                    async onConfirm() {
                      const res:any = await carApi.searchCar(params.row.number)
                      const resDelete:any = await carApi.deleteCar(res.id)
                      if (resDelete) {
                        setEventDataChange(!eventDataChange)
                        toast.success("Delete Car Success")
                      } 
                    },
                  }); 
                } catch (error) {
                  toast.error(`Delete Car Error ${error}`)
                }
              }}/>
            </div>
          </div>
        );
      },
    },
  ];

  const carsColumns2 = [
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
  ];

  const inspectionsColumns1 = [
    {
      field: 'id',
      headerName: 'ID',
      width: 40,
    },
    {
      field: 'certificate',
      headerName: 'Certificate',
      width: 200,
    },
    {
      field: 'expirationDate',
      headerName: 'Expiration Date',
      width: 200,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      width: 200,
    },
    {
      field: 'CarId',
      headerName: 'Car Id',
      width: 200,
    },
    {
      field: 'UserId',
      headerName: 'User Id',
      width: 200,
    },
    {
      field: 'actions',
      headerName: 'HÀNH ĐỘNG',
      width: 130,
      renderCell: (params:any) => {
        return (
          <div className="flex justify-center items-center">
            <div className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <PencilSquareIcon className="h-5 w-5 text-[#1a27c4]" onClick={async () => {
                const res:any = await inspectionApi.getDetailInspection(params.row.id)
                setSelectedRowInspection(res)
                setShowEditInspection(!showEditInspection)
              }} />
            </div>
            <div className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <TrashIcon className="h-5 w-5 text-[#db2828]"onClick={async () => {
                try {
                  showAlert({
                    title: "Confirm Inspection Deletion",
                    confirmMessage: "Are you sure you want to delete this?",
                    async onConfirm() {
                      const res:any = await inspectionApi.getDetailInspection(params.row.id)
                      const resDelete:any = await inspectionApi.deleteInspection(res.id)
                      if (resDelete) {
                        setEventDataChange(!eventDataChange)
                        toast.success("Delete Inspection Success")
                      } 
                    },
                  }); 
                } catch (error) {
                  toast.error(`Delete Inspection Error ${error}`)
                }
              }}  />
            </div>
          </div>
        );
      },
    },
  ];

  const inspectionsColumns2 = [
    {
      field: 'id',
      headerName: 'ID',
      width: 40,
    },
    {
      field: 'certificate',
      headerName: 'Certificate',
      width: 200,
    },
    {
      field: 'expirationDate',
      headerName: 'Expiration Date',
      width: 200,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      width: 200,
    },
    {
      field: 'CarId',
      headerName: 'Car Id',
      width: 200,
    },
    {
      field: 'UserId',
      headerName: 'User Id',
      width: 200,
    },
  ];

  const ownersColumns1 = [
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
      renderCell: (params:any) => {
        return (
          <div className="flex justify-center items-center">
            <div className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <PencilSquareIcon className="h-5 w-5 text-[#1a27c4]" onClick={async () => {
                const res:any = await ownerApi.getDetailOwner(params.row.id)
                setSelectedRowOwner(res)
                setShowEditOwner(!showEditOwner)
              }} />
            </div>
            <div className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <TrashIcon className="h-5 w-5 text-[#db2828]" onClick={async () => {
                try {
                  showAlert({
                    title: "Confirm Owner Deletion",
                    confirmMessage: "Are you sure you want to delete this?",
                    async onConfirm() {
                      const res:any = await ownerApi.getDetailOwner(params.row.id)
                      const resDelete:any = await ownerApi.deleteOwner(res.id)
                      if (resDelete) {
                        setEventDataChange(!eventDataChange)
                        toast.success("Delete Owner Success")
                      } 
                    },
                  }); 
                } catch (error) {
                  toast.error(`Delete Owner Error ${error}`)
                }
              }} />
            </div>
          </div>
        );
      },
    },
  ];

  const ownersColumns2 = [
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
  ];

  const usersColumns1 = [
    {
      field: 'id',
      headerName: 'ID',
      width: 40,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 160,
    },
    {
      field: 'centreName',
      headerName: 'Centre Name',
      width: 160,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 160,
    },
    {
      field: 'centreType',
      headerName: 'Centre Type',
      width: 160,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 160,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      width: 160,
    },
    {
      field: 'region',
      headerName: 'Region',
      width: 240,
    },
    {
      field: 'actions',
      headerName: 'HÀNH ĐỘNG',
      width: 130,
      renderCell: (params:any) => {
        return (
          <div className="flex justify-center items-center">
            <div className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <PencilSquareIcon className="h-5 w-5 text-[#1a27c4]" onClick={async () => {
                const res:any = await userApi.getDetailUser(params.row.id)
                setSelectedRowUser(res)
                setShowEditUser(!showEditUser)
              }} />
            </div>
            <div className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <TrashIcon className="h-5 w-5 text-[#db2828]" onClick={async() => {
                try {
                  showAlert({
                    title: "Confirm User Deletion",
                    confirmMessage: "Are you sure you want to delete this?",
                    async onConfirm() {
                      const res:any = await userApi.getDetailUser(params.row.id)
                      const resDelete:any = await userApi.deleteUser(res.id)
                      if (resDelete) {
                        setEventDataChange(!eventDataChange)
                        toast.success("Delete User Success")
                      } 
                    },
                  }); 
                } catch (error) {
                  toast.error(`Delete User Error ${error}`)
                }
              }} />
            </div>
          </div>
        );
      },
    },
  ];

  const usersColumns2 = [
    {
      field: 'id',
      headerName: 'ID',
      width: 40,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 160,
    },
    {
      field: 'centreName',
      headerName: 'Centre Name',
      width: 160,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 160,
    },
    {
      field: 'centreType',
      headerName: 'Centre Type',
      width: 160,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 160,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      width: 160,
    },
    {
      field: 'region',
      headerName: 'Region',
      width: 240,
    },
  ];
  
  const fetchDataAdmin = async () => {
    const [usersResponse, inspectionsResponse, carsResponse, ownersResponse] = await Promise.all([
      axios.get('http://localhost:3000/api/v1/users'),
      axios.get('http://localhost:3000/api/v1/inspections'),
      axios.get('http://localhost:3000/api/v1/cars'),
      axios.get('http://localhost:3000/api/v1/owners')
    ]);
    setCarData(carsResponse.data.data);
    setInspectionData(inspectionsResponse.data.data);
    setOwnerData(ownersResponse.data.data);
    setUserData(usersResponse.data.data);
  }

  const fetchDataCenter = async () => {
    const [centerResponse, usersResponse] = await Promise.all([
      axios.get(`http://localhost:3000/api/v1/users/centre-info/${profile.id}`),
      axios.get('http://localhost:3000/api/v1/users'),
    ]);
    const { inspections, cars, owners } = await centerResponse.data;
    setCarData(cars);
    setInspectionData(inspections);
    setOwnerData(owners);
    setUserData(usersResponse.data);
  }

  const fetchDataRegion = async () => {
    const [centerResponse, usersResponse] = await Promise.all([
      axios.get(`http://localhost:3000/api/v1/users/region-info/${profile.region}`),
      axios.get('http://localhost:3000/api/v1/users'),
    ]);
    const { inspections, cars, owners } = await centerResponse.data;
    setCarData(cars);
    setInspectionData(inspections);
    setOwnerData(owners);
    setUserData(usersResponse.data);
  }

  useEffect( () => {
    if (profile.centreType === 'ADMIN') {
      fetchDataAdmin();
    } else if (profile.centreType === 'CENTER') {
      fetchDataCenter()
    } else if (profile.centreType === 'REGION') {
      fetchDataRegion()
    }
  }, [eventDataChange, showEditCar, showEditInspection, showEditOwner, showEditUser ])
  
  return (
    <>
      {selectedItem?.id === 1 ? (
        <div className="grid grid-cols-autoFitCol gap-2 w-full h-full">
          <div className="w-full bg-white shadow-md rounded-md h-[260px] col-span-2">
            <Doughnut data={dataDoughnut} options={optionsDoughnut} />
          </div>
          <div className="w-full bg-white shadow-md rounded-md h-[260px] col-span-2">
            <Calendar />
          </div>
          <div className="w-full bg-white shadow-md rounded-md h-[260px] col-span-2 flex justify-center items-center">
            <Bar data={dataBar} options={optionsBar} />
          </div>
          <div className="w-full bg-white shadow-md rounded-md lg:h-[370px] xl:h-[470px] col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3">
            {profile?.centreType === 'ADMIN' ? (
              <Table<Car>
                columns={carsColumns1}
                rows={carData}
                pageSize={6}
                rowsPerPageOptions={[6]}
                tableType='car'
              />
            ) : (
              <Table<Car>
                columns={carsColumns2}
                rows={carData}
                pageSize={6}
                rowsPerPageOptions={[6]}
                tableType='car'
              />
            )}
          </div>
          <div className="w-full bg-white shadow-md rounded-md lg:h-[370px] xl:h-[470px] col-span-2 md:col-span-4 lg:col-span-3 xl:col-span-3 relative">
            {menuDropdownValue === 'month' ? (
              <Line data={dataLineMonthly} options={optionsLine} />
            ) : menuDropdownValue === 'quarter' ? (
              <Line data={dataLineQuarterly} options={optionsLine} />
            ) : (
              <Line data={dataLineYearly} options={optionsLine} />
            )}
            <MenuDropdown onDataUpdate={handleDataMenuDropdownUpdate} />
          </div>
        </div>
      ) : selectedItem?.id === 2 ? (
        <div className='w-full h-[750px]'>
          {profile?.centreType === 'ADMIN' ? (
            <Table<Inspection> columns={inspectionsColumns1} rows={inspectionData} tableType='inspection' />
          ) : (
            <Table<Inspection> columns={inspectionsColumns2} rows={inspectionData} tableType='inspection' />
          )}
        </div>
      ) : selectedItem?.id === 3 ? (
        <div className='w-full h-[750px]'>
          {profile?.centreType === 'ADMIN' ? (
            <Table<Owner> columns={ownersColumns1} rows={ownerData} tableType='owner' />
          ) : (
            <Table<Owner> columns={ownersColumns2} rows={ownerData} tableType='owner' />
          )}
        </div>
      ) : (
        <div className='w-full h-[750px]'>
          {profile?.centreType === 'ADMIN' ? (
            <Table<User> columns={usersColumns1} rows={userData} tableType='user' />
          ) : (
            <Table<User> columns={usersColumns2} rows={userData} tableType='user' />
          )}
        </div>
      )}
      {showEditCar && (
        <GenericForm
          title='Edit Car'
          fields={fieldsCar}
          onClose={handleButtonCloseCar}
          type='Edit Car'
          onSubmit={(formData: any): void => {
            throw new Error('Function not implemented.');
          }}
          defaultValue={seletedRowCar}
          id={seletedRowCar.id}
        />
      )}
      {showEditInspection && (
        <GenericForm
          title='Edit Inspection'
          fields={fieldsInspection}
          onClose={handleButtonCloseInspection}
          type='Edit Inspection'
          onSubmit={(formData: any): void => {
            throw new Error('Function not implemented.');
          }}
          defaultValue={seletedRowInspection}
          id={seletedRowInspection.id}
        />
      )}
      {showEditOwner && (
        <GenericForm
          title='Edit Owner'
          fields={fieldsOwner}
          onClose={handleButtonCloseOwner}
          type='Edit Owner'
          onSubmit={(formData: any): void => {
            throw new Error('Function not implemented.');
          }}
          defaultValue={seletedRowOwner}
          id={seletedRowOwner.id}
        />
      )}
      {showEditUser && (
        <GenericForm
          title='Edit User'
          fields={fieldsUser}
          onClose={handleButtonCloseUser}
          type='Edit User'
          onSubmit={(formData: any): void => {
            throw new Error('Function not implemented.');
          }}
          defaultValue={seletedRowUser}
          id={seletedRowUser.id}
        />
      )}
    </>
  );
  
}
