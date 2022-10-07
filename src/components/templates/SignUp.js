import { ContainedButton } from  '../atoms';
import { ColumnFlexBox } from "../molecules";
import { HeadingWithoutLink, SignUpInputTable } from "../organisms";

import { useSelector } from 'react-redux';
import * as SignUpAction  from '../../redux/actions/SignUpAction';
import MemberAPI from '../../hooks/api/MemberAPI';

const commonInfo = [
    { name: "아이디", type: "text", btn: true },
    { name: "비밀번호", type: "password", btn: false },
    { name: "비밀번호 재입력", type: "password", btn: true },
    { name: "이름", type: "text", btn: false },
    { name: "휴대폰", type: "text", btn: false, placeholder: "XXX-XXXX-XXXX" },
];
const passengerInfo = [...commonInfo, {name: "선호노선", type: "select", btn: false }]
const driverInfo = [...commonInfo, {name: "면허번호", type: "text", btn: false, placeholder: "XX-XX-XXXXXX-XX"}]

const commonActFunc = [
    SignUpAction.writeIdSignUp, SignUpAction.writePwSignUp, SignUpAction.writePwReSignUp, 
    SignUpAction.writeNameSignUp, SignUpAction.writePhoneSignUp
];
const passengerActFunc = [...commonActFunc, SignUpAction.selectRouteSignUp];
const driveActFunc = [...commonActFunc, SignUpAction.writeLicenseSignUp]

const SignUpInput = (props) => {
    const signUpState = useSelector((state) => state.signUpReducer);
    const clickSignUpPassengerBtn = async() => {
        const res = await MemberAPI.signupPassenger(signUpState);
        if(res === 200) {
            alert('회원가입이 정상적으로 완료되었습니다.');
            window.location.href = '/login';
        } else {
            alert('회원가입에 실패했습니다.');
        }
    }

    const clickSignUpDriverBtn = async() => {
        const res = await MemberAPI.signupDriver(signUpState);
        if(res === 200) {
            alert('회원가입이 정상적으로 완료되었습니다.');
            window.location.href = '/login';
        } else {
            alert('회원가입에 실패했습니다.');
        }
    }
    return (
        <ColumnFlexBox className="SignUpInputWrapper">
            { props.type==='passenger'
            ? <>
            <HeadingWithoutLink className="HeadingIndexBlue" content='탑승객 정보입력'/>
            <SignUpInputTable list={passengerInfo} events={passengerActFunc}/>
            <ContainedButton
            className="containedBtnBlue"
            content="회원가입"
            eventHandler={clickSignUpPassengerBtn} />
            </>
            : <>
            <HeadingWithoutLink className="HeadingIndexYellow" content='운전기사 정보입력'/>
            <SignUpInputTable list={driverInfo} events={driveActFunc}/>
            <ContainedButton
            className="containedBtnYellow"
            content="회원가입"
            eventHandler={clickSignUpDriverBtn} />
            </> }
        </ColumnFlexBox>
    );
}

export { SignUpInput }