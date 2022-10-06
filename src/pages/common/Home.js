import { RowFlexBox, ColumnFlexBox, ColumnFlexBoxCenter } from  "../../components/molecules"
import { TopLogo, MainLogo, DriverLogo, Menu } from "../../components/organisms";
const Home = () => {
    return (
        <ColumnFlexBoxCenter>
        <MainLogo />
        <Menu role="Passenger"/>
        <DriverLogo />
        <Menu role="Driver"/>
        </ColumnFlexBoxCenter>
    );
}

export default Home;