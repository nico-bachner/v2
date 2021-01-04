import { GitHub, Website } from "./icons";
import Image from 'next/image'

function Project(props) {
    return (
        <div className="py-12 w-full grid grid-cols-12 grid-rows-1">
            {props.children}
        </div>
    )
}

function ProjectImage(props) {
    const image_origin = () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log(props.imageDark);
            return props.imageDark;
        } else {
            console.log(props.imageLight);
            return props.imageLight;
        }
    }
    return (
        <div className={"col-span-7 row-span-1 row-start-1 " + props.className}>
            <Image 
                src={image_origin}
                alt={"Image of " + props.project}
                width={2800}
                height={1550}
                className="w-full border border-indigo dark:border-cyan rounded"
            />
        </div>
    )
}

function ProjectDescription(props) {
    return (
        <div className={"z-20 col-span-6 row-span-1 row-start-1 " + props.className}>
            <p className="text-sm text-red dark:text-green font-mono">Featured Project</p>
            <h3 className="text-2xl font-semibold text-indigo-dark dark:text-cyan-light">{props.project}</h3>
            <p className="py-4 px-5 my-4 bg-cyan-light dark:bg-indigo-light">{props.description}</p>
            <p className="font-mono text-sm opacity-70">{props.technologies}</p>
            <div className="mt-6">
                <a
                    href={props.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub className="inline w-6 mx-2"/>
                </a>
                <a
                    href={props.website}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Website className="inline w-6 mx-2"/>
                </a>
            </div>
        </div>
    )
}

export function ProjectLeft(props) {
    return (
        <Project>
            <ProjectImage 
                project={props.project}
                image={props.image}
                className="col-start-6"
            />
            <ProjectDescription 
                project={props.project}
                description={props.description}
                technologies={props.technologies}
                className="col-start-1"
            />
        </Project>
    )
}

export function ProjectRight(props) {
    return (
        <Project>
            <ProjectImage project={props.project} image={props.image} className="col-start-1"/>
            <ProjectDescription 
                project={props.project}
                description={props.description}
                technologies={props.technologies}
                className="col-start-7 text-right"
            />
        </Project>
    )
}
