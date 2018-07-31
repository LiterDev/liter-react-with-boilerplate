/*
 *
 * ActionListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_ERROR,
  SET_FOLLOW,
  SET_FOLLOWED_SUCCESS,
  SET_FOLLOWED_ERROR,
  DEL_FOLLOW,
} from './constants';

export const initialState = fromJS({
  type: 'follow',
  loading: false,
  error: false,
  userid: false,
  list: {
    contents: false,
  },
});

function actionListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['list', 'contents'], false);
    case LOAD_LIST_SUCCESS:
      return (
        state
          .set('loading', false)
          .set('userid', action.userid)
          // .setIn(['list', 'contents'], Object.values(action.list));
          .setIn(['list', 'contents'], action.list)
      );
    case LOAD_LIST_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SET_FOLLOWED_SUCCESS:
      return state;
    case SET_FOLLOWED_ERROR:
      console.log(state);
      // return (
      //   state
      //     .set('setFollowStatus', true)
      //     .set('followedStatus', false)
      //     .set('followedStatusText', '팔로우 실패..')
      //   );
      return state;
    case DEL_FOLLOW:
      return state;
    default:
      return state;
  }
}

export default actionListContainerReducer;
