const UPDATE_COUNT = "UPDATE_COUNT"; // 加

/**
 * @description 更新值
 * @param {Number} num 数值
 */
const updateCount = num => ({
  type: UPDATE_COUNT,
  payload: num
});

export const updateCountFunc = num => {
  return dispatch => {
    dispatch(updateCount(num));
  };
};

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [UPDATE_COUNT]: (state, { payload }) => {
    // 更新 num
    return state.merge({
      num: payload
    });
  }
};
