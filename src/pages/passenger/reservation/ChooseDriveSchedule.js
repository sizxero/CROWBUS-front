import { Link } from 'react-router-dom';

import { ContainedButton } from '../../../components/atoms';
import { ColumnFlexBoxCenter } from '../../../components/molecules';
import { MainLogo } from  '../../../components/organisms';
import { ChooseSchedule } from '../../../components/templates';

const ReservationStep1 = () => {
    return (
        <ColumnFlexBoxCenter className="ChooseDriveScheduleContainer">
            <MainLogo />
            <ChooseSchedule />
            <Link to='/reservation-step2'>
            <ContainedButton    
            className="containedBtnBlue"
            content="좌석선택" />
            </Link>
        </ColumnFlexBoxCenter>
    );
}

export default ReservationStep1;