import Head from 'next/head'
import Nav from '@/components/navigation'
import Header from '@/components/header'
import Sta from '@/components/statistic'
import Feature from '@/components/feature'
import Detail from '@/components/detail'
import Qs from '@/components/question'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Your name" />
                <title>CaRegistree</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
                {/* <link href="css/fontawesome-all.css" rel="stylesheet" /> */}
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
                {/*
          <link href="../styles/Home.css" rel="stylesheet" />
          <link href="../styles/global.css" rel="stylesheet" /> */}

                <link rel="icon" href="images/favicon.png" />
            </Head>
            <div className="body" data-spy="scroll" data-target=".fixed-top">
                <Nav />
                <Header />
                <Feature/>
                <Detail />
                <Sta />
                <Qs />

                {/* <section className="bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                        <div className="max-w-screen-sm mx-auto text-center">
                            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Start your free trial today</h2>
                            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Landwind Platform for 30 days. No credit card required.</p>
                            <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Free trial for 30 days</a>
                        </div>
                    </div>
                </section> */}
                {/* <!-- End block --> */}

                <Footer />
                <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
            </div>
        </>
    );
}