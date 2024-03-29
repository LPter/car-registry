import { useAuth } from '../../hooks/index'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Loader from '../../pages/loader'

export interface AuthProps {
	children: any
}

export default function Auth({ children }: AuthProps) {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (!firstLoading && !profile?.centreType) router.push('/login')
	}, [router, profile, firstLoading])

	if (!profile?.centreType) return <Loader/>

	return <div>{children}</div>
}