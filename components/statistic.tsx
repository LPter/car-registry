import Image from 'next/image'

export default function Sta() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                        {/* <p className="text-lg font-medium text-purple-600 dark:text-purple-500">Trusted Worldwide</p> */}
                        <img src="/logoweb.png" alt="alternative" className="h-8" />
                        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Những điểm nổi bật của CaRegistree</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">CaRegistree được phát triển với nhiều ưu điểm nổi trội, tạo ra những thuận lợi cho người sử dụng.</p>
                        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                            <div>
                                <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                    Explore Legality Guide
                                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                    Visit the Trust Center
                                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                        <div>
                            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">99.99% tốc độ</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">Tốc độ tra cứu nhanh hơn 99.99% so với hệ thống cũ</p>
                        </div>
                        <div>
                            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ tài khoản</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">Hiện được sử dụng bởi hơn 100 Trung tâm Đăng kiểm trên toàn quốc</p>
                        </div>
                        <div>
                            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">63 tỉnh thành</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">CaRegistree có đầy đủ dữ liệu từ 63 tỉnh thành Việt Nam</p>
                        </div>
                        <div>
                            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path></svg>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">Giao diện</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">CaRegistree có giao diện trực quan, dễ dàng sử dụng đối với mọi người</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"CaRegistree rất tuyệt vời. Những chức năng của website rất trực quan, đầy đủ, dễ sử dụng. Nhờ đó việc quản lí đăng kiểm rất nhanh chóng, chính xác, tạo được sự an tâm cho tất cả mọi người."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">Nguyễn Sơn Tùng</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Người dân</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </>
    );
}