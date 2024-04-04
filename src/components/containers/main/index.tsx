import { propType } from "@interface";
import "./style.scss"

const index = ({children}:propType) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default index;