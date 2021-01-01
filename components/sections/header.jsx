import Button from '../button'
import ExtLink from '../ext-link'

export default function Header() {
    return (
        <header className="ml-56 mt-28 pb-24">
            <p className="font-mono text-green-400">
                Hi, my name is
            </p>
            <h1 className="text-7xl mt-6 font-bold text-blue-100">
                Nico Bachner.
            </h1>
            <p className="mt-4 text-6xl font-bold text-blue-200 opacity-80">
                I'm an aspiring Open Sourcerer
            </p>
            <p className="w-96 mt-10 text-blue-100 opacity-70 text-lg">
                I'm a High School Student currently living in Luxembourg. I'll graduate in May 2021.
            </p>
            <ExtLink href="mailto:yo@nicob.dev">
                <Button className="mt-10 px-8 py-4 ">
                    Get in Touch
                </Button>
            </ExtLink>
        </header>
    )
}