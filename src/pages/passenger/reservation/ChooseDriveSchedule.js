import { ContainedButton } from '../../../components/atoms';
import { ColumnFlexBoxCenter } from '../../../components/molecules';
import { MainLogo } from  '../../../components/organisms';
import { ChooseSchedule } from '../../../components/templates';

const ReservationStep1 = () => {
    return (
        <ColumnFlexBoxCenter className="ChooseDriveScheduleContainer">
            <MainLogo />
            <ChooseSchedule />
            <ContainedButton
            className="containedBtnBlue"
            content="좌석선택" />
        </ColumnFlexBoxCenter>
    );
}

export default ReservationStep1;