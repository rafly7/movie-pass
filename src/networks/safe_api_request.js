import Axios from 'axios'
import { AuthorizationError, HttpError, ConnectionError } from './error';

/**
 * Abstract class
 */
export class SafeApiRequest {
  constructor() {
    if (new.target === SafeApiRequest) {
      throw new TypeError("Cannot construct SafeApiRequest instances directly");
    }
  }

  moviePass() {
    const instance = Axios.create({
      // baseURL: 'http://202.157.187.199',
      baseURL: 'http://3a1c-2001-448a-2022-eb60-55ef-5cc3-ad14-3b68.ngrok.io',
      timeout: 90000,
      responseType: 'json',
      timeoutErrorMessage: 'Network failed timeout',
    })
    return instance
  }

  async apiRequestFull(result) {
    try {
      const res = await result
      return res
    } catch (e) {
      if (e.response) {
        const data = checkStatusCode(e)

        if (typeof e.response.data === 'string' && e.response.data.includes('<html>')) {
          throw new ConnectionError(`Failed with status code ${e.response.status}`)
        } else if (typeof data === 'object' && data.error !== undefined) {
          throw new HttpError(data.error)
        } else if (typeof data === 'object' && data.message !== undefined) {
          throw new ConnectionError(data.message)
        } else if (Object.entries(data).length === 0) {
          throw new ConnectionError(`${e.message} with status code ${e.response.status}`)
        }

      } else if (e.request) {
        throw new ConnectionError('Something went wrong')
      } else {
        throw new ConnectionError('Failed')
      }
    }
  }

  async apiRequest(result, getHeader = false) {
    try {
      const res = await result
      return getHeader ? res.headers : res.data
    } catch (e) {
      if (e.response) {
        const data = checkStatusCode(e)

        if (typeof e.response.data === 'string' && e.response.data.includes('<html>')) {
          throw new ConnectionError(`Failed with status code ${e.response.status}`)
        } else if (typeof data === 'object' && data.error !== undefined) {
          throw new HttpError(data.error)
        } else if (typeof data === 'object' && data.message !== undefined) {
          throw new ConnectionError(data.message)
        } else if (Object.entries(data).length === 0) {
          throw new ConnectionError(`${e.message} with status code ${e.response.status}`)
        }

      } else if (e.request) {
        throw new ConnectionError('Something went wrong')
      } else {
        throw new ConnectionError('Failed')
      }
    }
  }

}

function checkStatusCode(e, getHeader = false) {
  const data = e.response.data

  switch (e.response.status) {
    case 400:
      return data
    case 404:
      return data
    case 500:
      return data
    case 401:
      if (data) {
        return data
      }
      throw new AuthorizationError(`Unauthorized`)
    default:
      return null
  }
}