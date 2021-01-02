import ExtLink from "./ext-link";
import { CodeGolf, DEV, GitHub, StackOverflow } from "./icons";

export default function Social() {
    return (
        <nav className="fixed z-10 left-10 bottom-0 w-10">
            <ExtLink href="https://github.com/nico-bachner" className="w-full">
                <GitHub className="w-full p-2 my-2 hover:text-red-500 dark:hover:text-green-300"/>
            </ExtLink>
            <ExtLink href="https://dev.to/nicob" className="w-full">
                <DEV className="w-full p-2 my-2 hover:text-red-500 dark:hover:text-green-300"/>
            </ExtLink>
            <ExtLink href="https://stackoverflow.com/users/story/13506524" className="w-full">
                <StackOverflow className="w-full p-2 my-2 hover:text-red-500 dark:hover:text-green-300"/>
            </ExtLink>
            <ExtLink href="https://github.com/nico-bachner" className="w-full">
                <CodeGolf className="w-full p-2 my-2 hover:text-red-500 dark:hover:text-green-300"/>
            </ExtLink>
            <svg title="Line" viewBox="0 0 10 100" className="h-24 w-10 opacity-60">
                <line x1="5" y1="0" x2="5" y2="100" stroke="currentColor"/>
            </svg>
        </nav>
    )
}