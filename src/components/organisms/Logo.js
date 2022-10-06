import { CrowBus, CrowBusAndText, CrowBusAndDriver, H1 } from "../atoms";
import { RowFlexBox, RowFlexBoxCenter } from "../molecules";

const MainLogo = () => {
    return (<RowFlexBoxCenter className="MainLogo">
        <CrowBusAndText />
    </RowFlexBoxCenter>);
}

const DriverLogo = () => {
    return (<RowFlexBoxCenter className="DriverLogo">
        <CrowBusAndDriver />
    </RowFlexBoxCenter>);
}

const TopLogo = () => {
    return (<RowFlexBox className="TopLogo">
        <CrowBus /><H1>까마귀버스</H1>
    </RowFlexBox>);
}

export { MainLogo, DriverLogo, TopLogo }