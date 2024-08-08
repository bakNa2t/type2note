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

  @media screen and (max-width: 500px) {
    width: 25rem;
  }
`;

function ConfirmDelete({ onConfirm, onCloseModal, desc }) {
  ConfirmDelete.propTypes = {
    onConfirm: PropTypes.func,
    onCloseModal: PropTypes.func,
    desc: PropTypes.string,
  };

  return (
    <StyledConfirmDelete>
      <Heading as={"h3"}>Delete {desc}</Heading>
      <p>Are you sure you want to delete {desc}?</p>
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
