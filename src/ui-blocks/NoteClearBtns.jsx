import { useDispatch } from "react-redux";
import { ClearOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

import Modal from "./Modal";
import Button from "./Button";
import ConfirmDelete from "./ConfirmDelete";

import { useNoteLang } from "../context/NoteLangContext";
import { contentData } from "../data/content";
import { clearAllNotes, clearCompletedNotes } from "../base-blocks/noteSlice";

const StyledNoteClearBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

function NoteClearBtns({ notes, completedNotes }) {
  NoteClearBtns.propTypes = {
    notes: PropTypes.array,
    completedNotes: PropTypes.number,
  };

  const dispatch = useDispatch();

  const { lang } = useNoteLang();
  const { confirmModal, hoverDesc } =
    lang === "en" ? contentData.en : contentData.ru;
  const { all, completed } = confirmModal.descClear;

  function handleClearAllNotes() {
    if (notes.length === 0) return;

    dispatch(clearAllNotes());
    toast.success("All notes deleted");
  }

  function handleClearCompletedNotes() {
    if (completedNotes === 0) return;

    dispatch(clearCompletedNotes());
    toast.success("All completed notes deleted");
  }

  return (
    <Modal>
      <StyledNoteClearBtns>
        <Modal.Open opens="completed">
          <Button
            size="md"
            filter="shadowSm"
            cleardesc={{ content: hoverDesc.completed }}
            disabled={notes.length === 0 || completedNotes === 0}
          >
            <ClearOutlined />
          </Button>
        </Modal.Open>

        <Modal.Open opens="all">
          <Button
            size="md"
            filter="shadowSm"
            cleardesc={{ content: hoverDesc.all }}
            disabled={notes.length === 0}
          >
            <DeleteOutlined />
          </Button>
        </Modal.Open>

        <Modal.Window name="completed">
          <ConfirmDelete
            desc={completed}
            onConfirm={() => handleClearCompletedNotes()}
          />
        </Modal.Window>

        <Modal.Window name="all">
          <ConfirmDelete
            desc={all}
            onConfirm={(closeModal) => {
              handleClearAllNotes();
              closeModal();
            }}
          />
        </Modal.Window>
      </StyledNoteClearBtns>
    </Modal>
  );
}

export default NoteClearBtns;
