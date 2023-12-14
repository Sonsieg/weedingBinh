import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../_principles/colors";

function Header() {
  const Wrapper = styled.div`
    .navbar-brand {
      font-size: 32px;
    }
    a {
      font-size: 24px;
      font-weight: bold;
    }
  `;
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Wrapper className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/" style={{ color: colors.main }}>
              Trang chủ
            </Link>
            <Link
              className="nav-link"
              to="/images"
              style={{ color: colors.main }}
            >
              Ảnh
            </Link>
          </Nav>
          <Link className="navbar-brand" to="/bank_code" style={{ color: colors.main }}>
          Thanh Bình - Thu Hà
        </Link>
        </Navbar.Collapse>
      </Wrapper>
    </Navbar>
  );
}

export default Header;
