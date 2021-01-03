import Head from 'next/head'
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
            </Head>

            <main className="py-18 mx-6 sm:mx-10 md:mx-16 lg:mx-28 xl:mx-36">
                <Header/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
            </main>

            <Social/>
            <Email/>
        </>
    )
}
