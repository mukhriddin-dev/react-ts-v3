
import { Outlet } from "react-router-dom";
import { MainLayout } from "@layout";

const App = () => {
  return (
    <>
      <MainLayout>   
        <Outlet />
      </MainLayout>
    </>
  );
};

export default App;
