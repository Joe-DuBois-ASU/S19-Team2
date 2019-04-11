import {combineReducers} from 'redux';
import spaceSceneReducer, * as fromSpaceScene from './spaceSceneReducer';

export default combineReducers({
  app: spaceSceneReducer
});

export const selectSimulationTime = (state) => fromSpaceScene.selectSimulationTime(state.app);
export const selectAnimationSpeed = (state) => fromSpaceScene.selectAnimationSpeed(state.app);
export const selectMainObject = (state) => fromSpaceScene.selectMainObject(state.app);
export const selectAllObjects = (state) => fromSpaceScene.selectAllObjects(state.app);