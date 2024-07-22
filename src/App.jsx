import { CloseOutlined } from "@ant-design/icons";

import Button from "./ui-blocks/Button";
import Header from "./ui-blocks/Header";
import AppLayout from "./ui-blocks/AppLayout";
import InputField from "./ui-blocks/InputField";

import GlobalStyles from "./styles/GlobalStyles";

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
        <InputField />
        <Button>
          <CloseOutlined />
        </Button>
      </AppLayout>
    </>
  );
}

export default App;
