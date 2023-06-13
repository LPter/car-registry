import React from 'react';
import Content from '../../components/common/Content';
import { AdminLayout } from '../../components/layouts';
import { Inspection, LayoutProps, Owner, Car, User } from '../../models/index'
import { GetServerSidePropsContext, NextPage } from 'next';
import axios from 'axios';

interface CenterPageProps {
  users: User[],
  inspections: Inspection[],
  cars: Car[],
  owners: Owner[],
}

const Admin : NextPage<CenterPageProps & LayoutProps> = ({ users, inspections, cars, owners, selectedItem}) => {
	const transformedData = cars.map((item) => ({
		id: item.id,
		automaker: item.automaker,
		engineType: item.engineType,
		fuelType: item.fuelType,
		model: item.model,
		number: item.number,
		purpose: item.purpose,
		registryCity: item.registryCity,
		isDeleted: item.isDeleted,
		createdAt: item.createdAt,
		updatedAt: item.updatedAt,
	  }));	
  	return <Content selectedItem={selectedItem} inspections={inspections} cars={transformedData} owners={owners} users={users}></Content>;
}

Object.assign(Admin, { Layout: AdminLayout });

export async function getServerSideProps(context: GetServerSidePropsContext) {
	context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=3');
  
	await new Promise((resolve) => setTimeout(resolve, 1000));
  
	const [usersResponse, inspectionsResponse, carsResponse, ownersResponse] = await Promise.all([
		axios.get('http://localhost:3000/api/v1/users'),
		axios.get('http://localhost:3000/api/v1/inspections'),
		axios.get('http://localhost:3000/api/v1/cars'),
		axios.get('http://localhost:3000/api/v1/owners')
	]);
	
	return {	
		props: {
			users: usersResponse.data.data,
			inspections: inspectionsResponse.data.data,
			cars: carsResponse.data.data,
			owners: ownersResponse.data.data
		}
	};
}

export default Admin;