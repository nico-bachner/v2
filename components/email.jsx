import ExtLink from './ext-link'

export default function Email() {
    return (
        <nav className="fixed z-10 right-10 bottom-0 w-10">
            <div className="origin-bottom-left transform rotate-90 pb-2.5 mb-28">
                <ExtLink href="mailto:yo@nicob.dev" className="text-xs tracking-widest font-mono origin-center transform rotate-90 hover:text-red-500 dark:hover:text-green-300">
                    yo@nicob.dev
                </ExtLink>
            </div>
            <svg title="Line" viewBox="0 0 10 200" className="h-48 w-10 pt-2 opacity-60">
                <line x1="5" y1="0" x2="5" y2="200" stroke="currentColor" />
            </svg>
        </nav>
    )
}