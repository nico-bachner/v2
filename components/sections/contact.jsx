import Button from '../button'
import ExtLink from '../ext-link'
import Section from '../section'

export default function Contact(props) {
    return (
        <Section id="contact" className={"text-center max-w-max mx-auto " + props.className}>
            <p className="font-mono text-red dark:text-green">
                03. What's Next?
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl my-6 font-bold">
                Get in Touch
            </h2>
            <p className="lg:text-lg max-w-prose">
                Since I am currently still in high school, I am not looking for full-time jobs yet. 
                However, I am happy to help with ad hoc projects, especially if they are open source.
            </p>
            <ExtLink href="mailto:yo@nicob.dev">
                <Button className="mt-10 px-8 py-4 ">
                    Say Hello
                </Button>
            </ExtLink>
        </Section>
    )
}