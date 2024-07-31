import { Toaster } from "react-hot-toast";

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
        <NoteFooterMenu isMobileSize={isMobileSize} />
        {!isMobileSize && (
          <NoteFilterWrapper>
            <NoteFilter />
          </NoteFilterWrapper>
        )}
      </AppLayout>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 2000,
          },
          style: {
            fontSize: "1.4rem",
            maxWidth: "300px",
            padding: "1rem 2rem",
            backgroundColor: "var(--color-spring-green-200)",
            color: "var(--color-spring-green-800)",
          },
        }}
      />
    </DarkModeProvider>
  );
}

export default App;
