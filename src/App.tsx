import { Header, Footer } from "@components";
import { Main } from "@containers";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default App;
