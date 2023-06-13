import React, { useState, ChangeEvent, FormEvent } from 'react';
import { carApi, userApi } from '../../api-client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { inspectionApi } from '../../api-client/inspection-api';
import { ownerApi } from '../../api-client/owner-api';
import { Car, Inspection, Owner, User } from '../../models';

interface Field {
  name: string;
  label: string;
  type: string;
  id?: string;
  value?: string;
  placeholder?: string;
}

interface Props {
  title: string;
  fields: Field[];
  onSubmit: (formData: any) => void;
  onClose: () => void;
  type: string,
  defaultValue?: any,
  id: number,
}

const GenericForm: React.FC<Props> = ({ title, fields, onSubmit, onClose, type, defaultValue, id }) => {
  const [formData, setFormData] = useState<any>(defaultValue);
  const optionsToast = {
    onOpen: onClose,
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (type === 'Create New Car') {
      try {
        const response = await carApi.addCar(formData);
        if (response) {
          toast.success(`${type} Success`, optionsToast)
        }
      } catch (error:any) {
        toast.error(`${type} Faild ${error}`, optionsToast)
      }
    } else if (type === 'Create New User') {
      try {
        const response = await userApi.addUser(formData);
        if (response) {
          toast.success(`${type} Success`, optionsToast)
        }
      } catch (error:any) {
        toast.error(`${type} Faild ${error}`, optionsToast)
      }
    } else if (type === 'Create New Inspection') {
      try {
        const response = await inspectionApi.addInspection(formData);
        if (response) {
          toast.success(`${type} Success`, optionsToast)
        }
      } catch (error:any) {
        toast.error(`${type} Faild ${error}`, optionsToast)
      }
    } else if (type === 'Create New Owner') {
      try {
        const response = await ownerApi.addOwner(formData);
        if (response) {
          toast.success(`${type} Success`, optionsToast)
        }
      } catch (error:any) {
        toast.error(`${type} Faild ${error}`, optionsToast)
      }
    } else if (type === 'Edit Car') {
      try {
        const response = await carApi.editCar(formData, id);
        if (response) {
          toast.success(`${type} Success`, optionsToast)
        }
      } catch (error:any) {
        toast.error(`${type} Faild ${error}`, optionsToast)
      }
    } else if (type === 'Edit Inspection') {
      try {
        const response = await inspectionApi.editInspection(formData, id);
        if (response) {
          toast.success(`${type} Success`, optionsToast)
        }
      } catch (error:any) {
        toast.error(`${type} Faild ${error}`, optionsToast)
      }
    } else if (type === 'Edit Owner') {
      try {
        const response = await ownerApi.editOwner(formData, id);
        if (response) {
          toast.success(`${type} Success`, optionsToast)
        }
      } catch (error:any) {
        toast.error(`${type} Faild ${error}`, optionsToast)
      }
    } else if (type === 'Edit User') {
      try {
        const response = await userApi.editUser(formData, id);
        if (response) {
          toast.success(`${type} Success`, optionsToast)
        }
      } catch (error:any) {
        toast.error(`${type} Faild ${error}`, optionsToast)
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-md mx-auto p-4 rounded shadow-lg">
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {fields.map((field) => (
          <div key={field.name} className="relative z-0 w-full mb-6 group">
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder= " "
              autoComplete="off"
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{field.label}</label>
          </div>
        ))}
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> 
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenericForm;
