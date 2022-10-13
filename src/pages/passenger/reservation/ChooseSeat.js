import { ContainedButton } from '../../../components/atoms';
import { ColumnFlexBox, ColumnFlexBoxCenter } from '../../../components/molecules';
import { TopLogo, HeadingWithLink } from  '../../../components/organisms';
import { ChooseMySeat } from '../../../components/templates';

import { useSelector } from 'react-redux';
import DriveAPI from '../../../hooks/api/DriveAPI';

const ReservationStep2 = () => {
    const rsvState = useSelector((state) => state.reservationReducer);
    console.log(rsvState); 
    const reservation = async() => {
        const status = await DriveAPI.reservation(rsvState);
        if(status === 200) {
            alert('예약이 성공적으로 완료되었습니다.');
            window.location.href = '/mypage';
        } else {
            alert('예약 실패:', status);
        }
    }
    return (
        <ColumnFlexBox className="ChooseSeatContainer">
            <TopLogo />
            <HeadingWithLink 
            link='/reservation-step1'
            content='스케줄 선택'
            />
            <ColumnFlexBoxCenter className="ChooseSeatWrapper">
                <ChooseMySeat />
                <ContainedButton
                id="rsvCompleted"    
                className="containedBtnBlue"
                content="예약완료" 
                eventHandler={reservation}/>
            </ColumnFlexBoxCenter>
        </ColumnFlexBox>
    );
}

export default ReservationStep2;