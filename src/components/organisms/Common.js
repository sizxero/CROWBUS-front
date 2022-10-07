import { Link } from 'react-router-dom';
import { CrowBus, CrowBusAndText, CrowBusAndDriver, 
    H1, H2, Span, Input, Date, LeftButton, RightButton, SearchButton } from '../atoms';
import { ColumnFlexBoxCenter, RowFlexBoxCenter, RowFlexBox, GridXS,  } from "../molecules";

// 로고 및 헤더 - 로고
const MainLogo = () => {
    return (<RowFlexBoxCenter className="MainLogo">
        <CrowBusAndText />
    </RowFlexBoxCenter>);
}

const DriverLogo = () => {
    return (<RowFlexBoxCenter className="DriverLogo">
        <CrowBusAndDriver />
    </RowFlexBoxCenter>);
}

const TopLogo = () => {
    return (<Link to='/' className="TopLogoHomeLink"><RowFlexBox className="TopLogo">
        <CrowBus /><H1>까마귀버스</H1>
    </RowFlexBox></Link>);
}

// 로고 및 헤더 - 헤더
const Jumbotron = (props) => {
    return (<ColumnFlexBoxCenter id={props.id} className="Jumbotron">{props.children}</ColumnFlexBoxCenter>);
}

const HeadingWithoutLink = (props) => {
    return (<RowFlexBox>
    <Span className={props.className} /><H2>{props.content}</H2>{props.children}
    </RowFlexBox>);
}

const HeadingWithLink = (props) => {
    return (<Link className="HeadingWithLink" to={props.link}>
        <H2>← {props.content}</H2>
    </Link>);
}

export { MainLogo, DriverLogo, TopLogo, Jumbotron, HeadingWithoutLink, HeadingWithLink }

// 메뉴
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

// 검색창
const DateSearch = () => {
    return (<RowFlexBox>
        <LeftButton /><Date /><RightButton />
    </RowFlexBox>);
}

const TextSearch = () => {
    return (<RowFlexBox>
        <Input /><SearchButton />
    </RowFlexBox>);
}

export { DateSearch, TextSearch }

