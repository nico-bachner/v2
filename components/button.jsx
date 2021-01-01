export default function Button(props) {
    return (
        <button className={"text-green-300 bg-green-300 bg-opacity-0 border border-green-300 rounded hover:bg-opacity-10 font-mono" + " " + props.className}>
            {props.children}
        </button>
    )
}