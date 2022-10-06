import { ContainedButton, H2, H4, Span } from '../atoms';
import { GridXS_N, RowFlexBoxCenter,ColumnFlexBoxCenter, ColumnFlexBox, RowFlexBox } from '../molecules';

const Ticket = (props) => {
    return (<RowFlexBoxCenter className="Ticket">
        <GridXS_N n={8}>
        <ColumnFlexBox className="TicketInfo">
            <H4>{props.date}</H4>
            <H4>{props.time} {props.place}</H4>
            <RowFlexBox><Span>{props.carnum} 좌석번호: {props.seat}</Span></RowFlexBox> 
        </ColumnFlexBox>
        </GridXS_N>
        <GridXS_N n={4}>
        <ColumnFlexBox className="ButtonWrapper">
            <ContainedButton className="containedBtnBlue" content="승차완료"/>
            <ContainedButton className="containedBtnGray" content="예약취소"/>
        </ColumnFlexBox>
        </GridXS_N>
    </RowFlexBoxCenter>);
}

const TicketHistory = (props) => {
    return (<RowFlexBoxCenter className="Ticket">
        <GridXS_N n={9}>
        <ColumnFlexBox className="TicketInfo">
            <H4>{props.date}</H4>
            <H4>{props.time} {props.place}</H4>
            <Span>예약일시: {props.rsvtime}</Span>
        </ColumnFlexBox>
        </GridXS_N>
        <GridXS_N n={3}><H4>{props.state}</H4></GridXS_N>
    </RowFlexBoxCenter>);
}

const Drive = (props) => {
    return (<ColumnFlexBoxCenter className="Drive">
        <RowFlexBox className="DriveInfo">
            <H4>{props.courseName}</H4>
            <Span>{props.startday}~{props.endday}</Span>
        </RowFlexBox>
        <RowFlexBox className="CarInfo">
            <H4>{props.carnum}</H4>
            <ContainedButton className="containedBtnSmallYellow" content="수정"/>
        </RowFlexBox>
    </ColumnFlexBoxCenter>);
}

export { Ticket, TicketHistory, Drive }