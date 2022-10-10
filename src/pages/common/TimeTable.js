import { ColumnFlexBox } from "../../components/molecules";
import { TopLogo, HeadingWithoutLink } from "../../components/organisms";

const TimeTable = () => {
    return (
    <ColumnFlexBox>
        <TopLogo />
        <HeadingWithoutLink 
        className="HeadingIndexBlue"
        content="봉곡/도량/문성/신평 등교"/>
    </ColumnFlexBox>
    );
}

export default TimeTable;