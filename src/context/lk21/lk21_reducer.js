import LK21TypeAction from "./lk21_type_action"

export const initialState = {
  data: null,
  err: null,
  loading: false,
  type: null
}

export function lk21Reducer(state = initialState, action) {
  const { type, err, data } = action
  if (process.env.REACT_APP_NODE_ENV !== 'production') {
    console.log(type)
  }
  switch (type) {
    case LK21TypeAction.GetPopular:
    case LK21TypeAction.GetLatest:
    case LK21TypeAction.GetSearchByTitle:
    case LK21TypeAction.GetLinkDownload:
      return {
        ...state,
        data: null,
        err: null,
        loading: true,
        type: type
      }
    case LK21TypeAction.GetPopularSuccess:
    case LK21TypeAction.GetLatestSuccess:
    case LK21TypeAction.GetSearchByTitleSuccess:
    case LK21TypeAction.GetLinkDownloadSuccess:
      return {
        ...state,
        data: data,
        err: null,
        loading: false,
        type: type
      }
    case LK21TypeAction.GetPopularFailed:
    case LK21TypeAction.GetLatestFailed:
      case LK21TypeAction.GetSearchByTitleFailed:
    case LK21TypeAction.GetLinkDownloadFailed:
      return {
        ...state,
        data: null,
        err: err,
        loading: false,
        type: type
      }
    default: {
      return state
      // throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
