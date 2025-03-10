import axiosClient from './axiosClient';

const register = async (body) => {
    return await axiosClient.post('/register', body);
};

const signIn = async (body) => {
    return await axiosClient.post('/login', body);
};

const getInfo = async () => {
    return axiosClient.get('/user/info/deee37d6-483f-4c95-995f-de6189f6cfd1');
};

export { register, signIn, getInfo };
