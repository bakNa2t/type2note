import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Button from "./Button";

import {
  filterActive,
  filterAll,
  filterCompleted,
} from "../base-blocks/noteSlice";

const StyledNoteFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const FilterActive = styled.p`
  color: var(--color-blue);
`;

function NoteFilter() {
  const dispatch = useDispatch();
  const toFiltered = useSelector((state) => state.note.filter);

  function handleFilterAll() {
    dispatch(filterAll());
  }

  function handleFilterActive() {
    dispatch(filterActive());
  }

  function handleFilterCompleted() {
    dispatch(filterCompleted());
  }

  return (
    <StyledNoteFilter>
      <Button size="xs" onClick={handleFilterAll}>
        {toFiltered === "all" ? <FilterActive>All</FilterActive> : "All"}
      </Button>
      <Button size="xs" onClick={handleFilterActive}>
        {toFiltered === "active" ? (
          <FilterActive>Active</FilterActive>
        ) : (
          "Active"
        )}
      </Button>
      <Button size="xs" onClick={handleFilterCompleted}>
        {toFiltered === "completed" ? (
          <FilterActive>Completed</FilterActive>
        ) : (
          "Completed"
        )}
      </Button>
    </StyledNoteFilter>
  );
}

export default NoteFilter;
