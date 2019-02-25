import Request from 'axios';
import { CONSTANTS } from '../constants/index';

class DataService {
    static getData(next) {
        Request
            .get(`${CONSTANTS.GET_DATA_URL}`)
            .then(function (response) {
                next({ status: response.status, data: response.data });
            })
            .catch(function (error) {
                next({ status: response.status, data: error });
            });
    }
}

export default DataService;