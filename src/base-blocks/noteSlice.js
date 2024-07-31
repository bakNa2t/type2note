import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import initialState from "./initial-state/initialState";

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
        toast.success("Note added");
      },
    },
    editNote(state, action) {
      const noteIndex = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );

      if (noteIndex !== -1) {
        state.notes[noteIndex].content = action.payload.content;

        localStorage.setItem("notes", JSON.stringify(state.notes));
        toast.success("Note edited");
      }

      state.editingNotes = {};
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast.success("Note deleted");
    },
    crossNote(state, action) {
      const currentNote = state.notes.find(
        (note) => note.id === action.payload
      );
      currentNote.completed = !currentNote.completed;
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    clearAllNotes(state) {
      state.notes = [];
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast.success("All notes deleted");
    },
    clearCompletedNotes(state) {
      state.notes = state.notes.filter((note) => !note.completed);
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast.success("All completed notes deleted");
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
  clearAllNotes,
  clearCompletedNotes,
  filterAll,
  filterActive,
  filterCompleted,
} = noteSlice.actions;

export default noteSlice.reducer;
