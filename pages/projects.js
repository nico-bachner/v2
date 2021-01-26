import { ProjectLeft, ProjectRight, ProjectImageLeft, ProjectImageRight } from '../components/project'

export default function Projects() {
    return (
        <main className="py-20">
            <h1 className="text-center font-bold text-5xl pb-16">Projects</h1>
            <div className="px-6 sm:px-12 md:px-18 lg:px-24 xl:px-28 w-full grid grid-cols-12 sm:grid-rows-3 gap-4 sm:gap-y-20">
                <ProjectImageLeft
                    project="The First Martian"
                    src="/images/projects/tfm.png"
                    description="A Game about Space Exploration"
                    technologies="Blender / Unity / C#"
                    github="https://github.com/leon-liang/the-first-martian"
                    website="https://the-first-martian.now.sh"
                    className="row-start-1"
                />
                <ProjectImageRight
                    project="Find The Polygon"
                    src="/images/projects/ftp.png"
                    description="A Game of Dimensions. Manipulate a 3D object from a 2D point of view and discover hidden shaped inside."
                    technologies="Unity / C#"
                    github="https://github.com/nico-bachner/find-the-polygon"
                    website="https://find-the-polygon.now.sh"
                    className="row-start-2"
                />
                <ProjectLeft
                    project="Markdown Paper" 
                    description="Write scientific papers in Markdown and generate a PDF or TeX file from your paper. (command line tool)"
                    technologies="Unix Shell (sh & ksh) / Homebrew"
                    github="https://github.com/nico-bachner/md-paper"
                    website="https://md-paper.now.sh"
                    className="row-start-3"
                />
                <ProjectRight
                    project="SOS School Luxembourg" 
                    description="An initiative to help primary school children in Luxembourg catch up with school after CoViD-19"
                    technologies="JS / CSS / HTML"
                    github="https://github.com/sos-school/website"
                    website="https://www.sos-school.org/en"
                    className="row-start-4"
                />
                <ProjectLeft
                    project="CareerGuru" 
                    description="Collaborative product of a hackathon. It is a platform designed to aid students in discovering their professional orientation."
                    technologies="Sapper / Svelte / JavaScript / CSS / HTML"
                    github="https://github.com/nico-bachner/career-guru"
                    website="https://career-guru.now.sh"
                    className="row-start-5"
                />
                <ProjectRight
                    project="My Personal Website" 
                    description="The website you are currently on. This is version 2 of my personal website."
                    technologies="Next.js / React / TailwindCSS"
                    github="https://github.com/nico-bachner/website"
                    website="https://nicobachner.com"
                    className="row-start-6"
                />
            </div>
        </main>
    )
}
