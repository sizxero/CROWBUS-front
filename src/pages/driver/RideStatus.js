import { Date, LeftButton, RightButton } from '../../components/atoms'; 
import { ColumnFlexBox, ColumnFlexBoxCenter, RowFlexBoxCenter } from '../../components/molecules';
import { TopLogo, RideStatusArea } from '../../components/organisms';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useCurrDrives } from '../../hooks';
import DriveAPI from '../../hooks/api/DriveAPI';

const RideStatus = () => {
    const [value, setValue] = useState(dayjs());
    const { currDrives, setCurrDrives } = useCurrDrives(value.format('YYYY-MM-DD'));
 
    const handleChange = async (newValue) => {
        setValue(newValue);
        setCurrDrives(await DriveAPI.findCurrDrive(newValue.format('YYYY-MM-DD')));
    };
    
    useEffect(() => {
        console.log(value.format('YYYY-MM-DD'));
        console.log(currDrives);
    }, [value]);

    return (
        <ColumnFlexBox className="RideStatusContainer">
            <TopLogo />
            <RowFlexBoxCenter>
            <LeftButton 
            eventHandler={() => handleChange(value.subtract(1, 'd'))}/>
            <Date
            value={value}
            eventHandler={handleChange} />
            <RightButton 
            eventHandler={() => handleChange(value.add(1, 'd'))}/>
            </RowFlexBoxCenter>
            <ColumnFlexBoxCenter className="RideStatusWrapper">
            {currDrives !== undefined && currDrives !== null && currDrives !== ''
            ? currDrives.map((cd) => <>
            <RideStatusArea 
            courseName={cd.drive.route.name + ' ' + cd.drive.route.routeType}
            rsv={45-cd.rsv}
            carNum={cd.drive.bus.busNum}/>
            </>)
            : <>운행 정보가 없습니다.</>}
            </ColumnFlexBoxCenter>
        </ColumnFlexBox>
    );
}

export default RideStatus;