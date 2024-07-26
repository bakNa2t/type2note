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
            completed: false,
            id: Math.random().toString(),
          },
        };
      },
      reducer(state, action) {
        state.notes = [action.payload, ...state.notes];
        localStorage.setItem("notes", JSON.stringify(state.notes));
      },
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    crossNote(state, action) {
      const currentNote = state.notes.find(
        (note) => note.id === action.payload
      );
      currentNote.completed = !currentNote.completed;
      localStorage.setItem("notes", JSON.stringify(state.notes));
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
      return notes.filter((note) => !note.completed);
    case "completed":
      return notes.filter((note) => note.completed);
    default:
      return notes;
  }
}

export const {
  addNote,
  deleteNote,
  crossNote,
  filterAll,
  filterActive,
  filterCompleted,
} = noteSlice.actions;

export default noteSlice.reducer;
