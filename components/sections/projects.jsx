import { ProjectLeft, ProjectRight } from '../project'

export default function Projects() {
    return (
        <section id="projects" className="mx-56 pt-36">
            <h2 className="text-3xl mt-6 font-bold text-blue-50 opacity-90">
                <span className="text-green-300 font-mono text-xl font-normal">02.</span> What I've Built
            </h2>
            <ProjectRight
                project="Markdown Paper" 
                description="Command line tool to write scientific papers in Markdown"
                image="md-paper.png"
                technologies="Unix Shell (sh, ksh)"
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