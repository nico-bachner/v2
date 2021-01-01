import Button from './button';
import Link from 'next/link'
import { Nico } from './icons'

function NavLink(props) {
    return (
        <li className="font-mono mx-6 inline text-sm">
            <a href={props.href}>
                <span className="text-green-300">0{props.num}. </span>
                {props.children}
            </a>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav className="fixed z-10 w-screen bg-blue-200 dark:bg-navy h-18 shadow-xl px-10">
            <a href="https://nicobachner.com">
                <Nico className="h-full inline-block py-4 text-blue-100 hover:text-green-300"/>
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