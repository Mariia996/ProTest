import BaseHttpService from '../../shared/service/base-http-service';

class ResultsService extends BaseHttpService {
  async result() {
    try {
      const { data } = await this.get('tests/result');
      return data;
    } catch (error) {}
  }
}

export default ResultsService;
