import { ActionsType } from "./actions";
import { actionsType, ReducerType } from "./types";

const initialState: ReducerType = {
  posts: { a: "string", b: "string" },
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: actionsType
) => {
  switch (action.type) {
    case ActionsType.fetchPostsData:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
