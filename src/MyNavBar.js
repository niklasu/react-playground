import {Navbar, Nav} from "react-bootstrap";

export function MyNavBar() {
  return (
    <Navbar bg={'light'}>
      <Nav.Link href="/">Main</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>
      <Nav.Link href="/redux">Another Page</Nav.Link>
    </Navbar>
  );
}
