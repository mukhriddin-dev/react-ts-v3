import { Header, Footer } from "@components";
import { Main } from "@containers";
import "./style.scss";
import { propType } from "@interface";

const index = ({ children }: propType) => {
  return (
    <>
      <Header />
          <Main>
            {children}
          </Main>
      <Footer />
    </>
  );
};

export default index;
