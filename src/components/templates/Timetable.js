import { ColumnFlexBox } from "../molecules";
import { RouteTimetable, HeadingWithoutLink } from '../organisms';

const Timetable = (props) => {
    return (
        <ColumnFlexBox className="TimetableContainer">
            <HeadingWithoutLink 
            className="HeadingIndexBlue"
            content={props.routeName}/>
            <RouteTimetable list={props.timetables}/>
        </ColumnFlexBox>
    );
}

export {Timetable}