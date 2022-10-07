import { ContainedButton, H4, Span } from '../atoms';
import { GridXSN, RowFlexBoxCenter,ColumnFlexBoxCenter, ColumnFlexBox, RowFlexBox } from '../molecules';

const MemberInfo = ({list}) => {
    return (<table className="MemberInfoTable">
        {list.map((item) => (
            <tr>
                <th>{item.name}</th>
                <td>{item.value}</td>
            </tr>
        ))}
    </table>);
}

const Ticket = (props) => {
    return (<RowFlexBoxCenter className="Ticket">
        <GridXSN n={8}>
        <ColumnFlexBox className="TicketInfo">
            <H4>{props.date}</H4>
            <H4>{props.time} {props.place}</H4>
            <RowFlexBox><Span>{props.carnum} 좌석번호: {props.seat}</Span></RowFlexBox> 
        </ColumnFlexBox>
        </GridXSN>
        <GridXSN n={4}>
        <ColumnFlexBox className="ButtonWrapper">
            <ContainedButton className="containedBtnBlue" content="승차완료"/>
            <ContainedButton className="containedBtnGray" content="예약취소"/>
        </ColumnFlexBox>
        </GridXSN>
    </RowFlexBoxCenter>);
}

const TicketHistory = (props) => {
    return (<RowFlexBoxCenter className="Ticket">
        <GridXSN n={9}>
        <ColumnFlexBox className="TicketInfo">
            <H4>{props.date}</H4>
            <H4>{props.time} {props.place}</H4>
            <Span>예약일시: {props.rsvtime}</Span>
        </ColumnFlexBox>
        </GridXSN>
        <GridXSN n={3}><H4>{props.state}</H4></GridXSN>
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

export { MemberInfo, Ticket, TicketHistory, Drive }