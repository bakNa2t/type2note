import { Toaster } from "react-hot-toast";

import InputField from "./base-blocks/InputField";
import Header from "./ui-blocks/Header";
import AppLayout from "./ui-blocks/AppLayout";
import NoteField from "./ui-blocks/NoteField";
import NoteFooterMenu from "./ui-blocks/NoteFooterMenu";
import NoteFilterWrapper from "./ui-blocks/NoteFilterWrapper";
import Heading from "./ui-blocks/Heading";

import GlobalStyles from "./styles/GlobalStyles";
import { useResizeScreen } from "./hooks/useResizeScreen";
import { DarkModeProvider } from "./context/DarkModeContext";
import { NoteCounterProvider } from "./context/NoteCounterContext";
import { NoteLangProvider } from "./context/NoteLangContext";

function App() {
  const isMobileSize = useResizeScreen();

  return (
    <DarkModeProvider>
      <NoteCounterProvider>
        <NoteLangProvider>
          <GlobalStyles />
          <Header />
          <AppLayout>
            <Heading as={"h2"}>Get started to store notes</Heading>
            <InputField />
            <NoteField />
            <NoteFooterMenu isMobileSize={isMobileSize} />
            {!isMobileSize && <NoteFilterWrapper />}
          </AppLayout>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{
              margin: "6px",
            }}
            toastOptions={{
              success: {
                duration: 2000,
              },
              error: {
                duration: 2000,
              },
              style: {
                fontSize: "1.2rem",
                maxWidth: "300px",
                padding: "0.6rem 1.2rem",
                backgroundColor: "var(--color-spring-green-200)",
                color: "var(--color-spring-green-800)",
              },
            }}
          />
        </NoteLangProvider>
      </NoteCounterProvider>
    </DarkModeProvider>
  );
}

export default App;
