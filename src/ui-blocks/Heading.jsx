import styled from "styled-components";
import PropType from "prop-types";

const StyledHeading = styled.div`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.6rem);
  color: var(--color-spring-green-200);
  text-shadow: 0 0 1rem var(--color-spring-green-400);
  -webkit-text-stroke: 0.1rem var(--color-spring-green-800);
`;

function Heading({ children, as }) {
  Heading.propTypes = {
    children: PropType.node,
    as: PropType.string,
  };

  return <StyledHeading as={as}>{children}</StyledHeading>;
}

export default Heading;
