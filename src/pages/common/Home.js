import { H4, ContainedButton } from "../../components/atoms";
import { ColumnFlexBoxCenter } from  "../../components/molecules";
import { MainLogo, Menu } from "../../components/organisms";

const Home = () => {
    return (
        <ColumnFlexBoxCenter className="HomeContainer">
            <MainLogo />
            <ColumnFlexBoxCenter className="MenuWrapper">
            <H4>김금오님, 환영합니다.</H4>
            <Menu role="Passenger" />
            <Menu role="Driver" />
            <ContainedButton
            className="containedBtnBigGray"
            content="로그아웃" />
            </ColumnFlexBoxCenter>
        </ColumnFlexBoxCenter>
    );
}

export default Home;