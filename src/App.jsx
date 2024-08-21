import { Toaster } from "react-hot-toast";

import Header from "./ui-blocks/Header";
import Footer from "./ui-blocks/Footer";
import AppLayout from "./ui-blocks/AppLayout";
import NoteLayout from "./ui-blocks/NoteLayout";

import GlobalStyles from "./styles/GlobalStyles";

import { DarkModeProvider } from "./context/DarkModeContext";
import { NoteCounterProvider } from "./context/NoteCounterContext";
import { NoteLangProvider } from "./context/NoteLangContext";

function App() {
  return (
    <DarkModeProvider>
      <NoteCounterProvider>
        <NoteLangProvider>
          <GlobalStyles />
          <AppLayout>
            <Header />
            <NoteLayout />
            <Footer />
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
