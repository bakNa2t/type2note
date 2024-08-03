import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAppLayout = styled.div`
  max-width: 60rem;
  margin: auto;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    padding: 3rem;
  }
`;

function AppLayout({ children }) {
  AppLayout.propTypes = {
    children: PropTypes.node,
  };

  return <StyledAppLayout>{children}</StyledAppLayout>;
}

export default AppLayout;
