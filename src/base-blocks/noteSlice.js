import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  filter: "all",
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: {
      prepare(newNote) {
        return {
          payload: {
            content: newNote,
            completedNote: false,
            id: Math.random().toString(),
          },
        };
      },
      reducer(state, action) {
        state.notes = [action.payload, ...state.notes];
        localStorage.setItem("notes", JSON.stringify(state.notes));
      },
    },
  },
});

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;
