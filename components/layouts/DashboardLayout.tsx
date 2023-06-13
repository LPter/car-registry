import {
  ArrowLeftOnRectangleIcon,
  ChevronRightIcon,
  IdentificationIcon,
  TruckIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
  import { useState } from 'react';
  import styles from '../../styles/SidebarScroll.module.css';
  import React from 'react';
  import { ItemSideBar, LayoutProps } from '../../models/index'
import Auth from '../common/Auth';
import { useAuth } from '../../hooks/use-auth';
import Image from 'next/image';
import { useRouter } from 'next/router';
  
  export function DashboardLayout ({ children } : LayoutProps) {
    const [open, setOpen] = useState(true);
    const { profile, logout } = useAuth();
    const router = useRouter();
    const Menu = [
      { id: 1, title: 'Vehicles', icon: <TruckIcon width={25} height={25} /> },
      { id: 2, title: 'Inspections', icon: <IdentificationIcon width={25} height={25} /> },
      { id: 3, title: 'Owners ', icon: <UserIcon width={25} height={25} /> },
    ];
    const [selectedItem, setSelectedItem] = useState(Menu[0]);
  
    function handleItemClick(item: ItemSideBar) {
      setSelectedItem({ id: item.id, title: item.title, icon: item.icon });
    }

    async function handleLogoutClick() {
      try {
        await logout()
        console.log('redirect to login page')
        router.push('/login')
      } catch (error) {
        console.log('failed to logout', error)
      }
    }
  
    return (
      <Auth>
        <div className="flex min-h-screen">
          <div className={` ${open ? 'w-72' : 'w-20 '} bg-purple-900 p-5 pt-8 relative duration-300`}>
            <ChevronRightIcon
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple fill-white bg-black
              border-2 rounded-full  ${!open && 'rotate-180'}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
            <Image src="/logoweb.png" alt="alternative" width="110" height="500" className={`h-8 cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
              <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>Center</h1>
            </div>
            <ul
              className={`flex flex-col justify-between ${open ? 'overflow-y-auto overflow-x-hidden' : 'overflow-hidden'} pt-6 h-screen ${
                styles.sidebarScroll
              }`}
            >
              <div>
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
              </div>

              <div className='mb-20'>
                <li
                  className={`flex rounded-full overflow-hidden p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                >
                  <Image 
                    className='rounded-full overflow-hidden'
                    src='/images/admin_avatar.jpg'
                    alt="User Avatar"
                    width={40}
                    height={40}>
                      
                    </Image>
                  <span className={`${!open && 'hidden'} origin-left duration-200`}>{profile?.username}</span>
                </li>
                <li
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                    onClick={handleLogoutClick}
                  >
                    <ArrowLeftOnRectangleIcon width={25} height={25} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>Logout</span>
                  </li>
              </div>

            </ul>
          </div>
          <div className="flex-1 p-7">
              {React.cloneElement(children, { selectedItem: selectedItem })}
          </div>
        </div>
      </Auth>
    );
  };  