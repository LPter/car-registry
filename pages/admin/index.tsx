// import styles from '../../styles/SidebarScroll.module.css';
import React from 'react';
import Content from '../../components/common/Content';
import { LayoutProps } from '../../models/index'
import { AdminLayout } from '../../components/layouts';

const Admin = ({ selectedItem} : LayoutProps) => {
  
  return (
    <Content selectedItem={selectedItem}></Content>
  );
};
Admin.Layout = AdminLayout

export default Admin;
