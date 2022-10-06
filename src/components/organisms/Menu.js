import { ColumnFlexBoxCenter, GridXS, RowFlexBoxCenter } from "../molecules";
import { Link }  from "react-router-dom";

const passengerMenu = [
    {name: '승차권 예매', link: "/reservation"},
    {name: '마이페이지', link: "/mypage"},
    {name: '버스 현위치', link: "/curr-location"},
    {name: '시간표 조회', link: "/timetable"},
    {name: '공지사항', link: "/notice"},
    {name: '분실물 게시판', link: "/lost-found"},
];
const driverMenu = [
    {name: '차량 등록', link: "/"},
    {name: '마이페이지', link: "/mypage"},
    {name: '승차 현황', link: "/ride-status"},
    {name: '시간표 조회', link: "/timetable"},
    {name: '공지사항', link: "/notice"},
    {name: '분실물 게시판', link: "/lost-found"},
];

const staffMenu = [{}];

const Menu = (props) => {
    let menu = [];
    if(props.role === 'Passenger') menu = passengerMenu;
    else if (props.role === 'Driver') menu = driverMenu;
    else menu = staffMenu;

    const MenuName = () => `${props.role}Menu`;
    const MenuEle = (props) => {
        return <RowFlexBoxCenter className="MenuEle">{props.children}</RowFlexBoxCenter>
    }
    
    return (<RowFlexBoxCenter className={MenuName()}>
        {menu.map((item, idx) => 
        <GridXS><MenuEle><Link to={item.link}>{item.name}</Link></MenuEle></GridXS>
        )}</RowFlexBoxCenter>); 
}

export { Menu }
