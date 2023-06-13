import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import { AppPropsWithLayout } from '../models';
import { EmptyLayout } from '../components/layouts';
import {  TableCellsIcon } from '@heroicons/react/20/solid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DialogUI from '../components/common/alert/DialogUI';
import AlertProvider from '../components/common/alert/AlertProvider';
import { SWRConfig } from 'swr';
import axiosClient from '../api-client/axios-client';
import '../styles/Home.css'

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmptyLayout; 

  return (
    <>
      <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
        <RecoilRoot>
          <AlertProvider AlertComponent={DialogUI}>
            <Layout selectedItem={{ id: 1, title: 'Dashboard', icon: <TableCellsIcon width={25} height={25} /> }}>
              <Component {...pageProps} />
            </Layout>
          </AlertProvider>
        </RecoilRoot>
      </SWRConfig>
      <ToastContainer/>
    </>
  );
}
