import { createReducer } from "redux-immutablejs";
import { ACTION_HANDLERS } from "../actions/counter";
import initState from "../store/initStore";

export default createReducer(initState.counter, ACTION_HANDLERS);
// import { fromJS } from "immutable";
// import { ADD, MINUS } from "../constants/counter";

// export default createReducer(
//   fromJS({
//     num: 0
//   }),
//   {
//     [ADD]: state => {
//       const counterState = state.toJS();
//       return state.merge({
//         num: counterState.num + 1
//       });
//     },
//     [MINUS]: state => {
//       const counterState = state.toJS();
//       return state.merge({
//         num: counterState.num - 1
//       });
//     }
//   }
// );
