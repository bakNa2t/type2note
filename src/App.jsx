import InputField from "./base-blocks/InputField";
import Header from "./ui-blocks/Header";
import AppLayout from "./ui-blocks/AppLayout";
import NoteField from "./ui-blocks/NoteField";
import NoteFooterMenu from "./ui-blocks/NoteFooterMenu";

import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Header />
      <AppLayout>
        <h3>Start to type to store some notes</h3>
        <InputField />
        <NoteField />
        <NoteFooterMenu />
      </AppLayout>
    </DarkModeProvider>
  );
}

export default App;
