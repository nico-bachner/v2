import ExtLink from './ext-link'

export default function Email() {
    return (
        <nav className="hidden lg:block fixed z-10 right-8 xl:right-12 bottom-0 w-6">
            <div className="origin-bottom-left transform rotate-90 pb-2.5 mb-28">
                <ExtLink href="mailto:yo@nicob.dev" className="text-xs tracking-widest font-mono origin-center transform rotate-90 hover:text-red-500 dark:hover:text-green-300">
                    yo@nicob.dev
                </ExtLink>
            </div>
            <svg title="Line" viewBox="0 0 10 300" className="h-72 w-10 pt-2 opacity-60">
                <line x1="5" y1="0" x2="5" y2="300" stroke="currentColor" />
            </svg>
        </nav>
    )
}