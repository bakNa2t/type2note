import { CloseOutlined } from "@ant-design/icons";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui-blocks/Button";
import Header from "./ui-blocks/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Button>
        <CloseOutlined />
      </Button>
    </>
  );
}

export default App;
