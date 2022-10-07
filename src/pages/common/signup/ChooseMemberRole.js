import { ColumnFlexBoxCenter } from  "../../../components/molecules";
import { MainLogo, SignUpButtons } from "../../../components/organisms";

const SignUpStep1 = () => {
    return (
        <ColumnFlexBoxCenter className="SignUpContainer">
            <MainLogo />
            <SignUpButtons />
        </ColumnFlexBoxCenter>
    );
}

export default SignUpStep1;