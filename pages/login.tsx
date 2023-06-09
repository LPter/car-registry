import Cookies from 'cookies'
import { authApi } from '../api-client/auth-api'
import * as React from 'react'
import { useAuth } from '../hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function LoginPage() {
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	})
	const router = useRouter();

	async function handleLoginClick() {
		try {
			await login()
		} catch (error) {
			console.log('failed to login', error)
		}
	}

	async function handleLogoutClick() {
		try {
			await logout()
			console.log('redirect to login page')
		} catch (error) {
			console.log('failed to logout', error)
		}
	}

	useEffect(() => {
		if (profile) {
		  console.log(profile);
	
		  if (profile.centreType === 'ADMIN') {
			router.push('/admin');
		  } else if (profile.centreType === 'REGION') {
			router.push(`/region/${profile.id}`);
		  } else if (profile.centreType === 'CENTER') {
			router.push(`/center/${profile.id}`)
		  }
		}
	  }, [profile, router]);

	return (
		<div className='flex'>
			<h1>Login Page</h1>
			<p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
			<div className='flex flex-col justify-between items-center'>
				<button className='border-black pt-5 pb-5' onClick={handleLoginClick}>Login</button>
				<button onClick={handleLogoutClick}>Logout</button>
			</div>
		</div>
	)
}