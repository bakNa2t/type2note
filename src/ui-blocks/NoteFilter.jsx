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
  gap: 1rem;
`;

const FilterActive = styled.p`
  color: var(--color-spring-green-500);
  text-shadow: 0 0 0.6rem var(--color-spring-green-300);
`;

function NoteFilter() {
  NoteFilter.propTypes = {
    isMobileSize: PropTypes.bool,
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
        size="xs"
        onClick={handleFilterAll}
        nothovered={String(toFiltered === "all")}
        disabled={toFiltered === "all"}
      >
        {toFiltered === "all" ? <FilterActive>All</FilterActive> : "All"}
      </Button>

      <Button
        size="xs"
        onClick={handleFilterActive}
        nothovered={String(toFiltered === "active")}
        disabled={toFiltered === "active"}
      >
        {toFiltered === "active" ? (
          <FilterActive>Active</FilterActive>
        ) : (
          "Active"
        )}
      </Button>

      <Button
        size="xs"
        onClick={handleFilterCompleted}
        nothovered={String(toFiltered === "completed")}
        disabled={toFiltered === "completed"}
      >
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
