import { ContainedButton, H2, H3 } from "../../components/atoms";
import { RowFlexBox, ColumnFlexBox, ColumnFlexBoxCenter } from  "../../components/molecules"
import { TopLogo, TicketHistory, Drive, HeadingWithoutLink, HeadingWithLink, BoardButtons, Ticket } from "../../components/organisms";
const Home = () => {
    return (
        <>
        <TopLogo />
        <ColumnFlexBoxCenter>
        <HeadingWithoutLink
        className="HeadingIndexBlue" 
        content="내 정보"><ContainedButton className="containedBtnSmallBlue" content="수정"></ContainedButton></HeadingWithoutLink>
        <HeadingWithoutLink
        className="HeadingIndexYellow" 
        content="내 정보"></HeadingWithoutLink>
        <HeadingWithLink link="/reservation" content="날짜 선택"/>
        </ColumnFlexBoxCenter>
        </>
    );
}

export default Home;