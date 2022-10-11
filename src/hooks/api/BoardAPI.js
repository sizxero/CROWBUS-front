import { authInstance } from './AxiosInstance';

const API = {
    postCreate: async(data) => {
        const processingData = {
            boardType: data.boardType,
            contents: data.contents,
            routeId: Number(data.routeType),
            title: data.title,
        };
        const res = await authInstance.post(`/posting`, processingData);
        return res.status;
    },
    postDetail: async(pid) => {
        const res = await authInstance.get(`/posting/${pid}`);
        return res.data.data[0];
    }
}

export default API;