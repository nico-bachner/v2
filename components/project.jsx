import { GitHub } from "./icons";

export default function Project(props) {
    return (
        <div className="my-12">
            <p className="float-right text-sm text-green-300 font-mono">Featured Project</p>
            <h3 className="float-right text-2xl font-semibold">{props.project}</h3>

            <img src="" alt={"Image of" + " " + props.project} className="w-1/2"/>

            <div className="float-right">
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
                    <GitHub className="inline w-6 mx-2"/>
                </a>
            </div>
        </div>
    )
}