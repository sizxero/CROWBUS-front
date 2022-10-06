import { H2, H3 } from "../../components/atoms";
import { RowFlexBox, ColumnFlexBox, ColumnFlexBoxCenter } from  "../../components/molecules"
import { TopLogo, DateSearch, TextSearch, Jumbotron, Pagination, BoardButtons } from "../../components/organisms";
const Home = () => {
    return (
        <>
        <TopLogo />
        <ColumnFlexBoxCenter>
        <Jumbotron id="blue"><H2>공지사항</H2></Jumbotron>
        <Jumbotron id="gray"><H2>옥계</H2><H3>12가 4321</H3></Jumbotron>
        <DateSearch /> <TextSearch />
        <BoardButtons auth="me"/><BoardButtons auth="other"/>
        <Pagination link="" totalPage={5}/>
        </ColumnFlexBoxCenter>
        </>
    );
}

export default Home;