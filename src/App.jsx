import { Toaster } from "react-hot-toast";

import InputField from "./base-blocks/InputField";
import Header from "./ui-blocks/Header";
import AppLayout from "./ui-blocks/AppLayout";
import NoteField from "./ui-blocks/NoteField";
import NoteFooterMenu from "./ui-blocks/NoteFooterMenu";
import NoteFilter from "./ui-blocks/NoteFilter";
import NoteFilterWrapper from "./ui-blocks/NoteFilterWrapper";
import Heading from "./ui-blocks/Heading";

import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import { useResizeScreen } from "./hooks/useResizeScreen";
import { NoteCounterProvider } from "./context/NoteCounterContext";

function App() {
  const isMobileSize = useResizeScreen();

  return (
    <DarkModeProvider>
      <NoteCounterProvider>
        <GlobalStyles />
        <Header />
        <AppLayout>
          <Heading as={"h2"}>Get started to store notes</Heading>
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
      </NoteCounterProvider>
    </DarkModeProvider>
  );
}

export default App;
