import { SafeApiRequest } from '../networks/safe_api_request'

class LK21Repository extends SafeApiRequest {
  constructor() {
    super()
    if (LK21Repository._instance) {
      return LK21Repository._instance
    }
    LK21Repository._instance = this;
    const _prefixUrl = '/api/v1/lk21'
    this.getPrefixUrl = function() {
      return _prefixUrl
    }
  }

  async getLatest(controller, page) {
    return this.apiRequestFull(this.moviePass().get(`${this.getPrefixUrl()}/latest?page=${page}`, {
      signal: controller.signal
    }))
  }

  async getSearchByTitle(controller, title) {
    return this.apiRequestFull(this.moviePass().get(`${this.getPrefixUrl()}/search?title=${title}`, {
      signal: controller.signal
    }))
  }

  async getPopular(controller) {
    return this.apiRequestFull(this.moviePass().get(`${this.getPrefixUrl()}/popular`, {
      signal: controller.signal
    }))
  }

  async getLinkDownload(controller, name) {
    return this.apiRequestFull(this.moviePass().get(`${this.getPrefixUrl()}/list-download?name=${name}`, {
      signal: controller.signal
    }))
  }
}

export default LK21Repository