import ExtLink from '../ext-link'
import { Lift } from '../icons'
import * as Elevator from "elevator.js";

export default function Footer(props) {
    function lift() {
        var elevator = new Elevator({
            element: document.querySelector('.elevator-button'),
            mainAudio: 'music/elevator-music.mp3',
            endAudio: 'music/elevator-ding.mp3'
        });
        elevator.elevate();
    }
    return (
        <footer className={"text-center " + props.className}>
            <button onClick={lift}>
                <Lift className="w-16 mx-auto"/>
                <p className="pt-2 italic">Back to the top</p>
            </button>
            <div className="mt-16 font-mono">
                <p>Design inspired by <wbr/> Brittany Chiang</p>
                <p>Built by Nico Bachner</p>
                <p>
                    <ExtLink href="https://github.com/nico-bachner/website" className="text-red dark:text-green">
                        View Source Code
                    </ExtLink>
                </p>
            </div>
        </footer>
    )
}