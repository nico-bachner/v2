import { ProjectLeft, ProjectRight } from '../project'
import Section from '../section'

export default function Projects(props) {
    return (
        <Section id="projects" className={"max-w-7xl mx-auto " + props.className}>
            <h2 className="text-2xl lg:text-3xl font-bold pb-12">
                <span className="text-red dark:text-green font-mono text-lg lg:text-xl font-normal">02.</span> What I've Built
            </h2>
            <div className="w-full grid grid-cols-12 sm:grid-rows-3 gap-4 sm:gap-y-20">
                <ProjectRight
                    project="CareerGuru" 
                    description="Collaborative product of a hackathon. It is a platform encouraging students and professionals to interact, aiding students in discovering their professional orientation."
                    technologies="Sapper / Svelte / JavaScript / CSS / HTML"
                    github="https://github.com/nico-bachner/CareerGuru"
                    website="https://career-guru.now.sh"
                    className="row-start-1"
                />
                <ProjectLeft
                    project="My Personal Website" 
                    description="The website you are currently on. This is version 2 of my personal website."
                    technologies="Next.js / React / TailwindCSS"
                    github="https://github.com/nico-bachner/website"
                    website="https://nicobachner.com"
                    className="row-start-2"
                />
                <ProjectRight
                    project="Markdown Paper" 
                    description="Write scientific papers in Markdown and generate a PDF or TeX file from your paper. (command line tool)"
                    technologies="Unix Shell (sh & ksh) / Homebrew"
                    github="https://github.com/nico-bachner/md-paper"
                    website="https://md-paper.now.sh"
                    className="row-start-3"
                />
            </div>
        </Section>
    )
}