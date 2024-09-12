import React from "react";

// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavList = {
  Login: {
    path: "/user/login",
    title: "LoginPage",
  },
  Signup: {
    path: "/user/signup",
    title: "SignupPage",
  },
  Main: {
    path: "/main",
    title: "MainPage",
  },
  List: {
    path: "/list",
    title: "ListPage",
  },
  ListDetail: {
    path: "/listdetail",
    title: "ListDetailPage",
  },
};

function NavForRoute(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Live & Move</Navbar.Brand>
          <Nav className="me-auto">
            {Object.entries({ ...NavList }).map(
              ([name, { path, title }], index) => (
                <Nav.Link key={name + index} href={path}>
                  {title}
                </Nav.Link>
              )
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavForRoute;
