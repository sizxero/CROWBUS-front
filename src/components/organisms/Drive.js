import { Link } from 'react-router-dom';
import { H3, Span, P } from '../atoms';
import { ColumnFlexBox, RowFlexBox, RowFlexBoxCenter } from "../molecules";    

const RideStatusArea = (props) => {
    return (
        <RowFlexBox className="RideStatusArea">
            <RowFlexBoxCenter className="FirstRow">
                <H3>{props.courseName}</H3>
                <Span>{props.rsv}/45</Span>
            </RowFlexBoxCenter>
            <RowFlexBox>
                <Span>{props.carNum}</Span>
            </RowFlexBox>
        </RowFlexBox>
    );
}

const CurrLocationArea = ({data}) => {
    const getDetailLink = (rid) => `/curr-location/${rid}`
    return (
        <ColumnFlexBox className="CurrLocationArea">
            <Link to={getDetailLink(data.id)}><H3>{data.name}</H3></Link>
            <P>현재 운행 정보 없음</P>
        </ColumnFlexBox>
    );
}

const CurrLocationTimetable = ({data}) => {
    return (
        <RowFlexBox className='CurrLocationTimetableArea'>
            <div className='Location'>
                <div className="circle"></div>
                <div className="VerticalLine"></div>
            </div>
            <ColumnFlexBox className='CurrLocationTimetableInfo'>
                <H3>{data.place}</H3>
                <P>{data.arrivalTime !== null && data.arrivalTime !== undefined ? data.arrivalTime.substr(11, 5) : ''}</P>
            </ColumnFlexBox>
        </RowFlexBox>
    );
}

export { RideStatusArea, CurrLocationArea, CurrLocationTimetable }