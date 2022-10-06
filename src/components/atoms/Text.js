const P = (props) => {
    return <p id={props.id} className={props.className}>{props.children}</p>
}

const Span = (props) => {
    return <span id={props.id} className={props.className}>{props.children}</span>
}

export { P, Span }