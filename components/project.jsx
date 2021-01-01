import { GitHub, Website } from "./icons";

export function ProjectLeft(props) {
    return (
        <div className="py-12 w-full grid grid-cols-12 grid-rows-1">
            <div className="col-start-6 col-span-7 row-span-1 row-start-1">
                <img src={"images/projects/" + props.image} alt={"Image of" + " " + props.project} className="w-full"/>
            </div>
            <div className="z-10 text-blue-100 col-start-1 col-span-6 row-span-1 row-start-1">
                <p className="text-sm text-green-300 font-mono">Featured Project</p>
                <h3 className="text-2xl font-semibold text-blue-100">{props.project}</h3>
                <p className="py-4 px-8 my-4 bg-navy-light opacity-90 w-max max-w-full">{props.description}</p>
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
                        href={props.github}
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
        <div className="py-12 w-full grid grid-cols-6 grid-rows-1">
            <div className="col-start-1 col-span-4 row-span-1 row-start-1">
            <img src={"images/projects/" + props.image} alt={"Image of" + " " + props.project} className="w-full"/>
            </div>
            <div className="z-10 text-right text-blue-100 col-start-4 col-span-3 row-span-1 row-start-1">
                <p className="text-sm text-green-300 font-mono">Featured Project</p>
                <h3 className="text-2xl font-semibold text-blue-100">{props.project}</h3>
                <p className="py-4 px-8 my-4 bg-navy-light opacity-90 w-max max-w-full">{props.description}</p>
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
                        href={props.github}
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