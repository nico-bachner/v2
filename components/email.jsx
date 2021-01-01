import ExtLink from './ext-link'
import { Line } from './icons'

export default function Email() {
    return (
        <nav className="fixed z-10 right-10 bottom-0 w-10 opacity-90">
            <ExtLink href="mailto:yo@nicob.dev" className="text-xs font-mono hover:text-green-300">
                yo@nicob.dev
            </ExtLink>
            <Line className="h-40 w-10 opacity-90 pt-2"/>
        </nav>
    )
}