import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import Content from '../../components/common/Content';
import { Inspection, LayoutProps, Owner, Car, User } from '../../models/index'
import axios from 'axios';
import { GetServerSidePropsContext, NextPage } from 'next';

interface CenterPageProps {
  inspections: any[],
  cars: Car[],
  owners: Owner[],
  users: User[],
}

const CenterPage : NextPage<CenterPageProps & LayoutProps> = ({ users, inspections, cars, owners, selectedItem}) => {
	inspections.forEach(inspection => {
		inspection.UserId = parseInt(inspection.UserId);
	})
	
	return <Content selectedItem={selectedItem} inspections={inspections} cars={cars} owners={owners} users={users}></Content>;
}

Object.assign(CenterPage, { Layout: DashboardLayout });

export async function getServerSideProps(context: GetServerSidePropsContext) {
	context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=3')

	await new Promise((res) => setTimeout(res, 1000))

	const id = context.query.id
	if (!id) return { props: { query: context.query } }

	const response = await axios.get(`http://localhost:3000/api/v1/users/centre-info/${id}`)
	const { inspections, cars, owners } = await response.data;
	const userList = await axios.get(`http://localhost:3000/api/v1/users`)
	const users = userList.data
	return {
		props: {
			inspections: inspections,
			cars: cars,
			owners: owners,
			users: users,
		},
	}
}

export default CenterPage;
