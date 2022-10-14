import { H3, Span } from '../atoms';
import { RowFlexBox, RowFlexBoxCenter } from "../molecules";    

const RideStatusArea = (props) => {
    return (
        <RowFlexBox className="RideStatusArea">
            <RowFlexBoxCenter className="FirstRow">
                <H3>{props.courseName}</H3>
                <Span>{props.rsv}/45</Span>
            </RowFlexBoxCenter>
            <RowFlexBox>
                <Span>{props.carNum}</Span>
            </RowFlexBox>
        </RowFlexBox>
    );
}

export { RideStatusArea }