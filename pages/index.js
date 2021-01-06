import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/sections/footer'
import Email from '../components/email'
import Header from '../components/sections/header'
import Projects from '../components/sections/projects'
import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Social from '../components/social'

export default function Home() {
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

            <main className="py-18 mx-6 sm:mx-10 md:mx-16 lg:mx-28 xl:mx-36">
                <Header className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36"/>
                <About className="pt-28"/>
                <Projects className="pt-28"/>
                <Contact className="pt-56"/>
                <Footer className="pt-32"/>
            </main>

            <Social/>
            <Email/>
        </>
    )
}
