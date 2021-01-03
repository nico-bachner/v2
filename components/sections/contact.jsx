import Button from '../button'
import ExtLink from '../ext-link'

export default function Contact() {
    return (
        <section id="contact" className="pt-56 text-center w-3/4 sm:w-2/3 md:w-7/12 lg:w-1/2 mx-auto">
            <p className="font-mono text-red-500 dark:text-green-300">
                03. What's Next?
            </p>
            <h2 className="text-4xl lg:text-5xl mt-6 font-bold text-blue-700 dark:text-blue-100">
                Get in Touch
            </h2>
            <p className="mt-6 text-lg">
                Since I am currently still in high school, I am not looking for full-time jobs yet. 
                However, I am happy to help with ad hoc projects or contribute to open source.
            </p>
            <ExtLink href="mailto:yo@nicob.dev">
                <Button className="mt-10 px-8 py-4 ">
                    Say Hello
                </Button>
            </ExtLink>
        </section>
    )
}