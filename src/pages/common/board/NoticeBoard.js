import { Link } from 'react-router-dom';
import { H2, H4, Span } from '../../../components/atoms';
import { ColumnFlexBox, RowFlexBox } from '../../../components/molecules';
import { TopLogo, Jumbotron, Pagination, GoToWriteButton } from '../../../components/organisms';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchPosting } from '../../../hooks';
import { getCookie } from '../../../hooks/api/Cookie';

const NoticeBoard = () => {
    const searchState = useSelector((state) => state.boardReducer.searchOptions);
    const { searchPosting } = useSearchPosting(0, searchState.page);

    const goToDetail = (pId) => `/post/${pId}`;
    useEffect(() => {
    }, [searchState.page]);

    
    return (
        <ColumnFlexBox className="NoticeBoardWrapper">
            <TopLogo />
            <Link to='/notice'><Jumbotron id="blue"><H2>공지사항</H2></Jumbotron></Link>
            <RowFlexBox className="WriteButtonWrapper">
                {getCookie('role') !== 'PASSENGER' ? <><GoToWriteButton/></>: <></>}
            </RowFlexBox>

            { searchPosting !== '' && searchPosting !== null && searchPosting !== undefined && searchPosting.length !== 0
            ? <>
            <table className="NoticeBoardTable">
            {searchPosting.posts.map(p => 
            <tr>
                <Link to={goToDetail(p.id)}> 
                <Span><Span className="Bold">[{p.route.name} {p.route.routeType}]</Span> { p.title }</Span>
                </Link>
            </tr>
            )}
            </table>
            <Pagination link='notice' totalPage={searchPosting.page.totalPage}/>
            </>
            : <></>}
        </ColumnFlexBox>
    );
}

export default NoticeBoard;