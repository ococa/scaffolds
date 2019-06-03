import { actionTypes } from 'src/container/action';

const initialState = {
  data: 'HOME',
  num: 0
}

export default (state = initialState, action) => {
  console.log('action coming', action);
  switch (action.type) {
    case actionTypes.ADD_TEST:
      console.log('action coming case1', action);
      return {
        ...state,
        num: action.num + 1
      }
    default:
      return state;
  }

}

