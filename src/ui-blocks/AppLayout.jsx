import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function AppLayout({ children }) {
  AppLayout.propTypes = {
    children: PropTypes.node,
  };

  return <StyledAppLayout>{children}</StyledAppLayout>;
}

export default AppLayout;
