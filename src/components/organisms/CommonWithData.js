import { Select } from '../atoms';
import { useAllRoutes, useDrives, usePlaces } from '../../hooks';
import { useEffect, useState } from 'react';

import { reservationReducer } from '../../redux/reducers';
import * as ReservationAction from '../../redux/actions/ReservationAction';
import { useDispatch, useSelector } from 'react-redux';

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

const RsvSelectBox = (props) => {
    const date = props.date.format('YYYY-MM-DD');
    
    const RsvRouteSelectBox = () => {
        const { drives } = useDrives(date);
        const [ rid, setRid ] = useState(0);
        

        const processingData = [];
        if(drives !== null && drives !== '' && drives !== undefined) {
            drives.map((dv) => processingData.push({name: dv.route.name+' '+dv.route.routeType, value: dv.route.id}))
        }
    
        const routeOnChange = (e) => {
            setRid(Number(e.target.value));
        }
        
        useEffect(() => {
            
        }, [rid]);          
        
        const PlaceSelectBox = (props) => {
            const dispatch = useDispatch();

            const { places } = usePlaces(props.rid);
            const processingData2 = [];
            if(places !== null && places !== '' && places !== undefined) {
                places.map((pc) => processingData2.push({name: pc.place, value: pc.timetableId}))
            }

            const placeOnChange = (e) => {
                dispatch(ReservationAction.selectRoute(props.rid));
                dispatch(ReservationAction.selectPlace(e.target.value));
            }

            return (
                <>
                <Select 
                defaultValue=""
                className={props.className}
                eventHandler={placeOnChange} 
                label="장소" list={processingData2} />
                </>
            );
        }

        return (<><Select 
            className={props.className}
            eventHandler={routeOnChange} 
            label="운행 노선" list={processingData} />
            <PlaceSelectBox rid={rid}/></>);
    }


    return (<>
        <RsvRouteSelectBox />
        </>);
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

export { RouteSelectBox, BoardSelectBox, RsvSelectBox }