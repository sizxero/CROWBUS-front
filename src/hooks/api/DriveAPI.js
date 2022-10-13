import { authInstance, defaultInstance } from './AxiosInstance';

const API = {
    findByDate: async(date) => {
        const res = await defaultInstance.get(`/drive?date=${date}`);
        return res.data.data;
    },
    findSeats: async(date, rid) => {
        const res = await defaultInstance.get(`/drive/find?date=${date}&rid=${rid}`);
        const res2 = await defaultInstance.get( `/seat?date=${date}&dvid=${res.data}`);
        return res2.data.data;
    },
    reservation: async(data) => {
        const processingData = {
            seatId: data.seat,
            placeId: data.place
        }
        const res = await authInstance.post(`/reservation`, processingData);
        return res.status;
    }
}

export default API;