const GetPopular = 'GET_POPULAR'
const GetPopularSuccess = `${GetPopular}_SUCCESS`
const GetPopularFailed = `${GetPopular}_FAILED`

const GetLatest = 'GET_LATEST'
const GetLatestSuccess = `${GetLatest}_SUCCESS`
const GetLatestFailed = `${GetLatest}_FAILED`

const GetSearchByTitle = 'GET_SEARCH'
const GetSearchByTitleSuccess = `${GetSearchByTitle}_SUCCESS`
const GetSearchByTitleFailed = `${GetSearchByTitle}_SUCCESS`

const GetLinkDownload = 'GET_LINK_DOWNLOAD'
const GetLinkDownloadSuccess = `${GetLinkDownload}_SUCCESS`
const GetLinkDownloadFailed = `${GetLinkDownload}_FAILED`

class LK21TypeAction {
  static get GetPopular() {
    return GetPopular
  }

  static get GetPopularSuccess() {
    return GetPopularSuccess
  }

  static get GetPopularFailed() {
    return GetPopularFailed
  }

  static get GetLatest() {
    return GetLatest
  }

  static get GetLatestSuccess() {
    return GetLatestSuccess
  }

  static get GetLatestFailed() {
    return GetLatestFailed
  }

  static get GetSearchByTitle() {
    return GetSearchByTitle
  }

  static get GetSearchByTitleSuccess() {
    return GetSearchByTitleSuccess
  }

  static get GetSearchByTitleFailed() {
    return GetSearchByTitleFailed
  }

  static get GetLinkDownload() {
    return GetLinkDownload
  }

  static get GetLinkDownloadSuccess() {
    return GetLinkDownloadSuccess
  }

  static get GetLinkDownloadFailed() {
    return GetLinkDownloadFailed
  }
}

export default LK21TypeAction