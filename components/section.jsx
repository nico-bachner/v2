export default function Section(props) {
    return (
        <section
            id={props.id}
            className={
                props.className +
                " lg:min-h-screen"
            }
        >
            {props.children}
        </section>
    )
}