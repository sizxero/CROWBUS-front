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

const useGoToSchoolRoutes = () => {
    const [ goToSchoolRoutes, setGoToSchoolRoutes] = useState(null);
    useEffect(() => {
        const fetchGoToSchoolRoutes = async() => {
            setGoToSchoolRoutes(await RouteAPI.findGoToSchoolRoutes());
        }
        fetchGoToSchoolRoutes();
    }, []);
    return { goToSchoolRoutes };
}

const useGoToHomeRoutes = () => {
    const [ goToHomeRoutes, setGoToHomeRoutes ] = useState(null);
    useEffect(() => {
        const fetchGoToHomeRoutes = async() => {
            setGoToHomeRoutes(await RouteAPI.findGoToHomeRoutes());
        }
        fetchGoToHomeRoutes();
    }, []);
    return { goToHomeRoutes };
}

export { useAllRoutes, usePlaces, useGoToSchoolRoutes, useGoToHomeRoutes }