import { PencilSquareIcon, PlusSmallIcon, TrashIcon } from '@heroicons/react/20/solid';
import { DataGrid } from '@mui/x-data-grid';
import PrimaryButton from './PrimaryButton';

const usersColumns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 20,
  },
  {
    field: 'username',
    headerName: 'TÊN NGƯỜI DÙNG',
    width: 120,
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
            <TrashIcon className="h-5 w-5 text-[#db2828]" />
          </div>
        </div>
      );
    },
  },
];

const usersRows = [
  {
    id: 1,
    username: 'Thiep',
  },
  {
    id: 2,
    username: 'Thuy',
  },
  {
    id: 3,
    username: 'Thuy',
  },
  {
    id: 4,
    username: 'Thuy',
  },
  {
    id: 5,
    username: 'Thuy',
  },
  {
    id: 6,
    username: 'Thuy',
  },
  {
    id: 7,
    username: 'Thuy',
  },
  {
    id: 8,
    username: 'Thuy',
  },
];

function CarTable() {
  return (
    <div className="relative bg-white shadow-md w-full h-full">
      <DataGrid rows={usersRows} columns={usersColumns} pageSize={5} />
      <button className="absolute bottom-1 left-2 flex justify-center items-center bg-green-300 text-green-600 rounded-md h-11 px-4 hover:bg-green-400">
        <PlusSmallIcon className="h-5 w-5" />
        Create
      </button>
    </div>
  );
}

export default CarTable;
