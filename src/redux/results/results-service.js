import BaseHttpService from '../../shared/service/base-http-service';

class ResultsService extends BaseHttpService {
  async result(body) {
    try {
      const { data } = await this.post('tests/result', body);
      return data;
    } catch (error) {}
  }
}

export default ResultsService;
