import { ContainedButton } from "../../components/atoms";
import { ColumnFlexBoxCenter } from  "../../components/molecules";
import { MainLogo, LoginShortcut } from "../../components/organisms";
import { LoginInput } from "../../components/templates";

import { useSelector } from 'react-redux';

const Login = () => { 
    const loginState = useSelector((state) =>  state.loginReducer);

    return (
        <ColumnFlexBoxCenter className="LoginContainer">
            <MainLogo />
            <ColumnFlexBoxCenter className="LoginWrapper">
                <LoginInput />  
                <ContainedButton
                className="containedBtnBigBlue"
                content="로그인"
                eventHandler={() => console.log(loginState)}/>
            </ColumnFlexBoxCenter>
            <LoginShortcut />
        </ColumnFlexBoxCenter>
    );
}

export default Login;