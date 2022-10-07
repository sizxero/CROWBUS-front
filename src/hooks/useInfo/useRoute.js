import RouteAPI from '../api/RouteAPI';
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

export { useAllRoutes }