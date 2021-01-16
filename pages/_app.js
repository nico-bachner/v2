import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Email from '../components/email'
import Social from '../components/social'

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Nico Bachner</title>
                <link rel="icon" href="images/icon/icon.svg"/>
                <link rel="manifest" href="manifest.json"/>
                <link rel="mask-icon" href="images/icon/icon.svg"/>
                <meta name="color-scheme" content="dark light"/>
                <meta name="description" content="Aspiring Open Sourcerer"/>
                <meta name="keywords" content="student, developer, open source"/>
                <meta name="author" content="Nico Bachner"/>
            </Head>
            <Navbar/>
            <Component {...pageProps}/>
            <Social/>
            <Email/>
        </>
    )
}

export default App
