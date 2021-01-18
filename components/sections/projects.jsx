import Link from 'next/link'
import Button from '../button'
import Section from '../section'

export default function Projects(props) {
    return (
        <Section id="projects" className={"max-w-7xl mx-auto " + props.className}>
            <h2 className="text-2xl lg:text-3xl font-bold pb-12">
                <span className="text-red dark:text-green font-mono text-lg lg:text-xl font-normal">02.</span> What I've Built
            </h2>
            <div className="w-full grid grid-cols-12 sm:grid-rows-3 gap-4 sm:gap-y-20">
                {props.children}
            </div>
            <div className="text-center mt-8 sm:mt-20">
                <Link href="/projects">
                    <a>
                        <Button className="px-8 py-4">More Projects</Button>
                    </a>
                </Link>
            </div>
            
        </Section>
    )
}
