import Header from "./ui-blocks/Header";
import AppLayout from "./ui-blocks/AppLayout";
import InputField from "./ui-blocks/InputField";
import NoteField from "./ui-blocks/NoteField";
import NoteFooterMenu from "./ui-blocks/NoteFooterMenu";

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
        <NoteFooterMenu />
      </AppLayout>
    </>
  );
}

export default App;
