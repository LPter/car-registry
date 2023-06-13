import Head from 'next/head'
import Nav from '../components/common/Navigation'
import Header from '../components/common/Header'
import Sta from '../components/common/Statistic'
import Detail from '../components/common/Detail'
import Qs from '../components/common/Question'
import Footer from '../components/common/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Your name" />
                <title>CaRegistree</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />

                <link rel="icon" href="images/favicon.png" />
            </Head>
            <div className="body" data-spy="scroll" data-target=".fixed-top">
                <Nav />
                <Header />
                {/* <Feature/> */}
                <Detail />
                <Sta />
                <Qs />
                <Footer />
                <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
            </div>
        </>
    );
}