import { defaultInstance, authInstance } from './AxiosInstance';

const API = {
    findAllRoutes: async() => {
        const res = await defaultInstance.get(`/route`);
        return res.data.data;
    },
    findTimetable: async(rid) => {
        const res = await defaultInstance.get(`/timetable?id=${rid}`)
        return res.data.data;
    }
};

export default API;