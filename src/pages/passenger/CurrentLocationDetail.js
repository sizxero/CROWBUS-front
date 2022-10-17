import { useParams } from 'react-router-dom';

import { H2 } from '../../components/atoms';
import { ColumnFlexBox, ColumnFlexBoxCenter } from '../../components/molecules';
import { TopLogo, HeadingWithLink, Jumbotron, CurrLocationTimetable } from '../../components/organisms';
import { usePlaces } from '../../hooks';

const CurrentLocationDetail = () => {
    const rid = Number(useParams().rid);
    const { places } = usePlaces(rid);
    return (
        <ColumnFlexBox className="CurrentLocationContainer">
            <TopLogo />
            <HeadingWithLink 
            link='/curr-location'
            content='버스 현 위치'/>
            <Jumbotron id='gray'><H2>옥계</H2></Jumbotron>
            <ColumnFlexBoxCenter className='TimetableWrapper'>
                {places !== null && places !== undefined && places.length !== 0
                ? places.map((p) => <CurrLocationTimetable data={p} />) : <></>}
            </ColumnFlexBoxCenter>
        </ColumnFlexBox>
    );
}

export default CurrentLocationDetail;