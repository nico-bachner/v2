import { ProjectLeft, ProjectRight } from '../project'

export default function Projects() {
    return (
        <section id="projects" className="2xl:mx-20 pt-36">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-700 dark:text-blue-100">
                <span className="text-red-500 dark:text-green-300 font-mono text-lg lg:text-xl font-normal">02.</span> What I've Built
            </h2>
            <ProjectRight
                project="Markdown Paper" 
                description="Write scientific papers in Markdown and generate a PDF or a TeX file with this command line tool."
                image="md-paper.png"
                technologies="Unix Shell (sh,ksh)"
                github="https://github.com/nico-bachner/md-paper"
                website="https://md-paper.now.sh"
            />
            <ProjectLeft
                project="CareerGuru" 
                description="Product of a hackathon. Designed to be a web app that helps students choose their professional orientation by providing a platform for professionals and students to come together."
                image="career-guru.png"
                technologies="Svelte (Sapper) / JavaScript / CSS / HTML"
                github="https://github.com/nico-bachner/CareerGuru"
                website="https://career-guru.now.sh"
            />
        </section>
    )
}