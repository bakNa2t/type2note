import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "./Button";
import CheckboxCustom from "./CheckboxCustom";

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
  gap: 1rem;
  padding: 1rem;
  min-height: 3rem;
  border-bottom: 1px solid var(--color-blue-light-300);
`;

const NoteText = styled.p`
  width: 100%;
  font-size: clamp(1.4rem, 3vw, 1.2rem);
  word-break: break-all;
`;

function NoteField() {
  return (
    <StyledNoteField>
      <NoteItem>
        <CheckboxCustom />
        <NoteText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          quis?
        </NoteText>
        <Button>
          <CloseOutlined />
        </Button>
      </NoteItem>

      <NoteItem>
        <NoteText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          quis?
        </NoteText>
        <Button>
          <CloseOutlined />
        </Button>
      </NoteItem>
    </StyledNoteField>
  );
}

export default NoteField;
