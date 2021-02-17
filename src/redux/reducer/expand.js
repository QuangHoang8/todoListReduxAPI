import { actionTypes } from "../actionTypes";

export const expandNotCompleteReducer = (
  state = { isExpand: true },
  action
) => {
  switch (action.type) {
    case actionTypes.IS_EXPAND_NOT_COMPLETE: {
      return {
        ...state,
        isExpand: action.payload.expandStatus,
      };
    }
    default:
      return state;
  }
};

export const expandCompleteReducer = (state = { isExpand: true }, action) => {
  switch (action.type) {
    case actionTypes.IS_EXPAND_COMPLETE: {
      return {
        ...state,
        isExpand: action.payload.expandStatus,
      };
    }
    default:
      return state;
  }
};
