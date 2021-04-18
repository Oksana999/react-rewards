import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/api/payments/get-all';

class TransactionService {
    getTransactions(){
        return axios.get(USERS_REST_API_URL);
    }
}
export default new TransactionService();