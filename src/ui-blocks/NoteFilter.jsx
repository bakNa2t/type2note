import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";

import {
  filterActive,
  filterAll,
  filterCompleted,
} from "../base-blocks/noteSlice";

const StyledNoteFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  & button:hover > div {
    display: none;
  }
`;

const FilterActive = styled.p`
  color: var(--color-spring-green-200);
  text-shadow: 0 0 1rem var(--color-spring-green-100);
  font-weight: 500;
`;

const NoteCounter = styled.div`
  position: absolute;
  top: 0;
  right: -1.2rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 0.45rem;
  border: 1px solid var(--color-spring-green-200);
  border-radius: 50%;
  filter: drop-shadow(0 0 0.1rem var(--color-spring-green-400));
  color: var(--color-spring-green-200);
  background-color: transparent;
`;

function NoteFilter({ activeNotes, completedNotes }) {
  NoteFilter.propTypes = {
    activeNotes: PropTypes.number,
    completedNotes: PropTypes.number,
  };

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
      <Button
        size="sm"
        onClick={handleFilterAll}
        nothovered={String(toFiltered === "all")}
        disabled={toFiltered === "all"}
      >
        {toFiltered === "all" ? <FilterActive>All</FilterActive> : "All"}
      </Button>

      <Button
        size="sm"
        onClick={handleFilterActive}
        nothovered={String(toFiltered === "active")}
        disabled={toFiltered === "active"}
      >
        {toFiltered === "active" ? (
          <FilterActive>Active</FilterActive>
        ) : (
          "Active"
        )}
        {activeNotes === 0 ? null : toFiltered === "active" ? null : (
          <NoteCounter>{activeNotes}</NoteCounter>
        )}
      </Button>

      <Button
        size="sm"
        onClick={handleFilterCompleted}
        nothovered={String(toFiltered === "completed")}
        disabled={toFiltered === "completed"}
      >
        {toFiltered === "completed" ? (
          <FilterActive>Completed</FilterActive>
        ) : (
          "Completed"
        )}
        {completedNotes === 0 ? null : toFiltered === "completed" ? null : (
          <NoteCounter>{completedNotes}</NoteCounter>
        )}
      </Button>
    </StyledNoteFilter>
  );
}

export default NoteFilter;
