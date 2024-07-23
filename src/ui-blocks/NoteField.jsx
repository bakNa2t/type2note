import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "./Button";

const StyledNoteField = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--color-blue-zola-600);
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
`;

const NoteItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  min-height: 3rem;
  border-bottom: 1px solid var(--color-blue-light-300);
`;

function NoteField() {
  return (
    <StyledNoteField>
      <NoteItem>
        lorem ipsum dolor sit amet
        <Button>
          <CloseOutlined />
        </Button>
      </NoteItem>
      <NoteItem>
        lorem ipsum dolor sit amet
        <Button>
          <CloseOutlined />
        </Button>
      </NoteItem>
    </StyledNoteField>
  );
}

export default NoteField;
