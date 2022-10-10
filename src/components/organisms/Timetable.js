import { ColumnFlexBoxCenter } from '../molecules';

const RouteTimetable = ({list}) => {
    return (
        <ColumnFlexBoxCenter className="RouteTimeTableWrapper">
        <table className="RouteTimeTable">
            <thead>
                <tr>
                    <th width="230px">장소</th>
                    <th width="70px">시간</th>
                </tr>
            </thead>
            <tbody>
                {list !== null || list !== undefined ? list.map((tt) => 
                <tr>
                    <td>{tt.place}</td>
                    <td>{tt.arrivalTime !== null || tt.arrivalTime !== undefined || tt.arrivalTime !== 'null'
                    ? typeof(tt.arrivalTime) === 'string' ? tt.arrivalTime.substr(11, 5) : ' ' : ' '}</td>
                </tr>): <></>}
            </tbody>
        </table>
        </ColumnFlexBoxCenter>
    );
}

export { RouteTimetable }