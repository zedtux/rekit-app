import initialState from './initialState';
import { reducer as openProjectReducer } from './openProject';
import { reducer as createProjectReducer } from './createProject';
import { reducer as closeProjectReducer } from './closeProject';
import { reducer as getInitialStateReducer } from './getInitialState';
import { reducer as getMainStateReducer } from './getMainState';
import { reducer as showNewProjectDialogReducer } from './showNewProjectDialog';
import { reducer as hideNewProjectDialogReducer } from './hideNewProjectDialog';

const reducers = [
  openProjectReducer,
  createProjectReducer,
  closeProjectReducer,
  getInitialStateReducer,
  getMainStateReducer,
  showNewProjectDialogReducer,
  hideNewProjectDialogReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
