import _ from 'lodash';
import { Link } from "react-router-dom";
import { ContainedButton } from "../atoms";
import { RowFlexBoxCenter } from "../molecules";

const Pagination = (props) => {
    const pages = _.range(0, props.totalPage);
    const getPageLink = (num) => `${props.link}?page=${num}`;
    return (<RowFlexBoxCenter className="Pagination">
        {pages.map(page => (<Link to={getPageLink(page+1)}>{page+1}</Link>))}
    </RowFlexBoxCenter>);
}

const BoardButtons = (props) => {
    if(props.auth === 'me') {
        return (<RowFlexBoxCenter className="BoardButtonsMe">
            <ContainedButton 
            className="containedBtnBlue"
            content="수정" />
            <ContainedButton 
            className="containedBtnBlue"
            content="삭제" />
            <ContainedButton
            className="containedBtnGray" 
            content="목록" />
        </RowFlexBoxCenter>);
    } else {
        return (<RowFlexBoxCenter className="BoardButtonsOther">
            <ContainedButton 
            className="containedBtnGray" 
            content="목록" />
        </RowFlexBoxCenter>);
    }
}

const BoardWriteButtons = (props) => {
    return (
        <RowFlexBoxCenter className="BoardWriteButtons">
            <ContainedButton 
            className="containedBtnBlue" 
            content={props.btn.name}
            eventHandler={props.btn.onclick} />
            <Link to='/'><ContainedButton className="containedBtnGray" content="취소" /></Link>
        </RowFlexBoxCenter>
    );
}

export { Pagination, BoardButtons, BoardWriteButtons }