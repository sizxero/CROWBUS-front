import _ from 'lodash';
import { Link } from "react-router-dom";
import { ContainedButton } from "../atoms";
import { RowFlexBoxCenter } from "../molecules";

const Pagination = (props) => {
    const pages = _.range(0, props.totalPage);

    const makeLink = (p) => `/${props.link}?page=${p+1}`
    return (<RowFlexBoxCenter className="Pagination">
        {pages.map(page => (<Link to={makeLink(page)}>{page+1}</Link>))}
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
            <Link to={props.backto==='공지사항' ? '/notice' : '/lost-found'}>
            <ContainedButton
            className="containedBtnGray" 
            content="목록" />
            </Link>
        </RowFlexBoxCenter>);
    } else {
        return (<RowFlexBoxCenter className="BoardButtonsOther">
            <Link to={props.backto==='공지사항' ? '/notice' : '/lost-found'}>
            <ContainedButton
            className="containedBtnGray" 
            content="목록" />
            </Link>
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

const GoToWriteButton = () => {
    return (
        <Link to="/write">
            <ContainedButton 
            className="containedBtnBlue" 
            content="글 쓰기" />
        </Link>
    )
}

export { Pagination, BoardButtons, BoardWriteButtons, GoToWriteButton }