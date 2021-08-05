import BaseHttpService from '../../shared/service/base-http-service';

class TestsService extends BaseHttpService {
  async getTests(type) {
    try {
      const { data } = await this.get(`tests/all/${type}`);
      return data;
    } catch (error) {}
  }
}

export default TestsService;
