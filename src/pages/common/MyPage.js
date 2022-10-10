import { ColumnFlexBox } from  "../../components/molecules";
import { TopLogo, HeadingWithoutLink, MemberInfo, Ticket, TicketHistory, Drive } from "../../components/organisms";
import { getCookie } from "../../hooks/api/Cookie";
import { useMemberInfo } from "../../hooks";

const MyPage = () => {
    const { memberInfo }  = useMemberInfo();
    let myInfo = [];
    if (memberInfo !== null) {
        myInfo = [
            {name: "이름", value: memberInfo.name},
            {name: "아이디", value: memberInfo.loginId},
            {name: "전화번호", value: memberInfo.phone},
        ]

        if(memberInfo.license === undefined)
            myInfo = [...myInfo, {name: "선호노선", value: memberInfo.favoriteRoute !== null
            ? memberInfo.favoriteRoute.name + ' ' + memberInfo.favoriteRoute.routeType
            : "없음"}]
        else
            myInfo = [...myInfo, {name: "면허번호", value: memberInfo.license}]
    }
    

    return (
        <ColumnFlexBox>
            <TopLogo />
            <HeadingWithoutLink 
            className={getCookie('role') === 'PASSENGER' ? "HeadingIndexBlue" : "HeadingIndexYellow" }
            content="내 정보"/>
            { myInfo !== null || myInfo !== undefined 
            ? <MemberInfo 
            list={myInfo}/>
            :<></>
            }
            
            { getCookie('role') === 'PASSENGER'
            ? <>
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
            </>
            :<>
            <HeadingWithoutLink 
            className="HeadingIndexYellow"
            content="내 운행" />
            <Drive 
            courseName="옥계 등교"
            startday="2022.09.01"
            endday="2022.12.31"
            carnum="12가 4321" />
            </>
            }
        </ColumnFlexBox>
    );
}

export default MyPage;