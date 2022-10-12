import { defaultInstance } from './AxiosInstance';

const API = {
    findByDate: async(date) => {
        const res = await defaultInstance.get(`/drive?date=${date}`);
        return res.data.data;
    },
}

export default API;