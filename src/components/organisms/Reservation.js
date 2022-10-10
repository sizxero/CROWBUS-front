import { Select } from '../atoms';
import { useAllRoutes } from '../../hooks';

const RouteSelectBox = (props) => {
    const { routes } = useAllRoutes();
    const processingData = [];
    if(routes !== null)
        routes.map((rt) => processingData.push({name: rt.name+' '+rt.routeType, value: rt.id}))

    return (<><Select 
        eventHandler={props.eventHandler} 
        label="노선" list={processingData} /></>);
}

export { RouteSelectBox }