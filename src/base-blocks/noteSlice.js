import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  //   filter: "all",
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
    filterAll(state) {
      state.filter = "all";
    },
    filterActive(state) {
      state.filter = "active";
    },
    filterCompleted(state) {
      state.filter = "completed";
    },
  },
});

export function selectFilteredNotes(state) {
  const { filter, notes } = state.note;

  switch (filter) {
    case "active":
      return notes.filter((note) => !note.completedNote);
    case "completed":
      return notes.filter((note) => note.completedNote);
    default:
      return notes;
  }
}

export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
