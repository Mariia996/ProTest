import BaseHttpService from '../../shared/service/base-http-service';

class TestsService extends BaseHttpService {
    async getTests(body) {
        try {
            const { data } = await this.get('tests/theory', body);
            return data;
        } catch (error) {}
  }
}


export default TestsService;