import styled from "styled-components";
import PropType from "prop-types";

const StyledModalHeading = styled.div`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.6rem);
  color: var(--color-spring-green-200);
  text-shadow: 0 0 1rem var(--color-spring-green-400);
  -webkit-text-stroke: 0.1rem var(--color-spring-green-800);
`;

function ModalHeading({ children, as }) {
  ModalHeading.propTypes = {
    children: PropType.node,
    as: PropType.string,
  };

  return <StyledModalHeading as={as}>{children}</StyledModalHeading>;
}

export default ModalHeading;
