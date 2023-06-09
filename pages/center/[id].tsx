import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import Content from '../../components/common/Content';
import { Inspection, LayoutProps, Owner, Car } from '../../models/index'
import axios from 'axios';
import { GetServerSidePropsContext, NextPage } from 'next';

interface CenterPageProps {
  inspections: Inspection[],
  cars: Car[],
  owners: Owner[],
}

const CenterPage : NextPage<CenterPageProps & LayoutProps> = ({ inspections, cars, owners, selectedItem}) => {
  console.log(inspections, cars, owners);
  
  return <Content selectedItem={selectedItem} inspections={inspections} cars={cars} owners={owners}></Content>;
}

Object.assign(CenterPage, { Layout: DashboardLayout });

export async function getServerSideProps(context: GetServerSidePropsContext) {
	context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=3')

	await new Promise((res) => setTimeout(res, 3000))

	const id = context.query.id
	if (!id) return { props: { query: context.query } }

	const response = await axios.get(`http://localhost:3000/api/v1/users/centre-info/${id}`)
	const { inspections, cars, owners } = await response.data;

	return {
		props: {
			inspections: inspections,
      cars: cars,
      owners: owners,
		},
	}
}

export default CenterPage;
