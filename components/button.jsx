export default function Button(props) {
    return (
        <button className={"text-red-500 dark:text-green-300 hover:bg-red-500 dark:hover:bg-green-300 border rounded hover:bg-opacity-20 font-mono" + " " + props.className}>
            {props.children}
        </button>
    )
}