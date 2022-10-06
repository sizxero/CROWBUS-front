import { H1, H2, H3, H4, Select, TextArea, PasswordInput, Date, Input, ContainedButtonSmall, ContainedButton, P, Span, LeftButton, RightButton, SearchButton } from "../../components/atoms"
import { RowFlexBox, ColumnFlexBox, ColumnFlexBoxCenter } from  "../../components/molecules"
import { TopLogo, MainLogo, DriverLogo } from "../../components/organisms";
const Home = () => {
    const list = [
        {name: 'Ten', value: 10},
        {name: 'Twenty', value: 20},
        {name: 'Thirty', value: 30},
    ]

    return (
        <>
        <TopLogo />
        <DriverLogo /><MainLogo />
        <ColumnFlexBoxCenter>
        <H1>h1 tag</H1>
        <H2>h2 tag</H2>
        <H3>h3 tag</H3>
        <H4>h4 tag</H4>
        <P>p tag</P>
        <Span>span tag</Span>
        <Select 
        label={"test"} 
        list={list} 
        eventHandler={(e)=>console.log(e.target.value)}/>
        <TextArea placeholder="내용"/><PasswordInput placeholder="비밀번호"/><RowFlexBox><LeftButton /><Date /><RightButton /></RowFlexBox>
        <RowFlexBox><Input /><SearchButton /></RowFlexBox>
        <ContainedButtonSmall color="primary" title="primary"/>
        <ContainedButton color="primary" title="primary"/>
        <ContainedButtonSmall color="secondary" title="secondary"/>
        <ContainedButton color="secondary" title="secondary"/>
        <ContainedButtonSmall title="error"/>
        <ContainedButton title="error"/>
        </ColumnFlexBoxCenter>
        </>
    );
}

export default Home;