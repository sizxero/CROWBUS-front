import { Link } from 'react-router-dom';
import { RowFlexBoxCenter } from '../molecules';

const LoginShortcut = () => {
    return (<RowFlexBoxCenter className="LoginShortcut">
    <Link to="">ID/PW 찾기</Link> | 
    <Link to="/signup-step1">회원가입</Link>
    </RowFlexBoxCenter>);
}

export { LoginShortcut };