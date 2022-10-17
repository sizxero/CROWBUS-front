import { H2 } from '../../components/atoms';
import { ColumnFlexBox, ColumnFlexBoxCenter } from '../../components/molecules';
import { TopLogo, Jumbotron, CurrLocationArea, HeadingWithoutLink } from '../../components/organisms';

import { useGoToSchoolRoutes, useGoToHomeRoutes } from '../../hooks';
const CurrentLocation = () => {
    const { goToSchoolRoutes } = useGoToSchoolRoutes();
    const { goToHomeRoutes } = useGoToHomeRoutes();

    return (
        <ColumnFlexBox className="CurrentLocationContainer">
            <TopLogo />
            <Jumbotron className="blue">
                <H2>금오공과대학교</H2>
            </Jumbotron>
            <ColumnFlexBoxCenter className="CurrentLocationWrapper">
                <HeadingWithoutLink
                className="HeadingIndexBlue"
                content="등교"/>
                { goToSchoolRoutes !== null && goToSchoolRoutes !== undefined && goToSchoolRoutes.length !== 0 
                ? goToSchoolRoutes.map((gts) => <CurrLocationArea data={gts}/>):<></>}
                <br />
                <HeadingWithoutLink
                className="HeadingIndexBlue"
                content="하교"/>
                { goToHomeRoutes !== null && goToHomeRoutes !== undefined && goToHomeRoutes.length !== 0 
                ? goToHomeRoutes.map((gth) => <CurrLocationArea data={gth}/>):<></>}
            </ColumnFlexBoxCenter>
        </ColumnFlexBox>
    );
}

export default CurrentLocation;