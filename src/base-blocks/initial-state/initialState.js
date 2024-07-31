const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  editingNotes: {},
  filter: "all",
};

export default initialState;
