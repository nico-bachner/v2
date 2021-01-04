import { ProjectLeft, ProjectRight } from '../project'

export default function Projects() {
    return (
        <section id="projects" className="2xl:mx-20 pt-28">
            <h2 className="text-2xl lg:text-3xl font-bold">
                <span className="text-red dark:text-green font-mono text-lg lg:text-xl font-normal">02.</span> What I've Built
            </h2>
            
            <ProjectRight
                project="CareerGuru" 
                description="Product of a hackathon. Designed to be a web app that helps students choose their professional orientation by providing a platform for professionals and students to come together."
                image="career-guru.png"
                technologies="Sapper / Svelte / JavaScript / CSS / HTML"
                github="https://github.com/nico-bachner/CareerGuru"
                website="https://career-guru.now.sh"
            />
            <ProjectLeft
                project="My Personal Website" 
                description="The website you are currently on. This is the second iteration of my personal website."
                image="personal-website.png"
                technologies="Next.js / React / TailwindCSS"
                github="https://github.com/nico-bachner/website"
                website="https://nicobachner.com"
            />
            <ProjectRight
                project="Markdown Paper" 
                description="Write scientific papers in Markdown and generate a PDF or a TeX file with this command line tool."
                image="md-paper.png"
                technologies="Unix Shell (sh,ksh)"
                github="https://github.com/nico-bachner/md-paper"
                website="https://md-paper.now.sh"
            />
        </section>
    )
}