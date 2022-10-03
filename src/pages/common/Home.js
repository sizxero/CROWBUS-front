import { H1, H2, H3, H4, Select, TextArea, PasswordInput, Date, Input, ContainedButtonSmall, ContainedButton, P, Span, LeftButton, RightButton, SearchButton } from "../../components/atoms"

const Home = () => {
    const list = [
        {name: 'Ten', value: 10},
        {name: 'Twenty', value: 20},
        {name: 'Thirty', value: 30},
    ]

    return (
        <>
        <H1 content="다람쥐 헌 쳇바퀴에 타고파"/>
        <H2 content="다람쥐 헌 쳇바퀴에 타고파"/>
        <H3 content="다람쥐 헌 쳇바퀴에 타고파"/>
        <H4 content="다람쥐 헌 쳇바퀴에 타고파"/>
        <P content="다람쥐 헌 쳇바퀴에 타고파" /> <P content="ptag" /> 
        <Span id="span" className="span" content="다람쥐 헌 쳇바퀴에 타고파" /> <Span content="spantag" />
        <Select 
        label={"test"} 
        list={list} 
        eventHandler={(e)=>console.log(e.target.value)}/>
        <TextArea placeholder="내용"/><PasswordInput placeholder="비밀번호"/><LeftButton /><Date /><RightButton /><Input placeholder="아이디"/><SearchButton />
        <ContainedButtonSmall color="primary" title="primary"/>
        <ContainedButton color="primary" title="primary"/>
        <ContainedButtonSmall color="secondary" title="secondary"/>
        <ContainedButton color="secondary" title="secondary"/>
        <ContainedButtonSmall title="error"/>
        <ContainedButton title="error"/>
        </>
    );
}

export default Home;