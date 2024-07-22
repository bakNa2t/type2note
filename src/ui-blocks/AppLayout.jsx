import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAppLayout = styled.div`
  max-width: 40rem;
  margin: auto;
  padding: 3rem 1rem 1rem;
`;

function AppLayout({ children }) {
  AppLayout.propTypes = {
    children: PropTypes.node,
  };

  return <StyledAppLayout>{children}</StyledAppLayout>;
}

export default AppLayout;
