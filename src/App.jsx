import { CloseOutlined } from "@ant-design/icons";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui-blocks/Button";

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Welcome to Type 2 Note</h1>
      <Button>
        <CloseOutlined />
      </Button>
    </>
  );
}

export default App;
