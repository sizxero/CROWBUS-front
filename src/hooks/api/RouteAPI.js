import { defaultInstance } from './AxiosInstance';

const API = {
    findAllRoutes: async() => {
        const res = await defaultInstance.get(`/route`);
        return res.data.data;
    },
    findTimetable: async(rid) => {
        const res = await defaultInstance.get(`/timetable?id=${rid}`)
        return res.data.data;
    },
    findGoToSchoolRoutes: async() => {
        const res = await defaultInstance.get(`/route?type=0`);
        return res.data.data;
    },
    findGoToHomeRoutes: async() => {
        const res = await defaultInstance.get(`/route?type=1`);
        return res.data.data;
    }
};

export default API;