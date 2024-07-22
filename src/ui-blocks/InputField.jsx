import styled from "styled-components";
import Button from "./Button";
import { EnterOutlined } from "@ant-design/icons";

const StyledInputField = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-blue-zola-600);
  margin: 2rem 0;
  overflow: hidden;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  background-color: transparent;
  color: var(--color-blue-light-200);
`;

function InputField() {
  return (
    <StyledInputField>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Add a new note..."
          name="note"
          value={""}
          onChange={() => {}}
        />
      </InputWrapper>
      <Button>
        <EnterOutlined />
      </Button>
    </StyledInputField>
  );
}

export default InputField;
