import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { H2, Span } from '../../../components/atoms';
import { ColumnFlexBox, RowFlexBox } from '../../../components/molecules';
import { TopLogo, Jumbotron, Pagination, GoToWriteButton } from '../../../components/organisms';

import { useSearchPosting } from '../../../hooks';

const LostAndFoundBoard = () => {
    let page = queryString.parse(window.location.search).page;
    if (isNaN(page)) 
        page = 1;

    const { searchPosting } = useSearchPosting(1, Number(page));
    const goToDetail = (pId) => `/post/${pId}`;

    return (
        <ColumnFlexBox className="LostAndFoundBoardWrapper">
            <TopLogo />
            <Link to='/lost-found'><Jumbotron id="blue"><H2>분실물 게시판</H2></Jumbotron></Link>
            <RowFlexBox className="WriteButtonWrapper">
                <GoToWriteButton/>
            </RowFlexBox>

            { searchPosting !== '' && searchPosting !== null && searchPosting !== undefined && searchPosting.length !== 0
            ? <>
            <table className="LostAndFoundBoardTable">
            {searchPosting.posts.map(p => 
            <tr>
                <Link to={goToDetail(p.id)}> 
                <Span><Span className="Bold">[{p.route.name} {p.route.routeType}]</Span> { p.title }</Span>
                </Link>
            </tr>
            )}
            </table>
            <Pagination link='lost-found' totalPage={searchPosting.page.totalPage}/>
            </>
            : <></>}
        </ColumnFlexBox>
    );
}

export default LostAndFoundBoard;