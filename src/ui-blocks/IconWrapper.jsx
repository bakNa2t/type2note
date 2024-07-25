import styled from "styled-components";

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;

  & > button {
    padding: 0.5rem;
  }
`;

export default IconWrapper;
