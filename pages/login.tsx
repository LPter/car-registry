import Nav from '@/components/navigation'

export default function Login() {
    return (
        <>
        <Nav/>
        <div className="flex flex-col items-center md:flex-row md:h-screen">
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
                            <label htmlFor="email" className="block font-bold text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
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
                                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 font-bold text-white bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:shadow-outline-indigo focus:border-purple-500"
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