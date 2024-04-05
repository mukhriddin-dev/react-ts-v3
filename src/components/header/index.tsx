import { NavLink } from "react-router-dom";
import { Container } from "@containers";
import Links from "@router-files"
import logo from "@images/react.svg";``
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

           {
            Links?.map((link:any)=>{
              return (
                <li key={link.path}>
                  <NavLink className="text-white" to={link.path}>{link.content}</NavLink>
                </li>
              )
            })
           }
            
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default index;
