import { Container } from "@containers";
import "./style.scss";


const index = () => {
    return (
        <footer className="bg-slate-900 text-center p-4 text-white">
            <Container>
                <h4>{new Date().getFullYear()}</h4> 
            </Container>
        </footer>
    );
};

export default index;