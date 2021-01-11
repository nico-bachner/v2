export default function Button(props) {
    return (
        <button 
            className={
                props.className +
                " text-red dark:text-green " +
                " hover:bg-red dark:hover:bg-green " +
                " border border-red dark:border-green rounded " +
                " hover:bg-opacity-20 transition duration-200 ease-in-out " +
                " font-mono "
            }
        >
            {props.children}
        </button>
    )
}