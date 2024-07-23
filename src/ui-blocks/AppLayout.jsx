import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAppLayout = styled.div`
  max-width: 50rem;
  margin: auto;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

function AppLayout({ children }) {
  AppLayout.propTypes = {
    children: PropTypes.node,
  };

  return <StyledAppLayout>{children}</StyledAppLayout>;
}

export default AppLayout;
