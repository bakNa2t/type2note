import { CheckSquareOutlined, CloseSquareOutlined } from "@ant-design/icons";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";

import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";

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

  const { lang } = useNoteLang();
  const { modalHeading, message } =
    lang === "en" ? contentData.en.confirmModal : contentData.ru.confirmModal;

  return (
    <StyledConfirmDelete>
      <ConfirmHeading as={"h4"}>
        {modalHeading}
        {desc}
      </ConfirmHeading>
      <p>
        {message} {desc}?
      </p>
      <div>
        <Button size="xl" color="theme" onClick={onCloseModal}>
          <CloseSquareOutlined />
        </Button>
        <Button size="xl" color="theme" onClick={() => onConfirm(onCloseModal)}>
          <CheckSquareOutlined />
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
