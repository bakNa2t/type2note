import { CheckSquareOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";
import Heading from "./Heading";

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

  & div:last-child {
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

  const { lang } = useNoteLang();
  const { modalHeading, message } =
    lang === "en" ? contentData.en.confirmModal : contentData.ru.confirmModal;

  useEffect(function () {
    window.addEventListener("keydown", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyUp);
    };
  });

  function handleKeyUp(e) {
    if (e.key === "Escape") onCloseModal();
  }

  return (
    <StyledConfirmDelete>
      <Heading as={"h3"}>
        {modalHeading}
        {desc}
      </Heading>
      <p>
        {message} {desc}?
      </p>
      <div>
        <Button
          size="xxl"
          color="theme"
          filter="shadowSm"
          onClick={onCloseModal}
        >
          <CloseSquareOutlined />
        </Button>
        <Button
          size="xxl"
          color="theme"
          filter="shadowSm"
          onClick={() => onConfirm(onCloseModal)}
        >
          <CheckSquareOutlined />
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
