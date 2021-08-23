import * as React from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Form,
    Row,
    Col,
    Button,
    Image,
} from "react-bootstrap";
import "../styles/index.scss";
import logo from "../images/logo.svg";
import bookselfImage from "../images/bookself.png";
import tereliyeBookImage from "../images/tereliyebook.png";

const TopNav = () => (
    <Navbar
        bg="white"
        expand="sm"
        fixed="top"
        className="shadow-sm"
        style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
    >
        <Container fluid>
            <Navbar.Brand href="/" className="font-weight-bolder">
                <img alt="Sociocampus-logo" src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="topbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="topbar-nav">
                <Nav>
                    <Nav.Link href="#home">Masuk/Daftar</Nav.Link>
                    <NavDropdown title="ID" id="nav-dropdown">
                        <NavDropdown.Item active>ID</NavDropdown.Item>
                        <NavDropdown.Item>EN</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

const Header = () => (
    <div
        className="d-flex align-items-center text-white"
        // https://stackoverflow.com/a/23208450
        style={{
            background: `linear-gradient(
                            rgba(0, 0, 0, 0.4), 
                            rgba(0, 0, 0, 0.4)
                        ), url(${bookselfImage})`,
            backgroundSize: "cover",
            minHeight: 500,
        }}
    >
        <Container className="text-center">
            <h2>ini bisa diisi sama perkenalan Sociocampus itu apaan</h2>
        </Container>
    </div>
);

const SearchCTA = () => (
    <Container
        className="d-flex align-items-center text-center search-cta"
        style={{
            transform: "translate(0, -50%)",
            maxWidth: 750,
        }}
    >
        <Form.Control
            className="mr-sm-2 bg-primary rounded-pill shadow-sm text-white font-weight-bold"
            type="text"
            placeholder="Mau cari buku apa...?"
            style={{ border: "solid 3px white" }}
        />
        <Button
            className="rounded-pill font-weight-bold shadow-sm"
            style={{ border: "solid 3px white" }}
        >
            Cari
        </Button>
    </Container>
);

const BestSellerBookShowcase = () => (
    <Container>
        <h3>Best Seller Book</h3>
        <Row
            className="bg-dark text-white py-3"
            style={{ borderRadius: 16 }}
        >
            {Array(6).fill(
                <Col sm={12} md={6} lg={2} className="text-center mb-3">
                    <Image fluid className="rounded" src={tereliyeBookImage} />
                    <strong className="d-block">
                        Fantasy - Bumi, Tere Liye
                    </strong>
                    <small className="d-block">★ 4,7 Rating (112)</small>
                </Col>
            )}
        </Row>
    </Container>
);

const IndexPage = () => {
    return (
        <>
            <TopNav />
            <Header />
            <SearchCTA />
            <BestSellerBookShowcase />
        </>
    );
};

export default IndexPage;
