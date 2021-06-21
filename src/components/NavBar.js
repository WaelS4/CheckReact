import React from "react";
import {
    DropdownButton,
    Dropdown,
    Col,
    Image,
    InputGroup,
    Nav,
    Navbar,
    FormControl,
} from "react-bootstrap";
const NavBar = () => {
    const styleIcon = {
        fontSize: 25,
        width: 70,
        textAlign: "center",
        paddingTop: 5,
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <i class="fab fa-facebook" style={{ fontSize: 40 }}></i>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <InputGroup className="mb-3" style={{ paddingTop: 7 }}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <i class="fas fa-search"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Recherche sur FaceCode"
                            aria-label="Recherche sur FaceCode"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Nav.Link href="#home">
                        <i class="fas fa-home" style={styleIcon}></i>
                    </Nav.Link>
                    <Nav.Link href="#page">
                        <i class="fas fa-flag" style={styleIcon}></i>
                    </Nav.Link>
                    <Nav.Link href="#watch">
                        <i class="fas fa-tv" style={styleIcon}></i>
                    </Nav.Link>
                    <Nav.Link href="#amis">
                        <i class="fas fa-user-friends" style={styleIcon}></i>
                    </Nav.Link>
                </Nav>
                <DropdownButton
                    id="dropdown-button-dark-example2"
                    variant="secondary"
                    menuVariant="dark"
                    className="mt-2"
                    style={{ marginRight: 120 }}
                >
                    <Dropdown.Item href="#/action-1">
                        <Col xs={6} md={4}>
                            <Image
                                src="./img/photoprofile.jpg"
                                style={{ width: 50 }}
                                roundedCircle
                            />
                        </Col>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Wael Sellami</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Parametre</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Déconnexion</Dropdown.Item>
                </DropdownButton>
            </Navbar>
        </div>
    );
};
export default NavBar;
