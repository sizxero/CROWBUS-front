import { Date } from '../atoms'; 
import { ColumnFlexBoxCenter, RowFlexBoxCenter } from '../molecules';
import { RsvSelectBox } from "../organisms";
import { useState } from 'react';
import dayjs from 'dayjs';

const ChooseSchedule = () => {
    const [value, setValue] = useState(dayjs());

    const handleChange = (newValue) => {
        setValue(newValue);
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