import { Input, PasswordInput } from '../atoms';
import { ColumnFlexBoxCenter } from '../molecules';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as LoginAction  from '../../redux/actions/LoginAction';

const LoginInput = () => {
    const dispatch = useDispatch();
    const LoginState = useSelector((state) => state.loginReducer);
    
    useEffect(() => {});
    return(
        <ColumnFlexBoxCenter className="LoginInput">
        <Input 
        placeholder="아이디" 
        eventHandler={(e) => dispatch(LoginAction.writeIdLogin(e.target.value))} />
        <PasswordInput
         placeholder="비밀번호" 
        eventHandler={(e) => dispatch(LoginAction.writePwLogin(e.target.value))}/>
    </ColumnFlexBoxCenter>
    );
}

export { LoginInput };