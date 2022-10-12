import DriveAPI from './api/DriveAPI';
import { useEffect, useState } from 'react';

const useDrives = (date) => {
    if (date === null || date === undefined || date === '')
        date='';
    const [ drives, setDrives ] = useState('');
    useEffect(() => {
        const fetchDrives = async() =>{
            setDrives(await DriveAPI.findByDate(date));
        }
        fetchDrives();
    }, []);
    return { drives };
}

export { useDrives }