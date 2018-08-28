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
  SET_UNFOLLOW,
  SET_FOLLOWED_SUCCESS,
  SET_FOLLOWED_ERROR,
  DEL_FOLLOW,
} from './constants';

export const initialState = fromJS({
  type: false,
  loading: false,
  error: false,
  contents: false,
});

function clone(obj) {
  if (obj === null || typeof(obj) !== 'object')
  return obj;

  var copy = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = clone(obj[attr]);
    }
  }
  return copy;
}

function actionListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('contents', false);
    case LOAD_LIST_SUCCESS:
      return (
        state
          .set('loading', false)
          // .set('userid', action.userid)
          // .setIn(['list', 'contents'], Object.values(action.list));
          // .setIn(['list', 'contents'], action.list)
          .set('contents', action.list)
      );
    case LOAD_LIST_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SET_FOLLOWED_SUCCESS:
      const listContents = clone(state.get('contents'));
      let listContent = listContents.content;
      listContent.map((item,idx,ListContents) => {
        if(item.id === action.data) {
          listContents.content[idx].followStatus = action.fType;
        }
      });
      return state.set('contents', listContents);
    case SET_FOLLOWED_ERROR:
      console.log(state);
      // return (
      //   state
      //     .set('setFollowStatus', true)
      //     .set('followedStatus', false)
      //     .set('followedStatusText', '팔로우 실패..')
      //   );
      return state;
    case SET_FOLLOW:
      return state;
    case SET_UNFOLLOW:
      return state;
    default:
      return state;
  }
}

export default actionListContainerReducer;
