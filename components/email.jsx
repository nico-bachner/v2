import ExtLink from './ext-link'
import { Line } from './icons'

export default function Email() {
    return (
        <nav className="fixed z-10 right-10 bottom-0 w-10">
            <ExtLink href="mailto:yo@nicob.dev" className="text-xs font-mono hover:text-red-500 dark:hover:text-green-300">
                yo@nicob.dev
            </ExtLink>
            <Line className="h-48 w-10 pt-2"/>
        </nav>
    )
}