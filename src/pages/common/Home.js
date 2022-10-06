import { ContainedButton, H2, H3 } from "../../components/atoms";
import { RowFlexBox, ColumnFlexBox, ColumnFlexBoxCenter } from  "../../components/molecules"
import { TopLogo, TicketHistory, Drive, Heading, Pagination, BoardButtons, Ticket } from "../../components/organisms";
const Home = () => {
    return (
        <>
        <TopLogo />
        <ColumnFlexBoxCenter>
        <Heading
        className="HeadingIndexBlue" 
        content="내 정보"><ContainedButton className="containedBtnSmallBlue" content="수정"></ContainedButton></Heading>
        <Heading
        className="HeadingIndexYellow" 
        content="내 정보"></Heading>
        <Ticket 
        date="2022년 9월 26일 월요일"
        time="08:35" place="양포동 주민센터"
        carnum="76금 5432" seat="3"
        />
        <TicketHistory 
        date="2022년 9월 26일 월요일"
        time="08:35" place="양포동 주민센터"
        rsvtime="2022-09-25 18:00" state="예약취소"
        />
        <Drive 
        courseName="옥계 등교"
        startday="2022-09-01" endday="2022-12-31"
        carnum="76금 5432"
        />
        </ColumnFlexBoxCenter>
        </>
    );
}

export default Home;