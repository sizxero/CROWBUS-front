import { ColumnFlexBox } from  "../../components/molecules";
import { TopLogo, HeadingWithoutLink, MemberInfo, Ticket, TicketHistory, Drive } from "../../components/organisms";

const MyPage = () => {
    return (
        <ColumnFlexBox>
            <TopLogo />
            <HeadingWithoutLink 
            className="HeadingIndexBlue"
            content="내 정보"/>
            <MemberInfo 
            list={[{name: "이름", value: "김금오"},
            {name: "아이디", value: "kumohkim"},
            {name: "휴대전화", value: "010-1111-1111"},
            {name: "선호노선", value: "옥계"}]}/>

            <HeadingWithoutLink 
            className="HeadingIndexBlue"
            content="승차권 조회"/>
            <Ticket
            date="2022.10.07 (금)" 
            time="08:35" 
            place="양포동 주민센터" 
            carnum="12가 4321" 
            seat="3"/>

            <HeadingWithoutLink 
            className="HeadingIndexBlue"
            content="승차권 예매 이력"/>
            <TicketHistory 
            date="2022.10.06 (목)" 
            time="18:15" 
            place="학교" 
            rsvtime="2022.10.06 14:43:26" 
            state="예약취소" />

            <TicketHistory 
            date="2022.10.06 (목)" 
            time="08:35" 
            place="양포동 주민센터" 
            rsvtime="2022.10.05 18:00:15" 
            state="탑승완료" />

            <HeadingWithoutLink 
            className="HeadingIndexYellow"
            content="내 정보" />
            <MemberInfo 
            list={[{name: "이름", value: "김운전"},
            {name: "아이디", value: "unjeonkim"},
            {name: "휴대전화", value: "010-2222-2222"},
            {name: "운전면허증 번호", value: "22-22-222222-22"}]}/>

            <HeadingWithoutLink 
            className="HeadingIndexYellow"
            content="내 운행" />
            <Drive 
            courseName="옥계 등교"
            startday="2022.09.01"
            endday="2022.12.31"
            carnum="12가 4321" />
        </ColumnFlexBox>
    );
}

export default MyPage;