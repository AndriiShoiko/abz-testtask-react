import axios from "axios";

const getRequestAdress = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

export default class APIConnector {

    static async getParticipantsFirstPage() {
        const response = await axios.get(getRequestAdress, {
            params: {
                page: '1',
                count: '6'
            }
        });
        return response;
    }

    static async getParticipantsNextPage(page) {

        const response = await axios.get(page);
        return response;
    }
}