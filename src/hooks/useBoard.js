import BoardAPI from './api/BoardAPI';
import { useEffect, useState } from 'react';

const usePosting = (pid) => {
    const [ posting, setPosting ] = useState('');
    useEffect(() => {
        const fetchPosting = async() =>{
            setPosting(await BoardAPI.postDetail(pid));
        }
        fetchPosting();
    }, []);
    return { posting };
}

export { usePosting }