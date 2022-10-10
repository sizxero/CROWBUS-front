import { ColumnFlexBox } from "../../components/molecules";
import { TopLogo } from "../../components/organisms";
import { Timetable } from "../../components/templates";
import { useAllRoutes } from '../../hooks';

const TimeTable = () => {
    const { routes } = useAllRoutes();

    return (
    <ColumnFlexBox>
        <TopLogo />
        { routes !== null ? routes.map((rt) =>
        <>
            <Timetable 
            routeName={rt.name + ' ' +rt.routeType}
            timetables={rt.timetables}/>
        </> 
        ) : <></>}
    </ColumnFlexBox>
    );
}

export default TimeTable;