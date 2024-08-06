import { cloneElement, createContext, useContext, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { CloseOutlined } from "@ant-design/icons";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-ebony-200);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 0 0.8rem 0.6rem var(--color-spring-green-200);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-ebony-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-ebony-200);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  Modal.propTypes = {
    children: PropTypes.node,
  };

  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens: opensWindowName, children }) {
  Open.propTypes = {
    opens: PropTypes.string,
    children: PropTypes.node,
  };

  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ name, children }) {
  Window.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
  };

  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <CloseOutlined />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
