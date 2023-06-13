import { useRouter } from 'next/router';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import Content from '../../components/common/Content';
import { Inspection, LayoutProps, Owner, Car, User } from '../../models/index'
import { GetServerSidePropsContext, NextPage } from 'next';
import axios from 'axios';

interface RegionPageProps {
	inspections: Inspection[],
	cars: Car[],
	owners: Owner[],
	users: User[],
}

const RegionPage : NextPage<RegionPageProps & LayoutProps> = ({ users, inspections, cars, owners, selectedItem}) => {
	const transformedData = inspections.map((item) => ({
		id: item.id,
		certificate: item.certificate,
		expirationDate: item.expirationDate,
		isDeleted: item.isDeleted,
		createdAt: item.createdAt,
		updatedAt: item.updatedAt,
		CarId: item.carId, // Chuyển CarId thành carId
		UserId: item.userId, // Chuyển UserId thành userId
	  }));
	console.log(transformedData, cars);
	
	return <Content selectedItem={selectedItem} inspections={transformedData} cars={cars} owners={owners} users={users}></Content>;
}

Object.assign(RegionPage, { Layout: DashboardLayout });

export async function getServerSideProps(context: GetServerSidePropsContext) {
	context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=3')

	await new Promise((res) => setTimeout(res, 1000))

	const region = context.query.region
	if (!region) return { props: { query: context.query } }	
	const response = await axios.get(`http://localhost:3000/api/v1/users/region-info/${region}`)
	
	const { inspections, cars, owners } = await response.data;
	const userList = await axios.get(`http://localhost:3000/api/v1/users`)
	const users = userList.data;
	
	return {
		props: {
			users,
			inspections,
			cars,
			owners,
		},
	}
}

export default RegionPage;
