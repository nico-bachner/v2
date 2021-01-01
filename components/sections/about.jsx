export default function About() {
    return (
        <section id="about" className="mx-72 pt-36">
            <h2 className="text-3xl mt-6 font-bold text-blue-50 opacity-90">
                <span className="text-green-300 font-mono text-xl font-normal">01.</span> About Me
            </h2>
            <div className="mt-6 grid grid-cols-2">
                <div className="text-blue-100 opacity-70">
                    <p className="my-6">
                        Hi! I'm Nico, a hobby developer currently living in Luxembourg.
                    </p>
                    <p className="my-6 text-justify">
                        I find making things really fun. 
                        Currently, most of my projects have been web-based, but I want to explore more areas of develepment as well.
                        In the future, I would like to contribute to Open Source even more.
                    </p>
                    <p className="my-6">
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul className="grid grid-cols-2 list-disc list-inside font-mono">
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Node.js & Deno</li>
                        <li>Svelte & SvelteKit</li>
                        <li>React & Next.js</li>
                        <li>Unix Shell</li>
                    </ul>
                    <p className="my-6">
                        I'm currently also learning <span className="font-mono">Rust</span> and systems-level programming.
                    </p>
                </div>
                <img src="" alt="" className="w-full h-96 p-8"/>
            </div>
        </section>
    )
}