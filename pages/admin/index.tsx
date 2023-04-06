import {
  CalendarIcon,
  ChartBarIcon,
  ChevronRightIcon,
  Cog8ToothIcon,
  FolderIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  TableCellsIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';
import { useState, SVGProps } from 'react';
import styles from '../../styles/SidebarScroll.module.css';
import React from 'react';
import Content from '../../components/Content';
import item from '../../types';

const Admin = () => {
  const [open, setOpen] = useState(true);
  const Menu = [
    { id: 1, title: 'Dashboard', icon: <TableCellsIcon width={25} height={25} /> },
    { id: 2, title: 'Inbox', icon: <InboxIcon width={25} height={25} /> },
    { id: 3, title: 'Accounts', icon: <UserCircleIcon width={25} height={25} /> },
    { id: 4, title: 'Schedule ', icon: <CalendarIcon width={25} height={25} /> },
    { id: 5, title: 'Search', icon: <MagnifyingGlassIcon width={25} height={25} /> },
    { id: 6, title: 'Analytics', icon: <ChartBarIcon width={25} height={25} /> },
    { id: 7, title: 'Files ', icon: <FolderIcon width={25} height={25} /> },
    { id: 8, title: 'Setting', icon: <Cog8ToothIcon width={25} height={25} /> },
  ];
  const [selectedItem, setSelectedItem] = useState(Menu[0]);

  function handleItemClick(item: item) {
    setSelectedItem({ id: item.id, title: item.title, icon: item.icon });
  }

  return (
    <div className="flex min-h-screen">
      <div className={` ${open ? 'w-72' : 'w-20 '} bg-purple-900 p-5 pt-8 relative duration-300`}>
        <ChevronRightIcon
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple fill-white bg-black
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://rb.gy/ulxxee"
            width={50}
            height={50}
            className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>Designer</h1>
        </div>
        <ul
          className={`${open ? 'overflow-y-auto overflow-x-hidden' : 'overflow-hidden'} pt-6 h-screen ${
            styles.sidebarScroll
          }`}
        >
          {Menu.map((item, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            ${
                              selectedItem && selectedItem.id === item.id ? 'bg-purple-600' : ''
                            } transition-all duration-300`}
              onClick={() => handleItemClick(item)}
            >
              {item.icon}
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-7">
        <Content selectedItem={selectedItem}></Content>
      </div>
    </div>
  );
};

export default Admin;
