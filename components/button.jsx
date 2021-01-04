export default function Button(props) {
    return (
        <button 
            className={
                "text-red dark:text-green " +
                "hover:bg-red dark:hover:bg-green " +
                "border rounded " +
                "hover:bg-opacity-20 " +
                "font-mono " +
                props.className
            }
        >
            {props.children}
        </button>
    )
}