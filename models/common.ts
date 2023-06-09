import { SVGProps } from "react";
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'

export interface LayoutProps {
	children: ReactElement,
  selectedItem: ItemSideBar,
  Layout?: React.FC<LayoutProps>,
}

export type NextPageWithLayout = NextPage & {
	Layout?: (props: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export interface ItemSideBar {
  id: number;
  title: string;
  icon: React.ReactElement<SVGProps<SVGSVGElement>>;
}
  
  