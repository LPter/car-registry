import { PublicConfiguration } from 'swr/_internal'
import { authApi } from '../api-client/auth-api'
import useSWR from 'swr'

// Auth --> Protected Pages
// <Auth>{children}</Auth>
export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/users/current', {
		dedupingInterval: 60 * 60 * 1000, // 1hr
		revalidateOnFocus: false,
		...options,
	})

	const firstLoading = profile === undefined && error === undefined

	async function login() {
		await authApi.login({
			username: 'center1',
			password: '12345678',
		})

		await mutate()
	}

	async function logout() {
		await authApi.logout()
		mutate(null, false)
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
	}
}