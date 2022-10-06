import { ColumnFlexBoxCenter } from '../molecules';

const Jumbotron = (props) => {
    return (<ColumnFlexBoxCenter id={props.id} className="Jumbotron">{props.children}</ColumnFlexBoxCenter>);
}

export { Jumbotron }