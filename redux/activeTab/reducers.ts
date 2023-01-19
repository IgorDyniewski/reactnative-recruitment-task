import { AnyAction, combineReducers } from 'redux';

// Types
import type ActiveTabInterface from './index';

const defaultState: ActiveTabInterface = {
  current: 0,
  previous: 0,
};

export const activeTab = (
  /* eslint-disable-next-line default-param-last */
  state = defaultState,
  action: AnyAction,
) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return action.payload;
      break;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  activeTab,
});

export default rootReducer;
