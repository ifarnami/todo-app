import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import ThemeProvider from "./context/ThemeProvider";
import TodosProvider from "./context/TodosProvider";
import NotesList from "./components/NotesList";

interface IAppProps {}

const App: React.FC<IAppProps> = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Layout>
        <TodosProvider>
          <Header />
          <NotesList />
        </TodosProvider>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
};

export default App;
