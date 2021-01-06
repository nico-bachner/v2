import Button from '../button'
import ExtLink from '../ext-link'

export default function Header(props) {
    return (
        <header className={"xl:w-max xl:pr-32 xl:mx-auto " + props.className}>
            <p className="font-mono text-red dark:text-green">
                Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl mt-6 font-bold text-indigo-dark dark:text-cyan-light">
                Nico Bachner.
            </h1>
            <p className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold text-indigo-light dark:text-cyan-dark opacity-60">
                I'm an Aspiring Open Sourcerer.
            </p>
            <p className="max-w-prose mt-10 text-lg">
                I'm a High School Student and hobby developer currently living in Luxembourg. I plan to graduate in May 2021.
            </p>
            <ExtLink href="mailto:yo@nicob.dev">
                <Button className="mt-12 px-7 py-4">
                    Get in Touch
                </Button>
            </ExtLink>
        </header>
    )
}