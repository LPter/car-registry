import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ArrowUpTrayIcon, PlusSmallIcon } from '@heroicons/react/20/solid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef, useState } from 'react';
import GenericForm from './GenericForm';
import { dataChange } from '../../atoms/modelAtom';
import { useRecoilState } from 'recoil';
import { useAuth } from '../../hooks';
import { carApi } from '../../api-client';
import axios from 'axios';

interface TableProps<T> {
  columns: GridColDef[];
  rows: T[];
  pageSize?: number;
  rowsPerPageOptions?: number[];
  tableType: string;
}

function Table<T>({ columns, rows, pageSize = 8, rowsPerPageOptions = [8], tableType }: TableProps<T>) {

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [eventDataChange, setEventDataChange] = useRecoilState(dataChange);
  const { profile } = useAuth()
  const [file, setFile] = useState()
  function handleButtonClick() {
    setShowCreateForm(!showCreateForm)
  }

  function handleButtonClose() {
    setShowCreateForm(!showCreateForm)
  }

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

  const handleChooseFileClick = async() => {
    try {
      let data = new FormData();
      data.append('file', file);
      
      const res = await axios.post('http://localhost:3000/api/v1/cars/upload', data);
      if (res) {
        setEventDataChange(!eventDataChange)
        toast.success("Upload file success")
      }
    } catch (error) {
      console.log(error);
      
      toast.error("upload file failed")
    }
  };

  const handleFileChange = (event:any) => {
    setFile(event.target.files[0])
    // Do something with the selected file
  };

  useEffect(() => {
    setEventDataChange(!showCreateForm);
  }, [showCreateForm])
  
  return (
    <>
      <div className="relative bg-white shadow-md w-full h-full">
        <DataGrid rows={rows} columns={columns} pageSize={pageSize} rowsPerPageOptions={rowsPerPageOptions} />
        {profile.centreType === 'ADMIN' && tableType === 'car' ? (
          <div>
            <button
              className="absolute bottom-1 left-2 flex justify-center items-center bg-green-300 text-green-600 rounded-md h-11 px-4 hover:bg-green-400"
              onClick={handleButtonClick}
            >
              <PlusSmallIcon className="h-5 w-5" />
              Create
            </button>
            <div>
              <input
                type="file"
                // style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <button className='absolute bottom-3 right-80' onClick={handleChooseFileClick}>
                Import file
              </button>
            </div>
          </div>
        ) : (
          <button
              className="absolute bottom-1 left-2 flex justify-center items-center bg-green-300 text-green-600 rounded-md h-11 px-4 hover:bg-green-400"
              onClick={handleButtonClick}
            >
              <PlusSmallIcon className="h-5 w-5" />
              Create
          </button>
        )}
      </div>
      {showCreateForm && (
        tableType === 'car' ? (
          <GenericForm id={1} title='Create vehicle' fields={fieldsCar} onClose={handleButtonClose} type='Create New Car' onSubmit={function (formData: any): void {
            throw new Error('Function not implemented.');
          } }
            defaultValue={{}}
            />
        ) : (
          tableType === 'user' ? (
            <GenericForm id={1} title='Create user' fields={fieldsUser} onClose={handleButtonClose} type='Create New User' onSubmit={function (formData: any): void {
              throw new Error('Function not implemented.');
            } }
            defaultValue={{}}
            />
          ) : (
            tableType === 'inspection' ? (
              <GenericForm id={1} title='Create inspection' fields={fieldsInspection} onClose={handleButtonClose} type='Create New Inspection' onSubmit={function (formData: any): void {
                throw new Error('Function not implemented.');
              } }
              defaultValue={{}}
              />
            ) : (
              <GenericForm id={1} title='Create owner' fields={fieldsOwner} onClose={handleButtonClose} type='Create New Owner' onSubmit={function (formData: any): void {
                throw new Error('Function not implemented.');
              } }
              defaultValue={{}}
              />
            )
          )
        )
      )}
    </>
  );
}

export default Table;
