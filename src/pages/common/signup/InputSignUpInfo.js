import queryString from 'query-string';
import { ColumnFlexBox } from  "../../../components/molecules";
import { TopLogo } from "../../../components/organisms";
import { SignUpInput } from "../../../components/templates";

const SignUpStep2 = () => {
    const type = queryString.parse(window.location.search).type;
    return (
        <ColumnFlexBox className="SignUpFormContainer">
            <TopLogo />
            { type === 'p' 
            ? <><SignUpInput type="passenger"/></> 
            : <><SignUpInput type="driver"/></> }
        </ColumnFlexBox>
    );
}

export default SignUpStep2;