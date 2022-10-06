import _ from 'lodash';
import { RowFlexBoxCenter } from "../molecules";
import { Link } from "react-router-dom";
const Pagination = (props) => {
    const pages = _.range(0, props.totalPage);
    const getPageLink = (num) => `${props.link}?page=${num}`;
    return (<RowFlexBoxCenter className="Pagination">
        {pages.map(page => (<Link to={getPageLink(page+1)}>{page+1}</Link>))}
    </RowFlexBoxCenter>);
}

export { Pagination }