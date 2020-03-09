const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "ADD":
      return {...state, memes: [...state.memes, action.payload]};
    case "REMOVE":
      let newArray = [...state.memes];
      const memeIdx = action.payload;
      newArray.splice(memeIdx, 1);
      return {...state, memes: newArray}
    default:
      return state;
  }
}

export default rootReducer;