import Footer from '../components/sections/footer'
import Header from '../components/sections/header'
import Projects from '../components/sections/projects'
import About from '../components/sections/about'
import Contact from '../components/sections/contact'

export default function Home() {
    return (
        <main className="py-18 mx-6 sm:mx-10 md:mx-16 lg:mx-28 xl:mx-36 2xl:mx-48">
            <Header className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36"/>
            <About className="pt-28 md:pt-56 2xl:pt-72"/>
            <Projects className="pt-28"/>
            <Contact className="pt-28 md:pt-64 2xl:pt-72"/>
            <Footer className="pt-28 lg:pt-2"/>
        </main>
    )
}
