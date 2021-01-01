import Project from '../project'

export default function Projects() {
    return (
        <section id="projects" className="mx-56 pt-36">
            <h2 className="text-3xl mt-6 font-bold text-blue-50 opacity-90">
                <span className="text-green-300 font-mono text-xl font-normal">02.</span> What I've Built
            </h2>
            <Project project="Markdown Paper" description="grqrib;gbrg;qrgibrqe;" github="https://github.com/nico-bachner/md-paper"/>
        </section>
    )
}