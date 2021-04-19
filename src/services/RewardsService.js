import axios from "axios";


class RewardsService {
    getRewards(id,days){
        return axios.get(`http://localhost:8080/api/rewards/by-user-id/last-n-days?id=${id}&days=${days}`);
    }
}
export default new RewardsService();