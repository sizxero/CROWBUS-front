import { Date } from '../atoms'; 
import { ColumnFlexBoxCenter, RowFlexBoxCenter } from '../molecules';
import { RsvSelectBox } from "../organisms";
import { useState } from 'react';
import dayjs from 'dayjs';
import _ from 'lodash';
import { useDriveId, useSeats } from '../../hooks';

import * as ReservationAction from '../../redux/actions/ReservationAction';
import { useDispatch, useSelector } from 'react-redux';

const ChooseSchedule = () => {
    const [value, setValue] = useState(dayjs());
    const dispatch = useDispatch();

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(ReservationAction.selectDate(newValue.format('YYYY-MM-DD')));
    };

    return (
        <ColumnFlexBoxCenter className="ChooseSchedule">
            <Date 
            className="ChooseDateRsv"
            value={value}
            eventHandler={handleChange}
            />
            <RowFlexBoxCenter className="RouteAndPlaceWrapper">
            <RsvSelectBox 
                date={value} />
            </RowFlexBoxCenter>
        </ColumnFlexBoxCenter>
    );
}

const ChooseMySeat = () => {
    const dispatch = useDispatch();
    const rsvState = useSelector((state) => state.reservationReducer);
    const { seats } = useSeats(rsvState.date, rsvState.route);
    const [limit, setLimit] = useState(0);

    const getSeatEleId = (sid) => `seat-${sid}`;
    const getSeatId = (seatEleId) => Number(seatEleId.split('-')[1]);

    const seatToggle = (e) => {
        if (e.target.className === 'Seat') {
            if(limit === 0) {
                e.target.className='SeatChoice';
                setLimit(limit+1);
                dispatch(ReservationAction.selectSeat(getSeatId(e.target.id)));
            }
            else
                alert('한 자리만 예약 가능합니다.');
        }
        else if(e.target.className === 'SeatChoice') {
            setLimit(limit-1);
            e.target.className='Seat';
        }

    }
    return (
        <div className="SeatMap">
        {seats.map((s, idx) => {
            if(idx % 4 === 1 && idx < 41) {
                return <>
                <div id={getSeatEleId(s.id)} 
                className={s.seatType === '예약가능' ? "Seat" : "SeatChoosed"}
                onClick={seatToggle}>{s.seatNo}</div>
                <div className="Empty"></div>
                </>;    
            } else {
                return <>
                <div id={getSeatEleId(s.id)} 
                className={s.seatType === '예약가능' ? "Seat" : "SeatChoosed"}
                onClick={seatToggle}>{s.seatNo}</div>
                </>
            }
        })}
        </div>
    );   
}
export { ChooseSchedule, ChooseMySeat }