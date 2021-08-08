import BaseHttpService from '../../shared/service/base-http-service';

class TestsService extends BaseHttpService {
  async getTests(type) {
    try {
      const { data } = await this.get(`tests/${type}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default TestsService;
