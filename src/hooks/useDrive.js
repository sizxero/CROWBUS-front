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

const useDriveId = (date, rid) => {
    if (date === null || date === undefined || date === '')
        date='';
    const [ driveId, setDriveId ] = useState('');
    useEffect(() => {
        const fetchDriveId = async() => {
            setDriveId(await DriveAPI.findDriveIdWithDateAndRid(date, rid));
        }
        fetchDriveId();
    }, []);
    return driveId;
}

const useSeats = (date, dvid) => {
    if (date === null || date === undefined || date === '')
        date='';
    const [ seats, setSeats ] = useState([]);
    useEffect(() => {
        const fetchSeats = async() => {
            setSeats(await DriveAPI.findSeats(date, dvid));
        }
        fetchSeats();
    }, []);
    return { seats };
}

const useCurrDrives = (date) => {
    if (date === null || date === undefined || date === '')
        date='';
    const [ currDrives, setCurrDrives ] = useState([]);
    useEffect(() => {
        const fetchCurrDrives = async() => {
            setCurrDrives(await DriveAPI.findCurrDrive(date));
        }
        fetchCurrDrives();
    }, []);
    return { currDrives, setCurrDrives };
}

export { useDrives, useDriveId, useSeats, useCurrDrives }