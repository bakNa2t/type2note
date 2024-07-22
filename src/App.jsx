import { CloseOutlined } from "@ant-design/icons";

import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui-blocks/Button";
import Header from "./ui-blocks/Header";
import AppLayout from "./ui-blocks/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <AppLayout>
        <h3>
          Hi there!
          <br /> It&apos;s time to store some notes
        </h3>
        <Button>
          <CloseOutlined />
        </Button>
      </AppLayout>
    </>
  );
}

export default App;
