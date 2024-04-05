import "./style.scss";
import { sectionPropType } from "@interface";
import { Container } from "@containers";

const index = ({children, title}:sectionPropType) => {
    return (
        <section>
          {
            title && <Container>
                       <h1 className="p-4 text-2xl font-medium border">{title}</h1>
                    </Container>
          }
          {
            children
          }
        </section>
    );
};

export default index;