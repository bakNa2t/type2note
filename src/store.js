import { configureStore } from "@reduxjs/toolkit";

import noteReducer from "./base-blocks/noteSlice";

const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default store;
