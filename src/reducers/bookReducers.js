import { handleActions } from "redux-actions";

export const Types = {
  GET_ALL_BOOKS: "GET_ALL_BOOKS",
};

const devActions = {
  getAllBooksActionCreator: (books) => ({
    type: Types.GET_ALL_BOOKS,
    books,
  }),
  reducer: handleActions(
    {
      [Types.GET_ALL_BOOKS]: (state, action) => ({
        ...state,
        books: action.books,
      }),
    },
    {
      //initial state
      books: []
    }
  ),
};

export default devActions;