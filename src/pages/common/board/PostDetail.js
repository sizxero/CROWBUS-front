import { Link, useParams } from 'react-router-dom';
import { H2, H4, Span } from '../../../components/atoms';
import { ColumnFlexBox, RowFlexBox } from '../../../components/molecules';
import { TopLogo, Jumbotron, BoardButtons } from '../../../components/organisms';
import { usePosting } from '../../../hooks';
import { getCookie } from '../../../hooks/api/Cookie';

const PostDetail = (props) => {
    const pid = Number(useParams().pid);
    const { posting } = usePosting(pid);

    console.log(posting);
    return (
        <ColumnFlexBox className="PostDetailContainer">
            <TopLogo />
            { posting !== null && posting !== undefined && posting !== ''
            ? <>
            <Link to={posting.boardType==='분실물게시판' ? '/lost-found' : '/notice'}>
                <Jumbotron id="blue">
                    <H2>{posting.boardType==='분실물게시판' ? '분실물 게시판' : posting.boardType}</H2>
                </Jumbotron>
            </Link>
            <ColumnFlexBox className="PostInfo">
                <RowFlexBox className="PostTitleInfo">
                    <H4 className="PostRoute">[{posting.route.name + ' ' + posting.route.routeType}]</H4>            
                    <Span className="PostTitle">{posting.title}</Span>
                </RowFlexBox>
                <ColumnFlexBox className="PostSubInfo">
                    <RowFlexBox className="PostSubInfoFirstRow">
                        <Span className="PostWritter">작성자: {posting.member.name}</Span>
                        <Span className="PostHit">조회수: {posting.hit}</Span>
                    </RowFlexBox>
                    <Span className="PostWrittenTime">작성시간: {posting.modifiedTime.substr(0, 19).replace('T', ' ')}</Span>
                </ColumnFlexBox>     
                <Span className="PostContents">{posting.content}</Span>      
            </ColumnFlexBox>
            {getCookie('user') === posting.member.loginId
            ? <><BoardButtons auth='me'/></>
            : <><BoardButtons auth='other'/></>}
            </>
            : <></>}
        </ColumnFlexBox>
    );    
}

export default PostDetail;