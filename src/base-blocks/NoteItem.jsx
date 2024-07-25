import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "../ui-blocks/Button";
import CheckboxCustom from "../ui-blocks/CheckboxCustom";

const StyledNoteItem = styled.li`
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
`;

function NoteItem() {
  return (
    <StyledNoteItem>
      <CheckboxCustom />
      <NoteText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        quis?
      </NoteText>
      <Button size="sm">
        <CloseOutlined />
      </Button>
    </StyledNoteItem>
  );
}

export default NoteItem;
