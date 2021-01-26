import ExtLink from "./ext-link";
import { CodeGolf, DEV, GitHub, StackOverflow } from "./icons";

export default function Social() {
    return (
        <nav className="hidden lg:block fixed z-10 left-8 xl:left-12 2xl:left-16 bottom-0 w-6 text-indigo-light dark:text-cyan-dark">
            <ExtLink href="https://github.com/nico-bachner" className="w-full">
                <GitHub className="w-full my-6 hover:text-red dark:hover:text-green"/>
            </ExtLink>
            <ExtLink href="https://dev.to/nicob" className="w-full">
                <DEV className="w-full my-6 hover:text-red dark:hover:text-green"/>
            </ExtLink>
            <ExtLink href="https://stackoverflow.com/users/story/13506524" className="w-full">
                <StackOverflow className="w-full my-6 hover:text-red dark:hover:text-green"/>
            </ExtLink>
            <ExtLink href="https://code.golf/golfers/nico-bachner" className="w-full">
                <CodeGolf className="w-full my-6 hover:text-red dark:hover:text-green"/>
            </ExtLink>
            <svg title="Line" viewBox="0 0 10 100" className="h-24 w-6 opacity-70">
                <line x1="5" y1="0" x2="5" y2="100" stroke="currentColor"/>
            </svg>
        </nav>
    )
}