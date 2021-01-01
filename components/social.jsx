import ExtLink from "./ext-link";
import { CodeGolf, DEV, GitHub, StackOverflow, Line } from "./icons";

export default function Social() {
    return (
        <nav className="fixed z-10 left-10 bottom-0 w-10 opacity-90">
            <ExtLink href="https://github.com/nico-bachner" className="w-full">
                <GitHub className="w-full p-2.5 my-2 hover:text-green-300"/>
            </ExtLink>
            <ExtLink href="https://dev.to/nicob" className="w-full">
                <DEV className="w-full p-2.5 my-2 hover:text-green-300"/>
            </ExtLink>
            <ExtLink href="https://stackoverflow.com/users/story/13506524" className="w-full">
                <StackOverflow className="w-full p-2.5 my-2 hover:text-green-300"/>
            </ExtLink>
            <ExtLink href="https://github.com/nico-bachner" className="w-full">
                <CodeGolf className="w-full p-2.5 my-2 hover:text-green-300"/>
            </ExtLink>
            <Line className="h-24 w-10 pt-2"/>
        </nav>
    )
}