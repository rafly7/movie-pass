import LK21Repository from "../../repository/lk21"
import LK21TypeAction from "./lk21_type_action"

export function getPopular() {
  return async (dispatch, state) => {
    const controller = new AbortController()
    try {
      const lk21 = new LK21Repository()
      dispatch({
        type: LK21TypeAction.GetPopular
      })
      const result = await lk21.getPopular(controller)
      // console.log(result)
      dispatch({
        data: result.data,
        type: LK21TypeAction.GetPopularSuccess
      })
    } catch (e) {
      console.log(e)
      dispatch({
        type: LK21TypeAction.GetPopularFailed,
        err: e.message
      })
    } finally {
      if (state.loading !== undefined && state.loading === false) {
        controller.abort()
      }
    }
  }
}

export function getLatest(page) {
  return async (dispatch, state) => {
    const controller = new AbortController()
    try {
      const lk21 = new LK21Repository()
      dispatch({
        type: LK21TypeAction.GetLatest
      })
      const result = await lk21.getLatest(controller, page)
      // console.log(result)
      dispatch({
        data: result.data,
        type: LK21TypeAction.GetLatestSuccess
      })
    } catch (e) {
      console.log(e)
      dispatch({
        type: LK21TypeAction.GetLatestFailed,
        err: e.message
      })
    } finally {
      if (state.loading !== undefined && state.loading === false) {
        controller.abort()
      }
    }
  }
}

export function getSearchByTitle(title) {
  return async (dispatch, state) => {
    const controller = new AbortController()
    try {
      const lk21 = new LK21Repository()
      dispatch({
        type: LK21TypeAction.GetSearchByTitle
      })
      const result = await lk21.getSearchByTitle(controller, title)
      // console.log(result)
      dispatch({
        data: result.data,
        type: LK21TypeAction.GetSearchByTitleSuccess
      })
    } catch (e) {
      console.log(e)
      dispatch({
        type: LK21TypeAction.GetSearchByTitleFailed,
        err: e.message
      })
    } finally {
      if (state.loading !== undefined && state.loading === false) {
        controller.abort()
      }
    }
  }
}

export function getLinkDownload(name) {
  return async (dispatch, state) => {
    const controller = new AbortController()
    try {
      const lk21 = new LK21Repository()
      dispatch({
        type: LK21TypeAction.GetLinkDownload
      })
      const result = await lk21.getLinkDownload(controller, name)
      // console.log(result)
      dispatch({
        data: result.data,
        type: LK21TypeAction.GetLinkDownloadSuccess
      })
    } catch (e) {
      console.log(e)
      dispatch({
        type: LK21TypeAction.GetLinkDownloadFailed,
        err: e.message
      })
    } finally {
      if (state.loading !== undefined && state.loading === false) {
        controller.abort()
      }
    }
  }
}