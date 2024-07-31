import InputField from "./base-blocks/InputField";
import Header from "./ui-blocks/Header";
import AppLayout from "./ui-blocks/AppLayout";
import NoteField from "./ui-blocks/NoteField";
import NoteFooterMenu from "./ui-blocks/NoteFooterMenu";
import NoteFilter from "./ui-blocks/NoteFilter";
import NoteFilterWrapper from "./ui-blocks/NoteFilterWrapper";

import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import { useResizeScreen } from "./hooks/useResizeScreen";

function App() {
  const isMobileSize = useResizeScreen();

  console.log(isMobileSize);

  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Header />
      <AppLayout>
        <h3>Start to type to store some notes</h3>
        <InputField />
        <NoteField />
        <NoteFooterMenu />
        {!isMobileSize && (
          <NoteFilterWrapper>
            <NoteFilter isMobileSize={!isMobileSize} />
          </NoteFilterWrapper>
        )}
      </AppLayout>
    </DarkModeProvider>
  );
}

export default App;
