import RouteAPI from './api/RouteAPI';
import { useEffect, useState } from 'react';

const useAllRoutes = () => {
    const [ routes, setRoutes ] = useState(null);
    useEffect(() => {
        const fetchRoutes = async() =>{
            setRoutes(await RouteAPI.findAllRoutes());
        }
        fetchRoutes();
    }, []);
    return { routes };
}

const usePlaces = (rid) => {
    const [ places, setPlaces ] = useState(null);
    useEffect(() => {
        const fetchPlaces = async() => {
            setPlaces(await RouteAPI.findTimetable(rid));
        }
        fetchPlaces();
    }, []);
    return { places };
}

export { useAllRoutes, usePlaces }