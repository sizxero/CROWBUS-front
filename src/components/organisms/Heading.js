import { H2, Span } from '../atoms';
import { RowFlexBox } from '../molecules';
import { Link } from 'react-router-dom';

const HeadingWithoutLink = (props) => {
    return (<RowFlexBox>
    <Span className={props.className} /><H2>{props.content}</H2>{props.children}
    </RowFlexBox>);
}

const HeadingWithLink = (props) => {
    return (<Link className="HeadingWithLink" to={props.link}>
        <H2>← {props.content}</H2>
    </Link>);
}

export { HeadingWithoutLink, HeadingWithLink }