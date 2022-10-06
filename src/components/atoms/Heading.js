const H1 = (props) => {
    return (
        <h1 id={props.id} className={props.className}>{props.children}</h1>
    );
}

const H2 = (props) => {
    return (
        <h2 id={props.id} className={props.className}>{props.children}</h2>
    )
}

const H3 = (props) => {
    return (
        <h3 id={props.id} className={props.className}>{props.children}</h3>
    )
}

const H4 = (props) => {
    return (
        <h4 id={props.id} className={props.className}>{props.children}</h4>
    )
}

export { H1, H2, H3, H4 };