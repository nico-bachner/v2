function Section(props) {
    return (
        <section id={props.id} className="mx-auto">
            {props.children}
        </section>
    )
}

export default function Uses() {
    return (
        <main className="md:grid grid-cols-2 xl:grid-cols-3 gap-12 my-20">
            <Section id="program-langs">
                <h2 className="text-center font-bold my-2">Scripting Languages</h2>
                <table>
                    <tr>
                        <th>JavaScript</th> 
                        <td>Vanilla <br></br> Svelte</td>
                    </tr>
                    <tr>
                        <th>Unix Shell</th> 
                        <td>Bourne (sh) <br></br> Bourne Again (bash) <br></br> Korn (ksh)</td>
                    </tr>
                </table>
            </Section>
            <Section id="markup-langs">
                <h2 className="text-center font-bold my-2">Markup Languages</h2>
                <table>
                    <tr>
                        <th>Markdown</th> 
                        <td>
                            CommonMark
                            <br></br>
                            GitHub Flavored
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2">HTML</th> 
                    </tr>
                    <tr>
                        <th>TeX</th>
                        <td>
                            LaTeX
                        </td>
                    </tr>
                </table>
            </Section>
            <Section id="software">
                <h2 className="text-center font-bold my-2">Software</h2>
                <table>
                    <tr>
                        <td>Operating System</td>
                        <td>MacOS</td>
                    </tr>
                    <tr>
                        <td>Package Manager</td>
                        <td><a target="_blank" href="https://brew.sh">Homebrew</a></td>
                    </tr>
                    <tr>
                        <td>Version Control</td>
                        <td><a target="_blank" href="https://git-scm.com/">Git</a></td>
                    </tr>
                </table>
            </Section>
            <Section id="apps">
                <h2 className="text-center font-bold my-2">Applications</h2>
                <table>
                    <tr>
                        <td>Text Editor</td>
                        <td><a target="_blank" href="https://code.visualstudio.com">Visual Studio Code</a></td>
                    </tr>
                    <tr>
                        <td>Browsers</td> 
                        <td>
                            Safari
                            <br></br>
                            Firefox
                        </td>
                    </tr>
                </table>
            </Section>
            <Section id="os">
                <h2 className="text-center font-bold my-2">Open Source</h2>
                <table>
                    <tr>
                        <td>Collaboration</td> 
                        <td><a target="_blank" href="https://github.com">Github</a></td>
                    </tr>
                    <tr>
                        <td>License</td> 
                        <td>
                            <a target="_blank" href="https://opensource.org/licenses/MIT">MIT</a>
                            <br></br>
                            <a target="_blank" href="https://unlicense.org">Unlicense</a>
                        </td>
                    </tr>
                </table>
            </Section>
            <Section id="services">
                <h2 className="text-center font-bold my-2">Services</h2>
                <table>
                    <tr>
                        <td>Code Hosting</td> 
                        <td>
                            <a target="_blank" href="https://github.com">Github</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Deployment</td>
                        <td>
                            <a target="_blank" href="https://vercel.com">Vercel</a>
                        </td>
                    </tr>
                </table>
            </Section>
            <Section id="hardware">
                <h2 className="text-center font-bold my-2">Hardware</h2>
                <table>
                    <tr>
                        <td>Laptop</td>
                        <td>Macbook Air x86_64</td>
                    </tr> 
                </table>
            </Section>
        </main>
    )
}
