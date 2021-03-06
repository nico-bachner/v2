import Footer from '../components/sections/footer'
import Header from '../components/sections/header'
import Navbar from '../components/navbar'
import Email from '../components/email'
import Social from '../components/social'
import ProjectsPreview from '../components/sections/projects-preview'
import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import { ProjectLeft, ProjectRight } from '../components/project'

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="py-18 mx-6 sm:mx-10 md:mx-16 lg:mx-28 xl:mx-36 2xl:mx-48">
                <Header className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36"/>
                <About className="pt-28 md:pt-56 2xl:pt-72"/>
                <ProjectsPreview className="pt-28">
                    <ProjectRight
                        project="CareerGuru" 
                        description="Collaborative product of a hackathon. It is a platform designed to aid students in discovering their professional orientation."
                        technologies="Sapper / Svelte / JavaScript / CSS / HTML"
                        github="https://github.com/nico-bachner/career-guru"
                        website="https://career-guru.now.sh"
                        className="row-start-1"
                    />
                    <ProjectLeft
                        project="Markdown Paper" 
                        description="Write scientific papers in Markdown and generate a PDF or TeX file from your paper. (command line tool)"
                        technologies="Unix Shell (sh & ksh) / Homebrew"
                        github="https://github.com/nico-bachner/md-paper"
                        website="https://md-paper.now.sh"
                        className="row-start-2"
                    />
                    <ProjectRight
                        project="My Personal Website" 
                        description="The website you are currently on. This is version 2 of my personal website."
                        technologies="Next.js / React / TailwindCSS"
                        github="https://github.com/nico-bachner/website"
                        website="https://nicobachner.com"
                        className="row-start-3"
                    />
                </ProjectsPreview>
                <Contact className="pt-28 md:pt-64 2xl:pt-72"/>
                <Footer className="pt-28 lg:pt-2"/>
            </main>
            <Social/>
            <Email/>
        </>
    )
}
