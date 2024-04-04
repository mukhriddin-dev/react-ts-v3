import { NavLink } from "react-router-dom";
import { Container } from "@containers";
import logo from "@images/react.svg";
import "./style.scss";

const index = () => {
  return (
    <header className="bg-slate-900">
      <Container>
        <nav className="flex justify-between items-center h-[70px]">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className="flex gap-x-8">
            <li>
              <NavLink className="text-white" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white" to="/service">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default index;
