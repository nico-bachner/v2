import { GitHub, Website } from "./icons";
import ExtLink from './ext-link'

function ProjectImage(props) {
    return (
        <div className={"hidden sm:block col-span-7 row-span-1 " + props.className}>
            <div className="w-full h-full border border-indigo dark:border-cyan">
                <iframe 
                    className="transform origin-top-left scale-50 w-2/1 h-2/1"
                    title={"Image of " + props.project}
                    loading="lazy"
                    scrolling="no"
                    src={props.src}
                />
            </div>
        </div>
    )
}

function ProjectDescription(props) {
    return (
        <div className={"z-20 col-span-9 sm:col-span-5 row-span-1 lg:pb-16 xl:pb-24 2xl:pb-32 " + props.className}>
            <p className="text-sm text-red dark:text-green font-mono">Featured Project</p>
            <h3 className="text-2xl font-semibold text-indigo-dark dark:text-cyan-light">{props.project}</h3>
            <p className="py-4 px-5 my-4 bg-cyan-light dark:bg-indigo-light">{props.description}</p>
            <p className="font-mono text-sm opacity-70">{props.technologies}</p>
            <div className="mt-6">
                <ExtLink href={props.github}>
                    <GitHub className="inline w-6 mx-2"/>
                </ExtLink>
                <ExtLink href={props.website}>
                    <Website className="inline w-6 mx-2"/>
                </ExtLink>
            </div>
        </div>
    )
}

export function ProjectLeft(props) {
    return (
        <>
            <ProjectImage 
                project={props.project}
                src={props.website}
                className={"col-start-6 " + props.className}
            />
            <ProjectDescription 
                project={props.project}
                description={props.description}
                technologies={props.technologies}
                github={props.github}
                website={props.website}
                className={"col-start-1 " + props.className}
            />
        </>
    )
}

export function ProjectRight(props) {
    return (
        <>
            <ProjectImage 
                project={props.project} 
                src={props.website} 
                className={"col-start-1 " + props.className}
            />
            <ProjectDescription 
                project={props.project}
                description={props.description}
                technologies={props.technologies}
                github={props.github}
                website={props.website}
                className={"col-start-4 sm:col-start-8 text-right " + props.className}
            />
        </>
    )
}
