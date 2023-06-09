import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PlusSmallIcon } from '@heroicons/react/20/solid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import GenericForm from './GenericForm';

interface TableProps<T> {
  columns: GridColDef[];
  rows: T[];
  pageSize?: number;
  rowsPerPageOptions?: number[];
}

function Table<T>({ columns, rows, pageSize = 5, rowsPerPageOptions = [5] }: TableProps<T>) {

  const [showCreateForm, setShowCreateForm] = useState(false);

  function handleButtonClick() {
    // toast.success("thành công!")
    setShowCreateForm(!showCreateForm)
  }

  function handleButtonClose() {
    // toast.success("thành công!")
    setShowCreateForm(!showCreateForm)
  }

  const fields = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'email', label: 'Email', type: 'email' },
    // Thêm các trường khác tùy ý
  ];
  return (
    <>
      <div className="relative bg-white shadow-md w-full h-full">
        <DataGrid rows={rows} columns={columns} pageSize={pageSize} rowsPerPageOptions={rowsPerPageOptions} />
        <button
          className="absolute bottom-1 left-2 flex justify-center items-center bg-green-300 text-green-600 rounded-md h-11 px-4 hover:bg-green-400"
          onClick={handleButtonClick}
        >
          <PlusSmallIcon className="h-5 w-5" />
          Create
        </button>
      </div>
      {showCreateForm && (
        <GenericForm title='form nhập' fields={fields} onClose={handleButtonClose} />
      )}
    </>
  );
}

export default Table;
