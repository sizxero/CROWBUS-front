import MemberAPI from '../api/MemberAPI';
import { useEffect, useState } from 'react';

const useMemberName = () => {
    const [ name, setName ] = useState('');
    useEffect(() => {
        const fetchName = async() =>{
            setName(await MemberAPI.findNameByLoginId());
        }
        fetchName();
    }, []);
    return { name };
}

const useMemberId = (loginId) => {
    const [ flag, setFlag ] = useState(true);
    useEffect(() => {
        const fetchFlag = async() => {
            setFlag(await MemberAPI.isExistId(loginId));
        }
        fetchFlag();
    }, []);
    return { flag }
}

export { useMemberName, useMemberId }