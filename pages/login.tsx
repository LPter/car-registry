import Cookies from 'cookies'
import { authApi } from '../api-client/auth-api'
import * as React from 'react'
import { useAuth } from '../hooks'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import userSchema from '../utils/validationUser'
import { toast } from 'react-toastify'

export default function LoginPage() {
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	})
	const router = useRouter();
	const [usernameInput, setUsernameInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	async function handleLoginClick(e:any) {
		e.preventDefault();
		const payLoad = {
            username: usernameInput,
            password: passwordInput,
        }
        const validationLoginResult = userSchema.validate(payLoad);
        if (validationLoginResult.error) {
            toast.warning("Username hoặc password không hợp lệ!! Username từ 4-32 ký tự, password ít nhất 6 ký tự")
        } else {
            try {
                await login(payLoad)
            } catch (error) {
                toast.error("Tài khoản không hợp lệ")
            }
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
	
		  if (profile.centreType === 'ADMIN') {
			router.push('/admin');
		  } else if (profile.centreType === 'REGION') {
			router.push(`/region/${profile.region}`);
		  } else if (profile.centreType === 'CENTER') {
			router.push(`/center/${profile.id}`)
		  }
		}
	  }, [profile, router]);
	  
	  return (
        <>
        <div className="bg-white flex flex-col items-center md:flex-row md:h-screen">
            <div className="flex items-center justify-center w-full md:w-1/2">
                <img src="/loginacc.png" alt="Login Image" width={550} height={400} />
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-1/3">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h1 className="text-2xl font-bold">Chào mừng bạn!</h1>
                        <p className="mt-2 text-gray-600">
                            Xin vui lòng đăng nhập tài khoản
                        </p>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="username" className="block font-bold text-gray-700">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Nhập username của bạn"
                                className="bg-white border-gray-800 w-full px-4 py-3 mt-1 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
								onChange={(e) => {
									setUsernameInput(e.target.value)
								}}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block font-bold text-gray-700"
                            >
                                Mật khẩu
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Nhập mật khẩu của bạn"
                                className="bg-white border-gray-800 w-full px-4 py-3 mt-1 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
								onChange={(e) => {
									setPasswordInput(e.target.value)
								}}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 font-bold text-white bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline-indigo focus:border-purple-500"
								onClick={handleLoginClick}
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}