import axios from 'axios'

export const getRequest = async (endpoint) => {
    let response = await axios
            .get(endpoint)
            .catch((error) => {
                return ("getRequest Axios error: " + error.response);
            });

    return response;
};