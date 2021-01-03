import Button from '../button'
import ExtLink from '../ext-link'

export default function Header() {
    return (
        <header className="xl:w-max xl:pr-32 py-28 xl:mx-auto">
            <p className="font-mono text-red-500 dark:text-green-300">
                Hi, my name is
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl mt-6 font-bold text-blue-700 dark:text-blue-100">
                Nico Bachner.
            </h1>
            <p className="mt-4 text-5xl md:text-6xl font-bold opacity-70">
                I'm an Aspiring Open Sourcerer.
            </p>
            <p className="w-96 mt-10 text-lg opacity-70">
                I'm a High School Student currently living in Luxembourg. I plan to graduate in May 2021.
            </p>
            <ExtLink href="mailto:yo@nicob.dev">
                <Button className="mt-12 px-7 py-4">
                    Get in Touch
                </Button>
            </ExtLink>
        </header>
    )
}