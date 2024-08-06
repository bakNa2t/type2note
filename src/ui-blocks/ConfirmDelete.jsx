import styled from "styled-components";
import PropTypes from "prop-types";

import Heading from "./Heading";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-ebony-800);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media screen and (max-width: 468px) {
    width: 25rem;
  }
`;

function ConfirmDelete({ onConfirm, onCloseModal }) {
  ConfirmDelete.propTypes = {
    onConfirm: PropTypes.func,
    onCloseModal: PropTypes.func,
  };

  return (
    <StyledConfirmDelete>
      <Heading as={"h3"}>Delete note</Heading>
      <p>Are you sure you want to delete this note?</p>
      <div>
        <Button size="md" color="theme" onClick={onCloseModal}>
          Nope
        </Button>
        <Button size="md" color="theme" onClick={onConfirm}>
          Sure
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
