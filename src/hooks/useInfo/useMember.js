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

const useMemberInfo = () => {
    const [ memberInfo, setMemberInfo ] = useState(null);
    useEffect(() => {
        const fetchMemberInfo = async() => {
            setMemberInfo(await MemberAPI.findMemberInfo());
        }
        fetchMemberInfo();    
    }, []);
    return { memberInfo }
}

export { useMemberName, useMemberId, useMemberInfo }