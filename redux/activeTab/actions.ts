import type ActiveTabInterface from './index';

export const setActiveTab = (tab: ActiveTabInterface) => ({
  type: 'SET_ACTIVE_TAB',
  payload: tab,
});

const allActions = {
  setActiveTab,
};

export default allActions;
