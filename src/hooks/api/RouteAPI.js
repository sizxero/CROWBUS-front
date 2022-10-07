import { defaultInstance, authInstance } from './AxiosInstance';

const API = {
    findAllRoutes: async() => {
        const res = await defaultInstance.get(`/route`);
        return res.data.data;
    },
};

export default API;