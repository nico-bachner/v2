import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/navbar'

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="images/icon/logo.svg"/>
                <meta name="color-scheme" content="dark light"></meta>
            </Head>

            <Navbar />
            <Component {...pageProps}/>
        </>
    )
}

export default App
