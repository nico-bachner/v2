import '../styles/globals.css'
import Head from 'next/head'

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Nico Bachner</title>
                <link rel="icon" href="images/icon/icon.svg"/>
                <link rel="manifest" href="manifest.json"/>
                <link rel="mask-icon" href="images/icon/icon.svg"/>
                <meta name="color-scheme" content="dark light"/>
                <meta name="description" content="High School Student in Luxembourg - Aspiring Open Sourcerer"/>
                <meta name="keywords" content="student, developer, open source"/>
                <meta name="author" content="Nico Bachner"/>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default App
