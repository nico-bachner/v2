import Button from './button';
import Link from 'next/link'
import { Nico } from './icons'

function NavLink(props) {
    return (
        <li className="hidden md:inline font-mono mx-6 text-sm hover:text-red dark:hover:text-green">
            <a href={props.href}>
                <span className="text-red dark:text-green">0{props.num}. </span>
                {props.children}
            </a>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav className="fixed z-50 w-screen px-4 lg:px-8 xl:px-12 bg-cyan dark:bg-indigo h-18 shadow-lg dark:shadow-xl">
            <a href="/">
                <Nico className="h-full inline-block py-4 hover:text-red dark:hover:text-green"/>
            </a>
            <ol className="float-right my-4">
                <NavLink href="#about" num="1">About</NavLink>
                <NavLink href="#projects" num="2">Projects</NavLink>
                <NavLink href="#contact" num="3">Contact</NavLink>
                <Link href="resume.pdf">
                    <Button className="px-4 py-2 ml-8">Resume</Button>
                </Link>
            </ol>
        </nav>
    );
}