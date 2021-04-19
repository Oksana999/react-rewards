import axios from 'axios';

const USER_REST_API_URL = 'http://localhost:8080/api/users/all';
const USER_REST_API_REWARDS_URL = 'http://localhost:8080/api/rewards/by-user-id/last-n-days';

class UserService {
    getTransactions(){
        return axios.get(USER_REST_API_URL);
    }
}
export default new UserService();