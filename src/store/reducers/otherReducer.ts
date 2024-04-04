const initialState = {};

const otherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // handle other actions if needed
    default:
      return state;
  }
};

export default otherReducer;
