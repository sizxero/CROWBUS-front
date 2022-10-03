const P = (props) => {
    return <p id={props.id} className={props.className}>{props.content}</p>
}

const Span = (props) => {
    return <span id={props.id} className={props.className}>{props.content}</span>
}

export { P, Span }