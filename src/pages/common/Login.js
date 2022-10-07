import { ContainedButton } from "../../components/atoms";
import { ColumnFlexBoxCenter } from  "../../components/molecules";
import { MainLogo, LoginShortcut } from "../../components/organisms";
import { LoginInput } from "../../components/templates";

import { useSelector } from 'react-redux';
import MemberAPI from '../../hooks/api/MemberAPI';

const Login = () => { 
    const loginState = useSelector((state) =>  state.loginReducer);

    const clickLogin = async() => {
        try {
            await MemberAPI.login(loginState);
            window.location.href = '/';
        } catch(e) {
            alert('로그인에 실패했습니다.');
        }
    }

    return (
        <ColumnFlexBoxCenter className="LoginContainer">
            <MainLogo />
            <ColumnFlexBoxCenter className="LoginWrapper">
                <LoginInput />  
                <ContainedButton
                className="containedBtnBigBlue"
                content="로그인"
                eventHandler={clickLogin}/>
            </ColumnFlexBoxCenter>
            <LoginShortcut />
        </ColumnFlexBoxCenter>
    );
}

export default Login;