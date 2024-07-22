import Header from "./ui-blocks/Header";
import AppLayout from "./ui-blocks/AppLayout";
import InputField from "./ui-blocks/InputField";
import NoteField from "./ui-blocks/NoteField";

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
        <NoteField />
      </AppLayout>
    </>
  );
}

export default App;
