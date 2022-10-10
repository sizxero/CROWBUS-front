import saveToken, { authInstance, defaultInstance } from './AxiosInstance';
import { getCookie } from './Cookie';

const API = {
    login: async(data) => {
        let processingData = {
            loginId: data.id,
            pw: data.pw
        }
        const res = await defaultInstance.post(`/login`, processingData);
        saveToken(res);
        return res;
    },
    isExistId: async(data) => {
        const res = await defaultInstance.get(`/member/id/${data}`);
        return res.data;
    },
    signupPassenger: async (data) => {
        let processingData = {
            favoriteRouteId: Number(data.route),
            loginId: data.id,
            name: data.name,
            phone: data.phone,
            pw: data.pwre
        }
        try {
            const res = await defaultInstance.post(`/signup/passenger`, processingData);
            return res.status;
        } catch(e) {
            console.log(e);
        }
    },
    signupDriver: async (data) => {
        let processingData = {
            driverLicenseNo: data.license,
            loginId: data.id,
            name: data.name,
            phone: data.phone,
            pw: data.pwre
        }
        try {
            const res = await defaultInstance.post(`/signup/busdriver`, processingData);
            return res.status;
        } catch(e) {
            console.log(e);
        }
    },
    findNameByLoginId: async() => {
        const res = await authInstance.get(`/member/name`);
        return res.data;
    },
    findMemberInfo: async() => {
        const res = await authInstance.get(`/member`);
        return res.data.data[0];
    } 
};

export default API;