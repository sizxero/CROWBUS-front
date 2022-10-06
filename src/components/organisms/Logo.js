import { CrowBus, CrowBusAndText, CrowBusAndDriver, H1 } from "../atoms";
import { RowFlexBox } from "../molecules";

const MainLogo = () => {
    return (<RowFlexBox className="MainLogo">
        <CrowBusAndText />
    </RowFlexBox>);
}

const DriverLogo = () => {
    return (<RowFlexBox className="DriverLogo">
        <CrowBusAndDriver />
    </RowFlexBox>);
}

const TopLogo = () => {
    return (<RowFlexBox className="TopLogo">
        <CrowBus /><H1 content="까마귀버스"/>
    </RowFlexBox>);
}

export { MainLogo, DriverLogo, TopLogo }