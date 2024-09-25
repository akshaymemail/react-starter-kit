import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import authSlice from "../redux/features/auth/slice";

function Header() {
  const dispatch = useDispatch();
  const { actions: AuthActions } = authSlice;
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
  };
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Navbar color="dark" expand="md" light>
        <NavbarBrand className="me-auto text-light" href="/">
          React Starter Kit
        </NavbarBrand>
        <NavbarToggler className="me-2" onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <a
                href="https://github.com/akshaymemail/react-starter-kit#readme"
                target="_blank"
                rel="noreferrer"
              >
                How To Use
              </a>
            </NavItem>
            <NavItem>
              <a
                href="https://github.com/akshaymemail/react-starter-kit.git"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </NavItem>
            <NavItem>
              <Link to="" onClick={logoutHandler}>
                Logout
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
