import { Date } from '../atoms'; 
import { ColumnFlexBoxCenter, RowFlexBoxCenter } from '../molecules';
import { RsvSelectBox } from "../organisms";
import { useState } from 'react';
import dayjs from 'dayjs';

import * as ReservationAction from '../../redux/actions/ReservationAction';
import { useDispatch } from 'react-redux';

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

export { ChooseSchedule }