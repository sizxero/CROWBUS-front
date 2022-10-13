import { ColumnFlexBox } from  "../../components/molecules";
import { TopLogo, HeadingWithoutLink, MemberInfo, Ticket, TicketHistory, Drive } from "../../components/organisms";
import { getCookie } from "../../hooks/api/Cookie";
import { useMemberInfo } from "../../hooks";

const MyPage = () => {
    const { memberInfo }  = useMemberInfo();
    
    let myInfo = [];
    let myTicketInfo = [];
    let currTicket = [];
    let pastTicket = [];
    let myDrives = [];
    
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


        if(getCookie('role') === 'PASSENGER') {
            if(memberInfo.reservations.length !== 0) {
                memberInfo.reservations.map((myrsv) => 
                    myTicketInfo.push({
                        date: myrsv.seat.date, 
                        time: myrsv.place.arrivalTime.substr(11, 5), 
                        place: myrsv.place.place, 
                        carnum: myrsv.seat.drive.bus.busNum, 
                        seat: myrsv.seat.seatNo, 
                        rsvtime: myrsv.modifiedTime, 
                        state: myrsv.reservationType})
                )
            }
        } else if(getCookie('role') === 'BUSDRIVER') {
            if(memberInfo.drives.length !== 0) {
                memberInfo.drives.map((md) => 
                    myDrives.push({
                        courseName: md.route.name + ' ' + md.route.routeType,
                        startday: md.startDay,
                        endday: md.endDay,
                        carnum: md.bus.busNum
                    })
                )
            }
        }

    }

    if(getCookie('role') === 'PASSENGER') {
        currTicket = myTicketInfo.filter(t => t.state === '탑승예정');
        pastTicket = myTicketInfo.filter(t => t.state !== '탑승예정');
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
            { currTicket.length === 0
            ? <>승차권이 없습니다.</>
            : currTicket.map((ct) => 
            <>
            <Ticket
            date={ct.date}
            time={ct.time}
            place={ct.place}
            carnum={ct.carnum}
            seat={ct.seat}/>
            </>
            )}
            

            <HeadingWithoutLink 
            className="HeadingIndexBlue"
            content="승차권 예매 이력"/>
            { pastTicket.length === 0
            ? <>승차권 예매이력이 없습니다.</>
            : pastTicket.map((pt) => 
            <>
            <TicketHistory 
            date={pt.date}
            time={pt.time}
            place={pt.place}
            rsvtime={pt.rsvtime}
            state={pt.state} />
            </>
            )}
            </>
            :<>
            <HeadingWithoutLink 
            className="HeadingIndexYellow"
            content="내 운행" />
            {myDrives.length === 0
            ? <>운행 정보가 없습니다.</>
            : myDrives.map((md) => <>
            <Drive 
            courseName={md.courseName}
            startday={md.startday}
            endday={md.endday}
            carnum={md.carnum} />
            </>)}
            </>
            }
        </ColumnFlexBox>
    );
}

export default MyPage;