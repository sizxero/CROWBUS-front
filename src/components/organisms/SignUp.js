import { Link } from 'react-router-dom';
import { Input, PasswordInput, Select, P, ContainedButton } from '../atoms';
import { ColumnFlexBoxCenter } from '../molecules';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SignUpButtons = () => {
    return (
        <ColumnFlexBoxCenter className="SignUpBtnWrapper">
            <P>당신은 누구십니까?</P>
            <Link className="InputLink" to="/signup-step2?type=p">
                <ContainedButton
                className="containedBtnBlue"
                content="탑승객"/>
            </Link>
            <Link className="InputLink" to="/signup-step2?type=d">
                <ContainedButton
                className="containedBtnYellow"
                content="운전기사" />
            </Link>
            <Link to="/login">이미 계정이 있으십니까?</Link>
        </ColumnFlexBoxCenter>
    );
}

const SignUpInputTable = ({list, events}) => {
    const dispatch = useDispatch();
    const SignUpState = useSelector((state) => state.signUpReducer);
    
    useEffect(() => {console.log(SignUpState)});

    return (<table className="SignUpInputTable">
        {list.map((item, idx) => (
        <tr>
            <th>{item.name}</th>
            { item.type === 'text'
            ? <td className="input"><Input 
            placeholder={item.placeholder !== null && item.placeholder !== undefined ? item.placeholder : item.name }
            eventHandler={(e) => dispatch(events[idx](e.target.value))}/></td>
            : <></>}
            { item.type === 'password'
            ? <td className="input"><PasswordInput 
            placeholder={item.placeholder !== null && item.placeholder !== undefined ? item.placeholder : item.name }
            eventHandler={(e) => dispatch(events[idx](e.target.value))}/></td>
            : <></>}
            { item.type === 'select'
            ? <td className="input"><Select label={item.name} list={[{name: '옥계', value: '1'}]}
            eventHandler={(e) => dispatch(events[idx](e.target.value))}/></td>
            : <></>}
            <td className="opt">{item.btn && item.name==='아이디'
            ? <ContainedButton className="containedBtnGray" content="중복확인"/>
            : <></>}{item.btn && item.name==='비밀번호 재입력'
            ? SignUpState.pwchk ? <>사용가능</> : <>사용불가</> 
            : <></>}</td>
        </tr>
        ))}
    </table>);
}

export { SignUpButtons, SignUpInputTable }