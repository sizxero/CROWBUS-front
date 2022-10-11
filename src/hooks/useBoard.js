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

const useSearchPosting = (bt, page) => {
    const [searchPosting, setSearchPosting] = useState('');
    useEffect(() => {
        const fetchPosting = async() => {
            setSearchPosting(await BoardAPI.postSearch(bt, page));
        }
        fetchPosting();
    }, []);
    return { searchPosting };
}

export { usePosting, useSearchPosting }