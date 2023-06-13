import Image from 'next/image'

export default function Nav() {
    return (
        <>
            <header className="fixed w-full">
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">

                        {/* Logo */}
                        <a href="#" className="flex items-center">
                            <Image src="/logoweb.png" alt="alternative" width="110" height="500" className="h-8" />
                        </a>

                        {/* Login button */}
                        <div className="flex items-center lg:order-2">
                            <a href="/login" className="text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-500 dark:hover:bg-purple-600 focus:outline-none dark:focus:ring-purple-800">Đăng nhập</a>
                           
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}