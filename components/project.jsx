import { GitHub, Website } from "./icons";
import Image from 'next/image'

export function ProjectLeft(props) {
    return (
        <div className="py-12 w-full grid grid-cols-12 grid-rows-1">
            <div className="col-start-6 col-span-7 row-span-1 row-start-1">
                <Image 
                    src={"/images/projects/" + props.image}
                    alt={"Image of" + " " + props.project}
                    width={2800}
                    height={1550}
                    className="w-full border border-blue-300 dark:border-blue-700 rounded"
                />
            </div>
            <div className="z-20 col-start-1 col-span-6 row-span-1 row-start-1">
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
        </div>
    )
}

export function ProjectRight(props) {
    return (
        <div className="py-12 w-full grid grid-cols-12 grid-rows-1">
            <div className="col-start-1 col-span-7 row-span-1 row-start-1">
            <Image 
                    src={"/images/projects/" + props.image}
                    alt={"Image of" + " " + props.project}
                    width={2800}
                    height={1550}
                    className="w-full border border-blue-300 dark:border-blue-700 rounded"
                />
            </div>
            <div className="z-20 text-right col-start-7 col-span-6 row-span-1 row-start-1">
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
        </div>
    )
}
