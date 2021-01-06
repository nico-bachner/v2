export default function About(props) {
    return (
        <section id="about" className={"max-w-max mx-auto " + props.className}>
            <h2 className="text-2xl lg:text-3xl font-bold text-indigo dark:text-cyan">
                <span className="text-red dark:text-green font-mono text-lg lg:text-xl font-normal">01.</span> About Me
            </h2>
            <div className="mt-6 max-w-max md:mx-auto">
                <img src="" alt="Profile picture of Nico" className="hidden xl:block w-64 h-72 xl:float-right"/>
                <div className="xl:pr-80">
                    <p>Hi! I'm Nico, a hobby developer currently living in Luxembourg.</p>
                    <p className="my-4 sm:text-justify max-w-prose">
                        I find making things really fun. 
                        Currently, most of my projects have been web-based, but I want to explore more areas of development as well.
                        In the future, I would like to contribute to Open Source even more.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <ul className="grid grid-cols-2 2xl:grid-cols-3 gap-x-4 list-disc list-inside font-mono my-4">
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Node.js & Deno</li>
                        <li>Svelte & SvelteKit</li>
                        <li>React & Next.js</li>
                        <li>Unix Shell</li>
                    </ul>
                    <p>I'm currently also learning <span className="font-mono">Rust</span> and systems-level programming.</p>
                </div>
            </div>
        </section>
    )
}