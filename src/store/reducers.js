import * as actionTypes from './actions';

const initialState = {
  theme: 'light',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default reducer;
