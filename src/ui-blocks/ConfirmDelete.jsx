import styled from "styled-components";
import PropTypes from "prop-types";

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

const ConfirmHeading = styled.div`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.6rem);
  color: var(--color-spring-green-200);
  text-shadow: 0 0 1rem var(--color-spring-green-400);
  -webkit-text-stroke: 0.1rem var(--color-spring-green-800);
`;

function ConfirmDelete({ onConfirm, onCloseModal, desc }) {
  ConfirmDelete.propTypes = {
    onConfirm: PropTypes.func,
    onCloseModal: PropTypes.func,
    desc: PropTypes.string,
  };

  return (
    <StyledConfirmDelete>
      <ConfirmHeading as={"h3"}>Delete {desc}</ConfirmHeading>
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
