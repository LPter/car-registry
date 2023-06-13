import Image from 'next/image'

export default function Detail() {
    return (
        <>
             <section className="bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20 lg:px-6">
                    <h2 className="mb-6 font-extrabold text-center text-white">CaRegistree có những gì?</h2>
                        {/* <!-- Row --> */}
                        <div className="items-center lg:grid lg:grid-cols-2 xl:gap-16">
                            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Đối với Cục Đăng kiểm</h2>
                                <p className="mb-8 font-light lg:text-xl">Cục Đăng kiểm khi sử dụng CaRegistree sẽ có những chức năng chính sau đây:</p>
                                {/* <!-- List --> */}
                                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Quản lí danh sách xe đã được đăng kiểm hàng tháng, quý, năm ở từng trung tâm đăng kiểm, khu vực, hay trên toàn quốc.</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Quản lí danh sách xe sắp hết hạn đăng kiểm hàng tháng.</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Dự báo số lượng xe sẽ đăng kiểm mới và đăng kiểm lại ở từng trung tâm đăng kiểm, khu vực và trên toàn quốc.</span>
                                    </li>
                                </ul>
                                {/* <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p> */}
                            </div>
                            <Image className="lg:mb-0 lg:flex" src="/Art1.png" alt="feature image 1" width={550} height={400}/>
                        </div>
                        {/* <!-- Row --> */}
                        <div className="items-center lg:grid lg:grid-cols-2 xl:gap-16">
                            <Image className="rounded-lg lg:mb-0 lg:flex" src="/Art2.png" alt="feature image 2" width={550} height={400}/>
                            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Đối với Trung tâm Đăng kiểm</h2>
                                <p className="mb-8 font-light lg:text-xl">Các Trung tâm Đăng kiểm ở các địa phương có các chức năng trong phạm vi quyền quản lí của từng địa phương:</p>
                                {/* <!-- List --> */}
                                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Ghi nhận kết quả đăng kiểm và cấp giấy chứng nhận đăng kiểm.</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Quản lí danh sách xe đã được đăng kiểm hàng tháng, quý, năm.</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Quản lí danh sách xe sắp hết hạn đăng kiểm hàng tháng.</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Dự báo số lượng xe sẽ đăng kiểm mới và đăng kiểm lại ở trung tâm.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}