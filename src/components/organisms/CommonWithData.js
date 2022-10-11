import { Select } from '../atoms';
import { useAllRoutes } from '../../hooks';

const RouteSelectBox = (props) => {
    const { routes } = useAllRoutes();
    const processingData = [];
    if(routes !== null)
        routes.map((rt) => processingData.push({name: rt.name+' '+rt.routeType, value: rt.id}))

    return (<><Select 
        className={props.className}
        eventHandler={props.eventHandler} 
        label="노선" list={processingData} /></>);
}

const BoardSelectBox = (props) => {
    const boardlist = [
        {name: '공지사항', value: '공지사항'},
        {name: '분실물 게시판', value: '분실물게시판'},
    ];
    
    return (<><Select 
        className={props.className}
        eventHandler={props.eventHandler} 
        label="게시판" list={boardlist} /></>);
}

export { RouteSelectBox, BoardSelectBox }